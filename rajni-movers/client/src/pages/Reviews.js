import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewCard from '../components/ReviewCard';
import { Spinner, Container, Row, Col, Alert } from 'react-bootstrap';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/reviews')
      .then((res) => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching reviews', err);
        setError('Failed to load reviews. Please try again later.');
        setLoading(false);
      });
  }, []);

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Customer Reviews</h2>

      {loading && (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}

      {!loading && !error && reviews.length === 0 && (
        <Alert variant="info" className="text-center">
          No reviews yet. Be the first to leave a review!
        </Alert>
      )}

      <Row>
        {reviews.map((review) => (
          <Col key={review._id} xs={12} md={6} lg={4} className="mb-4">
            <ReviewCard {...review} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Reviews;
