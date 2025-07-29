import React from 'react';
import {
  ArrowRight,
  Shield,
  Clock,
  Star,
  TruckIcon,
  Home as HomeIcon,
  Building2,
  Package
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <HomeIcon size={32} />,
      title: 'Home Shifting',
      desc: 'Stress-free moving for families and individuals with complete care.',
      bg: 'bg-primary'
    },
    {
      icon: <Building2 size={32} />,
      title: 'Office Relocation',
      desc: 'Quick business transitions with minimal downtime and disruption.',
      bg: 'bg-danger'
    },
    {
      icon: <Package size={32} />,
      title: 'Storage Facility',
      desc: 'Safe, clean storage options for any duration with 24/7 security.',
      bg: 'bg-success'
    },
    {
      icon: <TruckIcon size={32} />,
      title: 'Vehicle Transport',
      desc: 'Secure transportation for your car or bike with full insurance.',
      bg: 'bg-warning'
    }
  ];

  const features = [
    { icon: <Shield size={24} />, text: 'Transparent and affordable pricing' },
    { icon: <Clock size={24} />, text: 'End-to-end tracking and support' },
    { icon: <Star size={24} />, text: 'Highly trained packing crew' },
    { icon: <TruckIcon size={24} />, text: 'Quick delivery with care' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-light py-5 text-center">
        <div className="container py-5">
          <div className="mb-3 d-inline-flex align-items-center px-3 py-2 bg-primary text-white rounded-pill">
            <TruckIcon size={16} className="me-2" />
            India's Trusted Moving Partner
          </div>
          <h1 className="display-4 fw-bold">
            Welcome to{' '}
            <span className="text-gradient bg-gradient fw-bold">SwiftMove</span>
          </h1>
          <p className="lead text-secondary mt-3">
            Making relocations effortless — from your doorstep to your new beginnings
          </p>
          <p className="text-muted mb-4">
            We specialize in home shifting, office moves, vehicle transport & storage services across India
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <button className="btn btn-primary d-flex align-items-center justify-content-center px-4 py-2">
              Get Free Quote
              <ArrowRight className="ms-2" size={18} />
            </button>
            <button
              className="btn btn-outline-secondary px-4 py-2"
              onClick={() => navigate('/services')}
            >
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5">What We Offer</h2>
            <p className="text-muted fs-5">Comprehensive moving solutions tailored to your specific needs</p>
          </div>
          <div className="row">
            {services.map((service, idx) => (
              <div key={idx} className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body text-center">
                    <div className={`mb-3 rounded-circle d-flex align-items-center justify-content-center ${service.bg} text-white`} style={{ width: '64px', height: '64px', margin: '0 auto' }}>
                      {service.icon}
                    </div>
                    <h5 className="card-title fw-bold">{service.title}</h5>
                    <p className="card-text text-muted">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5">Why Choose Us?</h2>
            <p className="text-muted fs-5">We're committed to making your move as smooth and stress-free as possible</p>
          </div>
          <div className="row justify-content-center">
            {features.map((feature, idx) => (
              <div key={idx} className="col-md-6 mb-4">
                <div className="d-flex align-items-start p-3 bg-white shadow-sm rounded">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '48px', height: '48px' }}>
                    {feature.icon}
                  </div>
                  <div>
                    <p className="mb-0 fw-semibold">{feature.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">Ready to Move?</h2>
          <p className="fs-5 mb-4">
            Get started with a free quote today and experience the SwiftMove difference
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <button
              className="btn btn-light text-primary px-4 py-2 fw-semibold"
              onClick={() => navigate('/contact')}
            >
              Contact Us Now
            </button>
            <button className="btn btn-outline-light px-4 py-2 fw-semibold">Call: +91 98765 43210</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
