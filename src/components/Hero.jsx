import React from 'react';
import { ArrowRight, FileCheck, Shield, Globe2, Snowflake, Award } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Main Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <Shield size={14} className="badge-icon" />
            <span>GLOBAL SPICE SOURCING & INTERNATIONAL IMPORT AND EXPORT</span>
          </div>

          <h1 className="hero-title font-serif">
            Delivering Premium Import and Export
          </h1>

          <p className="hero-description">
            Zfish is an international trading and logistics powerhouse supplying heavy-duty tires, 
            automotive batteries, and aromatic spices for import, while exporting prime leather products, 
            world-renowned specialty coffee, pure sesame seeds, nutrient-dense nuts, and fresh farm-grown vegetables. 
            Backed by origin verification, quality standards, and seamless global freight operations.
          </p>

          <div className="hero-actions">
            <a href="#products" className="btn btn-primary hero-btn">
              <span>Explore Products</span>
              <ArrowRight size={18} />
            </a>
            <button onClick={onOpenQuote} className="btn btn-secondary hero-btn">
              <FileCheck size={18} />
              <span>Request Specifications & RFQ</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="hero-trust">
            <div className="trust-item">
              <Award size={16} className="trust-icon" />
              <span>ISO 9001 & GlobalGAP Certified</span>
            </div>
            <div className="trust-item">
              <Globe2 size={16} className="trust-icon" />
              <span>Direct Origin Procurement</span>
            </div>
            <div className="trust-item">
              <Globe2 size={16} className="trust-icon" />
              <span>Incoterms 2020: CIF / CFR / FOB</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="hero-visual">
          <div className="visual-card">
            <div className="visual-card-inner">
              <div className="visual-tag">Live Trade Desk</div>
              <h3 className="visual-title">Global Procurement & Trade Corridors</h3>
              <p className="visual-desc">
                Managing balanced bilateral import & export routes across Africa, Middle East, Europe, and Asia-Pacific.
              </p>
              
              <div className="corridor-list">
                <div className="corridor-item">
                  <div className="corridor-status active"></div>
                  <div className="corridor-info">
                    <strong>Import Freight Corridor</strong>
                    <span>Heavy Tires, Industrial Batteries & Whole Spices</span>
                  </div>
                  <span className="corridor-route">Dubai / Mumbai Hub</span>
                </div>
                <div className="corridor-item">
                  <div className="corridor-status active"></div>
                  <div className="corridor-info">
                    <strong>Export Commodity Corridor</strong>
                    <span>Kenya AA Coffee, Humera Sesame, Cashews & Nuts</span>
                  </div>
                  <span className="corridor-route">Mombasa Gateway</span>
                </div>
                <div className="corridor-item">
                  <div className="corridor-status active"></div>
                  <div className="corridor-info">
                    <strong>Fresh Horticultural Air-Bridge</strong>
                    <span>French Beans, Snow Peas, Herbs & Avocados</span>
                  </div>
                  <span className="corridor-route">NBO / AMS / DXB</span>
                </div>
              </div>

              <div className="visual-footer">
                <span className="status-indicator">
                  <span className="pulse-dot"></span>
                  Bilateral trade logistics active
                </span>
                <a href="#network" className="visual-link">View freight network &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Strip */}
      <div className="metrics-strip">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-item">
              <span className="metric-number">65,000<span className="metric-plus">+</span></span>
              <span className="metric-label">Metric Tons Traded Annually</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">45<span className="metric-plus">+</span></span>
              <span className="metric-label">Destination Port Countries</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">100<span className="metric-plus">%</span></span>
              <span className="metric-label">Origin Quality & Lab Inspection</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">&lt; 24h</span>
              <span className="metric-label">Quotation & Spec Sheet Turnaround</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding: 64px 0 0;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 56px;
          align-items: center;
          margin-bottom: 72px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: #F2E8DC;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-full);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--accent-navy);
          margin-bottom: 20px;
        }

        .badge-icon {
          color: var(--accent-gold);
        }

        .hero-title {
          font-size: 3.2rem;
          line-height: 1.15;
          color: var(--text-main);
          margin-bottom: 22px;
          letter-spacing: -0.02em;
        }

        .hero-description {
          font-size: 1.12rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 600px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .hero-btn {
          padding: 14px 28px;
          font-size: 1rem;
        }

        .hero-trust {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          padding-top: 20px;
          border-top: 1px solid var(--border-subtle);
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .trust-icon {
          color: var(--accent-gold);
        }

        .visual-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 32px;
          box-shadow: var(--shadow-md);
          position: relative;
        }

        .visual-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url('/texture.png');
          background-size: 350px;
          opacity: 0.4;
          pointer-events: none;
          border-radius: inherit;
        }

        .visual-card-inner {
          position: relative;
          z-index: 1;
        }

        .visual-tag {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-gold);
          background: var(--accent-gold-soft);
          padding: 4px 10px;
          border-radius: 4px;
          margin-bottom: 12px;
        }

        .visual-title {
          font-size: 1.35rem;
          margin-bottom: 10px;
          color: var(--accent-navy);
        }

        .visual-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .corridor-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .corridor-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 14px;
          background: var(--bg-milky);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
        }

        .corridor-status {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22C55E;
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
        }

        .corridor-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .corridor-info strong {
          font-size: 0.88rem;
          color: var(--text-main);
        }

        .corridor-info span {
          font-size: 0.76rem;
          color: var(--text-muted);
        }

        .corridor-route {
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--accent-navy);
          background: #E8EFF4;
          padding: 4px 8px;
          border-radius: 4px;
        }

        .visual-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
          font-size: 0.8rem;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22C55E;
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }

        .visual-link {
          color: var(--accent-navy);
          text-decoration: none;
          font-weight: 700;
        }

        .visual-link:hover {
          color: var(--accent-gold);
        }

        /* Metrics Strip */
        .metrics-strip {
          background: #F3ECE2;
          border-top: 1px solid var(--border-medium);
          border-bottom: 1px solid var(--border-medium);
          padding: 32px 0;
          position: relative;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 24px;
        }

        .metric-divider {
          width: 1px;
          height: 48px;
          background: var(--border-medium);
        }

        .metric-item {
          text-align: center;
        }

        .metric-number {
          display: block;
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--accent-navy);
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .metric-plus {
          color: var(--accent-gold);
        }

        .metric-label {
          font-size: 0.84rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-top: 4px;
          display: block;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .metrics-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .metric-divider {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 2rem;
          }

          .metrics-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
