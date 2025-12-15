'use client';

import { useEffect, useRef, useState } from 'react';
import './WhyChooseSection.css';

export default function WhyChooseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    engineers: 0,
    satisfaction: 0,
  });
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

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const frameRate = 1000 / 60; // 60fps
      const totalFrames = duration / frameRate;

      const targets = {
        projects: 290,
        experience: 8,
        engineers: 27,
        satisfaction: 58,
      };

      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCounters({
          projects: Math.floor(easeOutQuart * targets.projects),
          experience: Math.floor(easeOutQuart * targets.experience),
          engineers: Math.floor(easeOutQuart * targets.engineers),
          satisfaction: Math.floor(easeOutQuart * targets.satisfaction),
        });

        if (frame >= totalFrames) {
          setCounters(targets);
          clearInterval(counter);
        }
      }, frameRate);

      return () => clearInterval(counter);
    }
  }, [isVisible]);

  const features = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      iconBg: '#ff8c42',
      title: 'Industry Expertise',
      description:
        'Over a decade of experience in structural engineering with proven track records across residential, commercial, and industrial projects.',
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m18.2 5.2l-4.2-4.2m0-6l4.2-4.2" />
        </svg>
      ),
      iconBg: '#10b981',
      title: 'Advanced Technology',
      description:
        'Utilizing the latest software including STAAD.PRO, ETABS, CSI SAFE, and IDEA StatiCa for precise analysis and design optimization.',
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      iconBg: '#3b82f6',
      title: 'Timely Delivery',
      description:
        'Committed to meeting project deadlines without compromising quality, ensuring your construction schedule stays on track.',
    },
  ];

  const stats = [
    { value: counters.projects, suffix: '+', label: 'Projects Completed' },
    { value: counters.experience, suffix: '+', label: 'Years Experience' },
    { value: counters.engineers, suffix: '+', label: 'Expert Engineers' },
    { value: counters.satisfaction, suffix: '%', label: 'Client Satisfaction' },
  ];

  return (
    <section
      ref={sectionRef}
      className={`why-choose-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="why-choose-container">
        {/* Section Header */}
        <div className="why-choose-header">
          <h2 className="why-choose-title">Why Choose StructuralDesign.ae</h2>
          <p className="why-choose-subtitle">
            Industry-leading expertise combined with cutting-edge technology for
            exceptional results
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="feature-icon"
                style={{ backgroundColor: feature.iconBg }}
              >
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="stat-value">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
