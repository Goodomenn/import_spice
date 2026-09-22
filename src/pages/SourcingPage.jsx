import React from 'react';
import { Link } from 'react-router-dom';
import SourcingSection from '../components/SourcingSection';
import { 
  Cpu, 
  Layers, 
  Coffee, 
  BatteryCharging, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  FileCheck
} from 'lucide-react';

export default function SourcingPage() {
  const processingTechs = [
    {
      name: 'Sortex Optical Color-Sorting & Rare-Earth De-Stoning',
      idealFor: 'Natural Sesame Seeds (Humera & Wollega), Whole Cumin Seeds (Jeera), Cashew & Macadamia Nuts',
      icon: Cpu,
      tech: 'High-resolution dual-camera bichromatic optical sorting combined with near-infrared (NIR) spectrometry scans seed streams at over 2,000 particles per second. High-pressure air ejectors instantly isolate discolored grains, foreign seeds, micro-stones, and chaff to ensure certified 99.8%+ commercial export purity.'
    },
    {
      name: 'Vulcanization Curing, Ply Reinforcement & Dynamic Balancing',
      idealFor: 'Heavy-Duty Commercial Truck Radials (TBR 315/80R22.5), Passenger PCR, Heavy OTR / Earthmovers',
      icon: Layers,
      tech: 'Zero-degree spiral steel belt construction with dual-compound wear-resistant rubber tread curing. Every production batch undergoes automated laser shearography, high-voltage X-ray internal ply inspection, and computerized dynamic balance screening to guarantee maximum road longevity, low rolling resistance, and DOT/ECE regulatory compliance.'
    },
    {
      name: 'Highland Controlled Fermentation & GrainPro Preservation',
      idealFor: 'Specialty Arabica Coffee (Washed Yirgacheffe, Sidamo, Kenya AA), Dried Pulses',
      icon: Coffee,
      tech: 'Cherries undergo eco-pulper processing followed by 36-to-48-hour wet aerobic fermentation and parabolic African raised bed sun drying to exactly 11.0% moisture. Stabilized green beans are hermetically sealed in multi-layer GrainPro liners with desiccants, protecting organic aromatics and cupping scores (85+ SCAA) from humidity and odor during maritime voyage.'
    },
    {
      name: 'Automated Lead-Calcium Grid Casting & Formation Cycling',
      idealFor: 'Sealed Maintenance-Free (SMF) Automotive Batteries, Deep-Cycle Tubular Solar Storage',
      icon: BatteryCharging,
      tech: 'Expanded metal grid casting using high-purity lead-calcium-tin alloys prevents internal grid corrosion and water evaporation. Computer-controlled vacuum acid filling and multi-step formation tank charging guarantee uniform plate activation, high Cold Cranking Amperage (CCA), and reliable deep-cycle performance under extreme tropical temperatures.'
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
          <h1 className="page-title font-serif">Commodity Sourcing & Technical Processing</h1>
          <p className="page-lead">
            Unbroken quality engineering, direct factory and farm-gate origin procurement, 
            and certified industrial processing safeguard commodity integrity from source to global discharge.
          </p>
        </div>
      </div>

      {/* 5-Stage Supply Chain Roadmap */}
      <SourcingSection />

      {/* Processing Technologies Deep-Dive */}
      <section className="tech-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Technical Processing Engineering</span>
            <h2 className="section-title font-serif">Advanced Processing & Quality Technologies</h2>
            <p className="section-desc">
              From optical seed purification and specialized post-harvest curing to high-precision radial tire vulcanization, 
              we enforce rigorous processing standards across our import and export operations.
            </p>
          </div>

          <div className="tech-grid">
            {processingTechs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="tech-card">
                  <div className="tech-card-top">
                    <Icon size={24} className="tech-icon" />
                    <h3 className="tech-name">{item.name}</h3>
                  </div>
                  <div className="tech-badge">
                    <span>Target Commodities: <strong>{item.idealFor}</strong></span>
                  </div>
                  <p className="tech-desc">{item.tech}</p>
                </div>
              );
            })}
          </div>

          {/* Sourcing Fleet Protocol */}
          <div className="fleet-protocol-card">
            <div className="fleet-card-inner">
              <div className="fleet-card-text">
                <span className="fleet-sub">TECHNICAL QUALITY & AUDIT PROTOCOL</span>
                <h3 className="fleet-title font-serif">Every Consignment Inspected by FF Importing Quality Engineers</h3>
                <p className="fleet-desc">
                  Our technical inspectors and certified surveyors operate directly on factory production lines and agricultural collection depots. 
                  Before any batch is sealed for export, consignments pass rigorous compliance gates:
                </p>
                <div className="protocol-checks">
                  <div className="p-check">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>Independent SGS / Bureau Veritas COA & Purity Certification</span>
                  </div>
                  <div className="p-check">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>Sortex Machine Optical Purity Verification (&gt;99.8% sort)</span>
                  </div>
                  <div className="p-check">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>Tire Uniformity, Dynamic Balance & X-Ray Structural Clearance</span>
                  </div>
                  <div className="p-check">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>GrainPro Hermetic Sealing, Moisture Desiccants & Phytosanitary Clearance</span>
                  </div>
                </div>
              </div>
              <div className="fleet-card-action">
                <Link to="/contact" className="btn btn-primary">
                  <FileCheck size={16} />
                  <span>Request Technical Data Sheet</span>
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
