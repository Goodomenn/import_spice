import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Award, 
  ArrowUp, 
  FileText
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Upper Footer CTA Strip */}
        <div className="footer-cta-strip">
          <div className="cta-strip-text">
            <h3 className="cta-strip-title font-serif">Ready to Secure Your Sourcing Contract?</h3>
            <p className="cta-strip-desc">
              Request lot-specific Certificates of Analysis, seasonal quota schedules, or immediate spot-pricing.
            </p>
          </div>
          <div className="cta-strip-actions">
            <Link to="/contact" className="btn btn-gold">
              <FileText size={16} />
              <span>Request Quotation</span>
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <span>Contact Sourcing Desk</span>
            </Link>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="footer-grid">
          {/* Col 1: Brand info */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo" title="FF International Import & Export Services">
              <img 
                src="/logo.png" 
                alt="FF International Import & Export Services" 
                className="footer-logo-img" 
              />
            </Link>

            <p className="footer-bio">
              International trading house specializing in industrial imports (commercial tires, storage batteries, culinary spices) 
              and premier exports (specialty coffees, pure sesame seeds, cashew & macadamia nuts, leather hides, and fresh farm vegetables).
            </p>

            <div className="footer-compliance-badges">
              <span className="comp-badge">
                <ShieldCheck size={14} />
                <span>ISO 9001:2015</span>
              </span>
              <span className="comp-badge">
                <Award size={14} />
                <span>GLOBALG.A.P. Certified</span>
              </span>
            </div>
          </div>

          {/* Col 2: Products */}
          <div className="footer-col">
            <h4 className="footer-col-title">Import & Export Divisions</h4>
            <ul className="footer-nav-list">
              <li><Link to="/products">Commercial & Heavy OTR Tires</Link></li>
              <li><Link to="/products">Automotive & Solar Batteries</Link></li>
              <li><Link to="/products">Malabar & Zanzibar Spices</Link></li>
              <li><Link to="/products">Kenya AA Washed Arabica Coffee</Link></li>
              <li><Link to="/products">Humera White Sesame Seeds</Link></li>
              <li><Link to="/products">Raw & Roasted Cashews / Nuts</Link></li>
              <li><Link to="/products">Finished & Wet-Blue Leather</Link></li>
              <li><Link to="/products">Fresh Horticultural Vegetables</Link></li>
            </ul>
          </div>

          {/* Col 3: Operations & Network */}
          <div className="footer-col">
            <h4 className="footer-col-title">Operations & Network</h4>
            <ul className="footer-nav-list">
              <li><Link to="/about">Corporate Profile & Trade Desk</Link></li>
              <li><Link to="/about">Quality Assurance & Origin Labs</Link></li>
              <li><Link to="/sourcing">Direct Farm & Factory Sourcing</Link></li>
              <li><Link to="/sourcing">Containerized Cargo & Cold-Chain</Link></li>
              <li><Link to="/network">East Africa Mombasa Gateway</Link></li>
              <li><Link to="/network">Rotterdam Port Trade Depot</Link></li>
              <li><Link to="/network">Dubai Free Zone Transshipment</Link></li>
            </ul>
          </div>

          {/* Col 4: Corporate Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Commercial Desk</h4>
            <div className="footer-contact-info">
              <div className="f-contact-item">
                <MapPin size={16} className="f-icon" />
                <span>International Trade Center & Logistics Terminals</span>
              </div>
              <div className="f-contact-item">
                <Phone size={16} className="f-icon" />
                <span>+31 (0) 10 742 8800</span>
              </div>
              <div className="f-contact-item">
                <Mail size={16} className="f-icon" />
                <span>fishkenya11@gmail.com</span>
              </div>
            </div>

            <div className="footer-standards">
              <span className="standards-label">Trade Standards:</span>
              <span className="standards-val">Incoterms 2020 / CIF, CFR, FOB, DDP</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Zfish Global B.V. All rights reserved. Registered under Chamber of Commerce (KvK Rotterdam).
          </div>
          <div className="footer-legal-links">
            <a href="#">Terms of Sale & Delivery</a>
            <span className="legal-dot">&bull;</span>
            <a href="#">General Purchase Conditions</a>
            <span className="legal-dot">&bull;</span>
            <a href="#">Quality & Laboratory Policies</a>
          </div>
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={16} />
            <span>Top</span>
          </button>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background: #EDE4D8;
          border-top: 1px solid var(--border-medium);
          padding: 64px 0 32px;
          color: var(--text-main);
          position: relative;
        }

        .footer-cta-strip {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 32px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 64px;
          box-shadow: var(--shadow-sm);
          flex-wrap: wrap;
        }

        .cta-strip-title {
          font-size: 1.5rem;
          color: var(--accent-navy);
          margin-bottom: 6px;
        }

        .cta-strip-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
        }

        .cta-strip-actions {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1.1fr 1.2fr;
          gap: 40px;
          padding-bottom: 48px;
          border-bottom: 1px solid var(--border-medium);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          text-decoration: none;
          line-height: 0;
        }

        .footer-logo-img {
          height: 44px;
          max-width: 190px;
          width: auto;
          object-fit: contain;
        }

        .footer-bio {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .footer-compliance-badges {
          display: flex;
          gap: 10px;
        }

        .comp-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--accent-navy);
        }

        .footer-col-title {
          font-size: 0.84rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-navy);
          margin-bottom: 18px;
        }

        .footer-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-nav-list a {
          text-decoration: none;
          color: var(--text-muted);
          font-size: 0.88rem;
          transition: color 0.2s;
        }

        .footer-nav-list a:hover {
          color: var(--accent-gold);
          padding-left: 3px;
        }

        .footer-contact-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 18px;
        }

        .f-contact-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-size: 0.86rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .f-icon {
          color: var(--accent-gold);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .footer-standards {
          display: flex;
          flex-direction: column;
          padding-top: 12px;
          border-top: 1px solid var(--border-subtle);
          font-size: 0.78rem;
        }

        .standards-label {
          color: var(--text-light);
          font-weight: 700;
          text-transform: uppercase;
        }

        .standards-val {
          color: var(--accent-navy);
          font-weight: 600;
          margin-top: 2px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 28px;
          font-size: 0.8rem;
          color: var(--text-muted);
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-legal-links a {
          text-decoration: none;
          color: var(--text-muted);
        }

        .footer-legal-links a:hover {
          color: var(--accent-navy);
        }

        .legal-dot {
          color: var(--border-medium);
        }

        .scroll-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          color: var(--accent-navy);
          font-weight: 600;
          cursor: pointer;
          font-size: 0.78rem;
          transition: all 0.2s;
        }

        .scroll-top-btn:hover {
          background: var(--bg-milky-warm);
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }

          .footer-cta-strip {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
