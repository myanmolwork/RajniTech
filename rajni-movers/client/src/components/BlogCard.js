import React from 'react';

const BlogCard = ({ title, content, image, createdAt }) => {
  return (
    <div className="blog-card">
      {image && <img src={image} alt="blog visual" />}
      <h3>{title}</h3>
      <p>{content.slice(0, 150)}...</p>
      <small>{new Date(createdAt).toLocaleDateString()}</small>
    </div>
  );
};

export default BlogCard;
