import React, { useState } from 'react';
import { 
  Globe2, 
  MapPin, 
  Building, 
  Phone, 
  Mail, 
  Anchor, 
  Warehouse,
  CheckCircle2
} from 'lucide-react';

export default function GlobalPresence() {
  const hubs = [
    {
      id: 'dubai',
      city: 'Dubai',
      country: 'United Arab Emirates',
      role: 'Middle East & GCC Commercial HQ & Re-Export Hub',
      address: 'Jebel Ali Free Zone (JAFZA), South Zone, Dubai, UAE',
      phone: '+251910485418',
      email: 'fishkenya11@gmail.com',
      capacity: '30,000 m² Bonded Logistics & Climate-Controlled Staging',
      tradeFocus: 'Commercial & OTR Tires, Automotive Batteries, Whole Spices, Re-Export Commodities',
      ports: 'Port of Jebel Ali, Port Khalifa (Abu Dhabi), Dubai World Central'
    },
    {
      id: 'mombasa',
      city: 'Mombasa & Nairobi',
      country: 'Kenya',
      role: 'East African Origin Processing & Agricultural Export Desk',
      address: 'Kilindini Harbour Industrial Area, Mombasa, Kenya',
      phone: '+251910485418',
      email: 'fishkenya11@gmail.com',
      capacity: '20,000 m² Sortex Cleaning, Coffee Warehousing & Air-Freight Staging',
      tradeFocus: 'Washed Arabica Coffee, White Sesame Seeds, Cashew & Macadamia Nuts, Fresh Horticultural Produce',
      ports: 'Port of Mombasa (Kilindini), Jomo Kenyatta International Airport (JKIA)'
    },
    {
      id: 'qingdao',
      city: 'Qingdao & Ningbo',
      country: 'China',
      role: 'Asia Industrial Procurement & Quality Engineering Center',
      address: 'Qingdao Free Trade Port Zone, Shandong Province, China',
      phone: '+251910485418',
      email: 'fishkenya11@gmail.com',
      capacity: 'Factory Audit Operations & 40ft High-Cube Container Consolidation',
      tradeFocus: 'Commercial Truck Tires (TBR 315/80R22.5), Passenger PCR, OTR Tires, Solar Batteries',
      ports: 'Port of Qingdao, Port of Ningbo-Zhoushan, Port of Shanghai'
    },
    {
      id: 'mundra',
      city: 'Mundra & Mumbai',
      country: 'India',
      role: 'South Asian Spice Belt & Agricultural Procurement Desk',
      address: 'APSEZ Logistics Park, Mundra, Gujarat 370421, India',
      phone: '+251910485418',
      email: 'fishkenya11@gmail.com',
      capacity: 'Sortex Seed Cleaning Terminal & Vacuum Packaging Facilities',
      tradeFocus: 'Machine-Cleaned Cumin Seeds (Jeera 99.8%), Ground Cinnamon & Whole Quills, Agricultural Spices',
      ports: 'Port of Mundra (APSEZ), Nhava Sheva (JNPT Mumbai)'
    },
    {
      id: 'rotterdam',
      city: 'Rotterdam & Antwerp',
      country: 'Netherlands & Belgium',
      role: 'European Commercial Gateway & Bonded Distribution Desk',
      address: 'Maasvlakte Logistics Hub, 3011 Rotterdam, The Netherlands',
      phone: '+251910485418',
      email: 'fishkenya11@gmail.com',
      capacity: '25,000 m² Bonded Dry & Multi-Temp Warehouse Depot',
      tradeFocus: 'Specialty Green Coffee, Certified Leather Hides, Pure Sesame Seeds, Export Spices',
      ports: 'Port of Rotterdam (Maasvlakte), Port of Antwerp, Port of Hamburg'
    },
    {
      id: 'addis',
      city: 'Addis Ababa',
      country: 'Ethiopia',
      role: 'Specialty Coffee & Raw Commodity Origin Desk',
      address: 'Bole Sub-City Commercial Corridor, Addis Ababa, Ethiopia',
      phone: '+251910485418',
      email: 'fishkenya11@gmail.com',
      capacity: 'Cupping Quality Laboratory, ECX Warehousing & GrainPro Hermetic Staging',
      tradeFocus: 'Specialty Washed & Natural Arabica Coffee (Yirgacheffe, Sidamo, Guji), Humera Sesame, Finished Leather',
      ports: 'Port of Djibouti Rail Corridor, Addis Ababa Bole International Cargo Terminal'
    }
  ];

  const [activeHub, setActiveHub] = useState(hubs[0]);

  return (
    <section id="network" className="network-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Global Commercial Infrastructure</span>
          <h2 className="section-title font-serif">Worldwide Trading Desks, Origin Hubs & Bonded Depots</h2>
          <p className="section-desc">
            Strategic presence across primary manufacturing hubs, agricultural origin basins, and transshipment crossroads 
            ensures seamless factory inspections, rapid customs clearance, and reliable multimodal cargo delivery.
          </p>
        </div>

        {/* Interactive Hub Selector */}
        <div className="network-layout">
          {/* Hub list */}
          <div className="hubs-nav">
            <h4 className="hubs-nav-title">Regional Operating Hubs</h4>
            <div className="hubs-list">
              {hubs.map(hub => (
                <button
                  key={hub.id}
                  className={`hub-item ${activeHub.id === hub.id ? 'active' : ''}`}
                  onClick={() => setActiveHub(hub)}
                >
                  <div className="hub-item-left">
                    <MapPin size={18} className="hub-marker-icon" />
                    <div className="hub-item-names">
                      <strong className="hub-city">{hub.city}</strong>
                      <span className="hub-country">{hub.country}</span>
                    </div>
                  </div>
                  <span className="hub-arrow">&rarr;</span>
                </button>
              ))}
            </div>
          </div>

          {/* Hub Details Card */}
          <div className="hub-detail-card">
            <div className="hub-detail-header">
              <div className="hub-badge-wrap">
                <span className="badge badge-gold">TRADING HUB</span>
                <span className="badge badge-milky">{activeHub.country}</span>
              </div>
              <h3 className="hub-detail-title">{activeHub.city} Gateway</h3>
              <p className="hub-detail-role">{activeHub.role}</p>
            </div>

            <div className="hub-detail-body">
              <div className="hub-info-block">
                <div className="info-row">
                  <Building size={18} className="info-icon" />
                  <div>
                    <span className="info-label">Physical Address:</span>
                    <span className="info-val">{activeHub.address}</span>
                  </div>
                </div>

                <div className="info-row">
                  <Warehouse size={18} className="info-icon" />
                  <div>
                    <span className="info-label">Logistics & Warehousing Facility:</span>
                    <span className="info-val">{activeHub.capacity}</span>
                  </div>
                </div>

                <div className="info-row">
                  <Anchor size={18} className="info-icon" />
                  <div>
                    <span className="info-label">Primary Gateway Ports:</span>
                    <span className="info-val">{activeHub.ports}</span>
                  </div>
                </div>

                <div className="info-row">
                  <Globe2 size={18} className="info-icon" />
                  <div>
                    <span className="info-label">Primary Trade & Commodity Focus:</span>
                    <span className="info-val">{activeHub.tradeFocus}</span>
                  </div>
                </div>
              </div>

              <div className="hub-contact-strip">
                <div className="contact-box">
                  <Phone size={16} className="contact-icon" />
                  <span className="contact-val">{activeHub.phone}</span>
                </div>
                <div className="contact-box">
                  <Mail size={16} className="contact-icon" />
                  <span className="contact-val">{activeHub.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .network-section {
          padding: 96px 0;
          background: #F5EFEB;
          border-top: 1px solid var(--border-medium);
          border-bottom: 1px solid var(--border-medium);
        }

        .network-layout {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 32px;
          align-items: stretch;
        }

        .hubs-nav {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 24px;
          box-shadow: var(--shadow-sm);
        }

        .hubs-nav-title {
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-navy);
          margin-bottom: 18px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .hubs-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .hub-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          background: var(--bg-milky);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .hub-item:hover {
          background: var(--bg-milky-warm);
          border-color: var(--accent-navy);
        }

        .hub-item.active {
          background: var(--accent-navy);
          border-color: var(--accent-navy);
          box-shadow: 0 4px 12px rgba(14, 58, 83, 0.2);
        }

        .hub-item-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hub-marker-icon {
          color: var(--accent-gold);
        }

        .hub-item.active .hub-marker-icon {
          color: #F8D58A;
        }

        .hub-item-names {
          display: flex;
          flex-direction: column;
        }

        .hub-city {
          font-size: 0.95rem;
          color: var(--text-main);
          font-weight: 700;
        }

        .hub-item.active .hub-city {
          color: #FFFFFF;
        }

        .hub-country {
          font-size: 0.76rem;
          color: var(--text-muted);
        }

        .hub-item.active .hub-country {
          color: #E2E8F0;
        }

        .hub-arrow {
          font-size: 1.1rem;
          color: var(--text-light);
        }

        .hub-item.active .hub-arrow {
          color: #FFFFFF;
        }

        .hub-detail-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 40px;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hub-badge-wrap {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }

        .hub-detail-title {
          font-size: 2rem;
          color: var(--accent-navy);
          margin-bottom: 4px;
        }

        .hub-detail-role {
          font-size: 1.05rem;
          color: var(--accent-gold);
          font-weight: 600;
          margin-bottom: 24px;
        }

        .hub-info-block {
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 24px 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 24px;
        }

        .info-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .info-icon {
          color: var(--accent-navy);
          margin-top: 3px;
          flex-shrink: 0;
        }

        .info-label {
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-light);
          font-weight: 700;
          display: block;
        }

        .info-val {
          font-size: 0.95rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .hub-contact-strip {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .contact-box {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: var(--bg-milky);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--accent-navy);
        }

        .contact-icon {
          color: var(--accent-gold);
        }

        @media (max-width: 900px) {
          .network-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
