import './AdminDashboard.css'
import React, { useState } from 'react';
import BlogManager from './BlogManager';
import EnquiryViewer from './EnquiryViewer';
import ReviewManager from './ReviewManager';


function AdminDashboard({ token, onLogout }) {
  const [activeTab, setActiveTab] = useState('blogs');

  const renderTab = () => {
    switch (activeTab) {
      case 'blogs':
        return <BlogManager token={token} />;
      case 'enquiries':
        return <EnquiryViewer token={token} />;
      case 'reviews':
        return <ReviewManager token={token} />;
      default:
        return <BlogManager token={token} />;
    }
  };

  return (
    <div className="container my-5 admin-dashboard-glass">
      {/* 👑 Header Section */}
      <div className="glass-header p-4 rounded-4 d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3 text-center text-md-start shadow-sm">
        <div>
          <h3 className="fw-bold mb-2 text-primary-emphasis">👑 Welcome Admin</h3>
          <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
            <span className="badge badge-glass bg-primary-subtle text-primary">📝 Blogs</span>
            <span className="badge badge-glass bg-warning-subtle text-warning">🌟 Reviews</span>
            <span className="badge badge-glass bg-success-subtle text-success">📩 Enquiries</span>
          </div>
        </div>

        <button className="btn btn-outline-danger rounded-pill px-4" onClick={onLogout}>
          🔓 Logout
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
        <button
          className={`btn tab-btn px-4 py-2 rounded-pill fw-semibold ${
            activeTab === 'blogs' ? 'btn-primary text-white' : 'btn-outline-primary'
          }`}
          onClick={() => setActiveTab('blogs')}
        >
          📝 Blogs
        </button>

        <button
          className={`btn tab-btn px-4 py-2 rounded-pill fw-semibold ${
            activeTab === 'enquiries' ? 'btn-success text-white' : 'btn-outline-success'
          }`}
          onClick={() => setActiveTab('enquiries')}
        >
          📩 Enquiries
        </button>

        <button
          className={`btn tab-btn px-4 py-2 rounded-pill fw-semibold ${
            activeTab === 'reviews' ? 'btn-warning text-white' : 'btn-outline-warning'
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          🌟 Reviews
        </button>
      </div>

      {/* Main Content */}
      <div className="glass-main p-4 rounded-4 shadow">{renderTab()}</div>
    </div>
  );
}

export default AdminDashboard;
