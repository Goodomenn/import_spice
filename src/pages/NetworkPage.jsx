import React from 'react';
import { Link } from 'react-router-dom';
import GlobalPresence from '../components/GlobalPresence';
import { 
  Globe2, 
  Anchor, 
  Container, 
  Compass, 
  MapPin, 
  Ship, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function NetworkPage() {
  const corridors = [
    {
      title: 'North Atlantic Marine Corridor',
      fao: 'FAO Area 27 (Sub-areas I, II, IV)',
      species: 'Atlantic Cod, Haddock, Saithe, Norwegian Atlantic Salmon, Greenland Halibut',
      gateway: 'Port of Rotterdam (Maasvlakte) & Port of Antwerp',
      transit: '1-3 days regional feeder; 7-12 days Transatlantic',
      desc: 'Our primary gateway for Arctic and European wild-capture and aquaculture. Connects seamlessly with Western European cold-storage hubs and inland refrigerated rail networks.'
    },
    {
      title: 'South Pacific & Humboldt Current',
      fao: 'FAO Area 87 (Sub-areas 1, 2, 3)',
      species: 'Giant Humboldt Squid (Dosidicus gigas), Pacific Mackerel, Mahi-Mahi, Anchoveta',
      gateway: 'Puerto Marítimo de Guayaquil & Port of Callao (Peru)',
      transit: '18-24 days to Asia; 14-18 days to North America',
      desc: 'One of the worlds most nutrient-dense marine ecosystems. We operate dockside consolidation centers in Ecuador and Peru managing high-volume industrial block freezing and containerized reefer exports.'
    },
    {
      title: 'Indian Ocean & Bay of Bengal',
      fao: 'FAO Areas 51 & 57',
      species: 'Yellowfin Tuna, Bigeye Tuna, Black Tiger Prawns, Vannamei Shrimp',
      gateway: 'Port of Singapore (PSA) & Jebel Ali Port (Dubai)',
      transit: '4-7 days regional; 16-22 days to European discharge',
      desc: 'High-speed transshipment hub providing strategic connectivity between Asian aquaculture sources and Middle Eastern/European consumer markets.'
    },
    {
      title: 'North Pacific & Bering Sea',
      fao: 'FAO Area 67 & 61',
      species: 'Alaskan Pollock, Pacific Cod, Wild Sockeye Salmon, Snow Crab',
      gateway: 'Port of Seattle / Tacoma & Port of Tokyo',
      transit: '10-14 days Transpacific corridor',
      desc: 'Supplying industrial re-processors, surimi manufacturers, and supermarket fillet programs with high-grade, sustainable Alaskan marine resources.'
    }
  ];

  return (
    <div className="network-page">
      {/* Page Header Banner */}
      <div className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/" className="crumb-link">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Global Network</span>
          </div>
          <h1 className="page-title font-serif">Global Distribution & Shipping Corridors</h1>
          <p className="page-lead">
            With bonded cold-storage depots, direct port operations, and refrigerated container logistics, 
            Zfish connects prime harvest waters with over 40 destination countries worldwide.
          </p>
        </div>
      </div>

      {/* Global Hubs Directory */}
      <GlobalPresence />

      {/* Maritime Corridors Breakdown */}
      <section className="corridors-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Maritime Trade Lanes</span>
            <h2 className="section-title font-serif">Core Ocean Freight Shipping Corridors</h2>
            <p className="section-desc">
              Continuous temperature-controlled freight agreements with leading global shipping lines 
              (Maersk, MSC, CMA CGM, Hapag-Lloyd) guarantee container availability and priority port berthing.
            </p>
          </div>

          <div className="corridors-grid">
            {corridors.map((c, index) => (
              <div key={index} className="corridor-card">
                <div className="c-card-top">
                  <div className="c-fao-badge">{c.fao}</div>
                  <h3 className="c-title">{c.title}</h3>
                </div>

                <p className="c-desc">{c.desc}</p>

                <div className="c-details">
                  <div className="c-detail-row">
                    <span className="c-key">Key Species:</span>
                    <span className="c-val">{c.species}</span>
                  </div>
                  <div className="c-detail-row">
                    <span className="c-key">Primary Hub:</span>
                    <span className="c-val">{c.gateway}</span>
                  </div>
                  <div className="c-detail-row">
                    <span className="c-key">Transit Times:</span>
                    <span className="c-val">{c.transit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Incoterms 2020 Capabilities */}
          <div className="incoterms-card">
            <div className="incoterms-header">
              <Container size={24} className="incoterms-icon" />
              <div>
                <h3 className="incoterms-title font-serif">Flexible Commercial Incoterms 2020 Options</h3>
                <p className="incoterms-subtitle">We tailor delivery contracts according to your customs infrastructure and risk preferences.</p>
              </div>
            </div>

            <div className="incoterms-grid">
              <div className="inco-item">
                <strong>CIF (Cost, Insurance & Freight)</strong>
                <p>We manage ocean reefer transport and full marine cargo insurance up to your destination discharge port. Recommended for most global buyers.</p>
              </div>
              <div className="inco-item">
                <strong>CFR (Cost & Freight)</strong>
                <p>We cover freight to destination port while you manage local marine cargo insurance.</p>
              </div>
              <div className="inco-item">
                <strong>FOB (Free on Board)</strong>
                <p>Delivery loaded on board your designated carrier at our loading port (e.g. FOB Rotterdam, FOB Guayaquil, FOB Singapore).</p>
              </div>
              <div className="inco-item">
                <strong>DDP (Delivered Duty Paid)</strong>
                <p>Complete turnkey delivery cleared through customs directly into your regional cold-storage depot (available in EU & US markets).</p>
              </div>
            </div>

            <div className="incoterms-footer">
              <Link to="/contact" className="btn btn-primary">
                <span>Request Port Freight Quote</span>
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

        .corridors-section {
          padding: 80px 0;
        }

        .corridors-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-bottom: 48px;
        }

        .corridor-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 32px;
          box-shadow: var(--shadow-sm);
        }

        .c-card-top {
          margin-bottom: 14px;
        }

        .c-fao-badge {
          display: inline-block;
          background: var(--bg-milky);
          border: 1px solid var(--border-subtle);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--accent-gold);
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .c-title {
          font-size: 1.35rem;
          color: var(--accent-navy);
        }

        .c-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .c-details {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
        }

        .c-detail-row {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .c-key {
          font-size: 0.74rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-light);
          font-weight: 700;
        }

        .c-val {
          font-size: 0.88rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .incoterms-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 40px;
          box-shadow: var(--shadow-sm);
        }

        .incoterms-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .incoterms-icon {
          color: var(--accent-navy);
          flex-shrink: 0;
        }

        .incoterms-title {
          font-size: 1.6rem;
          color: var(--accent-navy);
        }

        .incoterms-subtitle {
          font-size: 0.92rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .incoterms-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .inco-item {
          background: var(--bg-milky);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .inco-item strong {
          font-size: 0.92rem;
          color: var(--accent-navy);
        }

        .inco-item p {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .incoterms-footer {
          display: flex;
          justify-content: flex-end;
        }

        @media (max-width: 960px) {
          .corridors-grid {
            grid-template-columns: 1fr;
          }

          .incoterms-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .incoterms-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
