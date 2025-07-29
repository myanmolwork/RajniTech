import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ name, rating, comment, createdAt, serviceType }) => {
  return (
    <div className="review-glass-card">
      <div className="review-header">
        <h4 className="review-name">{name}</h4>
        <span className="review-rating">⭐ {rating}/5</span>
      </div>

      <p className="review-comment">"{comment}"</p>

      <div className="review-footer">
        <span className="review-service">{serviceType}</span>
        <span className="review-date">{new Date(createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
