import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewCard from '../components/ReviewCard';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/reviews')
      .then((res) => setReviews(res.data))
      .catch((err) => console.error('Error fetching reviews', err));
  }, []);

  return (
    <div className="container">
      <h2>Customer Reviews</h2>
      {reviews.map((r) => (
        <ReviewCard key={r._id} {...r} />
      ))}
    </div>
  );
}

export default Reviews;
