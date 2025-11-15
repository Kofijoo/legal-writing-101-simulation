import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProgressBar = () => {
  // const { } = useSimulationState();
  const navigate = useNavigate();
  const location = useLocation();
  
  const scenes = [
    { name: 'Problem Brief', path: '/' },
    { name: 'Learner Personas', path: '/scene2' },
    { name: 'Design Framework', path: '/scene3' },
    { name: 'Blended Modality', path: '/scene4' },
    { name: 'Course Prototype', path: '/scene5' },
    { name: 'Stakeholder Review', path: '/scene6' },
    { name: 'Analytics Dashboard', path: '/scene7' },
    { name: 'Completion', path: '/scene8' }
  ];

  const getCurrentScene = () => {
    const sceneIndex = scenes.findIndex(scene => scene.path === location.pathname);
    return sceneIndex >= 0 ? sceneIndex + 1 : 1;
  };

  const currentScene = getCurrentScene();

  return (
    <div className="progress-bar-container">
      <div className="scene-indicators">
        {scenes.map((scene, index) => (
          <div 
            key={index}
            className={`scene-indicator ${
              index + 1 < currentScene ? 'completed' : 
              index + 1 === currentScene ? 'current' : 'upcoming'
            }`}
            onClick={() => navigate(scene.path)}
          >
            <div className="scene-number">{index + 1}</div>
            <div className="scene-label">{scene.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;