import React, { useState } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import './Contact.css'; // link to new CSS file

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSuccess('');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      await axios.post('http://localhost:5000/api/enquiries', form);
      setSuccess('✅ Enquiry submitted successfully!');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Enquiry error:', err);
      setError('❌ Failed to submit enquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="glass-card">
        <h2 className="text-center mb-4 contact-heading">📞 Contact Us</h2>

        {success && <div className="alert alert-success text-center">{success}</div>}
        {error && <div className="alert alert-danger text-center">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email (optional)"
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone (optional)"
            />
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message here"
              required
            />
          </div>

          <div className="text-center">
            <button className="glass-button" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" role="status" className="me-2" />
                  Sending...
                </>
              ) : (
                'Send Enquiry'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
