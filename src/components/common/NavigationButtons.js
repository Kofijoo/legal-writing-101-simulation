import React from 'react';

const NavigationButtons = ({ 
  showPrevious = true, 
  showNext = true, 
  previousDisabled = false,
  nextDisabled = false,
  onPrevious,
  onNext,
  previousLabel = "Previous",
  nextLabel = "Next"
}) => {
  return (
    <div className="navigation-buttons">
      {showPrevious && (
        <button 
          className="nav-button previous"
          disabled={previousDisabled}
          onClick={onPrevious}
        >
          ← {previousLabel}
        </button>
      )}
      
      {showNext && (
        <button 
          className={`nav-button next ${nextDisabled ? 'disabled' : ''}`}
          disabled={nextDisabled}
          onClick={onNext || (() => {})}
        >
          {nextLabel} →
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;