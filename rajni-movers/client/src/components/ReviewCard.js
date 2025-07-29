import React from 'react';

const ReviewCard = ({ name, rating, comment, createdAt }) => {
  return (
    <div className="review-card">
      <h4>{name}</h4>
      <p>{comment}</p>
      <strong>⭐ {rating}/5</strong>
      <small>{new Date(createdAt).toLocaleDateString()}</small>
    </div>
  );
};

export default ReviewCard;
