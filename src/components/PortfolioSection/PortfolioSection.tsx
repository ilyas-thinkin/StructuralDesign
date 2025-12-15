'use client';

import { useEffect, useRef, useState } from 'react';
import './PortfolioSection.css';

export default function PortfolioSection() {
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
  const portfolioCategories = [
    {
      id: 1,
      title: '2D Structural Drawings',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
      iconBg: '#3b82f620',
      iconColor: '#3b82f6',
      items: [
        {
          title: 'Steel Structure Drawings',
          description: 'Complete steel framework documentation with connection details',
        },
        {
          title: 'RCC Structure Drawings',
          description: 'Reinforced concrete designs with reinforcement details',
        },
        {
          title: 'IFC & Fabrication Drawings',
          description: 'Industry Foundation Classes and shop drawings',
        },
        {
          title: 'Assembly & Connection Details',
          description: 'Detailed joint specifications and assembly instructions',
        },
      ],
    },
    {
      id: 2,
      title: '3D Structural Modeling',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      iconBg: '#f9731620',
      iconColor: '#f97316',
      items: [
        {
          title: 'Swimming Pool Structures',
          description: 'Overflow and elevated pool structural designs',
        },
        {
          title: 'Pump Room Structures',
          description: 'Specialized mechanical room structural layouts',
        },
        {
          title: 'Lift & Stair Structures',
          description: 'Vertical transportation structural systems',
        },
        {
          title: 'Mezzanine Steel Structures',
          description: 'Intermediate floor structural frameworks',
        },
      ],
    },
    {
      id: 3,
      title: 'Analysis & Design',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      iconBg: '#10b98120',
      iconColor: '#10b981',
      items: [
        {
          title: 'Load Calculations',
          description: 'Comprehensive load analysis and distribution studies',
        },
        {
          title: 'Pipe Supporting Structures',
          description: 'MEP support system design and analysis',
        },
        {
          title: 'Cable Tray & Duct Supports',
          description: 'Electrical and HVAC support structures',
        },
        {
          title: 'Facade Structural Systems',
          description: 'Building envelope structural support design',
        },
      ],
    },
    {
      id: 4,
      title: 'Specialized Services',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m18.2 5.2l-4.2-4.2m0-6l4.2-4.2" />
        </svg>
      ),
      iconBg: '#8b5cf620',
      iconColor: '#8b5cf6',
      items: [
        {
          title: 'Foundation Design',
          description: 'Comprehensive foundation and sub-structure design',
        },
        {
          title: 'Rebar Scheduling',
          description: 'ETABS integrated reinforcement scheduling',
        },
        {
          title: 'Proof Truss Designs',
          description: 'Specialized truss system design and analysis',
        },
        {
          title: 'Ladder & Handrail Design',
          description: 'Safety access structure design and detailing',
        },
      ],
    },
  ];

  return (
    <section ref={sectionRef} className={`portfolio-section ${isVisible ? 'visible' : ''}`}>
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="portfolio-header">
          <h2 className="portfolio-title">Comprehensive Service Portfolio</h2>
          <p className="portfolio-subtitle">
            From conceptual design to final approval, we offer complete structural
            engineering solutions
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {portfolioCategories.map((category, index) => (
            <div
              key={category.id}
              className="portfolio-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header */}
              <div className="portfolio-card-header">
                <div
                  className="portfolio-icon"
                  style={{ backgroundColor: category.iconBg }}
                >
                  <div style={{ color: category.iconColor }}>{category.icon}</div>
                </div>
                <h3 className="portfolio-card-title">{category.title}</h3>
              </div>

              {/* Card Items */}
              <ul className="portfolio-items">
                {category.items.map((item, index) => (
                  <li key={index} className="portfolio-item">
                    <div className="portfolio-item-icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ color: category.iconColor }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div className="portfolio-item-content">
                      <h4 className="portfolio-item-title">{item.title}</h4>
                      <p className="portfolio-item-description">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
