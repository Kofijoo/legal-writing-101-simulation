import React, { useState } from 'react';
import { useSimulationState } from '../../hooks/useSimulationState';
import { FaUser, FaStar } from 'react-icons/fa';
import '../../styles/scene6.css';

const Scene6Stakeholders = ({ onNext, onBack }) => {
  const { state, dispatch } = useSimulationState();
  const [feedback, setFeedback] = useState({
    sarah: { rating: 0, comment: '' },
    david: { rating: 0, comment: '' },
    lisa: { rating: 0, comment: '' }
  });

  const stakeholders = [
    {
      id: 'sarah',
      name: 'Sarah Chen',
      role: 'Training Manager',
      avatar: '/sarah-headshot.png',
      concerns: 'Budget efficiency and measurable outcomes'
    },
    {
      id: 'david', 
      name: 'David Rodriguez',
      role: 'Senior Partner',
      avatar: '/david-headshot.png',
      concerns: 'Quality standards and practical application'
    },
    {
      id: 'lisa',
      name: 'Lisa Thompson', 
      role: 'Junior Associate',
      avatar: '/lisa-headshot.png',
      concerns: 'Accessibility and learning support'
    }
  ];

  const handleRating = (stakeholderId, rating) => {
    setFeedback(prev => ({
      ...prev,
      [stakeholderId]: { ...prev[stakeholderId], rating }
    }));
  };

  const handleComment = (stakeholderId, comment) => {
    setFeedback(prev => ({
      ...prev,
      [stakeholderId]: { ...prev[stakeholderId], comment }
    }));
  };

  const getOverallSatisfaction = () => {
    const ratings = Object.values(feedback).map(f => f.rating).filter(r => r > 0);
    return ratings.length > 0 ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1) : 0;
  };

  const handleContinue = () => {
    dispatch({
      type: 'UPDATE_MULTIPLE',
      updates: {
        scene6_sarah_satisfaction: feedback.sarah.rating,
        scene6_david_satisfaction: feedback.david.rating,
        scene6_lisa_satisfaction: feedback.lisa.rating,
        scene6_overall_satisfaction: getOverallSatisfaction(),
        scene6_sarah_response: feedback.sarah.comment,
        scene6_david_response: feedback.david.comment,
        scene6_lisa_response: feedback.lisa.comment
      }
    });
    onNext();
  };

  const allRated = Object.values(feedback).every(f => f.rating > 0);

  return (
    <div className="scene6 scene-container">
      <div className="scene-header">
        <h2>Stakeholder Feedback</h2>
        <p>Rate satisfaction and provide feedback for each stakeholder</p>
      </div>

      <div className="stakeholders-grid">
        {stakeholders.map(stakeholder => (
          <div key={stakeholder.id} className="stakeholder-card">
            <div className="stakeholder-header">
              <img src={stakeholder.avatar} alt={stakeholder.name} className="stakeholder-avatar" />
              <div className="stakeholder-info">
                <h3>{stakeholder.name}</h3>
                <p className="role">{stakeholder.role}</p>
                <p className="concerns">{stakeholder.concerns}</p>
              </div>
            </div>

            <div className="rating-section">
              <label>Satisfaction Rating:</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map(star => (
                  <FaStar
                    key={star}
                    className={`star ${feedback[stakeholder.id].rating >= star ? 'filled' : ''}`}
                    onClick={() => handleRating(stakeholder.id, star)}
                  />
                ))}
              </div>
            </div>

            <div className="comment-section">
              <label>Feedback Comment:</label>
              <textarea
                value={feedback[stakeholder.id].comment}
                onChange={(e) => handleComment(stakeholder.id, e.target.value)}
                placeholder="Enter feedback comment..."
                rows="3"
              />
            </div>
          </div>
        ))}
      </div>

      {allRated && (
        <div className="satisfaction-summary">
          <h3>Overall Satisfaction: {getOverallSatisfaction()}/5.0</h3>
          <div className="alex-analysis">
            <div className="alex-character">
              <img src="/alex-avatar.png" alt="ALEX" className="alex-avatar" />
              <div className="alex-dialogue">
                <h3>ALEX Analysis</h3>
                <p>Overall satisfaction score of {getOverallSatisfaction()}/5.0 indicates {getOverallSatisfaction() >= 4 ? 'strong stakeholder approval' : 'areas for improvement'}.</p>
                <p>Your design choices have addressed key stakeholder concerns effectively.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="scene-navigation">
        <button className="nav-btn secondary" onClick={onBack}>
          Back
        </button>
        <button 
          className="nav-btn primary" 
          onClick={handleContinue}
          disabled={!allRated}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Scene6Stakeholders;