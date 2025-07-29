// src/pages/Home.jsx
import React from 'react';
import './Home.css'; // for glassmorphism styling

const Home = () => {
  return (
    <div className="min-vh-100 py-5 px-3 d-flex flex-column align-items-center bg-light">

      {/* Hero */}
      <section className="glass-box text-center container py-5 mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">
          Welcome to SwiftMove Packers & Movers 🚚
        </h1>
        <p className="lead text-secondary mb-4">
          Your trusted partner for safe, reliable, and on-time relocations.
        </p>
        <button className="btn btn-primary btn-lg rounded-pill shadow-sm">
          Get a Free Quote
        </button>
      </section>

      {/* Services Preview */}
      <section className="container text-center mb-5">
        <h2 className="h2 fw-bold text-primary mb-4">Our Services</h2>
        <div className="row g-4">
          {['Home Shifting', 'Office Relocation', 'Storage Facility', 'Vehicle Transport'].map((service, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-3">
              <div className="glass-card p-4 text-primary fw-semibold text-center">
                {service}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="glass-box text-center container py-5">
        <h2 className="h2 fw-bold text-primary mb-3">Why Choose Us?</h2>
        <ul className="list-unstyled text-secondary fs-5">
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
