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
      title: 'Asia-Africa Industrial & Energy Corridor',
      fao: 'INDUSTRIAL FREIGHT LINE',
      commodities: 'Commercial Truck Tires (TBR), Passenger Car Tires (PCR), OTR Tires, Automotive & Solar Batteries',
      gateway: 'Port of Qingdao, Port of Ningbo, Jebel Ali (UAE), Port of Mombasa, Port of Djibouti',
      transit: '18-24 days ocean freight (Direct FCL High-Cube service)',
      desc: 'High-capacity industrial pipeline connecting premier tire and battery manufacturing complexes in China directly with major commercial distribution networks across East Africa and the Middle East.'
    },
    {
      title: 'East African Agricultural Export Trade Lane',
      fao: 'AGRO-COMMODITY EXPORT LINE',
      commodities: 'Specialty Washed Arabica Coffee, White Humera Sesame Seeds, Cashew & Macadamia Nuts, Full-Grain Leather',
      gateway: 'Port of Mombasa (Kilindini), Port of Djibouti, Port of Rotterdam, Port of Hamburg, Jebel Ali',
      transit: '16-22 days to Europe; 10-14 days to Middle East; 28-35 days to North America',
      desc: 'Strategic agricultural export corridor utilizing multi-layer GrainPro hermetic protection. Safeguards origin aroma, moisture stability, and zero pest infestation for coffee and agro-commodities delivered to roasters and food processors worldwide.'
    },
    {
      title: 'South Asian Spice Belt to Global Markets',
      fao: 'SPICES & AGRO CORRIDOR',
      commodities: 'Machine-Cleaned Cumin Seeds (Jeera 99.8%), Pure Ground Cinnamon, Whole Quills, Agricultural Spices',
      gateway: 'Port of Mundra (APSEZ Gujarat), Nhava Sheva (JNPT Mumbai), Jebel Ali Port, Port of Rotterdam',
      transit: '4-7 days to Arabian Gulf / Dubai; 12-16 days to East Africa; 20-25 days to Western Europe',
      desc: 'Direct transshipment corridor connecting historic spice-growing basins in Gujarat and Rajasthan with food manufacturers, repackers, and commercial culinary brands across the Middle East, Africa, and Europe.'
    },
    {
      title: 'Perishable Horticultural Express Air-Freight Corridor',
      fao: 'COLD-CHAIN AIR CORRIDOR',
      commodities: 'Fresh Fine Green Beans, Snow Peas, Sugar Snaps, Fresh Vegetables & Culinary Herbs',
      gateway: 'Jomo Kenyatta International Cargo (NBO), Addis Ababa Cargo Terminal (ADD) → LHR / AMS / DXB',
      transit: '12-24 hours direct cold-chain flight departure to destination airport',
      desc: 'Dedicated cold-chain air freight corridor maintaining unbroken +2°C to +4°C temperatures from packhouse pre-cooling through chartered/scheduled flights to European and Gulf supermarket programs.'
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
          <h1 className="page-title font-serif">Global Distribution Network & Strategic Trade Corridors</h1>
          <p className="page-lead">
            With bonded logistics depots, direct factory procurement desks, and dedicated multimodal freight corridors, 
            FF Importing connects premier industrial manufacturing hubs and agricultural harvest basins with over 40 destination countries worldwide.
          </p>
        </div>
      </div>

      {/* Global Hubs Directory */}
      <GlobalPresence />

      {/* Multimodal Corridors Breakdown */}
      <section className="corridors-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Multimodal Trade Lanes</span>
            <h2 className="section-title font-serif">Core Ocean Freight & Air Shipping Corridors</h2>
            <p className="section-desc">
              Long-term freight agreements with leading global ocean carriers (Maersk, MSC, CMA CGM, Hapag-Lloyd) 
              and scheduled air-cargo operators guarantee container availability, priority berthing, and intact cargo delivery.
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
                    <span className="c-key">Core Commodities:</span>
                    <span className="c-val">{c.commodities}</span>
                  </div>
                  <div className="c-detail-row">
                    <span className="c-key">Gateways & Ports:</span>
                    <span className="c-val">{c.gateway}</span>
                  </div>
                  <div className="c-detail-row">
                    <span className="c-key">Transit Profile:</span>
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
                <p>We manage ocean container transport, export packing, and comprehensive marine cargo insurance up to your destination discharge port. Recommended for most global buyers.</p>
              </div>
              <div className="inco-item">
                <strong>CFR (Cost & Freight)</strong>
                <p>We cover international ocean freight to your destination port while you arrange local destination customs clearance and cargo insurance.</p>
              </div>
              <div className="inco-item">
                <strong>FOB (Free on Board)</strong>
                <p>Delivery loaded securely on board your contracted shipping line at our origin ports (e.g. FOB Qingdao, FOB Mombasa, FOB Mundra, FOB Djibouti).</p>
              </div>
              <div className="inco-item">
                <strong>DDP (Delivered Duty Paid)</strong>
                <p>Complete turnkey door delivery cleared through customs with import duties, taxes, and inland trucking prepaid directly to your warehouse depot.</p>
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
