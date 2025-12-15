'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './ProjectShowcase.css';

type ProjectCategory = 'Residential' | 'Commercial' | 'Industrial' | 'Infrastructure';
type CategoryFilter = 'All Projects' | ProjectCategory;

type Project = {
  title: string;
  category: ProjectCategory;
  year: number;
  description: string;
  location: string;
  image: string;
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
    description:
      '45-story residential tower with complex structural design including transfer slabs and outrigger systems.',
    location: 'Dubai Marina',
    image: createPlaceholderImage('Marina Heights Tower', '#2563eb'),
  },
  {
    title: 'Business Bay Complex',
    category: 'Commercial',
    year: 2023,
    description:
      'Multi-use commercial complex with innovative steel frame design and advanced facade structural systems.',
    location: 'Business Bay',
    image: createPlaceholderImage('Business Bay Complex', '#0f9f73'),
  },
  {
    title: 'Logistics Hub Facility',
    category: 'Industrial',
    year: 2022,
    description:
      'Large-span industrial facility with specialized crane support systems and heavy load considerations.',
    location: 'Dubai South',
    image: createPlaceholderImage('Logistics Hub Facility', '#f97316'),
  },
  {
    title: 'Emirates Hills Villa',
    category: 'Residential',
    year: 2022,
    description:
      'Luxury residential villa with complex architectural features requiring innovative structural solutions.',
    location: 'Emirates Hills',
    image: createPlaceholderImage('Emirates Hills Villa', '#2563eb'),
  },
  {
    title: 'Al Khaleej Bridge',
    category: 'Infrastructure',
    year: 2021,
    description:
      'Infrastructure bridge project with advanced prestressed concrete design and seismic considerations.',
    location: 'Sharjah',
    image: createPlaceholderImage('Al Khaleej Bridge', '#ef4444'),
  },
  {
    title: 'City Centre Extension',
    category: 'Commercial',
    year: 2021,
    description:
      'Major retail expansion with complex structural modifications and integration with existing structures.',
    location: 'Dubai',
    image: createPlaceholderImage('City Centre Extension', '#0f9f73'),
  },
];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All Projects');
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

  const filteredProjects = useMemo(
    () =>
      activeCategory === 'All Projects'
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  return (
    <section
      ref={sectionRef}
      className={`project-showcase ${isVisible ? 'visible' : ''}`}
      id="portfolio-showcase"
    >
      <div className="project-showcase-container">
        <div className="project-showcase-header">
          <h2 className="project-showcase-title">Our Portfolio</h2>
          <p className="project-showcase-subtitle">
            Showcasing our expertise across diverse structural engineering projects
          </p>
        </div>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              className="project-card"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="project-image-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={640}
                  height={400}
                  className="project-image"
                  unoptimized
                />
              </div>

              <div className="project-card-body">
                <div className="project-card-meta">
                  <span className="project-badge" style={badgeStyles[project.category]}>
                    {project.category}
                  </span>
                  <span className="project-year">{project.year}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-footer">
                  <div className="project-location">{project.location}</div>
                  <Link href="/portfolio" className="project-link">
                    View Details →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="project-footer-cta">
          <Link href="/portfolio" className="view-all-button">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
