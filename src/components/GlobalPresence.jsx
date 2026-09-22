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
      id: 'rotterdam',
      city: 'Rotterdam',
      country: 'Netherlands',
      role: 'European Commercial HQ & Main Port Gateway',
      address: 'Havenkwartier 420, 3011 Rotterdam, The Netherlands',
      phone: '+31 (0) 10 742 8800',
      email: 'rotterdam@ffimporting.com',
      capacity: '35,000 Pallet Deep-Freeze Hub (-28°C)',
      keySpecies: 'Atlantic Cod, Salmon, Barents Sea Whitefish, Pelagic Mackerel',
      ports: 'Port of Rotterdam (Maasvlakte), Port of Antwerp, Hamburg'
    },
    {
      id: 'singapore',
      city: 'Singapore',
      country: 'Singapore',
      role: 'Asia-Pacific Regional Trading & Transshipment',
      address: '71 Jurong Port Road, Singapore 619123',
      phone: '+65 6890 2200',
      email: 'singapore@ffimporting.com',
      capacity: '20,000 Pallet Multi-Temp Cold Facility',
      keySpecies: 'Yellowfin & Bigeye Tuna, Black Tiger Prawns, Vannamei, Tilapia',
      ports: 'Port of Singapore (PSA), Port Klang, Tanjung Pelepas'
    },
    {
      id: 'tokyo',
      city: 'Tokyo',
      country: 'Japan',
      role: 'Northeast Asia Quality & Sashimi Desk',
      address: 'Toyosu Logistics Center, Koto-ku, Tokyo 135-0061',
      phone: '+81 (0) 3 5548 9100',
      email: 'tokyo@ffimporting.com',
      capacity: 'Super-Frozen Facility (-60°C Cryogenic)',
      keySpecies: 'Sashimi Tuna (Bluefin & Yellowfin), Chilean Seabass, Uni, Scallops',
      ports: 'Port of Tokyo, Yokohama, Busan'
    },
    {
      id: 'seattle',
      city: 'Seattle / Los Angeles',
      country: 'United States',
      role: 'North American Import & Distribution Desk',
      address: 'Pier 91 Terminal Way, Seattle, WA 98119',
      phone: '+1 (206) 883 4500',
      email: 'usa@ffimporting.com',
      capacity: '25,000 Pallet Bonded Reefer Logistics Hub',
      keySpecies: 'Alaskan Pollock, Pacific Cod, Wild Pacific Salmon, Humboldt Squid',
      ports: 'Port of Seattle, Port of Tacoma, Los Angeles / Long Beach'
    },
    {
      id: 'dubai',
      city: 'Dubai',
      country: 'United Arab Emirates',
      role: 'Middle East & GCC Transshipment Hub',
      address: 'Jebel Ali Free Zone (JAFZA), Dubai, UAE',
      phone: '+971 4 883 9000',
      email: 'dubai@ffimporting.com',
      capacity: '18,000 Pallet Regional Distribution Center',
      keySpecies: 'Seabream, Seabass, Indian Ocean Pelagic, Shrimps',
      ports: 'Port of Jebel Ali, Port Khalifa, Jeddah Islamic Port'
    },
    {
      id: 'guayaquil',
      city: 'Guayaquil',
      country: 'Ecuador',
      role: 'South American Sourcing & Processing Desk',
      address: 'Av. Carlos Julio Arosemena, Guayaquil, Ecuador',
      phone: '+593 4 220 5400',
      email: 'latam@ffimporting.com',
      capacity: '15,000 Pallet Dockside Cold Storage',
      keySpecies: 'Vannamei Shrimp, Giant Squid (Pota), Mahi-Mahi, Yellowfin',
      ports: 'Puerto Marítimo de Guayaquil, Port of Callao, Valparaíso'
    }
  ];

  const [activeHub, setActiveHub] = useState(hubs[0]);

  return (
    <section id="network" className="network-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Global Commercial Infrastructure</span>
          <h2 className="section-title font-serif">Worldwide Offices & Cold-Storage Depots</h2>
          <p className="section-desc">
            Strategic presence in prime global shipping corridors allows us to execute 
            seamless customs handling, local inspections, and uninterrupted cold-chain logistics.
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
                    <span className="info-label">Cold Storage Facility:</span>
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
                    <span className="info-label">Key Sourced / Exported Species:</span>
                    <span className="info-val">{activeHub.keySpecies}</span>
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
