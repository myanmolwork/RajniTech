import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReviewManager({ token }) {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: '', comment: '', rating: 5 });

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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    try {
      await axios.post('http://localhost:5000/api/reviews', form, {
        headers: { 'x-auth-token': token }
      });
      setForm({ name: '', comment: '', rating: 5 });
      fetchReviews();
    } catch (err) {
      alert('Error creating review');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this review?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/reviews/${id}`, {
        headers: { 'x-auth-token': token }
      });
      fetchReviews();
    } catch (err) {
      alert('Error deleting review');
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-primary">⭐ Manage Reviews</h3>

      <div className="card p-3 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Name" />
        </div>

        <div className="mb-3">
          <label className="form-label">Comment</label>
          <textarea name="comment" value={form.comment} onChange={handleChange} className="form-control" placeholder="Comment" rows="3" />
        </div>

        <div className="mb-3">
          <label className="form-label">Rating (1-5)</label>
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

        <button onClick={handleCreate} className="btn btn-success w-100">➕ Add Review</button>
      </div>

      <hr className="my-4" />

      {reviews.length === 0 ? (
        <p className="text-muted">No reviews available.</p>
      ) : (
        <div className="list-group">
          {reviews.map((r) => (
            <div key={r._id} className="list-group-item d-flex justify-content-between align-items-start">
              <div>
                <h6 className="mb-1">{r.name} <span className="text-warning">({r.rating}⭐)</span></h6>
                <p className="mb-1">{r.comment}</p>
              </div>
              <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(r._id)}>🗑️</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReviewManager;
