'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import './AboutPageContent.css';

export default function AboutPageContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<HTMLDivElement>(null);
  const certificationRef = useRef<HTMLDivElement>(null);

  const [heroVisible, setHeroVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [milestonesVisible, setMilestonesVisible] = useState(false);
  const [certificationVisible, setCertificationVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
        }
      });
    }, observerOptions);

    const storyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStoryVisible(true);
        }
      });
    }, observerOptions);

    const valuesObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setValuesVisible(true);
        }
      });
    }, observerOptions);

    const teamObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTeamVisible(true);
        }
      });
    }, observerOptions);

    const milestonesObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setMilestonesVisible(true);
        }
      });
    }, observerOptions);

    const certificationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCertificationVisible(true);
        }
      });
    }, observerOptions);

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (storyRef.current) storyObserver.observe(storyRef.current);
    if (valuesRef.current) valuesObserver.observe(valuesRef.current);
    if (teamRef.current) teamObserver.observe(teamRef.current);
    if (milestonesRef.current) milestonesObserver.observe(milestonesRef.current);
    if (certificationRef.current) certificationObserver.observe(certificationRef.current);

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (storyRef.current) storyObserver.unobserve(storyRef.current);
      if (valuesRef.current) valuesObserver.unobserve(valuesRef.current);
      if (teamRef.current) teamObserver.unobserve(teamRef.current);
      if (milestonesRef.current) milestonesObserver.unobserve(milestonesRef.current);
      if (certificationRef.current) certificationObserver.unobserve(certificationRef.current);
    };
  }, []);

  const values = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'Excellence',
      description: 'We deliver superior engineering solutions through innovation, precision, and unwavering commitment to quality in every project we undertake.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: 'Integrity',
      description: 'Transparency and honesty guide our relationships with clients, partners, and team members, building trust through consistent ethical conduct.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Collaboration',
      description: 'Success is achieved through teamwork. We foster open communication and partnership with clients, consultants, and contractors.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and methodologies, continuously evolving our practices to deliver state-of-the-art solutions.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      title: 'Safety',
      description: 'Safety is paramount in structural engineering. We ensure all designs meet and exceed international safety standards and regulations.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: 'Reliability',
      description: 'Clients depend on us to deliver on time, within budget, and to specification. Our track record speaks to our commitment to reliability.',
    },
  ];

  const milestones = [
    {
      year: '2008',
      title: 'Foundation',
      description: 'StructuralDesign.ae was established in Dubai with a vision to provide world-class structural engineering services across the UAE.',
    },
    {
      year: '2012',
      title: 'Expansion',
      description: 'Expanded our team to 20+ engineers and introduced advanced 3D BIM modeling services using Revit and Tekla Structures.',
    },
    {
      year: '2016',
      title: 'ISO Certification',
      description: 'Achieved ISO certification for Quality Management System, reinforcing our commitment to international standards.',
    },
    {
      year: '2019',
      title: 'Digital Transformation',
      description: 'Integrated cutting-edge software including STAAD.PRO, ETABS, CSI SAFE, and IDEA StatiCa for superior structural analysis.',
    },
    {
      year: '2023',
      title: 'Major Milestone',
      description: 'Celebrated completion of 500+ successful projects with a team of 50+ qualified engineers serving all seven emirates.',
    },
    {
      year: '2025',
      title: 'Continued Growth',
      description: 'Leading the industry in sustainable design and smart construction solutions, pioneering the future of structural engineering.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '🏗️' },
    { number: '50+', label: 'Expert Engineers', icon: '👷' },
    { number: '15+', label: 'Years Experience', icon: '📅' },
    { number: '7', label: 'Emirates Served', icon: '🇦🇪' },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section ref={heroRef} className={`about-hero ${heroVisible ? 'visible' : ''}`}>
        <div className="about-hero-container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">Building the Future of Dubai</h1>
            <p className="about-hero-subtitle">
              Since 2008, StructuralDesign.ae has been at the forefront of structural engineering excellence in the UAE,
              transforming architectural visions into safe, sustainable, and stunning realities.
            </p>
            <div className="about-hero-buttons">
              <Link href="/contact" className="about-cta-primary">
                Start Your Project
              </Link>
              <Link href="/services" className="about-cta-secondary">
                Our Services
              </Link>
            </div>
          </div>
          <div className="about-hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="about-stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="stat-icon">{stat.icon}</span>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className={`about-story ${storyVisible ? 'visible' : ''}`}>
        <div className="about-story-container">
          <div className="about-story-content">
            <h2 className="section-title">Our Story</h2>
            <div className="story-text">
              <p>
                Founded in 2008 in the heart of Dubai, StructuralDesign.ae emerged from a simple yet powerful vision:
                to provide unparalleled structural engineering expertise that would shape the UAE's rapidly evolving skyline.
                What began as a small consultancy has flourished into one of the region's most trusted names in structural design.
              </p>
              <p>
                Over the past 15+ years, we've witnessed and contributed to Dubai's transformation into a global architectural
                marvel. Our journey has been marked by countless milestones—from residential villas to towering commercial complexes,
                from traditional designs to cutting-edge sustainable structures. Each project has reinforced our commitment to
                excellence and innovation.
              </p>
              <p>
                Today, with a team of 50+ highly qualified engineers and specialists, we serve clients across all seven emirates
                of the UAE. Our multilingual team (fluent in English and Arabic) ensures seamless communication and understanding
                of diverse project requirements. We've successfully delivered over 500 projects, each one a testament to our
                technical prowess and unwavering dedication to quality.
              </p>
              <p>
                At StructuralDesign.ae, we don't just design structures—we create legacies. Every calculation, every analysis,
                and every blueprint is crafted with precision, backed by advanced technology, and guided by international standards.
                Our ISO-certified quality management system ensures that excellence isn't an aspiration—it's our standard operating
                procedure.
              </p>
            </div>
          </div>
          <div className="about-story-image">
            <div className="story-image-wrapper">
              <svg viewBox="0 0 400 400" className="story-illustration">
                {/* Building Base */}
                <rect x="50" y="250" width="80" height="120" fill="#2563eb" opacity="0.2" />
                <rect x="140" y="200" width="80" height="170" fill="#2563eb" opacity="0.4" />
                <rect x="230" y="150" width="80" height="220" fill="#2563eb" opacity="0.6" />
                <rect x="320" y="100" width="30" height="270" fill="#ff8c42" />

                {/* Windows Grid */}
                <g fill="white" opacity="0.6">
                  <rect x="60" y="260" width="15" height="20" />
                  <rect x="85" y="260" width="15" height="20" />
                  <rect x="110" y="260" width="15" height="20" />
                  <rect x="60" y="290" width="15" height="20" />
                  <rect x="85" y="290" width="15" height="20" />
                  <rect x="110" y="290" width="15" height="20" />
                  <rect x="60" y="320" width="15" height="20" />
                  <rect x="85" y="320" width="15" height="20" />
                  <rect x="110" y="320" width="15" height="20" />

                  <rect x="150" y="210" width="15" height="20" />
                  <rect x="175" y="210" width="15" height="20" />
                  <rect x="200" y="210" width="15" height="20" />
                  <rect x="150" y="240" width="15" height="20" />
                  <rect x="175" y="240" width="15" height="20" />
                  <rect x="200" y="240" width="15" height="20" />
                  <rect x="150" y="270" width="15" height="20" />
                  <rect x="175" y="270" width="15" height="20" />
                  <rect x="200" y="270" width="15" height="20" />
                  <rect x="150" y="300" width="15" height="20" />
                  <rect x="175" y="300" width="15" height="20" />
                  <rect x="200" y="300" width="15" height="20" />
                  <rect x="150" y="330" width="15" height="20" />
                  <rect x="175" y="330" width="15" height="20" />
                  <rect x="200" y="330" width="15" height="20" />

                  <rect x="240" y="160" width="15" height="20" />
                  <rect x="265" y="160" width="15" height="20" />
                  <rect x="290" y="160" width="15" height="20" />
                  <rect x="240" y="190" width="15" height="20" />
                  <rect x="265" y="190" width="15" height="20" />
                  <rect x="290" y="190" width="15" height="20" />
                  <rect x="240" y="220" width="15" height="20" />
                  <rect x="265" y="220" width="15" height="20" />
                  <rect x="290" y="220" width="15" height="20" />
                  <rect x="240" y="250" width="15" height="20" />
                  <rect x="265" y="250" width="15" height="20" />
                  <rect x="290" y="250" width="15" height="20" />
                  <rect x="240" y="280" width="15" height="20" />
                  <rect x="265" y="280" width="15" height="20" />
                  <rect x="290" y="280" width="15" height="20" />
                  <rect x="240" y="310" width="15" height="20" />
                  <rect x="265" y="310" width="15" height="20" />
                  <rect x="290" y="310" width="15" height="20" />
                  <rect x="240" y="340" width="15" height="20" />
                  <rect x="265" y="340" width="15" height="20" />
                  <rect x="290" y="340" width="15" height="20" />
                </g>

                {/* Crane */}
                <line x1="330" y1="100" x2="330" y2="40" stroke="#ff8c42" strokeWidth="3" />
                <line x1="330" y1="40" x2="380" y2="50" stroke="#ff8c42" strokeWidth="3" />
                <line x1="330" y1="40" x2="300" y2="50" stroke="#ff8c42" strokeWidth="2" />

                {/* Ground line */}
                <line x1="0" y1="370" x2="400" y2="370" stroke="#1a1a1a" strokeWidth="2" opacity="0.2" />

                {/* Decorative circles */}
                <circle cx="80" cy="80" r="40" fill="none" stroke="#2563eb" strokeWidth="2" opacity="0.3" />
                <circle cx="80" cy="80" r="30" fill="none" stroke="#2563eb" strokeWidth="2" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={valuesRef} className={`about-values ${valuesVisible ? 'visible' : ''}`}>
        <div className="about-values-container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide our work and define our culture
          </p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className={`about-team ${teamVisible ? 'visible' : ''}`}>
        <div className="about-team-container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            A diverse team of 50+ qualified engineers and specialists
          </p>
          <div className="team-content">
            <div className="team-description">
              <h3>Expertise That Drives Excellence</h3>
              <p>
                Our team comprises highly qualified structural engineers, CAD specialists, BIM modelers, and project
                managers—each bringing specialized expertise and a shared passion for engineering excellence. With
                degrees from prestigious universities and professional certifications from leading institutions, our
                engineers stay at the cutting edge of structural design.
              </p>
              <p>
                We invest heavily in continuous professional development, ensuring our team remains proficient in the
                latest software, methodologies, and building codes. From STAAD.PRO to ETABS, from Revit to Tekla, our
                engineers master the tools that enable precision and innovation.
              </p>
              <div className="team-expertise">
                <div className="expertise-item">
                  <strong>Structural Engineers</strong>
                  <span>Licensed professionals with 5-20 years experience</span>
                </div>
                <div className="expertise-item">
                  <strong>BIM Specialists</strong>
                  <span>Experts in Revit, Tekla, and 3D modeling</span>
                </div>
                <div className="expertise-item">
                  <strong>CAD Technicians</strong>
                  <span>Precision drafting and documentation</span>
                </div>
                <div className="expertise-item">
                  <strong>Project Coordinators</strong>
                  <span>Seamless project management and communication</span>
                </div>
              </div>
            </div>
            <div className="team-image">
              <div className="team-illustration">
                <svg viewBox="0 0 400 400">
                  {/* Team members illustration */}
                  <circle cx="100" cy="120" r="40" fill="#2563eb" opacity="0.7" />
                  <rect x="70" y="165" width="60" height="80" rx="8" fill="#2563eb" opacity="0.7" />

                  <circle cx="200" cy="100" r="45" fill="#ff8c42" opacity="0.8" />
                  <rect x="165" y="150" width="70" height="90" rx="8" fill="#ff8c42" opacity="0.8" />

                  <circle cx="300" cy="130" r="38" fill="#2563eb" opacity="0.6" />
                  <rect x="272" y="173" width="56" height="75" rx="8" fill="#2563eb" opacity="0.6" />

                  <circle cx="150" cy="240" r="35" fill="#2563eb" opacity="0.5" />
                  <rect x="125" y="280" width="50" height="70" rx="8" fill="#2563eb" opacity="0.5" />

                  <circle cx="270" cy="250" r="37" fill="#2563eb" opacity="0.6" />
                  <rect x="243" y="292" width="54" height="75" rx="8" fill="#2563eb" opacity="0.6" />

                  {/* Connecting lines */}
                  <line x1="100" y1="160" x2="200" y2="150" stroke="#666" strokeWidth="2" opacity="0.3" strokeDasharray="5,5" />
                  <line x1="200" y1="190" x2="300" y2="173" stroke="#666" strokeWidth="2" opacity="0.3" strokeDasharray="5,5" />
                  <line x1="150" y1="280" x2="200" y2="240" stroke="#666" strokeWidth="2" opacity="0.3" strokeDasharray="5,5" />
                  <line x1="270" y1="292" x2="200" y2="240" stroke="#666" strokeWidth="2" opacity="0.3" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section ref={milestonesRef} className={`about-milestones ${milestonesVisible ? 'visible' : ''}`}>
        <div className="about-milestones-container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">Key milestones that shaped our success</p>
          <div className="milestones-timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone-item" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="milestone-year">{milestone.year}</div>
                <div className="milestone-content">
                  <h3 className="milestone-title">{milestone.title}</h3>
                  <p className="milestone-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section ref={certificationRef} className={`about-certification ${certificationVisible ? 'visible' : ''}`}>
        <div className="about-certification-container">
          <div className="certification-content">
            <h2 className="section-title">Certified Excellence</h2>
            <p className="certification-text">
              StructuralDesign.ae is proud to be ISO certified for Quality Management Systems. This certification
              demonstrates our commitment to maintaining the highest standards of quality, consistency, and customer
              satisfaction in every project we undertake.
            </p>
            <p className="certification-text">
              Our adherence to international standards ensures that your project benefits from globally recognized
              best practices in structural engineering. We maintain rigorous quality control procedures, comprehensive
              documentation protocols, and continuous improvement processes that guarantee exceptional results.
            </p>
            <div className="certification-badges">
              <div className="certification-badge">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
                <span>ISO Certified</span>
              </div>
              <div className="certification-badge">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Quality Assured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta-container">
          <h2 className="cta-title">Ready to Build Your Vision?</h2>
          <p className="cta-text">
            Let's collaborate on your next project. Our team of experts is ready to transform your architectural
            dreams into structural reality.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-button-primary">
              Get Started Today
            </Link>
            <Link href="/services" className="cta-button-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
