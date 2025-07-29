const Review = require('../models/Review');

exports.addReview = async (req, res) => {
  try {
    const { name, rating, comment, serviceType } = req.body;


    if (!name || !rating || !comment || !serviceType) {
      return res.status(400).json({ message: 'All fields (name, rating, comment, serviceType) are required' });
    }

    const newReview = await Review.create({ name, rating, comment, serviceType });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: 'Error adding review' });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews' });
  }
};


exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Review deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting review' });
  }
};
