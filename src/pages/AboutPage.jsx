import React from 'react';
import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';
import { 
  Building2, 
  ShieldCheck, 
  ArrowRight,
  ArrowDownLeft,
  ArrowUpRight,
  CircleDot,
  BatteryCharging,
  Sparkles,
  Briefcase,
  Coffee,
  Wheat,
  Nut,
  Sprout,
  CheckCircle2,
  PackageCheck
} from 'lucide-react';

export default function AboutPage() {
  const importCommodities = [
    {
      icon: CircleDot,
      name: 'Commercial & OTR Tires',
      subtitle: 'Industrial Transport & Mining Radials',
      items: [
        'Heavy-Duty Truck Radials (TBR 315/80R22.5)',
        'Passenger Car Radials (PCR High Performance)',
        'Agricultural & Earthmover (OTR / Off-The-Road)'
      ],
      standards: 'DOT, ECE, GCC, CCC, SASO & ISO/TS 16949 Certified'
    },
    {
      icon: BatteryCharging,
      name: 'Automotive & Solar Batteries',
      subtitle: 'Lead-Calcium & Deep-Cycle Storage',
      items: [
        'Sealed Maintenance-Free (SMF 12V 100Ah Starter)',
        'Deep-Cycle Solar Tubular Batteries (12V 200Ah)',
        'Industrial VRLA AGM Backup (12V 150Ah)'
      ],
      standards: 'Silver-Calcium Alloy, IEC 60896, IEC 61427 & CE Certified'
    },
    {
      icon: Sparkles,
      name: 'Aromatic Culinary Spices',
      subtitle: 'Direct Farm-Gate Whole & Milled Spices',
      items: [
        'Premium Whole Cumin Seeds (Jeera Sortex 99.8% Purity)',
        'Pure Ground Cinnamon Powder (Micro-Milled 80-100 Mesh)',
        'Hand-Selected Whole Cinnamon Quills & Sticks'
      ],
      standards: 'High Volatile Oils, ISO 22000, HACCP & Spice Board Certified'
    }
  ];

  const exportCommodities = [
    {
      icon: Coffee,
      name: 'Specialty Arabica & Robusta Coffee',
      subtitle: 'High-Altitude Washed & Natural Beans',
      items: [
        'Washed Kenya AA Arabica (SL28 / SL34 Screen 17/18)',
        'Ethiopian Yirgacheffe Grade 1 Natural',
        'Specialty Highland Peaberry & Premium Robusta'
      ],
      standards: 'ICO Origin Registered, SCA 86+ Cup Score Certified'
    },
    {
      icon: Wheat,
      name: 'Humera White Sesame Seeds',
      subtitle: 'Machine-Cleaned & Organic Hulled',
      items: [
        'Natural White Humera Sesame Seeds (99.8% Sortex Purity)',
        'Mechanically Hulled Food-Grade Sesame Seeds',
        'High-Oil Content Edible Grade Sesame (> 52% Oil)'
      ],
      standards: 'Export Grade 1, Low Moisture (<5%), Phytosanitary Certified'
    },
    {
      icon: Nut,
      name: 'Cashew Nuts, Macadamia & Peanuts',
      subtitle: 'Raw In-Shell & Vacuum-Packed Kernels',
      items: [
        'Raw Cashew Nuts in Shell (RCN KOR 48-52 lbs)',
        'Jumbo Roasted Cashew Kernels (W180 / W240)',
        'Shelled Style 1 Macadamia & Bold Red Runner Peanuts'
      ],
      standards: 'AFI Grade Standards, Nitrogen-Flushed Vacuum Export Packaging'
    },
    {
      icon: Briefcase,
      name: 'Finished & Wet-Blue Leather',
      subtitle: 'Bovine Hides & Tanned Crust Sides',
      items: [
        'Full-Grain Finished Bovine Sides (1.2mm - 2.0mm)',
        'Machine-Flayed Wet-Blue Bovine Hides (TR Grade)',
        'Crust Goat & Sheepskin Finished Grain'
      ],
      standards: 'LWG Audited Tannery Sourcing, Zero Salt Defect Verification'
    },
    {
      icon: Sprout,
      name: 'Fresh Horticultural Vegetables',
      subtitle: 'Farm-Fresh Harvest Cold-Chain Air-Bridge',
      items: [
        'Hand-Picked Extra Fine French Green Beans',
        'Snow Peas & Sugar Snap Peas (Mange Tout)',
        'Export Hass Avocados & Fresh Culinary Herbs'
      ],
      standards: 'GLOBALG.A.P. Certified, Dispatched within 24h of Harvest'
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
          <h1 className="page-title font-serif">About FF Importing</h1>
          <p className="page-lead">
            An established international trading house committed to excellence in industrial goods procurement, 
            agricultural commodity export, and end-to-end global supply chain management.
          </p>
        </div>
      </div>

      {/* Main About Component */}
      <AboutSection />

      {/* Brand-New Section: The Actual Products We Import & Export */}
      <section className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Commercial Trade Portfolio</span>
            <h2 className="section-title font-serif">The Core Products We Import & Export</h2>
            <p className="section-desc">
              FF Importing bridges world-class manufacturing origins with international agricultural markets. 
              Here is our verified commercial portfolio managed under strict quality assurance and Incoterms 2020.
            </p>
          </div>

          {/* Import Division Portfolio */}
          <div className="portfolio-division-block">
            <div className="portfolio-division-header import-header">
              <div className="division-badge import-badge">
                <ArrowDownLeft size={16} />
                <span>IMPORT DIVISION PORTFOLIO</span>
              </div>
              <h3 className="division-heading font-serif">Industrial Goods & Culinary Imports</h3>
              <p className="division-subtext">
                Procured directly from ISO/TS-certified manufacturing complexes and premier spice belt origins.
              </p>
            </div>

            <div className="portfolio-cards-grid">
              {importCommodities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="portfolio-card import-card">
                    <div className="p-card-top">
                      <div className="p-card-icon-wrap import-icon">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h4 className="p-card-title">{item.name}</h4>
                        <span className="p-card-sub">{item.subtitle}</span>
                      </div>
                    </div>

                    <ul className="p-card-items">
                      {item.items.map((it, i) => (
                        <li key={i}>
                          <CheckCircle2 size={14} className="p-check" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="p-card-standards">
                      <span className="std-lbl">Standards:</span>
                      <span className="std-val">{item.standards}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Export Division Portfolio */}
          <div className="portfolio-division-block" style={{ marginTop: '56px' }}>
            <div className="portfolio-division-header export-header">
              <div className="division-badge export-badge">
                <ArrowUpRight size={16} />
                <span>EXPORT DIVISION PORTFOLIO</span>
              </div>
              <h3 className="division-heading font-serif">Agricultural Commodities & Natural Exports</h3>
              <p className="division-subtext">
                Direct farm-gate and cooperative sourcing backed by phytosanitary certification and prompt global freight.
              </p>
            </div>

            <div className="portfolio-cards-grid export-grid">
              {exportCommodities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="portfolio-card export-card">
                    <div className="p-card-top">
                      <div className="p-card-icon-wrap export-icon">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h4 className="p-card-title">{item.name}</h4>
                        <span className="p-card-sub">{item.subtitle}</span>
                      </div>
                    </div>

                    <ul className="p-card-items">
                      {item.items.map((it, i) => (
                        <li key={i}>
                          <CheckCircle2 size={14} className="p-check" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="p-card-standards">
                      <span className="std-lbl">Standards:</span>
                      <span className="std-val">{item.standards}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Commercial Desk Call-To-Action Banner */}
          <div className="about-bottom-cta" style={{ marginTop: '56px' }}>
            <div className="bottom-cta-inner">
              <div>
                <h3 className="bottom-cta-title font-serif">Ready to Secure Your Sourcing or Export Allocation?</h3>
                <p className="bottom-cta-desc">
                  Explore full product specifications, container load plans, or request a customized RFQ tailored to your target port.
                </p>
              </div>
              <div className="cta-action-buttons">
                <Link to="/products" className="btn btn-primary">
                  <PackageCheck size={16} />
                  <span>Explore Full Catalog</span>
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  <span>Contact Sourcing Desk</span>
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

        .portfolio-section {
          padding: 88px 0;
          background: #FAFAF7;
        }

        .portfolio-division-block {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg, 12px);
          padding: 40px;
          box-shadow: var(--shadow-sm, 0 2px 8px rgba(0, 0, 0, 0.04));
        }

        .portfolio-division-header {
          margin-bottom: 32px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .division-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 999px;
          margin-bottom: 12px;
        }

        .import-badge {
          background: rgba(14, 116, 144, 0.08);
          color: #0e7490;
          border: 1px solid rgba(14, 116, 144, 0.2);
        }

        .export-badge {
          background: rgba(180, 83, 9, 0.08);
          color: #b45309;
          border: 1px solid rgba(180, 83, 9, 0.2);
        }

        .division-heading {
          font-size: 1.85rem;
          color: var(--accent-navy);
          margin-bottom: 8px;
        }

        .division-subtext {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 720px;
          line-height: 1.6;
        }

        .portfolio-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .export-grid {
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        }

        .portfolio-card {
          background: #FCFCFA;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md, 8px);
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .portfolio-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
          border-color: var(--accent-gold);
        }

        .p-card-top {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 16px;
        }

        .p-card-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .import-icon {
          background: rgba(14, 116, 144, 0.1);
          color: #0e7490;
        }

        .export-icon {
          background: rgba(180, 83, 9, 0.1);
          color: #b45309;
        }

        .p-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--accent-navy);
          margin-bottom: 3px;
        }

        .p-card-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .p-card-items {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-grow: 1;
        }

        .p-card-items li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.86rem;
          color: #334155;
          line-height: 1.45;
        }

        .p-check {
          color: #059669;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .p-card-standards {
          padding-top: 14px;
          border-top: 1px dashed var(--border-subtle);
          font-size: 0.78rem;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .std-lbl {
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-size: 0.72rem;
        }

        .std-val {
          color: var(--accent-navy);
          font-weight: 600;
        }

        .about-bottom-cta {
          background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
          border-radius: var(--radius-lg, 12px);
          padding: 44px 48px;
          color: #FFFFFF;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);
        }

        .bottom-cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }

        .bottom-cta-title {
          font-size: 1.6rem;
          color: #F8FAFC;
          margin-bottom: 8px;
        }

        .bottom-cta-desc {
          font-size: 0.95rem;
          color: #94A3B8;
          max-width: 620px;
          line-height: 1.6;
        }

        .cta-action-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .cta-action-buttons .btn-primary {
          background: var(--accent-gold, #D97706);
          color: #FFFFFF;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.92rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .cta-action-buttons .btn-primary:hover {
          opacity: 0.92;
        }

        .cta-action-buttons .btn-secondary {
          background: transparent;
          color: #F8FAFC;
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.92rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .cta-action-buttons .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 1024px) {
          .portfolio-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 900px) {
          .portfolio-division-block {
            padding: 28px 20px;
          }

          .bottom-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .about-bottom-cta {
            padding: 32px 24px;
          }
        }

        @media (max-width: 640px) {
          .portfolio-cards-grid {
            grid-template-columns: 1fr;
          }

          .cta-action-buttons {
            flex-direction: column;
            width: 100%;
          }

          .cta-action-buttons .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
