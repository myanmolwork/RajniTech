import React from 'react';
import { Briefcase, Truck, Home } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="glass-card p-5 rounded-4 shadow-lg">
        <h1 className="text-center mb-4 display-5 fw-bold text-dark-emphasis text-outline">
          About Us
        </h1>

        <p className="fs-5 text-dark-emphasis mb-5 text-center fw-medium">
          Welcome to <span className="text-primary fw-bold">Rajni Packers & Movers</span> — your trusted partner for
          <span className="text-success fw-bold"> seamless, secure, and smooth relocations</span> across India.
        </p>

        <div className="mb-4 d-flex align-items-start">
          <Home size={28} className="text-primary me-3 mt-1" />
          <p className="mb-0 text-body fw-medium">
            Whether you're moving your <span className="fw-semibold text-primary">home</span>, <span className="fw-semibold text-primary">office</span>, or personal belongings, we ensure professional handling from start to finish.
          </p>
        </div>

        <div className="mb-4 d-flex align-items-start">
          <Truck size={28} className="text-warning me-3 mt-1" />
          <p className="mb-0 text-body fw-medium">
            Our trained team carefully packs, labels, and transports your items to their destination safely and on time.
          </p>
        </div>

        <div className="mb-4 d-flex align-items-start">
          <Briefcase size={28} className="text-success me-3 mt-1" />
          <p className="mb-0 text-body fw-medium">
            With affordable pricing and thousands of happy clients, we’re proud to be a part of your next move — big or small.
          </p>
        </div>

        <hr className="border-dark opacity-50 my-4" />

        <div className="text-center fst-italic fs-5 text-secondary-emphasis text-outline-sm">
          💼 “Your move, our responsibility.” <br />
          🚛 “Relax while we handle the rest.”
        </div>
      </div>
    </div>
  );
};

export default About;
