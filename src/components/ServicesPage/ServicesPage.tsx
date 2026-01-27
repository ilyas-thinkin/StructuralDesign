'use client';

import { useState, useRef, useEffect } from 'react';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import { servicesData, comprehensiveServices, Service } from '@/data/servicesData';
import QuoteModal from '../QuoteModal/QuoteModal';
import './ServicesPage.css';

type CSSVarProperties = CSSProperties & Record<`--${string}`, string>;

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const quickViewRef = useRef<HTMLDivElement>(null);
  const iconsGridRef = useRef<HTMLDivElement>(null);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  const scrollDirRef = useRef(1);
  const isProgrammaticScrollRef = useRef(false);
  const userInteractionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openQuickView = (service: Service) => {
    if (selectedService?.id === service.id) {
      // If clicking the same card, close it
      setSelectedService(null);
    } else {
      // Open the new card
      setSelectedService(service);
    }
  };

  const closeQuickView = () => {
    setSelectedService(null);
  };

  const getServiceColor = (serviceId: string) => {
    const colors: Record<string, string> = {
      '1': '#4F7CFF',
      '2': '#FF7A3D',
      '3': '#10C673',
      '4': '#8B73FF',
      '5': '#FF6B9D',
      '6': '#FF5757',
    };
    return colors[serviceId] || '#0066FF';
  };

  useEffect(() => {
    if (selectedService && quickViewRef.current) {
      // Smooth scroll to the quick view card with more space
      setTimeout(() => {
        const quickEl = quickViewRef.current;
        if (!quickEl) return;
        const iconsEl = iconsGridRef.current;
        const targetBase = iconsEl?.getBoundingClientRect().top ?? quickEl.getBoundingClientRect().top;
        const y = targetBase + window.pageYOffset - 80; // keep icons and quick view both visible
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 100);
    }
  }, [selectedService]);

  // Pause on user touch/interaction
  const handleUserInteractionStart = () => {
    setAutoScrollPaused(true);
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }
  };

  const handleUserInteractionEnd = () => {
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }
    // Resume auto-scroll after user stops interacting for 2 seconds
    userInteractionTimeoutRef.current = setTimeout(() => {
      if (!selectedService) {
        setAutoScrollPaused(false);
      }
    }, 2000);
  };

  // Attach touch/mouse event listeners
  useEffect(() => {
    const el = iconsGridRef.current;
    if (!el) return;

    el.addEventListener('touchstart', handleUserInteractionStart, { passive: true });
    el.addEventListener('touchend', handleUserInteractionEnd, { passive: true });
    el.addEventListener('mousedown', handleUserInteractionStart, { passive: true });
    el.addEventListener('mouseup', handleUserInteractionEnd, { passive: true });

    return () => {
      el.removeEventListener('touchstart', handleUserInteractionStart);
      el.removeEventListener('touchend', handleUserInteractionEnd);
      el.removeEventListener('mousedown', handleUserInteractionStart);
      el.removeEventListener('mouseup', handleUserInteractionEnd);
      if (userInteractionTimeoutRef.current) {
        clearTimeout(userInteractionTimeoutRef.current);
      }
    };
  }, [selectedService]);

  // Resume auto-scroll when quick view closes
  useEffect(() => {
    if (!selectedService) {
      setAutoScrollPaused(false);
    } else {
      setAutoScrollPaused(true); // pause when service box is opened
    }
  }, [selectedService]);

  // Auto-scroll logic - enabled on mobile only
  useEffect(() => {
    const el = iconsGridRef.current;
    if (!el || typeof window === 'undefined') return;

    const isNarrow = window.matchMedia('(max-width: 900px)').matches;
    if (!isNarrow) return; // enable auto-scroll on mobile only

    if (autoScrollPaused) return;

    const tickMs = 20; // faster interval for smoother scroll
    const step = () => {
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 2) return;

      const dir = scrollDirRef.current;
      const next = el.scrollLeft + dir * 1; // 1px per tick for smoother motion

      isProgrammaticScrollRef.current = true; // flag as programmatic

      if (next >= max) {
        el.scrollLeft = max;
        scrollDirRef.current = -1; // reverse direction
      } else if (next <= 0) {
        el.scrollLeft = 0;
        scrollDirRef.current = 1; // reverse direction
      } else {
        el.scrollLeft = next;
      }

      // Reset flag after a short delay
      setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 50);
    };

    const intervalId = window.setInterval(step, tickMs);
    return () => window.clearInterval(intervalId);
  }, [autoScrollPaused]);

  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case 'design':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
          </svg>
        );
      case 'analysis':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          </svg>
        );
      case 'document':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
          </svg>
        );
      case 'approval':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        );
      case 'model':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44C3.21 17.21 3 16.88 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z"/>
          </svg>
        );
      case 'supervision':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-container">
          <h1 className="services-hero-title">Our Services</h1>
          <p className="services-hero-subtitle">
            Comprehensive structural engineering solutions for projects across Dubai and the UAE
          </p>

          {/* Service Icons Grid */}
          <p className="services-icons-hint">Tap or click an icon below to open its quick view</p>
          <div
            className="services-icons-grid"
            ref={iconsGridRef}
          >
            {servicesData.map((service) => (
              <button
                key={service.id}
                className={`service-icon-card ${selectedService?.id === service.id ? 'active' : ''}`}
                onClick={() => openQuickView(service)}
              >
                <div className="service-icon-wrapper">
                  {getServiceIcon(service.icon)}
                </div>
                <h3 className="service-icon-title">{service.title}</h3>
                <p className="service-icon-desc">{service.shortDescription}</p>
              </button>
            ))}
          </div>

          {/* Inline Quick View Card */}
          {selectedService && (
            <div ref={quickViewRef} className="inline-quick-view">
              <button className="inline-quick-view-close" onClick={closeQuickView} aria-label="Close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="inline-quick-view-content">
                {(() => {
                  const accent = getServiceColor(selectedService.id);
                  return (
                    <>
                <div className="inline-quick-view-icon">
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '12px',
                      background: getServiceColor(selectedService.id),
                    }}
                  >
                    {getServiceIcon(selectedService.icon)}
                  </div>
                </div>

                <div className="inline-quick-view-body">
                  <h2 className="inline-quick-view-title">{selectedService.title}</h2>
                  <p className="inline-quick-view-description">{selectedService.quickViewDescription}</p>

                  <div className="inline-quick-view-features">
                    <h3 className="inline-quick-view-features-title">Key Features</h3>
                    <ul className="inline-quick-view-features-list">
                      {selectedService.keyFeatures.slice(0, 4).map((feature, index) => (
                        <li key={index} className="inline-quick-view-feature-item">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                  <div className="inline-quick-view-actions">
                    <Link
                      href={`/services/${selectedService.slug}`}
                      className="inline-quick-view-btn-primary"
                      style={{
                        background: accent,
                        borderColor: 'transparent',
                        boxShadow: `0 10px 24px ${accent}50`,
                        color: '#ffffff',
                      }}
                    >
                      View Service
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-quick-view-btn-secondary"
                      style={{
                        color: accent,
                        borderColor: accent,
                        background: '#ffffff',
                      }}
                    >
                      Send Enquiry
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                    </>
                  );
                })()}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services Cards Section - Redesigned */}
      <section className="services-showcase-section">
        <div className="services-showcase-container">
          <div className="services-showcase-header">
            <div className="services-showcase-badge">Our Services</div>
            <h2 className="services-showcase-title">What We Offer</h2>
            <p className="services-showcase-subtitle">
              Professional structural engineering services tailored to your project needs
            </p>
          </div>

          <div className="services-showcase-grid">
            {servicesData.map((service, index) => (
              <article
                key={service.id}
                className="service-showcase-card"
                style={{
                  '--card-color': getServiceColor(service.id),
                  animationDelay: `${index * 0.1}s`
                } as CSSVarProperties}
              >
                <div className="service-showcase-number">{String(index + 1).padStart(2, '0')}</div>

                <div className="service-showcase-icon-wrapper">
                  <div className="service-showcase-icon">
                    {getServiceIcon(service.icon)}
                  </div>
                </div>

                <div className="service-showcase-content">
                  <h3 className="service-showcase-card-title">{service.title}</h3>
                  <p className="service-showcase-card-desc">{service.shortDescription}</p>

                  <div className="service-showcase-divider"></div>

                  <ul className="service-showcase-features">
                    {service.keyFeatures.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="service-showcase-feature-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="service-showcase-buttons">
                    <Link href={`/services/${service.slug}`} className="service-showcase-btn-primary">
                      Learn More
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                    <button
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="service-showcase-btn-secondary"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Comprehensive Service Portfolio Section */}
      <section className="comprehensive-section">
        <div className="comprehensive-container">
          <div className="comprehensive-header">
            <h2 className="comprehensive-title">Comprehensive Service Portfolio</h2>
            <p className="comprehensive-subtitle">
              A complete range of structural engineering expertise for every project requirement
            </p>
          </div>

          <div className="comprehensive-grid">
            {comprehensiveServices.map((category, index) => (
              <div key={index} className="comprehensive-card">
                <div className="comprehensive-card-header">
                  <div className="comprehensive-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="comprehensive-card-title">{category.category}</h3>
                </div>
                <ul className="comprehensive-list">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="comprehensive-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="9 11 12 14 22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="services-cta">
            <h3 className="services-cta-title">Ready to Start Your Project?</h3>
            <p className="services-cta-text">
              Contact us today to discuss how we can help bring your structural engineering vision to life
            </p>
            <div className="services-cta-buttons">
              <Link href="/contact" className="cta-btn-primary">
                Get in Touch
              </Link>
              <a href="tel:+971565839496" className="cta-btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
