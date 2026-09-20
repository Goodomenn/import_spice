import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { productsData } from '../components/ProductsSection';
import { 
  ArrowRight, 
  ShieldCheck, 
  Snowflake, 
  Globe2, 
  Package, 
  Compass, 
  FileText,
  Ship,
  CheckCircle2
} from 'lucide-react';

export default function HomePage() {
  const featuredProducts = productsData.slice(0, 4);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero onOpenQuote={() => {}} />

      {/* Featured Products Showcase */}
      <section className="home-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Commercial Portfolio</span>
            <h2 className="section-title font-serif">Featured Seafood Exports</h2>
            <p className="section-desc">
              Explore our core product lines of wild-caught and sustainably farmed species, 
              processed under strict international phytosanitary standards.
            </p>
          </div>

          <div className="featured-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="featured-card">
                <div className="featured-card-top">
                  <span className="badge badge-gold">{product.grade.split('/')[0]}</span>
                  <h3 className="featured-title">{product.name}</h3>
                  <span className="featured-sci font-serif">{product.scientific}</span>
                </div>

                <p className="featured-desc">{product.description.slice(0, 120)}...</p>

                <div className="featured-specs">
                  <div className="f-spec-item">
                    <Compass size={14} className="f-icon" />
                    <span>{product.origin.split('&')[0]}</span>
                  </div>
                  <div className="f-spec-item">
                    <Snowflake size={14} className="f-icon" />
                    <span>{product.freezing.split('(')[0]}</span>
                  </div>
                </div>

                <div className="featured-footer">
                  <Link to={`/products`} className="btn btn-secondary featured-btn">
                    <span>View Specifications</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="home-cta-center">
            <Link to="/products" className="btn btn-primary">
              <span>View All Products in Catalog</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Operations & Supply Chain Teaser */}
      <section className="home-section operations-highlight">
        <div className="container">
          <div className="operations-grid">
            <div className="operations-content">
              <span className="section-subtitle">Farm-to-Dock Integrity</span>
              <h2 className="font-serif operations-title">
                Unbroken Cold-Chain & Global Logistics Precision
              </h2>
              <p className="operations-p">
                At Zfish, we safeguard quality through every phase of the international supply chain. 
                From rapid dockside blast-freezing down to -40°C to continuous satellite-monitored 
                reefer containers, we deliver ocean-fresh flavor and structural integrity to destination ports worldwide.
              </p>

              <div className="ops-features">
                <div className="ops-feature-item">
                  <CheckCircle2 size={18} className="ops-check" />
                  <div>
                    <strong>Dockside Blast-Freezing:</strong>
                    <span>Same-day landing processing locks in natural moisture and amino acid structure.</span>
                  </div>
                </div>
                <div className="ops-feature-item">
                  <CheckCircle2 size={18} className="ops-check" />
                  <div>
                    <strong>24/7 Datalogger Telemetry:</strong>
                    <span>Real-time GPS and temperature tracking across all 40ft reefer consignments.</span>
                  </div>
                </div>
                <div className="ops-feature-item">
                  <CheckCircle2 size={18} className="ops-check" />
                  <div>
                    <strong>Complete Lot-Level Traceability:</strong>
                    <span>Every carton is coded with vessel ID, harvest date, and catch coordinates.</span>
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
                <div className="ops-badge">QUALITY COMMITMENT</div>
                <h3 className="ops-stat-heading">Certified International Standards</h3>
                <p className="ops-stat-text">
                  All consignments comply with EU health directives, US FDA FSVP requirements, 
                  and are accompanied by full veterinary inspection health certificates.
                </p>

                <div className="cert-mini-grid">
                  <div className="cert-mini-item">HACCP Certified</div>
                  <div className="cert-mini-item">ISO 22000:2018</div>
                  <div className="cert-mini-item">EU Export Approved</div>
                  <div className="cert-mini-item">US FDA Registered</div>
                  <div className="cert-mini-item">MSC Chain of Custody</div>
                  <div className="cert-mini-item">ASC Farm Sourced</div>
                </div>

                <div className="ops-card-footer">
                  <Link to="/about" className="ops-link">Read our quality policy &rarr;</Link>
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
            <span className="section-subtitle">Worldwide Distribution</span>
            <h2 className="section-title font-serif">Connecting 40+ Destination Ports</h2>
            <p className="section-desc">
              With commercial trading offices and bonded deep-freeze hubs in Rotterdam, Singapore, 
              Tokyo, Seattle, Dubai, and Guayaquil, we provide local support across all maritime corridors.
            </p>
          </div>

          <div className="network-teaser-grid">
            <div className="net-hub-box">
              <span className="net-hub-city">Rotterdam, NL</span>
              <span className="net-hub-role">European HQ & 35,000 Pallet Deep-Freeze</span>
            </div>
            <div className="net-hub-box">
              <span className="net-hub-city">Singapore</span>
              <span className="net-hub-role">Asia-Pacific Trading & Transshipment</span>
            </div>
            <div className="net-hub-box">
              <span className="net-hub-city">Tokyo, JP</span>
              <span className="net-hub-role">Northeast Asia & Sashimi Quality Desk</span>
            </div>
            <div className="net-hub-box">
              <span className="net-hub-city">Seattle / LA, USA</span>
              <span className="net-hub-role">Americas Distribution & Bonded Reefer Depot</span>
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
              <h2 className="cta-banner-title font-serif">Looking for a Reliable Seafood Import/Export Partner?</h2>
              <p className="cta-banner-desc">
                Contact our commercial desk today for current CIF/FOB spot rates, sample requests, or annual supply tenders.
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

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .featured-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: var(--shadow-sm);
          transition: all 0.25s ease;
        }

        .featured-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-gold);
        }

        .featured-card-top {
          margin-bottom: 12px;
        }

        .featured-title {
          font-size: 1.25rem;
          color: var(--accent-navy);
          margin-top: 8px;
        }

        .featured-sci {
          font-size: 0.82rem;
          font-style: italic;
          color: var(--accent-gold);
          display: block;
        }

        .featured-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .featured-specs {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 12px 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 16px;
        }

        .f-spec-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .f-icon {
          color: var(--accent-gold);
        }

        .featured-btn {
          width: 100%;
          padding: 8px;
          font-size: 0.82rem;
        }

        .home-cta-center {
          text-align: center;
          margin-top: 24px;
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
          font-size: 1.1rem;
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
        }
      `}</style>
    </div>
  );
}
