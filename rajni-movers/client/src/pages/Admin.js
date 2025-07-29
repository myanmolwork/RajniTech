import React, { useState } from 'react';
import axios from 'axios';
import BlogManager from '../components/admin/BlogManager';
import ReviewManager from '../components/admin/ReviewManager';
import EnquiryViewer from '../components/admin/EnquiryViewer';

function Admin() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [token, setToken] = useState(localStorage.getItem('adminToken'));
  const [view, setView] = useState('login'); // login | dashboard

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
      alert('Invalid login');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken('');
    setView('login');
  };

  if (!token || view === 'login') {
    return (
      <div className="admin-login">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input name="email" value={loginData.email} onChange={handleChange} placeholder="Email" required />
          <input name="password" value={loginData.password} onChange={handleChange} placeholder="Password" type="password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <h2>Welcome Admin 👑</h2>
      <button onClick={handleLogout}>Logout</button>

      {/* Tabs for blog/reviews/enquiry */}
      <BlogManager token={token} />
      <ReviewManager token={token} />
      <EnquiryViewer token={token} />
    </div>
  );
}

export default Admin;
