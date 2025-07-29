import React, { useState } from 'react';
import BlogManager from './BlogManager';
import EnquiryViewer from './EnquiryViewer';
import ReviewManager from './ReviewManager';

function AdminDashboard({ token }) {
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
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>👨‍💼 Admin Dashboard</h2>

      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setActiveTab('blogs')}
          style={{ marginRight: '10px', background: activeTab === 'blogs' ? '#222' : '#ddd', color: activeTab === 'blogs' ? '#fff' : '#000', padding: '8px 12px', borderRadius: '4px' }}
        >
          📝 Blogs
        </button>
        <button
          onClick={() => setActiveTab('enquiries')}
          style={{ marginRight: '10px', background: activeTab === 'enquiries' ? '#222' : '#ddd', color: activeTab === 'enquiries' ? '#fff' : '#000', padding: '8px 12px', borderRadius: '4px' }}
        >
          📩 Enquiries
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          style={{ background: activeTab === 'reviews' ? '#222' : '#ddd', color: activeTab === 'reviews' ? '#fff' : '#000', padding: '8px 12px', borderRadius: '4px' }}
        >
          🌟 Reviews
        </button>
      </div>

      <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>
        {renderTab()}
      </div>
    </div>
  );
}

export default AdminDashboard;
