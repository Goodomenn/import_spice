import React, { useState } from 'react';
import { 
  Search, 
  ChevronRight, 
  Package, 
  ThermometerSnowflake, 
  Compass, 
  Award,
  ShieldCheck,
  CheckCircle2,
  X,
  ArrowRight,
  Sparkles,
  Layers,
  ArrowDownLeft,
  ArrowUpRight,
  Sprout,
  Info,
  CircleDot,
  BatteryCharging,
  Coffee,
  Wheat,
  Briefcase
} from 'lucide-react';
import { productsData, categoriesMeta } from '../data/productsData';

export { productsData, categoriesMeta };

export default function ProductsSection({ onSelectProductForQuote, initialCategory = 'all' }) {
  const [activeDivision, setActiveDivision] = useState('all'); // 'all' | 'import' | 'export'
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter categories based on division
  const allCategories = [
    ...categoriesMeta.import,
    ...categoriesMeta.export
  ];

  const visibleCategories = activeDivision === 'all' 
    ? allCategories 
    : categoriesMeta[activeDivision] || [];

  // Filter products
  const filteredProducts = productsData.filter(product => {
    const matchesDivision = activeDivision === 'all' || product.division === activeDivision;
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.plantName && product.plantName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (product.specs?.origin && product.specs.origin.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesDivision && matchesCategory && matchesSearch;
  });

  const isVegetablesActive = activeCategory === 'vegetables';

  return (
    <section id="products" className={`products-section ${isVegetablesActive ? 'theme-vegetables-mode' : ''}`}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Commercial Trade Portfolio</span>
          <h2 className="section-title font-serif">Global Import & Export Catalog</h2>
          <p className="section-desc">
            Direct origin sourcing across industrial imports and agricultural commodity exports. 
            All consignments adhere to ISO standards, phytosanitary requirements, and Incoterms 2020.
          </p>
        </div>

        {/* Division Selector Tiers (Import vs Export) */}
        <div className="division-tiers-wrap">
          <div className="division-tiers">
            <button 
              className={`tier-btn ${activeDivision === 'all' ? 'active' : ''}`}
              onClick={() => {
                setActiveDivision('all');
                setActiveCategory('all');
              }}
            >
              <Layers size={17} />
              <span>All Trade Divisions</span>
              <span className="tier-count">{productsData.length}</span>
            </button>

            <button 
              className={`tier-btn import-tier ${activeDivision === 'import' ? 'active' : ''}`}
              onClick={() => {
                setActiveDivision('import');
                setActiveCategory('all');
              }}
            >
              <ArrowDownLeft size={17} className="tier-icon import-icon" />
              <div className="tier-label-group">
                <span className="tier-main">Import Division</span>
                <span className="tier-sub">Tires &bull; Batteries &bull; Spices</span>
              </div>
              <span className="tier-count">{productsData.filter(p => p.division === 'import').length}</span>
            </button>

            <button 
              className={`tier-btn export-tier ${activeDivision === 'export' ? 'active' : ''}`}
              onClick={() => {
                setActiveDivision('export');
                setActiveCategory('all');
              }}
            >
              <ArrowUpRight size={17} className="tier-icon export-icon" />
              <div className="tier-label-group">
                <span className="tier-main">Export Division</span>
                <span className="tier-sub">Leather &bull; Coffee &bull; Sesame &bull; Nuts &bull; Veg</span>
              </div>
              <span className="tier-count">{productsData.filter(p => p.division === 'export').length}</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills & Search Bar */}
        <div className="catalog-toolbar">
          <div className="category-tabs">
            <button
              className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Categories
            </button>
            {visibleCategories.map(cat => (
              <button
                key={cat.id}
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''} ${cat.id === 'vegetables' ? 'veg-tab' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className={`cat-division-dot ${cat.division}`}></span>
                <span>{cat.name}</span>
                {cat.id === 'vegetables' && <Sprout size={14} className="veg-mini-icon" />}
              </button>
            ))}
          </div>

          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search tires, battery, spices, coffee, sesame, vegetables..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-btn" onClick={() => setSearchQuery('')}>
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Dedicated Category Header Banner (When a specific category is chosen) */}
        {activeCategory !== 'all' && (
          <div className={`dedicated-banner ${activeCategory === 'vegetables' ? 'dedicated-banner-veg' : ''}`}>
            <div className="dedicated-banner-content">
              <div className="dedicated-banner-badge">
                <Sparkles size={14} />
                <span>
                  {allCategories.find(c => c.id === activeCategory)?.division?.toUpperCase()} DIVISION &bull; {activeCategory.toUpperCase()} PORTFOLIO
                </span>
              </div>
              <h3 className="dedicated-banner-title font-serif">
                {allCategories.find(c => c.id === activeCategory)?.label || activeCategory}
              </h3>
              <p className="dedicated-banner-desc">
                {allCategories.find(c => c.id === activeCategory)?.description}
              </p>
            </div>
            <div className="dedicated-banner-stats">
              <div className="d-stat">
                <span className="d-stat-val">FOB / CIF</span>
                <span className="d-stat-lbl">Trade Terms</span>
              </div>
              <div className="d-stat">
                <span className="d-stat-val">100% Origin</span>
                <span className="d-stat-lbl">Lab Certified</span>
              </div>
              <div className="d-stat">
                <span className="d-stat-val">&lt; 24h</span>
                <span className="d-stat-lbl">RFQ Turnaround</span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CONDITIONAL INTERFACE: VEGETABLES (MATCHED TO REFERENCE IMAGE) */}
        {/* ========================================================= */}
        {activeCategory === 'vegetables' ? (
          <div className="vegetables-emerald-showcase">
            <div className="emerald-ambiance-header">
              <div className="emerald-pill-badge">HORTICULTURAL FRESH EXPORTS</div>
              <h3 className="emerald-showcase-title font-serif">Living Botanical & Fresh Produce Showcase</h3>
              <p className="emerald-showcase-sub">
                Grown in mineral-rich volcanic highlands, pre-cooled within 3 hours, and air-freighted under active cold-chain.
              </p>
            </div>

            <div className="emerald-grid">
              {filteredProducts.map((veg, idx) => (
                <div key={veg.id} className="emerald-card">
                  {/* Floating top badge */}
                  <div className="emerald-card-header">
                    <span className="emerald-mini-badge">
                      <span className="emerald-dot"></span>
                      GLOBALG.A.P.
                    </span>
                    <button 
                      className="emerald-circle-action"
                      onClick={() => setSelectedProduct(veg)}
                      title="Inspect botanical specifications"
                      aria-label="View specifications"
                    >
                      <Info size={16} />
                    </button>
                  </div>

                  {/* 3D Floating Pedestal Platform with Plant/Produce */}
                  <div className="pedestal-stage">
                    <div className="pedestal-ambient-glow"></div>
                    
                    {/* The Plant / Produce Visual on Plinth */}
                    <div className="pedestal-item-container">
                      <div className="pedestal-item-art">
                        {/* Botanical SVG Representation of potted plant / fresh produce on pedestal */}
                        <svg className="pedestal-plant-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Soft shadow under pot */}
                          <ellipse cx="80" cy="134" rx="42" ry="10" fill="rgba(0,0,0,0.45)" filter="blur(4px)" />
                          
                          {/* Soil / pot base */}
                          <path d="M52 110 L60 134 Q80 138 100 134 L108 110 Z" fill={idx % 3 === 0 ? '#4A3B32' : idx % 3 === 1 ? '#2E4C38' : '#735747'} />
                          <ellipse cx="80" cy="110" rx="28" ry="7" fill={idx % 3 === 0 ? '#634F43' : idx % 3 === 1 ? '#3F684D' : '#8C6C58'} />
                          <ellipse cx="80" cy="110" rx="24" ry="5" fill="#241B15" />

                          {/* Botanical foliage / plant leaves */}
                          {idx % 4 === 0 && (
                            <g className="leaf-group-1">
                              {/* French Beans / Upright foliage */}
                              <path d="M80 110 C80 80 65 60 55 45 C75 55 82 75 80 110" fill="url(#leafGrad1)" />
                              <path d="M80 110 C80 75 95 50 108 38 C95 58 86 80 80 110" fill="url(#leafGrad2)" />
                              <path d="M80 110 C75 70 78 40 80 25 C84 45 83 75 80 110" fill="#4ADE80" />
                              <path d="M80 110 C68 85 45 75 35 70 C52 75 70 90 80 110" fill="#22C55E" />
                              <path d="M80 110 C92 85 115 75 125 70 C108 75 90 90 80 110" fill="#16A34A" />
                            </g>
                          )}
                          {idx % 4 === 1 && (
                            <g className="leaf-group-2">
                              {/* Snow peas / lush clustered leaves */}
                              <path d="M80 110 C70 90 60 70 50 60 C68 65 76 85 80 110" fill="#86EFAC" />
                              <path d="M80 110 C90 90 100 70 110 60 C92 65 84 85 80 110" fill="#4ADE80" />
                              <path d="M80 110 C75 80 70 50 68 35 C78 48 80 78 80 110" fill="#22C55E" />
                              <path d="M80 110 C85 80 90 50 92 35 C82 48 80 78 80 110" fill="#16A34A" />
                              <circle cx="68" cy="40" r="4" fill="#BBF7D0" />
                              <circle cx="92" cy="40" r="4" fill="#BBF7D0" />
                              <circle cx="80" cy="28" r="4" fill="#BBF7D0" />
                            </g>
                          )}
                          {idx % 4 === 2 && (
                            <g className="leaf-group-3">
                              {/* Avocado tree foliage / broad leaves */}
                              <path d="M80 110 C72 85 55 65 42 55 C60 62 74 80 80 110" fill="#34D399" />
                              <path d="M80 110 C88 85 105 65 118 55 C100 62 86 80 80 110" fill="#10B981" />
                              <path d="M80 110 C76 75 74 48 80 32 C84 48 82 75 80 110" fill="#059669" />
                              <ellipse cx="62" cy="85" rx="8" ry="12" fill="#064E3B" transform="rotate(-15 62 85)" />
                              <ellipse cx="98" cy="85" rx="8" ry="12" fill="#064E3B" transform="rotate(15 98 85)" />
                            </g>
                          )}
                          {idx % 4 === 3 && (
                            <g className="leaf-group-4">
                              {/* Baby herbs & leeks */}
                              <path d="M80 110 L68 45 L74 42 L80 110" fill="#A7F3D0" />
                              <path d="M80 110 L92 45 L86 42 L80 110" fill="#6EE7B7" />
                              <path d="M80 110 L80 30 L83 30 L80 110" fill="#34D399" />
                              <circle cx="68" cy="42" r="5" fill="#4ADE80" />
                              <circle cx="92" cy="42" r="5" fill="#22C55E" />
                              <circle cx="80" cy="28" r="6" fill="#86EFAC" />
                            </g>
                          )}

                          <defs>
                            <linearGradient id="leafGrad1" x1="55" y1="45" x2="80" y2="110" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#4ADE80" />
                              <stop offset="1" stopColor="#15803D" />
                            </linearGradient>
                            <linearGradient id="leafGrad2" x1="108" y1="38" x2="80" y2="110" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#86EFAC" />
                              <stop offset="1" stopColor="#166534" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    {/* Floating 3D Pedestal Cylinder Plinth */}
                    <div className="pedestal-cylinder">
                      <div className="pedestal-top"></div>
                      <div className="pedestal-side"></div>
                      <div className="pedestal-base-shadow"></div>
                    </div>
                  </div>

                  {/* Botanical Metadata & Specs */}
                  <div className="emerald-card-info">
                    <span className="emerald-botanical-tag font-serif">{veg.plantName}</span>
                    <h4 className="emerald-product-name">{veg.name.split('(')[0]}</h4>
                    
                    <div className="emerald-metrics-strip">
                      <div className="em-metric">
                        <span className="em-lbl">Grade</span>
                        <span className="em-val">{veg.specs.size?.split('(')[0] || 'Grade A'}</span>
                      </div>
                      <div className="em-metric">
                        <span className="em-lbl">Cold Chain</span>
                        <span className="em-val">2°C – 4°C Air</span>
                      </div>
                      <div className="em-metric">
                        <span className="em-lbl">Origin</span>
                        <span className="em-val">Great Rift Valley</span>
                      </div>
                    </div>

                    <div className="emerald-card-actions">
                      <button 
                        className="emerald-btn-spec"
                        onClick={() => setSelectedProduct(veg)}
                      >
                        Specs & Analysis
                      </button>
                      <button 
                        className="emerald-btn-rfq"
                        onClick={() => onSelectProductForQuote(veg.name)}
                      >
                        <span>RFQ</span>
                        <ChevronRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* STANDARD DEDICATED CARDS FOR TIRES, BATTERIES, SPICES, COFFEE, SESAME, NUTS, LEATHER */
          /* ========================================================= */
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className={`product-card division-${product.division}`}>
                <div className="product-card-top">
                  <div className="product-badge-wrap">
                    <span className={`badge ${product.division === 'import' ? 'badge-import' : 'badge-export'}`}>
                      {product.division.toUpperCase()} &bull; {product.category.toUpperCase()}
                    </span>
                    <span className="badge badge-gold">
                      {product.specs.grade || product.specs.loadIndex || product.specs.voltageCapacity || 'EXPORT GRADE'}
                    </span>
                  </div>
                  
                  <h3 className="product-title">{product.name}</h3>
                  <span className="product-subtitle font-serif">{product.subtitle}</span>
                </div>

                <div className="product-specs">
                  <div className="spec-row">
                    <Compass size={15} className="spec-icon" />
                    <div className="spec-detail">
                      <span className="spec-label">Origin / Production:</span>
                      <span className="spec-value">{product.specs.origin}</span>
                    </div>
                  </div>

                  <div className="spec-row">
                    <Package size={15} className="spec-icon" />
                    <div className="spec-detail">
                      <span className="spec-label">Packaging & Containerization:</span>
                      <span className="spec-value">{product.packaging}</span>
                    </div>
                  </div>

                  <div className="spec-row">
                    <Award size={15} className="spec-icon" />
                    <div className="spec-detail">
                      <span className="spec-label">Key Specifications & Tech:</span>
                      <span className="spec-value">
                        {product.specs.size || 
                         product.specs.technology || 
                         product.specs.processing || 
                         product.specs.purity || 
                         product.specs.substance || 
                         product.specs.kor || 
                         'Certified International Standard'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="product-card-footer">
                  <button 
                    className="btn btn-secondary card-btn-spec"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <span>Full Specifications</span>
                  </button>
                  <button 
                    className="btn btn-primary card-btn-rfq"
                    onClick={() => onSelectProductForQuote(product.name)}
                  >
                    <span>Inquire RFQ</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="no-results">
            <p>No commodities found matching your criteria. Try adjusting your division or search terms.</p>
            <button 
              className="btn btn-secondary" 
              onClick={() => { setActiveDivision('all'); setActiveCategory('all'); setSearchQuery(''); }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Technical Specifications Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="modal-category">
                  {selectedProduct.division?.toUpperCase()} DIVISION &bull; {selectedProduct.category?.toUpperCase()} SPECIFICATION
                </span>
                <h3 className="modal-title">{selectedProduct.name}</h3>
                <span className="modal-scientific font-serif">{selectedProduct.subtitle}</span>
              </div>
              <button 
                className="modal-close" 
                onClick={() => setSelectedProduct(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedProduct.description}</p>

              <div className="modal-specs-table">
                {Object.entries(selectedProduct.specs || {}).map(([key, value]) => (
                  <div key={key} className="modal-row">
                    <span className="row-key">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </span>
                    <span className="row-val">{value}</span>
                  </div>
                ))}
                <div className="modal-row">
                  <span className="row-key">Export Packaging</span>
                  <span className="row-val">{selectedProduct.packaging}</span>
                </div>
              </div>

              <div className="modal-certifications">
                <div className="cert-badge">
                  <CheckCircle2 size={16} className="cert-icon" />
                  <span>Certificate of Origin (Form A / EUR.1)</span>
                </div>
                <div className="cert-badge">
                  <CheckCircle2 size={16} className="cert-icon" />
                  <span>Third-Party Lab / SGS Inspection</span>
                </div>
                <div className="cert-badge">
                  <CheckCircle2 size={16} className="cert-icon" />
                  <span>Phytosanitary & Quality Verified</span>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                className="btn btn-secondary" 
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  const prod = selectedProduct.name;
                  setSelectedProduct(null);
                  onSelectProductForQuote(prod);
                }}
              >
                <span>Request Quotation for {selectedProduct.name.split('(')[0]}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .products-section {
          padding: 88px 0;
          position: relative;
          transition: background-color 0.4s ease;
        }

        .products-section.theme-vegetables-mode {
          background: #081D13;
          color: #E2E8F0;
        }

        .theme-vegetables-mode .section-title {
          color: #FFFFFF;
        }

        .theme-vegetables-mode .section-desc {
          color: #94A3B8;
        }

        /* Division Selector Tiers */
        .division-tiers-wrap {
          margin-bottom: 32px;
        }

        .division-tiers {
          display: grid;
          grid-template-columns: 1fr 1.3fr 1.6fr;
          gap: 16px;
        }

        .tier-btn {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: left;
          box-shadow: var(--shadow-sm);
        }

        .theme-vegetables-mode .tier-btn {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.12);
          color: #F1F5F9;
        }

        .tier-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-navy);
        }

        .tier-btn.active {
          background: var(--accent-navy);
          border-color: var(--accent-navy);
          color: #FFFFFF;
          box-shadow: 0 6px 20px rgba(14, 58, 83, 0.25);
        }

        .tier-btn.active .tier-sub {
          color: rgba(255, 255, 255, 0.8);
        }

        .tier-btn.active .tier-count {
          background: rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
        }

        .tier-label-group {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .tier-main {
          font-size: 1rem;
          font-weight: 700;
        }

        .tier-sub {
          font-size: 0.74rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .tier-icon {
          flex-shrink: 0;
        }

        .import-icon {
          color: #0284C7;
        }

        .export-icon {
          color: #16A34A;
        }

        .tier-count {
          font-size: 0.76rem;
          font-weight: 700;
          background: var(--bg-milky-darker);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          color: var(--text-main);
        }

        /* Toolbar */
        .catalog-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .category-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .category-tab {
          padding: 8px 16px;
          font-size: 0.86rem;
          font-weight: 600;
          background: var(--card-bg);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
        }

        .theme-vegetables-mode .category-tab {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.12);
          color: #CBD5E1;
        }

        .cat-division-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .cat-division-dot.import {
          background: #0284C7;
        }

        .cat-division-dot.export {
          background: #16A34A;
        }

        .category-tab:hover {
          border-color: var(--accent-navy);
          color: var(--accent-navy);
        }

        .category-tab.active {
          background: var(--accent-navy);
          color: #FFFFFF;
          border-color: var(--accent-navy);
        }

        .category-tab.veg-tab.active {
          background: #166534;
          border-color: #22C55E;
          box-shadow: 0 0 16px rgba(34, 197, 94, 0.35);
        }

        .search-box {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 340px;
        }

        .search-icon {
          position: absolute;
          left: 14px;
          color: var(--text-light);
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 10px 38px 10px 42px;
          font-size: 0.9rem;
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          color: var(--text-main);
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s;
        }

        .theme-vegetables-mode .search-input {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
        }

        .search-input:focus {
          border-color: var(--accent-navy);
          box-shadow: 0 0 0 3px rgba(14, 58, 83, 0.1);
        }

        .clear-btn {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: var(--text-light);
          cursor: pointer;
        }

        /* Dedicated Banner */
        .dedicated-banner {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 24px 32px;
          margin-bottom: 36px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          box-shadow: var(--shadow-sm);
        }

        .dedicated-banner-veg {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(74, 222, 128, 0.2);
          backdrop-filter: blur(12px);
        }

        .dedicated-banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--accent-gold);
          margin-bottom: 6px;
        }

        .dedicated-banner-title {
          font-size: 1.6rem;
          color: var(--accent-navy);
          margin-bottom: 6px;
        }

        .dedicated-banner-veg .dedicated-banner-title {
          color: #FFFFFF;
        }

        .dedicated-banner-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          max-width: 650px;
        }

        .dedicated-banner-veg .dedicated-banner-desc {
          color: #94A3B8;
        }

        .dedicated-banner-stats {
          display: flex;
          gap: 20px;
          border-left: 1px solid var(--border-subtle);
          padding-left: 24px;
        }

        .d-stat {
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        .d-stat-val {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--accent-navy);
        }

        .dedicated-banner-veg .d-stat-val {
          color: #4ADE80;
        }

        .d-stat-lbl {
          font-size: 0.72rem;
          color: var(--text-light);
          text-transform: uppercase;
        }

        /* Products Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 28px;
        }

        .product-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease;
          position: relative;
          box-shadow: var(--shadow-sm);
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-gold);
        }

        .product-badge-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .badge-import {
          background: #E0F2FE;
          color: #0369A1;
          border: 1px solid rgba(2, 132, 199, 0.2);
        }

        .badge-export {
          background: #DCFCE7;
          color: #15803D;
          border: 1px solid rgba(22, 163, 74, 0.2);
        }

        .product-title {
          font-size: 1.35rem;
          color: var(--accent-navy);
          margin-bottom: 4px;
        }

        .product-subtitle {
          font-size: 0.86rem;
          font-style: italic;
          color: var(--accent-gold);
          display: block;
        }

        .product-specs {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 16px 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          margin: 18px 0;
        }

        .spec-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .spec-icon {
          color: var(--accent-navy);
          margin-top: 3px;
          flex-shrink: 0;
        }

        .spec-detail {
          display: flex;
          flex-direction: column;
        }

        .spec-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-light);
          font-weight: 600;
        }

        .spec-value {
          font-size: 0.85rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .product-card-footer {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 10px;
        }

        /* ========================================================= */
        /* VEGETABLES EMERALD SHOWCASE STYLES (MATCHED TO REFERENCE IMAGE) */
        /* ========================================================= */
        .vegetables-emerald-showcase {
          margin-top: 12px;
        }

        .emerald-ambiance-header {
          text-align: center;
          margin-bottom: 44px;
        }

        .emerald-pill-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #4ADE80;
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(74, 222, 128, 0.25);
          padding: 6px 16px;
          border-radius: var(--radius-full);
          margin-bottom: 12px;
        }

        .emerald-showcase-title {
          font-size: 2.2rem;
          color: #FFFFFF;
          margin-bottom: 8px;
        }

        .emerald-showcase-sub {
          color: #94A3B8;
          font-size: 0.98rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .emerald-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .emerald-card {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 28px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 16px 36px rgba(0, 20, 10, 0.3);
          position: relative;
          overflow: hidden;
        }

        .emerald-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(74, 222, 128, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .emerald-card:hover {
          transform: translateY(-8px);
          border-color: rgba(74, 222, 128, 0.4);
          box-shadow: 0 24px 48px rgba(0, 30, 15, 0.5), 0 0 20px rgba(34, 197, 94, 0.15);
        }

        .emerald-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .emerald-mini-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          font-weight: 700;
          color: #A7F3D0;
          background: rgba(16, 185, 129, 0.15);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(52, 211, 153, 0.2);
        }

        .emerald-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #34D399;
          box-shadow: 0 0 6px #34D399;
        }

        .emerald-circle-action {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #A7F3D0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .emerald-circle-action:hover {
          background: rgba(52, 211, 153, 0.25);
          color: #FFFFFF;
          transform: scale(1.1);
        }

        /* 3D Pedestal Stage */
        .pedestal-stage {
          position: relative;
          height: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 10px 0 24px;
        }

        .pedestal-ambient-glow {
          position: absolute;
          width: 140px;
          height: 140px;
          background: radial-gradient(circle, rgba(74, 222, 128, 0.18) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          top: 25px;
        }

        .pedestal-item-container {
          position: relative;
          z-index: 2;
          transform: translateY(28px);
          transition: transform 0.3s ease;
        }

        .emerald-card:hover .pedestal-item-container {
          transform: translateY(22px) scale(1.05);
        }

        .pedestal-plant-svg {
          width: 150px;
          height: 150px;
          filter: drop-shadow(0 14px 18px rgba(0, 15, 8, 0.65));
        }

        /* Cylindrical Pedestal / Plinth */
        .pedestal-cylinder {
          position: relative;
          width: 150px;
          height: 24px;
          z-index: 1;
          margin-top: -16px;
        }

        .pedestal-top {
          width: 150px;
          height: 26px;
          border-radius: 50%;
          background: radial-gradient(ellipse at center, #234D34 0%, #153421 80%, #0F2517 100%);
          border: 1px solid rgba(134, 239, 172, 0.2);
          box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.2);
        }

        .pedestal-side {
          width: 150px;
          height: 14px;
          background: linear-gradient(180deg, #153421 0%, #0B1C12 100%);
          margin-top: -13px;
          border-radius: 0 0 75px 75px / 0 0 13px 13px;
          border-left: 1px solid rgba(255, 255, 255, 0.05);
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .pedestal-base-shadow {
          width: 170px;
          height: 20px;
          border-radius: 50%;
          background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.65) 0%, transparent 75%);
          position: absolute;
          bottom: -10px;
          left: -10px;
          filter: blur(4px);
        }

        /* Card Information */
        .emerald-card-info {
          display: flex;
          flex-direction: column;
        }

        .emerald-botanical-tag {
          font-size: 0.78rem;
          color: #86EFAC;
          font-style: italic;
          margin-bottom: 4px;
        }

        .emerald-product-name {
          font-size: 1.25rem;
          color: #FFFFFF;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 14px;
        }

        .emerald-metrics-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          padding: 12px 10px;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          margin-bottom: 16px;
        }

        .em-metric {
          display: flex;
          flex-direction: column;
        }

        .em-lbl {
          font-size: 0.65rem;
          text-transform: uppercase;
          color: #94A3B8;
          letter-spacing: 0.04em;
        }

        .em-val {
          font-size: 0.76rem;
          color: #F8FAFC;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .emerald-card-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .emerald-btn-spec {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #F1F5F9;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 9px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .emerald-btn-spec:hover {
          background: rgba(255, 255, 255, 0.16);
          color: #FFFFFF;
        }

        .emerald-btn-rfq {
          background: #15803D;
          border: 1px solid #22C55E;
          color: #FFFFFF;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 9px;
          border-radius: 8px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          transition: all 0.2s;
          box-shadow: 0 4px 14px rgba(21, 128, 61, 0.35);
        }

        .emerald-btn-rfq:hover {
          background: #16A34A;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(34, 197, 94, 0.45);
        }

        /* Modal styling */
        .modal-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          max-width: 680px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: var(--shadow-lg);
          position: relative;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 24px 28px;
          border-bottom: 1px solid var(--border-subtle);
          background: var(--bg-milky-warm);
        }

        .modal-category {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent-gold);
        }

        .modal-title {
          font-size: 1.55rem;
          color: var(--accent-navy);
          margin-top: 4px;
        }

        .modal-scientific {
          font-size: 0.92rem;
          font-style: italic;
          color: var(--text-muted);
        }

        .modal-close {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-muted);
          padding: 4px;
          border-radius: 4px;
        }

        .modal-close:hover {
          color: var(--text-main);
          background: var(--bg-milky-darker);
        }

        .modal-body {
          padding: 28px;
        }

        .modal-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .modal-specs-table {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          overflow: hidden;
          margin-bottom: 24px;
        }

        .modal-row {
          display: grid;
          grid-template-columns: 200px 1fr;
          padding: 12px 16px;
          font-size: 0.88rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .modal-row:nth-child(odd) {
          background: var(--bg-milky-light);
        }

        .modal-row:last-child {
          border-bottom: none;
        }

        .row-key {
          font-weight: 600;
          color: var(--text-main);
        }

        .row-val {
          color: var(--text-muted);
        }

        .modal-certifications {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .cert-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-navy);
          background: var(--accent-navy-soft);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
        }

        .cert-icon {
          color: #10B981;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 12px;
          padding: 20px 28px;
          border-top: 1px solid var(--border-subtle);
          background: var(--bg-milky);
        }

        .no-results {
          text-align: center;
          padding: 60px 20px;
          background: #FFFFFF;
          border-radius: var(--radius-md);
          border: 1px dashed var(--border-medium);
        }

        .theme-vegetables-mode .no-results {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
          color: #94A3B8;
        }

        @media (max-width: 1024px) {
          .emerald-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .division-tiers {
            grid-template-columns: 1fr;
          }

          .dedicated-banner {
            flex-direction: column;
            align-items: flex-start;
          }

          .dedicated-banner-stats {
            border-left: none;
            border-top: 1px solid var(--border-subtle);
            padding-left: 0;
            padding-top: 16px;
            width: 100%;
            justify-content: space-around;
          }
        }

        @media (max-width: 640px) {
          .emerald-grid {
            grid-template-columns: 1fr;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .search-box {
            min-width: 100%;
          }

          .modal-row {
            grid-template-columns: 1fr;
            gap: 4px;
          }
        }
      `}</style>
    </section>
  );
}
