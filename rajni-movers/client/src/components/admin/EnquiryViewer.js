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
    <div className="container my-4">
      <h3 className="mb-4">📩 Manage Enquiries</h3>

      {enquiries.length === 0 ? (
        <div className="alert alert-info">No enquiries found.</div>
      ) : (
        <div className="row">
          {enquiries.map((e) => (
            <div key={e._id} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <p className="card-text">
                    <strong>Phone:</strong> {e.phone} <br />
                    <strong>Email:</strong> {e.email} <br />
                    <strong>Message:</strong> {e.message}
                  </p>
                  <button
                    onClick={() => handleDelete(e._id)}
                    className="btn btn-sm btn-danger"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EnquiryManager;
