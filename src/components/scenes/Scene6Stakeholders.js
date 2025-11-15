import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSimulationState } from '../../hooks/useSimulationState';
import NavigationButtons from '../common/NavigationButtons';
import { FaStar } from 'react-icons/fa';
import '../../styles/scene6.css';

const Scene6Stakeholders = () => {
  const { dispatch } = useSimulationState();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState({
    sarah: { rating: 0, comment: '' },
    robert: { rating: 0, comment: '' }
  });

  useEffect(() => {
    dispatch({ type: 'SET_SCENE', scene: 6 });
  }, [dispatch]);

  const stakeholders = [
    {
      id: 'sarah',
      name: 'Sarah Kim',
      role: 'Learning Director',
      avatar: 'Sarah_Kim_headshot.png',
      concerns: 'ROI metrics and cost control'
    },
    {
      id: 'robert',
      name: 'Robert Martinez', 
      role: 'Senior Partner',
      avatar: 'Robert_Martinez.png',
      concerns: 'Billable hour impact and client results'
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
    if (allRated) {
      dispatch({
        type: 'UPDATE_MULTIPLE',
        updates: {
          scene6_sarah_satisfaction: feedback.sarah.rating,
          scene6_robert_satisfaction: feedback.robert.rating,
          scene6_overall_satisfaction: getOverallSatisfaction(),
          scene6_sarah_response: feedback.sarah.comment,
          scene6_robert_response: feedback.robert.comment,
          scene6_complete: true
        }
      });
      navigate('/scene7');
    }
  };

  const handleBack = () => {
    navigate('/scene5');
  };

  const allRated = Object.values(feedback).every(f => f.rating > 0);

  return (
    <div className="scene scene6">
      <div className="scene-content">
      <div className="scene-header">
        <h2>Get Feedback</h2>
        <p>Rate each stakeholder</p>
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
              <label>Rate Design (1=Poor, 5=Excellent):</label>
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
              <img src="/ALEX_avatar.png" alt="ALEX" className="alex-avatar" />
              <div className="alex-dialogue">
                <h3>ALEX Analysis</h3>
                <p>Overall satisfaction score of {getOverallSatisfaction()}/5.0 indicates {getOverallSatisfaction() >= 4 ? 'strong stakeholder approval' : 'areas for improvement'}.</p>
                <p>Your design choices have addressed key stakeholder concerns effectively.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      </div>

      <NavigationButtons
        onPrevious={handleBack}
        onNext={handleContinue}
        nextDisabled={!allRated}
        previousLabel="Back"
        nextLabel="View Analytics"
      />
    </div>
  );
};

export default Scene6Stakeholders;