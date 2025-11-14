import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSimulationState } from '../../hooks/useSimulationState';
import NavigationButtons from '../common/NavigationButtons';
const sarahKimImage = '/Sarah_Kim_headshot.png';
const conferenceRoomBg = '/Conference_room_background.png';

const Scene1ProblemBrief = () => {
  const { state, dispatch } = useSimulationState();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'SET_SCENE', scene: 1 });
  }, [dispatch]);

  const problemOptions = [
    { id: 'engagement_issue', label: 'Low completion rates', key: 'scene1_engagement_priority' },
    { id: 'practical_gap', label: 'Too theoretical', key: 'scene1_practical_focus' },
    { id: 'delivery_method', label: 'Boring lectures', key: 'scene1_delivery_outdated' },
    { id: 'application_lack', label: 'No real examples', key: 'scene1_application_lack' },
    { id: 'feedback_gap', label: 'No feedback', key: 'scene1_feedback_lacking' },
    { id: 'personalization_lack', label: 'One-size-fits-all', key: 'scene1_personalization_lack' },
    { id: 'mobile_issue', label: 'Not mobile-friendly', key: 'scene1_mobile_issue' }
  ];

  const handleProblemSelection = (problemId, problemKey) => {
    const isCurrentlySelected = state.scene1_problem_focus.includes(problemId);
    
    if (isCurrentlySelected) {
      dispatch({ type: 'REMOVE_FROM_ARRAY', variable: 'scene1_problem_focus', value: problemId });
      dispatch({ type: 'UPDATE_VARIABLE', variable: problemKey, value: false });
      dispatch({ type: 'UPDATE_VARIABLE', variable: 'scene1_selections_count', value: state.scene1_selections_count - 1 });
    } else {
      dispatch({ type: 'ADD_TO_ARRAY', variable: 'scene1_problem_focus', value: problemId });
      dispatch({ type: 'UPDATE_VARIABLE', variable: problemKey, value: true });
      dispatch({ type: 'UPDATE_VARIABLE', variable: 'scene1_selections_count', value: state.scene1_selections_count + 1 });
    }
  };

  const handleSubmit = () => {
    if (state.scene1_selections_count >= 3) {
      dispatch({ type: 'UPDATE_VARIABLE', variable: 'scene1_complete', value: true });
      navigate('/scene2');
    }
  };

  const canSubmit = state.scene1_selections_count >= 3;

  return (
    <div className="scene scene1" style={{ backgroundImage: `url(${conferenceRoomBg})` }}>
      <div className="scene-content">
        <div className="character-section">
          <img src={sarahKimImage} alt="Sarah Kim, Learning Director" className="character-image" />
          <div className="character-dialogue">
            <h2>Welcome to JUS</h2>
            <p>I'm Sarah Kim, Learning Director. We need your help.</p>
            <p>Our Legal Writing 101 course is failing. Only 45% finish it.</p>
            <p>Your mission: Fix this course. Make it work.</p>
          </div>
        </div>

        <div className="problem-identification">
          <h3>Find the Problems</h3>
          <p className="instruction">Pick 3+ problems to fix:</p>
          
          <div className="problem-list">
            {problemOptions.map((problem) => (
              <label key={problem.id} className="problem-option">
                <input
                  type="checkbox"
                  checked={state.scene1_problem_focus.includes(problem.id)}
                  onChange={() => handleProblemSelection(problem.id, problem.key)}
                />
                <span className="checkmark"></span>
                {problem.label}
              </label>
            ))}
          </div>

          <div className="selection-feedback">
            <p className={`feedback ${canSubmit ? 'success' : 'warning'}`}>
              {canSubmit 
                ? `Good! Selected ${state.scene1_selections_count} problems.`
                : `Pick ${3 - state.scene1_selections_count} more problems.`
              }
            </p>
          </div>

          <div className="data-dashboard">
            <h4>Current Course Problems</h4>
            <div className="metrics">
              <div className="metric">
                <span className="metric-value error">45%</span>
                <span className="metric-label">Finish Rate</span>
              </div>
              <div className="metric">
                <span className="metric-value warning">2.1/5</span>
                <span className="metric-label">Rating</span>
              </div>
              <div className="metric">
                <span className="metric-value info">500+</span>
                <span className="metric-label">Need Training</span>
              </div>
            </div>
            <div className="feedback-quotes">
              <blockquote>"Too theoretical"</blockquote>
              <blockquote>"Boring and outdated"</blockquote>
              <blockquote>"Need real examples"</blockquote>
            </div>
          </div>
        </div>
      </div>

      <NavigationButtons
        showPrevious={false}
        showNext={true}
        nextDisabled={!canSubmit}
        onNext={handleSubmit}
        nextLabel="Continue to Personas"
      />
    </div>
  );
};

export default Scene1ProblemBrief;