import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EnquiryManager({ token }) {
  const [enquiries, setEnquiries] = useState([]);

  const fetchEnquiries = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/enquiries', {
        headers: { 'x-auth-token': token }
      });
      setEnquiries(res.data);
    } catch (err) {
      console.error('Error fetching enquiries:', err);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this enquiry?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/enquiries/${id}`, {
        headers: { 'x-auth-token': token }
      });
      fetchEnquiries(); // refresh list
    } catch (err) {
      console.error('Error deleting enquiry:', err);
      alert('Failed to delete enquiry');
    }
  };

  return (
    <div>
      <h3>📩 Manage Enquiries</h3>
      {enquiries.length === 0 ? (
        <p>No enquiries found.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {enquiries.map((e) => (
            <li key={e._id} style={{ marginBottom: '15px', border: '1px solid #ccc', padding: '10px' }}>
              <p><strong>Name:</strong> {e.name}</p>
              <p><strong>Phone:</strong> {e.phone}</p>
              <p><strong>Email:</strong> {e.email}</p>
              <p><strong>Message:</strong> {e.message}</p>
              <button onClick={() => handleDelete(e._id)}>🗑️ Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EnquiryManager;
