import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSimulationState } from '../../hooks/useSimulationState';
import NavigationButtons from '../common/NavigationButtons';
import { frameworks } from '../../data/frameworks';

const alexAvatar = '/ALEX_avatar.png';
const digitalWorkspaceBg = '/Digital_workspace_background.png';

const Scene3Framework = () => {
  const { state, dispatch } = useSimulationState();
  const navigate = useNavigate();
  const [selectedFramework, setSelectedFramework] = useState(state.scene3_design_framework);
  const [showAlex, setShowAlex] = useState(false);

  useEffect(() => {
    dispatch({ type: 'SET_SCENE', scene: 3 });
  }, [dispatch]);

  const handleFrameworkSelection = (frameworkId) => {
    const framework = frameworks[frameworkId];
    setSelectedFramework(frameworkId);
    
    dispatch({ type: 'UPDATE_MULTIPLE', updates: {
      scene3_design_framework: frameworkId,
      scene3_methodology_focus: framework.focus,
      scene3_tools_available: framework.tools,
      scene3_process_type: framework.focus,
      scene3_best_for: framework.bestFor
    }});
    
    setShowAlex(true);
  };

  const handleContinue = () => {
    if (selectedFramework) {
      dispatch({ type: 'UPDATE_VARIABLE', variable: 'scene3_complete', value: true });
      navigate('/scene4');
    }
  };

  const canContinue = selectedFramework !== '';

  return (
    <div className="scene scene3" style={{ backgroundImage: `url(${digitalWorkspaceBg})` }}>
      <div className="scene-content">
        <div className="scene-header">
          <h2>Select Framework</h2>
          <p className="instruction">Choose your approach:</p>
        </div>

        <div className="frameworks-grid">
          {Object.values(frameworks).map((framework) => (
            <div 
              key={framework.id}
              className={`framework-card ${
                selectedFramework === framework.id ? 'selected' : ''
              }`}
              onClick={() => handleFrameworkSelection(framework.id)}
            >
              <div className="framework-image">
                <img src={framework.image} alt={`${framework.name} methodology`} />
              </div>
              <div className="framework-info">
                <h3>{framework.name}</h3>
                <p className="framework-description">{framework.description}</p>
                <p className="framework-process">{framework.process}</p>
                <div className="framework-best-for">
                  <strong>Best for:</strong> {framework.bestFor}
                </div>
              </div>
              
              {selectedFramework === framework.id && (
                <div className="selection-indicator">✓ Selected</div>
              )}
            </div>
          ))}
        </div>

        {showAlex && selectedFramework && (
          <div className="alex-analysis">
            <div className="alex-character">
              <img src={alexAvatar} alt="ALEX AI Assistant" className="alex-avatar" />
              <div className="alex-dialogue">
                <h3>ALEX Analysis</h3>
                <p>{frameworks[selectedFramework].alexExplanation}</p>
                <p>
                  <strong>Tools unlocked:</strong> {frameworks[selectedFramework].tools.join(', ')}
                </p>
              </div>
            </div>
          </div>
        )}

        {!selectedFramework && (
          <div className="selection-prompt">
            <p className="feedback warning">
              Select a framework.
            </p>
          </div>
        )}
      </div>

      <NavigationButtons
        onPrevious={() => navigate('/scene2')}
        onNext={handleContinue}
        nextDisabled={!canContinue}
        nextLabel="Continue to Modality"
      />
    </div>
  );
};

export default Scene3Framework;