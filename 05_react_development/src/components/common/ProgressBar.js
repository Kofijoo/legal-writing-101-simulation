import React from 'react';
import { useSimulationState } from '../../hooks/useSimulationState';

const ProgressBar = () => {
  const { state } = useSimulationState();
  
  const scenes = [
    'Problem Brief',
    'Learner Personas', 
    'Design Framework',
    'Blended Modality',
    'Course Prototype',
    'Stakeholder Review',
    'Analytics Dashboard',
    'Completion'
  ];

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${state.global_progress_percentage}%` }}
        ></div>
      </div>
      <div className="scene-indicators">
        {scenes.map((scene, index) => (
          <div 
            key={index}
            className={`scene-indicator ${
              index + 1 < state.global_current_scene ? 'completed' : 
              index + 1 === state.global_current_scene ? 'current' : 'upcoming'
            }`}
          >
            <div className="scene-number">{index + 1}</div>
            <div className="scene-label">{scene}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;