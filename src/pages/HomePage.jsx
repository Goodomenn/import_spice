import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import { 
  ArrowRight, 
  ShieldCheck, 
  Globe2, 
  Package, 
  Compass, 
  FileText,
  Ship,
  CheckCircle2,
  Award,
  Layers,
  ArrowDownLeft,
  ArrowUpRight,
  CircleDot,
  BatteryCharging,
  Sparkles,
  Briefcase,
  Coffee,
  Wheat,
  Nut,
  Sprout
} from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero onOpenQuote={() => navigate('/contact')} />

      {/* Trade Divisions Overview & Catalog Gateway */}
      <section className="home-section divisions-gateway-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Commercial Trade Divisions</span>
            <h2 className="section-title font-serif">Two Core Trading Divisions, One Global Standard</h2>
            <p className="section-desc">
              Zfish bridges international industrial procurement with certified agricultural commodity exports, 
              providing unbroken origin traceability and tailored Incoterms 2020 delivery solutions.
            </p>
          </div>

          <div className="divisions-overview-grid">
            {/* Import Division Card */}
            <div className="division-overview-card import-card">
              <div className="div-card-header">
                <div className="div-badge-wrap">
                  <span className="div-pill-badge import-pill">
                    <ArrowDownLeft size={14} />
                    IMPORT DIVISION
                  </span>
                  <span className="div-items-count">10 Commodities</span>
                </div>
                <h3 className="div-card-title font-serif">Industrial & Culinary Imports</h3>
                <p className="div-card-desc">
                  Procured directly from Tier-1 manufacturing hubs and historic spice estates for domestic and regional industrial supply.
                </p>
              </div>

              <div className="div-categories-list">
                <div className="div-category-row">
                  <div className="div-cat-icon-wrap import-icon">
                    <CircleDot size={18} />
                  </div>
                  <div className="div-cat-info">
                    <strong>Commercial & OTR Tires</strong>
                    <span>Heavy-duty truck radials (TBR 315/80R22.5), passenger PCR, and earthmover tires.</span>
                  </div>
                </div>

                <div className="div-category-row">
                  <div className="div-cat-icon-wrap import-icon">
                    <BatteryCharging size={18} />
                  </div>
                  <div className="div-cat-info">
                    <strong>Automotive & Solar Batteries</strong>
                    <span>Maintenance-free SMF calcium batteries, deep-cycle solar tubular, and telecom backup cells.</span>
                  </div>
                </div>

                <div className="div-category-row">
                  <div className="div-cat-icon-wrap import-icon">
                    <Sparkles size={18} />
                  </div>
                  <div className="div-cat-info">
                    <strong>Aromatic Culinary Spices</strong>
                    <span>Premium whole cumin seeds (Jeera) and pure ground cinnamon with whole quills.</span>
                  </div>
                </div>
              </div>

              <div className="div-card-footer">
                <Link to="/products" className="btn btn-primary div-btn">
                  <span>Explore Import Catalog</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Export Division Card */}
            <div className="division-overview-card export-card">
              <div className="div-card-header">
                <div className="div-badge-wrap">
                  <span className="div-pill-badge export-pill">
                    <ArrowUpRight size={14} />
                    EXPORT DIVISION
                  </span>
                  <span className="div-items-count">18 Commodities</span>
                </div>
                <h3 className="div-card-title font-serif">Agricultural & Material Exports</h3>
                <p className="div-card-desc">
                  Grown and harvested in fertile East African highland soils and pastoral rangelands, certified for global export.
                </p>
              </div>

              <div className="div-categories-list">
                <div className="div-category-row">
                  <div className="div-cat-icon-wrap export-icon">
                    <Coffee size={18} />
                  </div>
                  <div className="div-cat-info">
                    <strong>Specialty Coffee</strong>
                    <span>Washed Kenya AA Arabica, Ethiopian Yirgacheffe Grade 1, and highland peaberry.</span>
                  </div>
                </div>

                <div className="div-category-row">
                  <div className="div-cat-icon-wrap export-icon">
                    <Wheat size={18} />
                  </div>
                  <div className="div-cat-info">
                    <strong>Sesame Seeds & Nuts</strong>
                    <span>99.9% Humera white sesame, raw cashew nuts in shell, jumbo roasted cashews & macadamia.</span>
                  </div>
                </div>

                <div className="div-category-row">
                  <div className="div-cat-icon-wrap export-icon">
                    <Briefcase size={18} />
                  </div>
                  <div className="div-cat-info">
                    <strong>Leather Products</strong>
                    <span>Finished full-grain bovine sides, machine-flayed wet-blue hides, and crust leather.</span>
                  </div>
                </div>

                <div className="div-category-row">
                  <div className="div-cat-icon-wrap export-icon">
                    <Sprout size={18} />
                  </div>
                  <div className="div-cat-info">
                    <strong>Fresh Horticultural Produce</strong>
                    <span>Hand-picked French beans, crisp snow peas, Hass avocados, baby leeks, and herbs.</span>
                  </div>
                </div>
              </div>

              <div className="div-card-footer">
                <Link to="/products" className="btn btn-primary div-btn">
                  <span>Explore Export Catalog</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="divisions-cta-center">
            <Link to="/products" className="btn btn-gold full-catalog-btn">
              <Layers size={18} />
              <span>Explore Complete Product Catalog & Technical Specs (28 Items)</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Operations & Supply Chain Section */}
      <section className="home-section operations-highlight">
        <div className="container">
          <div className="operations-grid">
            <div className="operations-content">
              <span className="section-subtitle">Origin Sourcing & Cargo Precision</span>
              <h2 className="font-serif operations-title">
                Multi-Modal Freight Engineering & Strict Quality Assurance
              </h2>
              <p className="operations-p">
                At Zfish, we manage end-to-end supply chain logistics across bilateral trade lanes. 
                From containerized bulk lashing of heavy industrial tires and batteries to hermetic moisture-shielded 
                shipments of specialty coffee, sesame seeds, cashew nuts, and 24-hour horticultural cold-chain air freight.
              </p>

              <div className="ops-features">
                <div className="ops-feature-item">
                  <CheckCircle2 size={18} className="ops-check" />
                  <div>
                    <strong>Direct Origin & Factory Procurement:</strong>
                    <span>Direct factory allocations for tires & batteries; farm-gate origin purchasing for agricultural crops.</span>
                  </div>
                </div>
                <div className="ops-feature-item">
                  <CheckCircle2 size={18} className="ops-check" />
                  <div>
                    <strong>24/7 Datalogger & Telemetry Monitoring:</strong>
                    <span>Real-time GPS and temperature/humidity datalogging across all high-cube containers and air consignments.</span>
                  </div>
                </div>
                <div className="ops-feature-item">
                  <CheckCircle2 size={18} className="ops-check" />
                  <div>
                    <strong>Independent Third-Party Verification:</strong>
                    <span>Full SGS / Bureau Veritas inspection, Certificate of Analysis (COA), and Phytosanitary certification on every lot.</span>
                  </div>
                </div>
              </div>

              <div className="ops-buttons">
                <Link to="/sourcing" className="btn btn-primary">
                  <span>Explore Sourcing & Processing</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  <span>About Our Company</span>
                </Link>
              </div>
            </div>

            <div className="operations-card-side">
              <div className="ops-stat-card">
                <div className="ops-badge">COMPLIANCE & STANDARDS</div>
                <h3 className="ops-stat-heading">Certified International Standards</h3>
                <p className="ops-stat-text">
                  All import and export consignments comply with relevant international directives, customs regulations, 
                  and quality certification frameworks.
                </p>

                <div className="cert-mini-grid">
                  <div className="cert-mini-item">ISO 9001:2015</div>
                  <div className="cert-mini-item">GLOBALG.A.P.</div>
                  <div className="cert-mini-item">DOT / ECE Certified</div>
                  <div className="cert-mini-item">SCA Specialty Coffee</div>
                  <div className="cert-mini-item">ASTA Spices Standard</div>
                  <div className="cert-mini-item">CE & RoHS Batteries</div>
                </div>

                <div className="ops-card-footer">
                  <Link to="/about" className="ops-link">Read our trade & quality policy &rarr;</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network Teaser */}
      <section className="home-section network-teaser">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">International Gateways</span>
            <h2 className="section-title font-serif">Connecting 45+ Destination Ports & Hubs</h2>
            <p className="section-desc">
              With commercial trading desks and logistics handling partners across key trade crossroads, 
              we provide reliable FOB, CFR, CIF, and DDP delivery terms worldwide.
            </p>
          </div>

          <div className="network-teaser-grid">
            <div className="net-hub-box">
              <span className="net-hub-city">Mombasa & Nairobi (East Africa)</span>
              <span className="net-hub-role">Origin Export Hub: Coffee, Sesame, Nuts, Vegetables & Leather</span>
            </div>
            <div className="net-hub-box">
              <span className="net-hub-city">Rotterdam (Europe)</span>
              <span className="net-hub-role">European Trade Gateway & Bonded Warehousing Logistics</span>
            </div>
            <div className="net-hub-box">
              <span className="net-hub-city">Dubai (Middle East & GCC)</span>
              <span className="net-hub-role">Regional Re-Export Transshipment & Distribution Center</span>
            </div>
            <div className="net-hub-box">
              <span className="net-hub-city">Singapore / Shanghai (Asia-Pac)</span>
              <span className="net-hub-role">Industrial Tires, Batteries & Machinery Procurement Desk</span>
            </div>
          </div>

          <div className="home-cta-center">
            <Link to="/network" className="btn btn-secondary">
              <span>View Global Network & Gateways</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Commercial Inquiry Banner */}
      <section className="home-cta-banner">
        <div className="container">
          <div className="cta-banner-inner">
            <div className="cta-banner-text">
              <h2 className="cta-banner-title font-serif">Looking for a Reliable Import & Export Partner?</h2>
              <p className="cta-banner-desc">
                Contact our commercial desk today for current CIF/FOB pricing, contract terms, technical spec sheets, or spot tenders.
              </p>
            </div>
            <div className="cta-banner-btn-wrap">
              <Link to="/contact" className="btn btn-gold cta-banner-btn">
                <FileText size={18} />
                <span>Request a Commercial Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .home-section {
          padding: 80px 0;
        }

        .home-cta-center {
          text-align: center;
          margin-top: 24px;
        }

        /* Divisions Gateway Section */
        .divisions-gateway-section {
          background: #FAF7F2;
        }

        .divisions-overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 40px;
        }

        .division-overview-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 36px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
        }

        .division-overview-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .import-card:hover {
          border-color: #0284C7;
        }

        .export-card:hover {
          border-color: #16A34A;
        }

        .div-card-header {
          margin-bottom: 24px;
        }

        .div-badge-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .div-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .import-pill {
          background: #E0F2FE;
          color: #0369A1;
          border: 1px solid rgba(2, 132, 199, 0.25);
        }

        .export-pill {
          background: #DCFCE7;
          color: #15803D;
          border: 1px solid rgba(22, 163, 74, 0.25);
        }

        .div-items-count {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-light);
        }

        .div-card-title {
          font-size: 1.7rem;
          color: var(--accent-navy);
          margin-bottom: 8px;
        }

        .div-card-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.55;
        }

        .div-categories-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 20px 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 24px;
        }

        .div-category-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .div-cat-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .div-cat-icon-wrap.import-icon {
          background: #E0F2FE;
          color: #0284C7;
        }

        .div-cat-icon-wrap.export-icon {
          background: #DCFCE7;
          color: #16A34A;
        }

        .div-cat-info {
          display: flex;
          flex-direction: column;
        }

        .div-cat-info strong {
          font-size: 0.95rem;
          color: var(--text-main);
          margin-bottom: 2px;
        }

        .div-cat-info span {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .div-btn {
          width: 100%;
          padding: 12px;
        }

        .divisions-cta-center {
          text-align: center;
        }

        .full-catalog-btn {
          padding: 16px 36px;
          font-size: 1.05rem;
          box-shadow: 0 6px 20px rgba(182, 134, 56, 0.25);
        }

        /* Operations Section */
        .operations-highlight {
          background: #F5EFEB;
          border-top: 1px solid var(--border-medium);
          border-bottom: 1px solid var(--border-medium);
        }

        .operations-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }

        .operations-title {
          font-size: 2.3rem;
          color: var(--accent-navy);
          margin-bottom: 18px;
        }

        .operations-p {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .ops-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }

        .ops-feature-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .ops-check {
          color: #10B981;
          margin-top: 3px;
          flex-shrink: 0;
        }

        .ops-feature-item strong {
          color: var(--text-main);
          font-size: 0.92rem;
          display: block;
        }

        .ops-feature-item span {
          color: var(--text-muted);
          font-size: 0.86rem;
        }

        .ops-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .ops-stat-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 36px;
          box-shadow: var(--shadow-md);
        }

        .ops-badge {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent-gold);
          margin-bottom: 10px;
        }

        .ops-stat-heading {
          font-size: 1.45rem;
          color: var(--accent-navy);
          margin-bottom: 12px;
        }

        .ops-stat-text {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .cert-mini-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 24px;
        }

        .cert-mini-item {
          background: var(--bg-milky);
          border: 1px solid var(--border-subtle);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--accent-navy);
          text-align: center;
        }

        .ops-card-footer {
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
        }

        .ops-link {
          color: var(--accent-navy);
          font-weight: 700;
          text-decoration: none;
          font-size: 0.88rem;
        }

        .ops-link:hover {
          color: var(--accent-gold);
        }

        /* Network Teaser */
        .network-teaser-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .net-hub-box {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          box-shadow: var(--shadow-sm);
        }

        .net-hub-city {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--accent-navy);
        }

        .net-hub-role {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* CTA Banner */
        .home-cta-banner {
          background: #FFFFFF;
          border-top: 1px solid var(--border-medium);
          border-bottom: 1px solid var(--border-medium);
          padding: 64px 0;
        }

        .cta-banner-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .cta-banner-title {
          font-size: 2rem;
          color: var(--accent-navy);
          margin-bottom: 8px;
        }

        .cta-banner-desc {
          font-size: 1rem;
          color: var(--text-muted);
        }

        .cta-banner-btn {
          padding: 14px 28px;
          font-size: 1rem;
        }

        @media (max-width: 960px) {
          .divisions-overview-grid {
            grid-template-columns: 1fr;
          }

          .operations-grid {
            grid-template-columns: 1fr;
          }

          .network-teaser-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .network-teaser-grid {
            grid-template-columns: 1fr;
          }

          .cta-banner-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .full-catalog-btn {
            font-size: 0.95rem;
            padding: 14px 20px;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
