'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
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

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Al-Mansouri',
      position: 'Project Director, Emaar Properties',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      rating: 5,
      text: '"Structural Designs delivered exceptional structural engineering services for our high-rise project. Their expertise in ETABS and attention to detail ensured successful project completion within timeline."',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Chief Engineer, AECOM',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
      text: '"Professional team with deep knowledge of local building codes. Their structural analysis reports are comprehensive and their drafting quality is outstanding. Highly recommend their services."',
    },
    {
      id: 3,
      name: 'Mohammad Hassan',
      position: 'Managing Director, Al Futtaim Engineering',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      rating: 5,
      text: '"We\'ve worked with StructuralDesign.ae on multiple projects. Their innovative solutions and commitment to quality make them our preferred structural engineering partner."',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`testimonials-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="testimonials-container">
        {/* Section Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <p className="testimonials-subtitle">
            Trusted by leading developers and contractors across the UAE
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Client Info */}
              <div className="testimonial-header">
                <div className="client-avatar">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="avatar-image"
                  />
                </div>
                <div className="client-info">
                  <h3 className="client-name">{testimonial.name}</h3>
                  <p className="client-position">{testimonial.position}</p>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="star-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
