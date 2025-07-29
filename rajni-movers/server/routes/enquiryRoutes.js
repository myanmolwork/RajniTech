const express = require('express');
const router = express.Router();
const {
  submitEnquiry,
  getEnquiries,
  deleteEnquiry // 👈 Add this
} = require('../controllers/enquiryController');
const protect = require('../middleware/authMiddleware');

// Public
router.post('/', submitEnquiry);

// Admin
router.get('/', protect, getEnquiries);
router.delete('/:id', protect, deleteEnquiry); // 👈 Add this line

module.exports = router;
