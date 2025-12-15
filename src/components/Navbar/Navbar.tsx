'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo Section - Left */}
          <div className="navbar-logo-wrapper">
            <Link href="/" className="navbar-logo">
              <div className="logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="8" height="8" fill="currentColor" />
                  <rect x="3" y="13" width="8" height="8" fill="currentColor" />
                  <rect x="13" y="3" width="8" height="8" fill="currentColor" />
                  <rect x="13" y="13" width="8" height="8" fill="currentColor" />
                </svg>
              </div>
              <div className="logo-text">
                <span className="logo-title">StructuralDesign.ae</span>
                <span className="logo-subtitle">Engineering Excellence</span>
              </div>
            </Link>
          </div>

          {/* Navigation Items - Center (Desktop Only) */}
          <ul className="navbar-nav">
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>

          {/* Desktop Actions */}
          <div className="navbar-actions desktop-only">
            <a href="tel:+971589575610" className="phone-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+971 589 575 610</span>
            </a>
            <Link href="/quote" className="btn-get-quote">
              Get Quote
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="hamburger-menu mobile-only"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu Sidebar */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <button
            className="close-menu"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="mobile-nav">
          <li>
            <Link href="/" className="mobile-nav-link" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="mobile-nav-link" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="mobile-nav-link" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="mobile-nav-link" onClick={closeMobileMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="mobile-menu-actions">
          <a href="tel:+971589575610" className="mobile-phone-link" onClick={closeMobileMenu}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+971 589 575 610</span>
          </a>
          <Link href="/quote" className="btn-get-quote-mobile" onClick={closeMobileMenu}>
            Get Quote
          </Link>
        </div>
      </div>
    </>
  );
}
