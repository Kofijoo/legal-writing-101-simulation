import React from 'react';
import { useSimulationState } from '../../hooks/useSimulationState';
import { FaCheckCircle, FaRedo } from 'react-icons/fa';
import '../../styles/scene8.css';

const Scene8Completion = ({ onBack }) => {
  const { state, dispatch } = useSimulationState();

  const handleRestart = () => {
    window.location.href = '/';
  };

  const completionStats = [
    { label: 'Scenes Completed', value: '8/8' },
    { label: 'Design Framework', value: state.scene3_design_framework || 'Selected' },
    { label: 'Delivery Method', value: state.scene4_modality_choice || 'Chosen' },
    { label: 'Course Modules', value: state.scene5_total_components || 0 },
    { label: 'Stakeholder Satisfaction', value: `${state.scene6_overall_satisfaction || 0}/5.0` }
  ];

  return (
    <div className="scene8 scene-container">
      <div className="completion-header">
        <FaCheckCircle className="completion-icon" />
        <h2>Simulation Complete!</h2>
        <p>You've successfully designed a legal writing training program</p>
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
          <img src="/alex-avatar.png" alt="ALEX" className="alex-avatar" />
          <div className="alex-dialogue">
            <h3>ALEX Final Analysis</h3>
            <p>Congratulations! You've created a comprehensive training design that balances stakeholder needs, learning objectives, and practical constraints.</p>
            <p>Your choices demonstrate strong instructional design thinking and consideration for real-world implementation.</p>
          </div>
        </div>
      </div>

      <div className="completion-actions">
        <button className="nav-btn secondary" onClick={onBack}>
          Review Analytics
        </button>
        <button className="nav-btn primary" onClick={handleRestart}>
          <FaRedo /> Start Over
        </button>
      </div>
    </div>
  );
};

export default Scene8Completion;