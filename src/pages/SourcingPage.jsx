import React from 'react';
import { Link } from 'react-router-dom';
import SourcingSection from '../components/SourcingSection';
import { 
  Snowflake, 
  ThermometerSnowflake, 
  Ship, 
  Container, 
  ShieldCheck, 
  ArrowRight,
  Compass,
  CheckCircle2
} from 'lucide-react';

export default function SourcingPage() {
  const freezingTechs = [
    {
      name: 'Super-Frozen Cryogenic (-60°C)',
      idealFor: 'Sashimi Tuna (Bluefin & Yellowfin), Chilean Seabass, Swordfish',
      tech: 'Ultra-low temperature refrigeration that completely arrests enzymatic breakdown, oxidation, and lipid rancidity. Preserves pristine translucent cellular structure, deep crimson coloration, and natural tenderness for over 24 months without flavor degradation.'
    },
    {
      name: 'Individual Quick Freezing (IQF -40°C)',
      idealFor: 'Prawns, Fillet Portions, Scallops, Squid Rings',
      tech: 'Fluidized air-blast freezing tunnels where items are frozen individually in under 12 minutes. Prevents ice crystals from puncturing cellular membranes, ensuring virtually zero drip-loss during kitchen thawing and consistent culinary yields.'
    },
    {
      name: 'Sea-Frozen FAS (Frozen At Sea -35°C)',
      idealFor: 'Barents Sea Cod, Haddock, Ocean Perch, Pelagic Mackerel',
      tech: 'Processed and plate-frozen directly on factory freezer trawlers within 2 to 4 hours of net retrieval. Represents the gold standard in wild-capture freshness, locking in ocean nutrients before onshore landing.'
    },
    {
      name: 'Controlled Atmosphere (CA) Fresh Freight',
      idealFor: 'Air-Freight Atlantic Salmon, Halibut, Live Shellfish',
      tech: 'Precise calibration of oxygen, carbon dioxide, and nitrogen within insulated thermal containers, combined with temperature-controlled air freight corridors for immediate delivery within 48 hours of harvest.'
    }
  ];

  return (
    <div className="sourcing-page">
      {/* Page Header Banner */}
      <div className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/" className="crumb-link">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Sourcing & Processing</span>
          </div>
          <h1 className="page-title font-serif">Sourcing & Cold-Chain Processing</h1>
          <p className="page-lead">
            Unbroken thermal management, dockside quality validation, and advanced freezing technologies 
            safeguard seafood integrity from raw marine harvest to destination discharge.
          </p>
        </div>
      </div>

      {/* 5-Stage Supply Chain Roadmap */}
      <SourcingSection />

      {/* Freezing Technologies Deep-Dive */}
      <section className="tech-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Thermal Preservation</span>
            <h2 className="section-title font-serif">Advanced Industrial Freezing Technologies</h2>
            <p className="section-desc">
              Preserving protein molecular structures requires calibrated freezing curves tailored to each species. 
              Here is how we ensure zero quality degradation across long-distance ocean voyages.
            </p>
          </div>

          <div className="tech-grid">
            {freezingTechs.map((item, index) => (
              <div key={index} className="tech-card">
                <div className="tech-card-top">
                  <ThermometerSnowflake size={24} className="tech-icon" />
                  <h3 className="tech-name">{item.name}</h3>
                </div>
                <div className="tech-badge">
                  <span>Species: <strong>{item.idealFor}</strong></span>
                </div>
                <p className="tech-desc">{item.tech}</p>
              </div>
            ))}
          </div>

          {/* Sourcing Fleet Protocol */}
          <div className="fleet-protocol-card">
            <div className="fleet-card-inner">
              <div className="fleet-card-text">
                <span className="fleet-sub">DOCKSIDE AUDIT PROTOCOL</span>
                <h3 className="fleet-title font-serif">Every Landing Monitored by Zfish Quality Inspectors</h3>
                <p className="fleet-desc">
                  Our dockside procurement officers operate directly at primary fishing ports. 
                  Before any batch is acquired, vessels undergo strict verification:
                </p>
                <div className="protocol-checks">
                  <div className="p-check">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>Official IUU Fishing Clearance & Logbook Verification</span>
                  </div>
                  <div className="p-check">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>Core Body Temperature Measured (&lt; 2°C on landing)</span>
                  </div>
                  <div className="p-check">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>Water Quality & Ice Slurry Sterilization Standards</span>
                  </div>
                  <div className="p-check">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>Sensory Grade Testing: Organoleptic & Flesh Elasticity</span>
                  </div>
                </div>
              </div>
              <div className="fleet-card-action">
                <Link to="/contact" className="btn btn-primary">
                  <span>Request Technical Data Sheet</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
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

        .tech-section {
          padding: 80px 0;
          background: #F5EFEB;
          border-top: 1px solid var(--border-medium);
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-bottom: 48px;
        }

        .tech-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 32px;
          box-shadow: var(--shadow-sm);
        }

        .tech-card-top {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .tech-icon {
          color: var(--accent-navy);
        }

        .tech-name {
          font-size: 1.25rem;
          color: var(--accent-navy);
        }

        .tech-badge {
          display: inline-block;
          background: var(--bg-milky);
          border: 1px solid var(--border-subtle);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--text-main);
          margin-bottom: 14px;
        }

        .tech-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .fleet-protocol-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 40px;
          box-shadow: var(--shadow-sm);
        }

        .fleet-card-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 36px;
          flex-wrap: wrap;
        }

        .fleet-card-text {
          max-width: 680px;
        }

        .fleet-sub {
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--accent-gold);
          display: block;
          margin-bottom: 8px;
        }

        .fleet-title {
          font-size: 1.8rem;
          color: var(--accent-navy);
          margin-bottom: 12px;
        }

        .fleet-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .protocol-checks {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .p-check {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.86rem;
          font-weight: 500;
          color: var(--text-main);
        }

        .check-icon {
          color: #10B981;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .tech-grid {
            grid-template-columns: 1fr;
          }

          .protocol-checks {
            grid-template-columns: 1fr;
          }

          .fleet-card-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
