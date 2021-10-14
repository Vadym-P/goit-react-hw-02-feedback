import React from 'react';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <div className="wrapper">
      <button type="button" className="good" onClick={onGood}>
        Good
      </button>
      <button type="button" className="neutral" onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" className="bad" onClick={onBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
