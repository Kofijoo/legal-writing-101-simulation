import React from 'react';
import { useSimulationState } from '../../hooks/useSimulationState';
import { FaChartLine, FaUsers, FaDollarSign, FaClock } from 'react-icons/fa';
import '../../styles/scene7.css';

const Scene7Analytics = ({ onNext, onBack }) => {
  const { state } = useSimulationState();

  const metrics = [
    {
      icon: <FaUsers />,
      title: 'Projected Completion',
      value: '78%',
      description: 'Expected learner completion rate'
    },
    {
      icon: <FaChartLine />,
      title: 'Satisfaction Score',
      value: '4.2/5.0',
      description: 'Predicted learner satisfaction'
    },
    {
      icon: <FaChartLine />,
      title: 'Writing Improvement',
      value: '34%',
      description: 'Expected skill enhancement'
    },
    {
      icon: <FaDollarSign />,
      title: 'Cost Per Learner',
      value: '$285',
      description: 'Total investment per participant'
    }
  ];

  return (
    <div className="scene7 scene-container">
      <div className="scene-header">
        <h2>Analytics Dashboard</h2>
        <p>Projected outcomes based on your design choices</p>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-icon">{metric.icon}</div>
            <div className="metric-content">
              <h3>{metric.title}</h3>
              <div className="metric-value">{metric.value}</div>
              <p>{metric.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="alex-analysis">
        <div className="alex-character">
          <img src="/alex-avatar.png" alt="ALEX" className="alex-avatar" />
          <div className="alex-dialogue">
            <h3>ALEX Analysis</h3>
            <p>Your design shows strong potential with 78% completion and 4.2/5 satisfaction.</p>
            <p>The 34% writing improvement indicates effective learning outcomes within budget.</p>
          </div>
        </div>
      </div>

      <div className="scene-navigation">
        <button className="nav-btn secondary" onClick={onBack}>
          Back
        </button>
        <button className="nav-btn primary" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Scene7Analytics;