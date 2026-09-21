import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductsSection from '../components/ProductsSection';
import { Package, ShieldCheck, Thermometer, FileCheck, ArrowRight } from 'lucide-react';

export default function ProductsPage() {
  const navigate = useNavigate();

  const handleSelectProduct = (productName) => {
    navigate(`/contact?product=${encodeURIComponent(productName)}`);
  };

  return (
    <div className="products-page">
      {/* Page Header Banner */}
      <div className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/" className="crumb-link">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Products</span>
          </div>
          <h1 className="page-title font-serif">Global Import & Export Catalog</h1>
          <p className="page-lead">
            High-specification industrial imports (tires, batteries, spices) alongside export-grade agricultural commodities 
            (specialty coffee, sesame seeds, cashew & macadamia nuts, leather, and fresh farm-grown vegetables).
          </p>
        </div>
      </div>

      {/* Main Catalog Component */}
      <ProductsSection onSelectProductForQuote={handleSelectProduct} />

      {/* Packaging & Logistics Standards */}
      <section className="packaging-standards-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Packaging & Logistics Standards</span>
            <h2 className="section-title font-serif">Cargo Engineering for Multi-Modal Freight</h2>
            <p className="section-desc">
              All consignments are packed according to international maritime and aviation standards to guarantee zero transit damage, 
              moisture defense, and preservation of quality attributes.
            </p>
          </div>

          <div className="standards-grid">
            <div className="standard-card">
              <div className="standard-icon-wrap">
                <Package size={24} />
              </div>
              <h3 className="standard-title">Industrial Containerization</h3>
              <p className="standard-desc">
                20ft & 40ft High Cube container loads with heavy-duty dunnage and cargo lashing for tires and heavy batteries. 
                Palletized with heat-treated ISPM-15 wooden pallets and reinforced strapping.
              </p>
            </div>

            <div className="standard-card">
              <div className="standard-icon-wrap">
                <ShieldCheck size={24} />
              </div>
              <h3 className="standard-title">Hermetic & Barrier Packaging</h3>
              <p className="standard-desc">
                Specialty green coffee and nuts sealed in GrainPro moisture-barrier liners and nitrogen-flushed foil packs. 
                Protects coffee cupping scores and prevents lipid oxidation in raw nuts.
              </p>
            </div>

            <div className="standard-card">
              <div className="standard-icon-wrap">
                <Thermometer size={24} />
              </div>
              <h3 className="standard-title">Fresh Produce Cold-Chain Air Bridge</h3>
              <p className="standard-desc">
                Horticultural fresh vegetables and avocados pre-cooled to 2°C–4°C and shipped in ventilated Euro-cartons. 
                Monitored with continuous USB and real-time cellular dataloggers dock-to-dock.
              </p>
            </div>
          </div>

          <div className="catalog-bottom-cta">
            <div className="bottom-cta-inner">
              <div>
                <h3 className="bottom-cta-title font-serif">Need a Custom Commodity, Specification, or Volume?</h3>
                <p className="bottom-cta-desc">
                  Our international trade desk procures tailored volumes, custom private labeling, and specific origin lots upon request.
                </p>
              </div>
              <Link to="/contact" className="btn btn-primary">
                <span>Inquire Custom Procurement</span>
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

        .packaging-standards-section {
          padding: 80px 0;
          background: #F5EFEB;
          border-top: 1px solid var(--border-medium);
        }

        .standards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 48px;
        }

        .standard-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 32px;
          box-shadow: var(--shadow-sm);
        }

        .standard-icon-wrap {
          width: 48px;
          height: 48px;
          background: var(--accent-navy-soft);
          color: var(--accent-navy);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .standard-title {
          font-size: 1.25rem;
          color: var(--accent-navy);
          margin-bottom: 12px;
        }

        .standard-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .catalog-bottom-cta {
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
          .standards-grid {
            grid-template-columns: 1fr;
          }

          .bottom-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
