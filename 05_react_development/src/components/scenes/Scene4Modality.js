import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSimulationState } from '../../hooks/useSimulationState';
import NavigationButtons from '../common/NavigationButtons';

const alexAvatar = '/ALEX_avatar.png';
const digitalWorkspaceBg = '/Digital_workspace_background.png';

const Scene4Modality = () => {
  const { state, dispatch } = useSimulationState();
  const navigate = useNavigate();
  const [timeInvestment, setTimeInvestment] = useState(state.scene4_time_investment);
  const [engagementPriority, setEngagementPriority] = useState(state.scene4_engagement_priority);
  const [scalabilityNeed, setScalabilityNeed] = useState(state.scene4_scalability_need);

  useEffect(() => {
    dispatch({ type: 'SET_SCENE', scene: 4 });
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: 'UPDATE_MULTIPLE', updates: {
      scene4_time_investment: timeInvestment,
      scene4_engagement_priority: engagementPriority,
      scene4_scalability_need: scalabilityNeed
    }});
    dispatch({ type: 'CALCULATE_SCENE4_SCORES' });
  }, [timeInvestment, engagementPriority, scalabilityNeed, dispatch]);

  const handleContinue = () => {
    dispatch({ type: 'UPDATE_VARIABLE', variable: 'scene4_complete', value: true });
    navigate('/scene5');
  };

  const getRecommendationColor = (choice) => {
    if (state.scene4_modality_choice === choice) {
      return 'var(--success-green)';
    }
    return 'var(--border-gray)';
  };

  return (
    <div className="scene scene4" style={{ backgroundImage: `url(${digitalWorkspaceBg})` }}>
      <div className="scene-content">
        <div className="scene-header">
          <h2>Choose Delivery Method</h2>
          <p className="instruction">Adjust sliders to find the best approach:</p>
        </div>

        <div className="sliders-container">
          <div className="slider-group">
            <label>Time Investment vs Learning Depth</label>
            <div className="slider-wrapper">
              <span className="slider-label-left">Quick</span>
              <input
                type="range"
                min="1"
                max="10"
                value={timeInvestment}
                onChange={(e) => setTimeInvestment(parseInt(e.target.value))}
                className="slider"
              />
              <span className="slider-label-right">Deep</span>
            </div>
            <div className="slider-value">Value: {timeInvestment}</div>
          </div>

          <div className="slider-group">
            <label>Engagement vs Resource Cost</label>
            <div className="slider-wrapper">
              <span className="slider-label-left">Low Cost</span>
              <input
                type="range"
                min="1"
                max="10"
                value={engagementPriority}
                onChange={(e) => setEngagementPriority(parseInt(e.target.value))}
                className="slider"
              />
              <span className="slider-label-right">High Engagement</span>
            </div>
            <div className="slider-value">Value: {engagementPriority}</div>
          </div>

          <div className="slider-group">
            <label>Scalability vs Personalization</label>
            <div className="slider-wrapper">
              <span className="slider-label-left">Personal</span>
              <input
                type="range"
                min="1"
                max="10"
                value={scalabilityNeed}
                onChange={(e) => setScalabilityNeed(parseInt(e.target.value))}
                className="slider"
              />
              <span className="slider-label-right">Scalable</span>
            </div>
            <div className="slider-value">Value: {scalabilityNeed}</div>
          </div>
        </div>

        <div className="modality-options">
          <div className="modality-card" style={{ borderColor: getRecommendationColor('workshop') }}>
            <h3>Workshop + Pre-work</h3>
            <p>Live sessions with preparation</p>
            <div className="score">Score: {state.scene4_workshop_score.toFixed(1)}</div>
          </div>
          
          <div className="modality-card" style={{ borderColor: getRecommendationColor('digital') }}>
            <h3>Digital Microlearning</h3>
            <p>Bite-sized online modules</p>
            <div className="score">Score: {state.scene4_digital_score.toFixed(1)}</div>
          </div>
          
          <div className="modality-card" style={{ borderColor: getRecommendationColor('hybrid') }}>
            <h3>Hybrid Approach</h3>
            <p>Digital + live components</p>
            <div className="score">Score: {state.scene4_hybrid_score.toFixed(1)}</div>
          </div>
        </div>

        <div className="alex-analysis">
          <div className="alex-character">
            <img src={alexAvatar} alt="ALEX AI Assistant" className="alex-avatar" />
            <div className="alex-dialogue">
              <h3>ALEX Recommendation</h3>
              <p>Based on your settings, I recommend: <strong>{state.scene4_modality_choice}</strong></p>
              <p>Projected completion: <strong>{state.scene4_completion_rate}%</strong></p>
              <p>Implementation time: <strong>{state.scene4_implementation_weeks.toFixed(1)} weeks</strong></p>
            </div>
          </div>
        </div>
      </div>

      <NavigationButtons
        onPrevious={() => navigate('/scene3')}
        onNext={handleContinue}
        nextLabel="Continue to Course Builder"
      />
    </div>
  );
};

export default Scene4Modality;