import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          🚚 MoversPro
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeNavbar}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={closeNavbar}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs" onClick={closeNavbar}>
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reviews" onClick={closeNavbar}>
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeNavbar}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin" onClick={closeNavbar}>
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
