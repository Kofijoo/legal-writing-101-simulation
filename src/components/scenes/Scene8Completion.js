import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSimulationState } from '../../hooks/useSimulationState';
import NavigationButtons from '../common/NavigationButtons';
import { FaCheckCircle } from 'react-icons/fa';
import '../../styles/scene8.css';

const Scene8Completion = () => {
  const { state, dispatch } = useSimulationState();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'SET_SCENE', scene: 8 });
  }, [dispatch]);

  const handleRestart = () => {
    navigate('/');
  };

  const handleBack = () => {
    navigate('/scene7');
  };

  const completionStats = [
    { label: 'Scenes Completed', value: '8/8' },
    { label: 'Design Framework', value: state.scene3_design_framework || 'Selected' },
    { label: 'Delivery Method', value: state.scene4_modality_choice || 'Chosen' },
    { label: 'Course Modules', value: state.scene5_total_components || 0 },
    { label: 'Stakeholder Satisfaction', value: `${state.scene6_overall_satisfaction || 0}/5.0` }
  ];

  return (
    <div className="scene scene8">
      <div className="scene-content">
      <div className="completion-header">
        <FaCheckCircle className="completion-icon" />
        <h2>Mission Complete!</h2>
        <p>Training program designed</p>
      </div>

      <div className="completion-summary">
        <h3>Your Design Summary</h3>
        <div className="stats-grid">
          {completionStats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="alex-final">
        <div className="alex-character">
          <img src={`${process.env.PUBLIC_URL}/ALEX_avatar.png`} alt="ALEX" className="alex-avatar" />
          <div className="alex-dialogue">
            <h3>ALEX Final Analysis</h3>
            <p>Congratulations! You've created a comprehensive training design that balances stakeholder needs, learning objectives, and practical constraints.</p>
            <p>Your choices demonstrate strong instructional design thinking and consideration for real-world implementation.</p>
          </div>
        </div>
      </div>

      </div>

      <NavigationButtons
        onPrevious={handleBack}
        onNext={handleRestart}
        previousLabel="Review Analytics"
        nextLabel="Start Over"
      />
    </div>
  );
};

export default Scene8Completion;