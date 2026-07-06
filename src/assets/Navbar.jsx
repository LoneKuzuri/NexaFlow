import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './NavBar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrollY > 50 ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-content">
          <div className="logo">NexaFlow</div>

          {/* Desktop Nav Menu */}
          <div className="nav-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#testimonials" className="nav-link">Reviews</a>
            <a href="#Contact" className="nav-link">Contact</a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#home" className="mobile-nav-link">Home</a>
            <a href="#features" className="mobile-nav-link">Features</a>
            <a href="#testimonials" className="mobile-nav-link">Reviews</a>
            <a href="#Contact" className="mobile-nav-link">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
