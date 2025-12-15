'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import './ServicesSection.css';

export default function ServicesSection() {
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
  const services = [
    {
      id: 1,
      title: 'Structural Design & Drafting',
      description:
        'Comprehensive 2D and 3D structural drawings including steel structures, RCC designs, fabrication drawings, and detailed connection details.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      iconColor: '#3b82f6',
      buttonColor: '#3b82f6',
      features: [
        'Steel Structure Drawings',
        'RCC Structure Drawings',
        'IFC & Assembly Drawings',
      ],
    },
    {
      id: 2,
      title: 'Structural Analysis',
      description:
        'Advanced structural analysis using STAAD.PRO and ETABS for load calculations, stress analysis, and performance optimization.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      iconColor: '#f97316',
      buttonColor: '#f97316',
      features: [
        'Load Calculations',
        'Dynamic Analysis',
        'Seismic Analysis',
      ],
    },
    {
      id: 3,
      title: 'Calculations & Reports',
      description:
        'Detailed structural calculations, analysis reports, and comprehensive documentation for regulatory compliance and project approval.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      ),
      iconColor: '#10b981',
      buttonColor: '#10b981',
      features: [
        'Structural Analysis Reports',
        'Rebar Scheduling',
        'Bar Bending Schedule',
      ],
    },
    {
      id: 4,
      title: 'Authority Approvals',
      description:
        'Complete authority approval services and regulatory compliance assistance for seamless project execution and legal clearance.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      iconColor: '#8b5cf6',
      buttonColor: '#8b5cf6',
      features: [
        'Authority Submissions',
        'Code Compliance',
        'Permit Processing',
      ],
    },
  ];

  return (
    <section ref={sectionRef} className={`services-section ${isVisible ? 'visible' : ''}`}>
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <h2 className="services-title">Our Core Services</h2>
          <p className="services-subtitle">
            Comprehensive structural engineering solutions from concept to completion,
            ensuring safety, efficiency, and regulatory compliance for every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="service-icon"
                style={{ backgroundColor: `${service.iconColor}15` }}
              >
                <div style={{ color: service.iconColor }}>{service.icon}</div>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-feature">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/services#service-${service.id}`}
                className="service-button"
                style={{ backgroundColor: service.buttonColor }}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
