import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(res.data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, []);

  return (
    <div className="min-vh-100 bg-white">
      {/* Hero Section */}
      <div className="bg-white border-bottom">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-3">
            Latest <span className="text-primary">Insights</span>
          </h1>
          <p className="lead text-secondary">
            Discover expert tips, industry trends, and valuable insights for your next move
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-5">
        {loading && (
          <div className="d-flex flex-column align-items-center py-5">
            <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-secondary fw-medium">Loading amazing content...</p>
          </div>
        )}

        {error && (
          <div className="mx-auto" style={{ maxWidth: '400px' }}>
            <div className="bg-danger bg-opacity-10 border border-danger rounded-3 p-4 text-center">
              <p className="text-danger fw-medium">{error}</p>
              <button onClick={() => window.location.reload()} className="btn btn-danger mt-3">
                Try Again
              </button>
            </div>
          </div>
        )}

        {!loading && !error && blogs.length === 0 && (
          <div className="text-center py-5">
            <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '96px', height: '96px' }}>
              <svg className="text-secondary" width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7..." />
              </svg>
            </div>
            <h3 className="h4 fw-bold mb-2">No blogs yet</h3>
            <p className="text-secondary">
              We're working on bringing you amazing content. Check back soon for the latest insights and tips!
            </p>
          </div>
        )}

        {!loading && blogs.length > 0 && (
          <div className="row g-4">
            {blogs.map((blog, idx) => (
              <div key={blog._id} className="col-12 col-md-6 col-lg-4">
                <div className="h-100 shadow-sm rounded hover-scale bg-white">
                  <BlogCard {...blog} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      {!loading && blogs.length > 0 && (
        <div className="bg-primary text-white my-4 mx-3 p-5 rounded-3 text-center shadow-lg">
          <h3 className="h4 fw-bold mb-2">Stay Updated</h3>
          <p className="mb-4 text-light">Subscribe to get the latest moving tips and industry insights</p>
          <button className="btn btn-light text-primary fw-semibold px-4 py-2">
            Subscribe Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Blogs;
