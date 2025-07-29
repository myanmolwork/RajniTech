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
    <div>
      <h3>⭐ Manage Reviews</h3>

      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <textarea name="comment" value={form.comment} onChange={handleChange} placeholder="Comment" />
      <input
        type="number"
        name="rating"
        value={form.rating}
        onChange={handleChange}
        placeholder="Rating (1-5)"
        min="1"
        max="5"
      />
      <button onClick={handleCreate}>Add Review</button>

      <ul style={{ marginTop: '20px' }}>
        {reviews.map((r) => (
          <li key={r._id} style={{ marginBottom: '10px' }}>
            <strong>{r.name}</strong> ({r.rating}⭐): {r.comment}
            <button onClick={() => handleDelete(r._id)}>🗑️ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewManager;
