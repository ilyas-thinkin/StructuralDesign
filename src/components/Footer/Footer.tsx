import Link from "next/link";
import "./Footer.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Structural Design", href: "/services#structural-design" },
  { label: "3D Modeling", href: "/services#3d-modeling" },
  { label: "Analysis Reports", href: "/services#analysis-reports" },
  { label: "Authority Approvals", href: "/services#authority-approvals" },
  { label: "Drafting Services", href: "/services#drafting-services" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.91h4.56V24H.22zM8.54 8.91H13v2.05h.06c.62-1.18 2.12-2.43 4.37-2.43 4.68 0 5.54 3.08 5.54 7.09V24h-4.56v-7.1c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.74V24H8.54z"
        />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M22.46 6c-.77.35-1.6.59-2.46.7a4.21 4.21 0 0 0 1.85-2.32 8.29 8.29 0 0 1-2.65 1.01 4.15 4.15 0 0 0-7.07 3.78A11.77 11.77 0 0 1 3.15 4.6a4.15 4.15 0 0 0 1.28 5.54 4.13 4.13 0 0 1-1.88-.52v.05a4.16 4.16 0 0 0 3.33 4.07c-.36.1-.74.16-1.13.16-.28 0-.54-.03-.81-.08a4.16 4.16 0 0 0 3.87 2.88A8.33 8.33 0 0 1 2 19.54a11.76 11.76 0 0 0 6.36 1.86c7.63 0 11.8-6.32 11.8-11.8 0-.18 0-.36-.01-.53A8.42 8.42 0 0 0 22.46 6z"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="8" height="8" rx="1.5" />
                  <rect x="3" y="13" width="8" height="8" rx="1.5" />
                  <rect x="13" y="3" width="8" height="8" rx="1.5" />
                  <rect x="13" y="13" width="8" height="8" rx="1.5" />
                </svg>
              </div>
              <div className="footer-brand-meta">
                <div className="footer-brand-name">Structural Designs</div>
                <div className="footer-brand-tagline">Engineering Excellence</div>
              </div>
              <p className="footer-description">
                Leading structural engineering consultancy in Dubai, UAE, providing
                comprehensive design, analysis, and drafting services using cutting-edge
                technology and industry expertise.
              </p>
              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="social-link"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <h3 className="footer-column-title">Quick Links</h3>
              <ul className="footer-list">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links">
              <h3 className="footer-column-title">Our Services</h3>
              <ul className="footer-list">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-divider" aria-hidden="true"></div>

          <div className="footer-bottom">
            <div className="footer-copy">© 2025 Structural Designs. All rights reserved.</div>
            <div className="footer-legal">
              <Link href="/privacy" className="footer-link">
                Privacy Policy
              </Link>
              <Link href="/terms" className="footer-link">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="footer-link">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <a href="tel:+97152676750400" className="call-button" aria-label="Call Structural Designs">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M22 16.92v2.5a1.6 1.6 0 0 1-1.74 1.6 17.9 17.9 0 0 1-7.8-2.78 17.7 17.7 0 0 1-5.4-5.4A17.9 17.9 0 0 1 4.28 5.5 1.6 1.6 0 0 1 5.86 3.8H8.4A1.6 1.6 0 0 1 10 5.05c.14.98.39 1.93.76 2.84.18.47.06 1-.29 1.36L9.1 10.62a15.1 15.1 0 0 0 4.28 4.28l1.37-1.37c.35-.35.89-.47 1.36-.29.91.37 1.86.62 2.84.76.9.13 1.58.9 1.58 1.78Z"
          />
        </svg>
      </a>
    </>
  );
}
