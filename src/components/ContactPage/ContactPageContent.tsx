'use client';

import { useState, useEffect, useRef } from 'react';
import './ContactPageContent.css';

export default function ContactPageContent() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+971',
    phone: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
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
    'Structural Design & Drafting',
    'Structural Analysis',
    'Calculations & Reports',
    'Authority Approvals',
    'Other',
  ];

  const countryCodes = [
    { code: '+971', country: 'UAE' },
    { code: '+1', country: 'USA' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'India' },
    { code: '+974', country: 'Qatar' },
    { code: '+966', country: 'Saudi Arabia' },
    { code: '+965', country: 'Kuwait' },
    { code: '+968', country: 'Oman' },
    { code: '+973', country: 'Bahrain' },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      alert('Please fill in all required fields');
      return;
    }

    // Format WhatsApp message
    const whatsappMessage = `*New Contact Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.countryCode} ${formData.phone}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message || 'N/A'}`;

    // WhatsApp number
    const whatsappNumber = '971526750400';

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      email: '',
      countryCode: '+971',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <h1 className="contact-hero-title">Get In Touch</h1>
          <p className="contact-hero-subtitle">
            Let's discuss your structural engineering needs. We're here to help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section ref={sectionRef} className={`contact-content ${isVisible ? 'visible' : ''}`}>
        <div className="contact-content-container">
          {/* Contact Information Cards */}
          <div className="contact-info-grid">
            {/* Phone Card */}
            <div className="contact-info-card">
              <div className="contact-icon phone-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="contact-info-title">Phone</h3>
              <a href="tel:+971526750400" className="contact-info-link">
                +97152 6750400
              </a>
              <p className="contact-info-text">Available for inquiries</p>
            </div>

            {/* Email Card */}
            <div className="contact-info-card">
              <div className="contact-icon email-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="contact-info-title">Email</h3>
              <a href="mailto:info@structuraldesigns.ae" className="contact-info-link">
                info@structuraldesigns.ae
              </a>
              <p className="contact-info-text">We'll respond within 24 hours</p>
            </div>

            {/* WhatsApp Card */}
            <div className="contact-info-card">
              <div className="contact-icon whatsapp-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <h3 className="contact-info-title">WhatsApp</h3>
              <a href="https://wa.me/971526750400" target="_blank" rel="noopener noreferrer" className="contact-info-link">
                Chat with us
              </a>
              <p className="contact-info-text">Quick response guaranteed</p>
            </div>

            {/* Service Areas Card */}
            <div className="contact-info-card">
              <div className="contact-icon location-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="contact-info-title">Service Areas</h3>
              <p className="contact-info-link">Dubai | Abu Dhabi</p>
              <p className="contact-info-link">Ajman | Sharjah</p>
            </div>
          </div>

          {/* Two Column Layout: Form + Map/Hours */}
          <div className="contact-two-column">
            {/* Left Column: Contact Form */}
            <div className="contact-form-wrapper">
              <div className="contact-form-header">
                <h2 className="contact-form-title">Send Us a Message</h2>
                <p className="contact-form-subtitle">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="required">*</span>
                  </label>
                  <div className="phone-input-group">
                    <select
                      name="countryCode"
                      className="country-code-select"
                      value={formData.countryCode}
                      onChange={handleChange}
                    >
                      {countryCodes.map((item) => (
                        <option key={item.code} value={item.code}>
                          {item.code} ({item.country})
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input phone-input"
                      placeholder="50 123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Service Required */}
                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    Service Required <span className="required">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="form-select"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us more about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-button">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ marginRight: '8px' }}
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Send via WhatsApp
                </button>
              </form>
            </div>

            {/* Right Column: Service Areas + Service Hours */}
            <div className="contact-sidebar">
              {/* Service Areas Section */}
              <div className="address-section">
                <div className="address-header">
                  <div className="address-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="address-title">Service Areas</h3>
                </div>
                <div className="address-details">
                  <p style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#555',
                    marginBottom: '20px',
                    fontWeight: '400'
                  }}>
                    We serve clients across the UAE with on-site visits to your location.
                  </p>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '14px',
                    marginBottom: '8px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066cc" strokeWidth="2.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span style={{ fontSize: '15px', color: '#2c3e50', fontWeight: '500' }}>Dubai</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066cc" strokeWidth="2.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span style={{ fontSize: '15px', color: '#2c3e50', fontWeight: '500' }}>Abu Dhabi</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066cc" strokeWidth="2.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span style={{ fontSize: '15px', color: '#2c3e50', fontWeight: '500' }}>Ajman</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066cc" strokeWidth="2.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span style={{ fontSize: '15px', color: '#2c3e50', fontWeight: '500' }}>Sharjah</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Hours */}
              <div className="business-hours-section">
                <h3 className="business-hours-title">Service Hours</h3>
                <div className="business-hours-list">
                  <div className="business-hours-item">
                    <span className="day">Monday - Friday</span>
                    <span className="time">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="business-hours-item">
                    <span className="day">Saturday - Sunday</span>
                    <span className="time">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
