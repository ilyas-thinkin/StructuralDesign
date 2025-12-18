'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './PortfolioPageContent.css';

type ProjectCategory = 'Residential' | 'Commercial' | 'Industrial' | 'Infrastructure';
type CategoryFilter = 'All Projects' | ProjectCategory;

type Project = {
  title: string;
  category: ProjectCategory;
  year: number;
  description: string;
  location: string;
  image: string;
  scope: string;
};

const categories: CategoryFilter[] = [
  'All Projects',
  'Residential',
  'Commercial',
  'Industrial',
  'Infrastructure',
];

const badgeStyles: Record<ProjectCategory, { backgroundColor: string; color: string }> = {
  Residential: { backgroundColor: 'rgba(59, 130, 246, 0.12)', color: '#2563eb' },
  Commercial: { backgroundColor: 'rgba(16, 185, 129, 0.12)', color: '#0f9f73' },
  Industrial: { backgroundColor: 'rgba(249, 115, 22, 0.12)', color: '#f97316' },
  Infrastructure: { backgroundColor: 'rgba(239, 68, 68, 0.12)', color: '#ef4444' },
};

const createPlaceholderImage = (title: string, accent: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='520' viewBox='0 0 800 520' fill='none'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop stop-color='${accent}' stop-opacity='0.9'/><stop offset='1' stop-color='${accent}' stop-opacity='0.4'/></linearGradient></defs><rect width='800' height='520' rx='24' fill='url(#g)'/><rect x='28' y='28' width='744' height='464' rx='18' fill='white' fill-opacity='0.18' stroke='white' stroke-opacity='0.22'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='32' font-weight='700'>${title}</text></svg>`
  )}`;

const projects: Project[] = [
  {
    title: 'Marina Heights Tower',
    category: 'Residential',
    year: 2023,
    description: '45-story residential tower with complex structural design including transfer slabs and outrigger systems.',
    location: 'Dubai Marina',
    scope: 'Complete structural design, analysis & construction supervision',
    image: createPlaceholderImage('Marina Heights Tower', '#2563eb'),
  },
  {
    title: 'Business Bay Complex',
    category: 'Commercial',
    year: 2023,
    description: 'Multi-use commercial complex with innovative steel frame design and advanced facade structural systems.',
    location: 'Business Bay',
    scope: 'Structural analysis, BIM modeling & authority approvals',
    image: createPlaceholderImage('Business Bay Complex', '#0f9f73'),
  },
  {
    title: 'Logistics Hub Facility',
    category: 'Industrial',
    year: 2022,
    description: 'Large-span industrial facility with specialized crane support systems and heavy load considerations.',
    location: 'Dubai South',
    scope: 'Steel structure design, fabrication drawings & site supervision',
    image: createPlaceholderImage('Logistics Hub Facility', '#f97316'),
  },
  {
    title: 'Emirates Hills Villa',
    category: 'Residential',
    year: 2022,
    description: 'Luxury residential villa with complex architectural features requiring innovative structural solutions.',
    location: 'Emirates Hills',
    scope: 'Full structural design, calculations & construction drawings',
    image: createPlaceholderImage('Emirates Hills Villa', '#2563eb'),
  },
  {
    title: 'Al Khaleej Bridge',
    category: 'Infrastructure',
    year: 2021,
    description: 'Infrastructure bridge project with advanced prestressed concrete design and seismic considerations.',
    location: 'Sharjah',
    scope: 'Complete structural design, analysis & construction support',
    image: createPlaceholderImage('Al Khaleej Bridge', '#ef4444'),
  },
  {
    title: 'City Centre Extension',
    category: 'Commercial',
    year: 2021,
    description: 'Major retail expansion with complex structural modifications and integration with existing structures.',
    location: 'Dubai',
    scope: 'Structural assessment, retrofitting design & supervision',
    image: createPlaceholderImage('City Centre Extension', '#0f9f73'),
  },
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'Expert Engineers' },
  { number: '7', label: 'Emirates Served' },
];

export default function PortfolioPageContent() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All Projects');
  const [heroVisible, setHeroVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      });
    }, observerOptions);

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (statsRef.current) statsObserver.observe(statsRef.current);

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (statsRef.current) statsObserver.unobserve(statsRef.current);
    };
  }, []);

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'All Projects'
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All Projects': projects.length };
    projects.forEach((project) => {
      counts[project.category] = (counts[project.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section ref={heroRef} className={`portfolio-hero ${heroVisible ? 'visible' : ''}`}>
        <div className="portfolio-hero-container">
          <h1 className="portfolio-hero-title">Our Portfolio</h1>
          <p className="portfolio-hero-subtitle">
            Showcasing 500+ successful structural engineering projects across the UAE. From iconic
            towers to intricate residential villas, discover how we bring architectural visions to life.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className={`portfolio-stats ${statsVisible ? 'visible' : ''}`}>
        <div className="portfolio-stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="portfolio-stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="portfolio-projects-section">
        <div className="portfolio-projects-container">
          {/* Category Filters */}
          <div className="portfolio-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`portfolio-filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
                {categoryCounts[category] > 0 && (
                  <span className="filter-count">{categoryCounts[category]}</span>
                )}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="portfolio-projects-grid">
            {filteredProjects.map((project, index) => (
              <article
                key={project.title}
                className="portfolio-project-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="portfolio-project-image-wrapper">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={400}
                    className="portfolio-project-image"
                    unoptimized
                  />
                  <div className="portfolio-project-overlay">
                    <span className="portfolio-view-details">View Details</span>
                  </div>
                </div>

                <div className="portfolio-project-body">
                  <div className="portfolio-project-meta">
                    <span className="portfolio-project-badge" style={badgeStyles[project.category]}>
                      {project.category}
                    </span>
                    <span className="portfolio-project-year">{project.year}</span>
                  </div>

                  <h3 className="portfolio-project-title">{project.title}</h3>
                  <p className="portfolio-project-description">{project.description}</p>

                  <div className="portfolio-project-details">
                    <div className="portfolio-detail-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <div className="portfolio-project-scope">
                    <strong>Scope:</strong> {project.scope}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="portfolio-empty-state">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="portfolio-cta-container">
          <h2 className="portfolio-cta-title">Ready to Start Your Project?</h2>
          <p className="portfolio-cta-text">
            Let's discuss how our structural engineering expertise can bring your vision to life.
          </p>
          <div className="portfolio-cta-buttons">
            <Link href="/contact" className="portfolio-cta-btn-primary">
              Get in Touch
            </Link>
            <Link href="/services" className="portfolio-cta-btn-secondary">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
