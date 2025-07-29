import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero */}
      <section className="hero-glass">
        <h1>Welcome to SwiftMove Packers & Movers 🚚</h1>
        <p>Your trusted partner for safe, reliable, and on-time relocations.</p>
        <button className="cta-btn">Get a Free Quote</button>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <h2>Our Services</h2>
        <div className="services-cards">
          <div className="glass-card">
            <h3>Home Shifting</h3>
          </div>
          <div className="glass-card">
            <h3>Office Relocation</h3>
          </div>
          <div className="glass-card">
            <h3>Storage Facility</h3>
          </div>
          <div className="glass-card">
            <h3>Vehicle Transport</h3>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="why-us-glass">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ Affordable & Transparent Pricing</li>
          <li>✅ Safe & Reliable Handling</li>
          <li>✅ On-time Delivery</li>
          <li>✅ 24/7 Customer Support</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
