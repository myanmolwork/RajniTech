
import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="min-vh-100 py-5 px-3 d-flex flex-column align-items-center bg-light">

      {/* Hero Section */}
      <section className="glass-box text-center container py-5 mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">
          Welcome to <span className="text-dark">SwiftMove</span> Packers & Movers 🚚
        </h1>
        <p className="lead text-secondary mb-4">
          Making relocations effortless — from your doorstep to your new beginnings.
        </p>
        <p className="text-muted">
          We specialize in home shifting, office moves, vehicle transport & storage services across India.
        </p>
      </section>

      {/* Services Preview */}
      <section className="container text-center mb-5">
        <h2 className="h2 fw-bold text-primary mb-4">What We Offer</h2>
        <div className="row g-4">
          {[
            { title: '🏠 Home Shifting', desc: 'Stress-free moving for families and individuals.' },
            { title: '🏢 Office Relocation', desc: 'Quick business transitions with minimal downtime.' },
            { title: '📦 Storage Facility', desc: 'Safe, clean storage options for any duration.' },
            { title: '🚗 Vehicle Transport', desc: 'Secure transportation for your car or bike.' }
          ].map((service, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-3">
              <div className="glass-card p-4 h-100">
                <h5 className="text-primary fw-semibold mb-2">{service.title}</h5>
                <p className="text-secondary small">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="glass-box text-center container py-5">
        <h2 className="h2 fw-bold text-primary mb-4">Why Choose Us?</h2>
        <div className="row justify-content-center text-start">
          <div className="col-12 col-md-8">
            <ul className="list-unstyled text-secondary fs-5">
              <li>✅ Transparent and affordable pricing</li>
              <li>✅ End-to-end tracking and support</li>
              <li>✅ Highly trained packing crew</li>
              <li>✅ Quick delivery with care</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
