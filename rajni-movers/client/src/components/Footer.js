import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* About */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Rajni Movers</h5>
            <p>
              Trusted packers and movers for hassle-free, safe, and reliable relocation services across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li><Link to="/services" className="text-light text-decoration-none">Services</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Contact Us</h6>
            <p className="mb-1">📍 Delhi, India</p>
            <p className="mb-1">📞 +91 98765 43210</p>
            <p>📧 support@rajnimovers.com</p>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center mb-0">© 2025 Rajni Movers. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
