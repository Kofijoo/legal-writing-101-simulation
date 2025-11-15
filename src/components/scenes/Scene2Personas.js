import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSimulationState } from '../../hooks/useSimulationState';
import NavigationButtons from '../common/NavigationButtons';
import { personas } from '../../data/personas';

const alexAvatar = `${process.env.PUBLIC_URL}/ALEX_avatar.png`;
const digitalWorkspaceBg = '/Digital_workspace_background.png';

const Scene2Personas = () => {
  const { state, dispatch } = useSimulationState();
  const navigate = useNavigate();
  const [selectedPersona, setSelectedPersona] = useState(state.scene2_primary_persona);
  const [showAlex, setShowAlex] = useState(false);

  useEffect(() => {
    dispatch({ type: 'SET_SCENE', scene: 2 });
  }, [dispatch]);

  const handlePersonaSelection = (personaId) => {
    const persona = personas[personaId];
    setSelectedPersona(personaId);
    
    dispatch({ type: 'UPDATE_MULTIPLE', updates: {
      scene2_primary_persona: personaId,
      scene2_design_priority: persona.designPriority,
      scene2_content_approach: persona.contentApproach,
      scene2_alex_question: persona.alexQuestion
    }});
    
    setShowAlex(true);
  };

  const handleContinue = () => {
    if (selectedPersona) {
      dispatch({ type: 'UPDATE_VARIABLE', variable: 'scene2_complete', value: true });
      navigate('/scene3');
    }
  };

  const canContinue = selectedPersona !== '';

  return (
    <div className="scene scene2" style={{ backgroundImage: `url(${digitalWorkspaceBg})` }}>
      <div className="scene-content">
        <div className="scene-header">
          <h2>Choose Your Learner</h2>
          <p className="instruction">Select primary focus:</p>
        </div>

        <div className="personas-grid">
          {Object.values(personas).map((persona) => (
            <div 
              key={persona.id}
              className={`persona-card ${
                selectedPersona === persona.id ? 'selected' : ''
              }`}
              onClick={() => handlePersonaSelection(persona.id)}
            >
              <div className="persona-image">
                <img src={persona.image} alt={`${persona.name}, ${persona.title}`} />
              </div>
              <div className="persona-info">
                <h3>{persona.name}</h3>
                <h4>{persona.title}</h4>
                <p className="persona-description">{persona.description}</p>
                
                <div className="persona-needs">
                  <h5>Needs:</h5>
                  <p>{persona.needs}</p>
                </div>
                
                <blockquote className="persona-quote">
                  "{persona.quote}"
                </blockquote>
                

              </div>
              
              {selectedPersona === persona.id && (
                <div className="selection-indicator">✓ Selected</div>
              )}
            </div>
          ))}
        </div>

        {showAlex && selectedPersona && (
          <div className="alex-analysis">
            <div className="alex-character">
              <img src={alexAvatar} alt="ALEX AI Assistant" className="alex-avatar" />
              <div className="alex-dialogue">
                <h3>ALEX Analysis</h3>
                <p>
                  Perfect! {personas[selectedPersona].name} drives your design.
                </p>
                <div className="alex-question">
                  <strong>Key Question:</strong><br/>
                  {personas[selectedPersona].alexQuestion}
                </div>
                <p>
                  Focus: <strong>{personas[selectedPersona].designPriority.replace('_', ' ')}</strong>
                </p>
              </div>
            </div>
          </div>
        )}

        {!selectedPersona && (
          <div className="selection-prompt">
            <p className="feedback warning">
              Select a learner.
            </p>
          </div>
        )}
      </div>

      <NavigationButtons
        onPrevious={() => navigate('/scene1')}
        onNext={handleContinue}
        nextDisabled={!canContinue}
        nextLabel="Continue to Framework"
      />
    </div>
  );
};

export default Scene2Personas;