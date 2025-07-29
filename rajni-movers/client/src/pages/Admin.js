import React, { useState } from 'react';
import axios from 'axios';
import BlogManager from '../components/admin/BlogManager';
import ReviewManager from '../components/admin/ReviewManager';
import EnquiryViewer from '../components/admin/EnquiryViewer';
import '../components/AdminDashboard.css';

function Admin() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [token, setToken] = useState(localStorage.getItem('adminToken'));
  const [view, setView] = useState(token ? 'dashboard' : 'login');
  const [activeTab, setActiveTab] = useState('blogs');

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', loginData);
      localStorage.setItem('adminToken', res.data.token);
      setToken(res.data.token);
      setView('dashboard');
    } catch (err) {
      alert('❌ Invalid login credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('adminToken');
      setToken('');
      setView('login');
    }
  };

  if (view === 'login') {
    return (
      <div className="admin-dashboard-container gradient-bg">
        <div className="admin-login glass-card login-box">
          <h2 className="admin-title gradient-text">🔐 Admin Login</h2>
          <form onSubmit={handleLogin} className="login-form">
            <input
              name="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="input-glass"
            />
            <input
              name="password"
              type="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="input-glass"
            />
            <button type="submit" className="btn-glass primary glow-btn">🚀 Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-container gradient-bg">
      <div className="admin-dashboard glass-card dashboard-box">
        <h2 className="admin-title gradient-text">👑 Welcome Admin</h2>
        <div className="admin-top-bar">
          <div className="admin-tabs">
            <button
              className={`btn-glass tab-btn ${activeTab === 'blogs' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('blogs')}
            >
              📝 Blogs
            </button>
            <button
              className={`btn-glass tab-btn ${activeTab === 'reviews' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              ⭐ Reviews
            </button>
            <button
              className={`btn-glass tab-btn ${activeTab === 'enquiries' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('enquiries')}
            >
              📩 Enquiries
            </button>
          </div>
          <button onClick={handleLogout} className="btn-glass danger logout-btn glow-btn">🚪 Logout</button>
        </div>

        <hr className="divider-glass" />

        <div className="admin-content">
          {activeTab === 'blogs' && <BlogManager token={token} />}
          {activeTab === 'reviews' && <ReviewManager token={token} />}
          {activeTab === 'enquiries' && <EnquiryViewer token={token} />}
        </div>
      </div>
    </div>
  );
}

export default Admin;