'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './AboutSection.css';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const companyInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      label: 'Location',
      value: 'Dubai, UAE',
      color: '#3b82f6',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/>
        </svg>
      ),
      label: 'Established',
      value: '2008',
      color: '#3b82f6',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      label: 'Team Size',
      value: '50+ Engineers',
      color: '#3b82f6',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
        </svg>
      ),
      label: 'Languages',
      value: 'English, Arabic',
      color: '#3b82f6',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`about-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="about-container">
        <div className="about-content">
          {/* Left Content */}
          <div className="about-text">
            <h2 className="about-title">About Structural Designs</h2>
            <p className="about-description">
              Structural Designs is a premier structural engineering consultancy
              based in Dubai, UAE. With over 15 years of industry experience, we
              specialize in providing comprehensive structural design, analysis,
              and drafting services to clients across the Middle East.
            </p>
            <p className="about-description">
              Our team of highly qualified engineers utilizes state-of-the-art
              software and industry best practices to deliver innovative, safe, and
              cost-effective structural solutions for projects of all scales and
              complexities.
            </p>

            {/* Company Info Grid */}
            <div className="company-info-grid">
              {companyInfo.map((info, index) => (
                <div
                  key={index}
                  className="info-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="info-icon" style={{ color: info.color }}>
                    {info.icon}
                  </div>
                  <div className="info-content">
                    <div className="info-label">{info.label}</div>
                    <div className="info-value">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="about-button">
              Learn More About Us
            </Link>
          </div>

          {/* Right Image */}
          <div className="about-image">
            <div className="image-container">
              <Image
                src="/images/sofatwares/About.jpeg"
                alt="Structural Engineering Team"
                width={600}
                height={450}
                className="about-photo"
              />
              {/* ISO Certification Badge */}
              <div className="certification-badge" style={{ animationDelay: '0.4s' }}>
                <div className="cert-icon">
                  <Image
                    src="/images/sofatwares/iso.png"
                    alt="ISO Certified"
                    width={40}
                    height={40}
                    className="cert-logo"
                  />
                </div>
                <div className="cert-content">
                  <div className="cert-title">ISO Certified</div>
                  <div className="cert-subtitle">Quality Management System</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
