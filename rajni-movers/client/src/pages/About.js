import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  Truck,
  IndianRupee,
  Users,
  Award,
  Phone,
  Mail
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '500+', label: 'Cities Covered' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Team' }
  ];

  const values = [
    {
      icon: <HomeIcon size={32} />,
      title: 'Professional Handling',
      description: 'Whether you’re moving your home, office, or personal belongings, we ensure professional handling from start to finish.',
      bg: 'bg-primary'
    },
    {
      icon: <Truck size={32} />,
      title: 'Safe Transportation',
      description: 'Our trained team carefully packs, labels, and transports your items to their destination safely and on time.',
      bg: 'bg-success'
    },
    {
      icon: <IndianRupee size={32} />,
      title: 'Affordable Pricing',
      description: 'With transparent pricing and thousands of happy clients, we’re proud to be a part of your next move — big or small.',
      bg: 'bg-purple'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center position-relative">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,0.1)' }} />
        <div className="container py-5 position-relative">
          <h1 className="display-4 fw-bold mb-3 text-uppercase">About Us</h1>
          <p className="lead text-light mx-auto" style={{ maxWidth: '800px' }}>
            Your trusted partner for seamless, secure, and smooth relocations across India
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-4 text-dark">
            Welcome to <span className="text-primary">SwiftMove Packers & Movers</span>
          </h2>
          <p className="text-dark fs-5 mx-auto" style={{ maxWidth: '700px', lineHeight: '1.8' }}>
            We are India's leading relocation service provider, committed to making your moving experience stress-free and seamless. With years of expertise and a customer-first approach, we handle every aspect of your move with precision and care.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center gy-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="col-6 col-md-3">
                <div className="p-4 bg-white shadow border">
                  <div className="display-5 fw-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-dark fw-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Why We’re Different</h2>
            <p className="text-dark fs-5 mx-auto" style={{ maxWidth: '600px' }}>
              Our commitment to excellence sets us apart in the moving industry.
            </p>
          </div>
          <div className="row gy-4">
            {values.map((val, idx) => (
              <div key={idx} className="col-lg-4">
                <div className="p-4 bg-light border shadow-sm h-100 text-center">
                  <div
                    className={`mb-3 d-inline-flex align-items-center justify-content-center text-white ${val.bg}`}
                    style={{ width: '64px', height: '64px' }}
                  >
                    {val.icon}
                  </div>
                  <h5 className="fw-bold text-dark mb-3">{val.title}</h5>
                  <p className="text-secondary">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <div className="mb-4 d-inline-flex align-items-center px-3 py-2 bg-primary bg-opacity-25">
            <Award size={16} className="me-2" />
            Our Mission
          </div>
          <h2 className="display-5 fw-bold mb-3">"Your move, our responsibility."</h2>
          <p className="fs-5 text-light mb-4" style={{ maxWidth: '750px', margin: '0 auto' }}>
            We believe that every move is a new beginning, and we're here to make that transition as smooth as possible. Our dedicated team works tirelessly to ensure your belongings are treated with the utmost care and delivered safely to your new destination.
          </p>
          <div className="fs-4 text-info fw-semibold">
            🚛 Relax while we handle the rest.
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">Ready to Experience the Difference?</h2>
          <p className="fs-5 text-light mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            Join thousands of satisfied customers who chose SwiftMove for their relocation needs
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <button className="btn btn-light text-primary fw-semibold d-flex align-items-center px-4 py-2">
              <Phone size={18} className="me-2" /> Get Free Quote
            </button>
            <Link to="/contact" className="btn btn-outline-light fw-semibold d-flex align-items-center px-4 py-2 text-white text-decoration-none">
              <Mail size={18} className="me-2" /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
