'use client';

import Link from 'next/link';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Comprehensive Solutions for{' '}
            <span className="hero-title-highlight">Structural Drafting</span>
            {' '}& Analysis
          </h1>

          <p className="hero-subtitle">
            Precision engineering powered by STAAD.PRO, ETABS, CSI SAFE, and IDEA StatiCa.
            Delivering world-class structural design solutions across the UAE.
          </p>

          <div className="hero-actions">
            <Link href="/services" className="btn-hero-primary">
              Explore Our Services
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/quote" className="btn-hero-secondary">
              Get Free Quote
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Image with Floating Cards */}
        <div className="hero-image-section">
          <div className="hero-image-wrapper">
            {/* 3D Building Illustration Placeholder */}
            <div className="hero-image">
              <div className="building-3d">
                <div className="building-layer layer-1"></div>
                <div className="building-layer layer-2"></div>
                <div className="building-layer layer-3"></div>
                <div className="building-base"></div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="floating-card card-projects">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="card-content">
                <div className="card-number">500+ Projects</div>
                <div className="card-text">Successfully Delivered</div>
              </div>
            </div>

            <div className="floating-card card-team">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="card-content">
                <div className="card-number">Expert Team</div>
                <div className="card-text">50+ Engineers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="hero-bg-decoration decoration-1"></div>
      <div className="hero-bg-decoration decoration-2"></div>
    </section>
  );
}
