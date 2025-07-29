
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 py-2 shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          🚚 Rajni Movers
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/services">Services</Link>
            <Link className="nav-link" to="/blogs">Blog</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/reviews">Reviews</Link>
            <Link className="nav-link" to="/admin">Admin</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
