const express = require('express');
const router = express.Router();
const {
  submitEnquiry,
  getEnquiries,
  deleteEnquiry 
} = require('../controllers/enquiryController');
const protect = require('../middleware/authMiddleware');


router.post('/', submitEnquiry);


router.get('/', protect, getEnquiries);
router.delete('/:id', protect, deleteEnquiry); 
module.exports = router;
