import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSimulationState } from '../../hooks/useSimulationState';
import NavigationButtons from '../common/NavigationButtons';
import { FaChartLine, FaUsers, FaDollarSign } from 'react-icons/fa';
import '../../styles/scene7.css';

const Scene7Analytics = () => {
  const { dispatch } = useSimulationState();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'SET_SCENE', scene: 7 });
  }, [dispatch]);

  const handleContinue = () => {
    dispatch({ type: 'UPDATE_VARIABLE', variable: 'scene7_complete', value: true });
    navigate('/scene8');
  };

  const handleBack = () => {
    navigate('/scene6');
  };

  const metrics = [
    {
      icon: <FaUsers />,
      title: 'Projected Completion',
      value: '78%',
      description: 'Based on your design choices'
    },
    {
      icon: <FaChartLine />,
      title: 'Satisfaction Score',
      value: '4.2/5.0',
      description: 'Projected user rating'
    },
    {
      icon: <FaChartLine />,
      title: 'Writing Improvement',
      value: '34%',
      description: 'Measured improvement'
    },
    {
      icon: <FaDollarSign />,
      title: 'Cost Per Learner',
      value: '$285',
      description: 'Per-learner cost estimate'
    }
  ];

  return (
    <div className="scene scene7">
      <div className="scene-content">
      <div className="scene-header">
        <h2>View Results</h2>
        <p>Projected outcomes</p>
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
          <img src={`${process.env.PUBLIC_URL}/ALEX_avatar.png`} alt="ALEX" className="alex-avatar" />
          <div className="alex-dialogue">
            <h3>ALEX Analysis</h3>
            <p>Your design shows strong potential with 78% completion and 4.2/5 satisfaction.</p>
            <p>The 34% writing improvement indicates effective learning outcomes within budget.</p>
          </div>
        </div>
      </div>

      </div>

      <NavigationButtons
        onPrevious={handleBack}
        onNext={handleContinue}
        previousLabel="Back"
        nextLabel="Complete Mission"
      />
    </div>
  );
};

export default Scene7Analytics;