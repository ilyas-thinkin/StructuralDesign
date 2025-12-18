'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import QuoteModal from '../QuoteModal/QuoteModal';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const pathname = usePathname();

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

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
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
              <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={`nav-link ${pathname === '/services' ? 'active' : ''}`}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={`nav-link ${pathname === '/portfolio' ? 'active' : ''}`}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Desktop Actions */}
          <div className="navbar-actions desktop-only">
            <a href="tel:+97152676750400" className="phone-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+97152 6750400</span>
            </a>
            <button onClick={openQuoteModal} className="btn-get-quote">
              Get Quote
            </button>
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
        <ul className="mobile-nav">
          <li>
            <Link href="/" className={`mobile-nav-link ${pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className={`mobile-nav-link ${pathname === '/services' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className={`mobile-nav-link ${pathname === '/about' ? 'active' : ''}`} onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className={`mobile-nav-link ${pathname === '/portfolio' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`mobile-nav-link ${pathname === '/contact' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="mobile-menu-actions">
          <a href="tel:+97152676750400" className="mobile-phone-link" onClick={closeMobileMenu}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+97152 6750400</span>
          </a>
          <button onClick={openQuoteModal} className="btn-get-quote-mobile">
            Get Quote
          </button>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </>
  );
}
