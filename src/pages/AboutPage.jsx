import React from 'react';
import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';
import { 
  Building2, 
  History, 
  ShieldCheck, 
  Award, 
  Microscope, 
  FileCheck, 
  CheckCircle2,
  ArrowRight,
  Anchor
} from 'lucide-react';

export default function AboutPage() {
  const labTests = [
    {
      test: 'Histamine Testing (HPLC / ELISA)',
      spec: '< 15 ppm (Stricter than EU 100 ppm limit)',
      purpose: 'Critical for all Scombridae and pelagic species (tuna, mackerel) to guarantee absolute freshness and eliminate risk of scombroid poisoning.'
    },
    {
      test: 'Total Volatile Basic Nitrogen (TVB-N)',
      spec: '< 20 mg N / 100g',
      purpose: 'Chemical index measuring post-harvest protein breakdown and freshness integrity across whitefish and crustaceans.'
    },
    {
      test: 'Heavy Metals Screening (ICP-MS)',
      spec: 'Mercury < 0.5 mg/kg, Cadmium < 0.05 mg/kg, Lead < 0.1 mg/kg',
      purpose: 'Ensures strict compliance with EU Regulation 1881/2006 and US FDA action levels for marine organisms.'
    },
    {
      test: 'Microbiological Profiling',
      spec: 'Salmonella: Absent / 25g, Listeria: Absent / 25g, E. Coli < 10 CFU/g',
      purpose: 'Conducted in certified ISO 17025 accredited partner laboratories before any export container release.'
    }
  ];

  return (
    <div className="about-page">
      {/* Page Header Banner */}
      <div className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/" className="crumb-link">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">About Us</span>
          </div>
          <h1 className="page-title font-serif">About Zfish Global Trading</h1>
          <p className="page-lead">
            An established international trading house committed to excellence in seafood procurement, 
            analytical quality control, and maritime cold-chain logistics.
          </p>
        </div>
      </div>

      {/* Main About Component */}
      <AboutSection />

      {/* Detailed Laboratory & Testing Infrastructure */}
      <section className="lab-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Food Safety Excellence</span>
            <h2 className="section-title font-serif">Analytical Laboratory & Quality Protocols</h2>
            <p className="section-desc">
              Every container dispatched by Zfish is backed by verified Certificates of Analysis (COA). 
              Our multi-tiered testing protocols ensure uncompromised food safety and consumer trust.
            </p>
          </div>

          <div className="lab-tests-grid">
            {labTests.map((item, index) => (
              <div key={index} className="lab-test-card">
                <div className="lab-card-header">
                  <Microscope size={20} className="lab-icon" />
                  <h3 className="lab-test-name">{item.test}</h3>
                </div>
                <div className="lab-spec-badge">
                  <span>Standard: <strong>{item.spec}</strong></span>
                </div>
                <p className="lab-test-desc">{item.purpose}</p>
              </div>
            ))}
          </div>

          {/* Corporate History & Milestones */}
          <div className="history-block">
            <h3 className="history-title font-serif">Two Decades of Maritime Trade Expertise</h3>
            <div className="timeline-grid">
              <div className="timeline-item">
                <span className="timeline-year">2001</span>
                <strong className="timeline-heading">Founding at Port of Rotterdam</strong>
                <p className="timeline-desc">
                  Established initial trading operations focused on North Atlantic pelagic species and herring distribution.
                </p>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2010</span>
                <strong className="timeline-heading">Expansion to Asia & Indian Ocean</strong>
                <p className="timeline-desc">
                  Opened Singapore procurement hub and forged direct dockside agreements with long-line tuna fleets.
                </p>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2018</span>
                <strong className="timeline-heading">Deep-Freeze Reefer Fleet Integration</strong>
                <p className="timeline-desc">
                  Equipped all contracted reefer containers with 24/7 satellite temperature and atmosphere monitoring.
                </p>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">Today</span>
                <strong className="timeline-heading">Global Multimodal Distribution</strong>
                <p className="timeline-desc">
                  Shipping over 48,000 MT annually across 42 port countries with 99.4% on-time discharge reliability.
                </p>
              </div>
            </div>
          </div>

          <div className="about-bottom-cta">
            <div className="bottom-cta-inner">
              <div>
                <h3 className="bottom-cta-title font-serif">Partner with Our Commercial Desk</h3>
                <p className="bottom-cta-desc">
                  Learn how Zfish can optimize your raw material sourcing and secure your seafood supply chain.
                </p>
              </div>
              <Link to="/contact" className="btn btn-primary">
                <span>Initiate Sourcing Discussion</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-header-banner {
          background: #F3ECE2;
          border-bottom: 1px solid var(--border-medium);
          padding: 48px 0;
        }

        .breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .crumb-link {
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 600;
        }

        .crumb-link:hover {
          color: var(--accent-gold);
        }

        .crumb-sep {
          color: var(--border-medium);
        }

        .crumb-current {
          color: var(--accent-navy);
          font-weight: 700;
        }

        .page-title {
          font-size: 2.75rem;
          color: var(--accent-navy);
          margin-bottom: 12px;
        }

        .page-lead {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 680px;
          line-height: 1.6;
        }

        .lab-section {
          padding: 80px 0;
        }

        .lab-tests-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 64px;
        }

        .lab-test-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 28px;
          box-shadow: var(--shadow-sm);
        }

        .lab-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .lab-icon {
          color: var(--accent-gold);
        }

        .lab-test-name {
          font-size: 1.15rem;
          color: var(--accent-navy);
        }

        .lab-spec-badge {
          display: inline-block;
          background: var(--bg-milky);
          border: 1px solid var(--border-subtle);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--accent-navy);
          margin-bottom: 12px;
        }

        .lab-test-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .history-block {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 40px;
          box-shadow: var(--shadow-sm);
          margin-bottom: 48px;
        }

        .history-title {
          font-size: 1.8rem;
          color: var(--accent-navy);
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .timeline-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .timeline-year {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--accent-gold);
        }

        .timeline-heading {
          font-size: 0.95rem;
          color: var(--accent-navy);
        }

        .timeline-desc {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .about-bottom-cta {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 36px 40px;
          box-shadow: var(--shadow-sm);
        }

        .bottom-cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .bottom-cta-title {
          font-size: 1.5rem;
          color: var(--accent-navy);
          margin-bottom: 6px;
        }

        .bottom-cta-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .lab-tests-grid {
            grid-template-columns: 1fr;
          }

          .timeline-grid {
            grid-template-columns: 1fr 1fr;
          }

          .bottom-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 576px) {
          .timeline-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
