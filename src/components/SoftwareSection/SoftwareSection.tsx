'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './SoftwareSection.css';

export default function SoftwareSection() {
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
  const softwares = [
    {
      name: 'STAAD.PRO',
      description: 'Structural Analysis & Design',
      logo: '/images/sofatwares/staadpro-1.png',
    },
    {
      name: 'ETABS',
      description: 'Building Analysis & Design',
      logo: '/images/sofatwares/etabs-academic-software.jpg',
    },
    {
      name: 'CSI SAFE',
      description: 'Slab & Foundation Design',
      logo: '/images/sofatwares/CSI_logo_square-480x480.png',
    },
    {
      name: 'IDEA StatiCa',
      description: 'Connection Design',
      logo: '/images/sofatwares/Idea.png',
    },
    {
      name: 'AutoCAD',
      description: 'Technical Drafting',
      logo: '/images/sofatwares/Auto cadd.png',
    },
    {
      name: 'Revit',
      description: 'BIM Modeling',
      logo: '/images/sofatwares/Revit.png',
    },
  ];

  return (
    <section ref={sectionRef} className={`software-section ${isVisible ? 'visible' : ''}`}>
      <div className="software-container">
        {/* Section Header */}
        <div className="software-header">
          <h2 className="software-title">Powered by Industry-Leading Software</h2>
          <p className="software-subtitle">
            Professional engineering tools for precise structural analysis and design
          </p>
        </div>

        {/* Software Grid */}
        <div className="software-grid">
          {softwares.map((software, index) => (
            <div
              key={index}
              className="software-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="software-icon">
                <Image
                  src={software.logo}
                  alt={`${software.name} logo`}
                  width={80}
                  height={80}
                  className="software-logo"
                />
              </div>
              <h3 className="software-name">{software.name}</h3>
              <p className="software-description">{software.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
