const Enquiry = require('../models/Enquiry');

// Submit Enquiry (Public)
exports.submitEnquiry = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newEnquiry = await Enquiry.create({ name, email, phone, message });
    res.status(201).json(newEnquiry);
  } catch (error) {
    res.status(500).json({ message: 'Error submitting enquiry' });
  }
};

// Get All Enquiries (Admin Only)
exports.getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching enquiries' });
  }
};

// ✅ Delete Enquiry (Admin Only)
exports.deleteEnquiry = async (req, res) => {
  try {
    const deleted = await Enquiry.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Enquiry not found' });
    }
    res.status(200).json({ message: 'Enquiry deleted successfully' });
  } catch (error) {
    console.error('Error deleting enquiry:', error);
    res.status(500).json({ message: 'Error deleting enquiry' });
  }
};
