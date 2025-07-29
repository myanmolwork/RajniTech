const Review = require('../models/Review');

// Add Review (Public)
exports.addReview = async (req, res) => {
  try {
    const { name, rating, comment } = req.body;
    const newReview = await Review.create({ name, rating, comment });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: 'Error adding review' });
  }
};

// Get All Reviews (Public)
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews' });
  }
};

// Delete Review (Admin Only)
exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Review deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting review' });
  }
};
