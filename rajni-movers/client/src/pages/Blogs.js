import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import Spinner from 'react-bootstrap/Spinner';

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
    <div className="container py-5">
      <h2 className="text-center mb-4">📝 Latest Blogs</h2>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading blogs...</p>
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {!loading && blogs.length === 0 && !error && (
        <p className="text-center">No blogs available yet. Stay tuned!</p>
      )}

      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-6 col-lg-4 mb-4" key={blog._id}>
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
