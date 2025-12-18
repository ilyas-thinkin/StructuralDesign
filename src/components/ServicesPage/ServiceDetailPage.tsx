'use client';

import Link from 'next/link';
import { Service } from '@/data/servicesData';
import './ServiceDetailPage.css';

interface ServiceDetailPageProps {
  service: Service;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="detail-hero" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="detail-hero-overlay"></div>
        <div className="detail-hero-content">
          <div className="detail-breadcrumb">
            <Link href="/services">Services</Link>
            <span>/</span>
            <span>{service.title}</span>
          </div>
          <h1 className="detail-hero-title">{service.title}</h1>
          <p className="detail-hero-subtitle">{service.shortDescription}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="detail-content">
        <div className="detail-container">
          {/* Overview */}
          <div className="detail-overview">
            <h2 className="detail-section-title">Overview</h2>
            <p className="detail-description">{service.detailedDescription}</p>
          </div>

          {/* Key Features */}
          <div className="detail-section">
            <h2 className="detail-section-title">Key Features</h2>
            <div className="detail-features-grid">
              {service.keyFeatures.map((feature, index) => (
                <div key={index} className="detail-feature-card">
                  <div className="detail-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="detail-feature-title">{feature}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="detail-section detail-benefits-section">
            <div className="detail-benefits-content">
              <h2 className="detail-section-title">Benefits</h2>
              <ul className="detail-benefits-list">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="detail-benefit-item">
                    <div className="detail-benefit-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process */}
          <div className="detail-section">
            <h2 className="detail-section-title">Our Process</h2>
            <div className="detail-process">
              {service.process.map((step, index) => (
                <div key={index} className="detail-process-step">
                  <div className="detail-process-number">{index + 1}</div>
                  <div className="detail-process-content">
                    <h3 className="detail-process-title">{step.step}</h3>
                    <p className="detail-process-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="detail-section detail-deliverables-section">
            <h2 className="detail-section-title">Deliverables</h2>
            <div className="detail-deliverables-grid">
              {service.deliverables.map((deliverable, index) => (
                <div key={index} className="detail-deliverable-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                  <span>{deliverable}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suitable For */}
          <div className="detail-section detail-suitable-section">
            <h2 className="detail-section-title">Suitable For</h2>
            <div className="detail-suitable-grid">
              {service.suitableFor.map((item, index) => (
                <div key={index} className="detail-suitable-card">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="detail-cta">
            <h2 className="detail-cta-title">Interested in This Service?</h2>
            <p className="detail-cta-text">
              Contact us today to discuss your project requirements and get a customized solution
            </p>
            <div className="detail-cta-buttons">
              <Link href="/contact" className="detail-btn-primary">
                Request a Quote
              </Link>
              <a href="tel:+97152676750400" className="detail-btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Us Now
              </a>
              <Link href="/services" className="detail-btn-tertiary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
