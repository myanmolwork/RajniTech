import React, { useState } from 'react';
import { ArrowRight, Check, Star, Clock, Shield, Award } from 'lucide-react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const serviceList = [
    { 
      icon: '🏠', 
      title: 'Home Shifting',
      description: 'Complete household relocation with professional care and attention to every detail.',
      features: ['Professional Packing', 'Safe Transportation', 'Furniture Assembly', 'Insurance Coverage'],
      price: 'Starting ₹8,000',
      popular: false
    },
    { 
      icon: '🏢', 
      title: 'Office Relocation',
      description: 'Seamless business moves with minimal downtime and maximum efficiency.',
      features: ['IT Equipment Care', 'Minimal Downtime', 'Weekend Service', 'Quick Setup'],
      price: 'Starting ₹15,000',
      popular: true
    },
    { 
      icon: '📦', 
      title: 'Packing & Unpacking',
      description: 'Expert packing services using premium materials for maximum protection.',
      features: ['Quality Materials', 'Expert Techniques', 'Labeling System', 'Unpacking Service'],
      price: 'Starting ₹2,000',
      popular: false
    },
    { 
      icon: '🚛', 
      title: 'Transport Services',
      description: 'Reliable vehicle transportation across India with GPS tracking.',
      features: ['GPS Tracking', 'Insurance Included', 'Door-to-Door', 'Regular Updates'],
      price: 'Starting ₹12,000',
      popular: false
    },
    { 
      icon: '🔐', 
      title: 'Warehousing & Storage',
      description: 'Secure storage facilities with 24/7 monitoring and flexible duration.',
      features: ['Climate Control', '24/7 Security', 'Flexible Duration', 'Easy Access'],
      price: 'Starting ₹500/month',
      popular: false
    },
  ];

  const whyChooseUs = [
    { icon: <Shield size={24} />, title: 'Trusted & Secure', desc: 'Licensed and insured services' },
    { icon: <Clock size={24} />, title: 'On-Time Delivery', desc: 'Punctual and reliable service' },
    { icon: <Award size={24} />, title: 'Expert Team', desc: 'Trained professionals' },
    { icon: <Star size={24} />, title: '5-Star Rating', desc: '10,000+ satisfied customers' }
  ];

  return (
    <div className="min-vh-100" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)' }}>
      {/* Hero Section */}
      <section className="position-relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #0d6efd 0%, #6f42c1 100%)' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-10"></div>
        <div className="container position-relative py-5" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className="text-center">
            <div className="d-inline-flex align-items-center px-3 py-2 rounded-pill bg-primary bg-opacity-20 text-info mb-4">
              <Star size={16} className="me-2" />
              <small className="fw-medium">Premium Moving Solutions</small>
            </div>
            <h1 className="display-2 fw-bold mb-4">Our Services</h1>
            <p className="lead fs-4 opacity-75 mx-auto" style={{ maxWidth: '600px' }}>
              Comprehensive moving solutions designed to make your relocation smooth and stress-free
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-dark mb-3">What We Offer</h2>
            <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: '600px' }}>
              Professional services tailored to meet all your moving and storage needs
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {serviceList.map((service, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-4">
                <div 
                  className={`card border-0 shadow-sm h-100 position-relative ${hoveredCard === index ? 'shadow-lg' : ''}`}
                  style={{ 
                    transition: 'all 0.3s ease',
                    transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                    borderRadius: '1rem'
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {service.popular && (
                    <span 
                      className="badge bg-primary position-absolute top-0 start-50 translate-middle px-3 py-2 rounded-pill"
                      style={{ zIndex: 10 }}
                    >
                      Most Popular
                    </span>
                  )}
                  
                  <div className="card-body p-4 text-center">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                      style={{ 
                        width: '100px', 
                        height: '100px', 
                        fontSize: '3rem',
                        background: service.popular ? 'linear-gradient(135deg, #0d6efd, #6f42c1)' : 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                        border: service.popular ? 'none' : '3px solid #dee2e6'
                      }}
                    >
                      {service.icon}
                    </div>
                    
                    <h4 className="card-title fw-bold mb-3 text-dark">
                      {service.title}
                    </h4>
                    
                    <p className="card-text text-muted mb-4" style={{ lineHeight: '1.6' }}>
                      {service.description}
                    </p>

                    <div className="mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="d-flex align-items-center justify-content-start mb-2">
                          <Check size={16} className="text-success me-2 flex-shrink-0" />
                          <small className="text-muted">{feature}</small>
                        </div>
                      ))}
                    </div>

                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span className="fw-bold text-primary fs-5">{service.price}</span>
                    </div>

                    <button 
                      className={`btn ${service.popular ? 'btn-primary' : 'btn-outline-primary'} w-100 py-2 rounded-3 fw-semibold d-flex align-items-center justify-content-center`}
                      style={{ transition: 'all 0.3s ease' }}
                    >
                      Get Quote
                      <ArrowRight size={18} className="ms-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-dark mb-3">Why Choose Us?</h2>
            <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: '600px' }}>
              We're committed to providing exceptional service with every move
            </p>
          </div>

          <div className="row g-4">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-lg-3">
                <div className="card border-0 shadow-sm text-center h-100 rounded-4">
                  <div className="card-body p-4">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white mb-3" style={{ width: '60px', height: '60px' }}>
                      {item.icon}
                    </div>
                    <h5 className="fw-bold text-dark mb-2">{item.title}</h5>
                    <p className="text-muted small mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-dark mb-3">How It Works</h2>
            <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: '600px' }}>
              Simple steps to get your move started
            </p>
          </div>

          <div className="row g-4">
            {[
              { step: '01', title: 'Get Quote', desc: 'Request free estimate online or call us' },
              { step: '02', title: 'Book Service', desc: 'Choose your service and schedule date' },
              { step: '03', title: 'We Pack & Move', desc: 'Our team handles everything professionally' },
              { step: '04', title: 'Delivered Safe', desc: 'Your items delivered safely to destination' }
            ].map((process, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-lg-3">
                <div className="text-center">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle text-white fw-bold fs-4 mb-4"
                    style={{ 
                      width: '80px', 
                      height: '80px',
                      background: 'linear-gradient(135deg, #0d6efd, #6f42c1)'
                    }}
                  >
                    {process.step}
                  </div>
                  <h5 className="fw-bold text-dark mb-3">{process.title}</h5>
                  <p className="text-muted">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-white" style={{ background: 'linear-gradient(135deg, #0d6efd 0%, #6f42c1 100%)' }}>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="text-center">
                <h2 className="display-4 fw-bold mb-4">Ready to Move?</h2>
                <p className="fs-5 mb-5 opacity-75 mx-auto" style={{ maxWidth: '600px' }}>
                  Get started with a free quote today and experience professional moving services
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <button className="btn btn-light btn-lg px-4 py-3 rounded-3 fw-semibold text-primary">
                    Get Free Quote
                  </button>
                  <button className="btn btn-outline-light btn-lg px-4 py-3 rounded-3 fw-semibold">
                    Call: +91 98765 43210
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .card:hover {
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }
        
        .btn:hover {
          transform: translateY(-2px);
        }
        
        .display-2 {
          font-size: 3.5rem;
        }
        
        .display-4 {
          font-size: 2.5rem;
        }
        
        @media (max-width: 768px) {
          .display-2 {
            font-size: 2.5rem;
          }
          .display-4 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;