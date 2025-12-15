'use client';

import { useEffect, useRef, useState } from 'react';
import './ApproachSection.css';

export default function ApproachSection() {
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

  const approaches = [
    {
      id: 1,
      number: '1',
      title: 'Expertise',
      description:
        'Deep understanding of structural engineering principles combined with years of practical experience',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
        </svg>
      ),
      bgColor: '#dbeafe',
      iconColor: '#3b82f6',
    },
    {
      id: 2,
      number: '2',
      title: 'Analysis',
      description:
        'Comprehensive structural analysis using advanced software for accurate load calculations and optimization',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      ),
      bgColor: '#fed7aa',
      iconColor: '#f97316',
    },
    {
      id: 3,
      number: '3',
      title: 'Drafting',
      description:
        'Precision 2D/3D documentation with detailed drawings and comprehensive technical specifications',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 7h-9v2h9V7zm0 8h-9v2h9v-2zM5.54 11L2 7.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L5.54 11zm0 8L2 15.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L5.54 19z"/>
        </svg>
      ),
      bgColor: '#bbf7d0',
      iconColor: '#10b981',
    },
    {
      id: 4,
      number: '4',
      title: 'Approval',
      description:
        'Complete regulatory compliance assistance and authority approval support for seamless project execution',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
        </svg>
      ),
      bgColor: '#e9d5ff',
      iconColor: '#8b5cf6',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`approach-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="approach-container">
        {/* Section Header */}
        <div className="approach-header">
          <h2 className="approach-title">Our Engineering Approach</h2>
          <p className="approach-subtitle">
            A systematic methodology ensuring precision, safety, and efficiency in every
            project phase
          </p>
        </div>

        {/* Approach Grid */}
        <div className="approach-grid">
          {approaches.map((approach, index) => (
            <div
              key={approach.id}
              className="approach-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="approach-icon"
                style={{ backgroundColor: approach.bgColor }}
              >
                <div style={{ color: approach.iconColor }}>{approach.icon}</div>
              </div>
              <h3 className="approach-card-title">
                {approach.number}. {approach.title}
              </h3>
              <p className="approach-description">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
