import React from 'react';

const ReviewCard = ({ name, rating, comment, createdAt }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-md border border-white/2 transition hover:scale-[1.02] duration-300">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg font-semibold">{name}</h4>
        <span className="text-yellow-400 font-bold">⭐ {rating}/5</span>
      </div>
      <p className="text-sm mb-3 italic">{comment}</p>
      <div className="text-xs text-gray-300 text-right">
        {new Date(createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default ReviewCard;
