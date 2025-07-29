const express = require('express');
const router = express.Router();
const {
  addReview,
  getReviews,
  deleteReview,
} = require('../controllers/reviewController');
const protect = require('../middleware/authMiddleware');

// Public
router.post('/', addReview);
router.get('/', getReviews);

// Admin
router.delete('/:id', protect, deleteReview);

module.exports = router;
