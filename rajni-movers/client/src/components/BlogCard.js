import React from 'react';

const BlogCard = ({ title, content, image, createdAt }) => {
  return (
    <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
      {image && (
        <img
          src={image}
          alt="blog visual"
          className="card-img-top object-fit-cover"
          style={{ height: '200px', objectFit: 'cover' }}
        />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-secondary">
          {content.length > 150 ? content.slice(0, 150) + '...' : content}
        </p>
        <div className="mt-auto">
          <small className="text-muted">🗓️ {new Date(createdAt).toLocaleDateString()}</small>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
