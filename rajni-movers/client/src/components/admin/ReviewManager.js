import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReviewManager({ token }) {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    name: '',
    comment: '',
    rating: 5,
    serviceType: 'Home Shifting', 
  });

  const fetchReviews = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/reviews');
      setReviews(res.data);
    } catch (err) {
      console.error('Failed to fetch reviews:', err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleChange = (e) => {
    const value = e.target.name === 'rating' ? Number(e.target.value) : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleCreate = async () => {
    if (!form.name.trim() || !form.comment.trim()) {
      alert('Please fill in both name and comment.');
      return;
    }
    if (form.rating < 1 || form.rating > 5) {
      alert('Rating must be between 1 and 5.');
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/reviews', form, {
        headers: { 'x-auth-token': token },
      });
      setForm({ name: '', comment: '', rating: 5, serviceType: 'Home Shifting' });
      fetchReviews();
    } catch (err) {
      alert('Error creating review');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this review?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/reviews/${id}`, {
        headers: { 'x-auth-token': token },
      });
      fetchReviews();
    } catch (err) {
      alert('Error deleting review');
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-primary fw-bold">⭐ Manage Reviews</h3>

      <div className="card p-4 shadow rounded-4 glass-effect border-0">
        <div className="mb-3">
          <label className="form-label fw-semibold">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Comment</label>
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            className="form-control"
            placeholder="Your experience"
            rows="3"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            className="form-control"
            min="1"
            max="5"
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Service Type</label>
          <select
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">-- Select Service --</option>
            <option value="Home Shifting">Home Shifting</option>
            <option value="Vehicle Transport">Vehicle Transport</option>
            <option value="Office Relocation">Office Relocation</option>
            <option value="Storage">Storage</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button onClick={handleCreate} className="btn btn-success w-100 rounded-pill fw-semibold">
          ➕ Add Review
        </button>
      </div>

      <hr className="my-5" />

      <h5 className="text-secondary">All Reviews</h5>

      {reviews.length === 0 ? (
        <p className="text-muted mt-3">No reviews available.</p>
      ) : (
        <div className="list-group mt-3">
          {reviews.map((r) => (
            <div
              key={r._id}
              className="list-group-item d-flex justify-content-between align-items-start shadow-sm border rounded mb-2"
            >
              <div>
                <h6 className="mb-1 fw-bold">
                  {r.name} <span className="text-warning">({r.rating}⭐)</span>
                </h6>
                <p className="mb-1">
                  <strong>Service:</strong> {r.serviceType} <br />
                  {r.comment}
                </p>
              </div>
              <button
                className="btn btn-sm btn-outline-danger rounded-circle"
                onClick={() => handleDelete(r._id)}
                title="Delete"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReviewManager;
