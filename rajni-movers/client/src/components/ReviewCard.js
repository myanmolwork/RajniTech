import React from 'react';

const ReviewCard = ({ name, rating, comment, createdAt, serviceType }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-md border border-white/20 transition hover:scale-[1.02] duration-300">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg font-semibold">{name}</h4>
        <span className="text-yellow-400 font-bold">⭐ {rating}/5</span>
      </div>

      <p className="text-sm mb-3 italic">"{comment}"</p>

      <div className="flex justify-between items-center text-xs text-gray-300">
        <span className="bg-blue-600/30 px-2 py-1 rounded-md font-medium">
          {serviceType}
        </span>
        <span>{new Date(createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
