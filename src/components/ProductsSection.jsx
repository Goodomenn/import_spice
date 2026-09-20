import React, { useState } from 'react';
import { 
  Filter, 
  Search, 
  ChevronRight, 
  Package, 
  ThermometerSnowflake, 
  Compass, 
  ExternalLink,
  CheckCircle2,
  X
} from 'lucide-react';

export const productsData = [
  {
    id: 'yellowfin-tuna',
    name: 'Yellowfin Tuna',
    scientific: 'Thunnus albacares',
    category: 'pelagic',
    origin: 'Indian Ocean (FAO 51 / 57) & Central Pacific (FAO 71)',
    format: 'Whole Round (G&G), Loins, Saku Blocks, Steaks',
    grade: 'Sashimi Grade / AAA / Export Standard',
    freezing: 'Super-Frozen (-60°C) or IQF Blast Frozen (-35°C)',
    packaging: '10kg / 25kg Master Cartons with IVP (Individual Vacuum Pack)',
    moisture: 'Natural, Non-treated (CO-treated available upon destination regulation)',
    description: 'Directly sourced from certified long-line fisheries. Characterized by deep ruby-red color, firm texture, and exceptional freshness suitable for premium sushi, retail packs, and canning industries.'
  },
  {
    id: 'atlantic-salmon',
    name: 'Atlantic Salmon',
    scientific: 'Salmo salar',
    category: 'salmonids',
    origin: 'North Atlantic (Norway & Scottish Fjords) / Chilean Coast',
    format: 'HOG (Head-On Gutted), Trim A-E Fillets, Portions, Smoked Sides',
    grade: 'Superior / Industrial / Pre-Rigor Filleted',
    freezing: 'Fresh Air-Freight on Ice / Blast Frozen IQF',
    packaging: 'Poly-box with gel packs (Fresh) or 10kg/20kg Master Carton (Frozen)',
    moisture: 'Zero water glaze / standard 5%-10% protective glaze available',
    description: 'Sustainably farmed under strict ASC certifications. High in Omega-3 fatty acids, vibrant natural marbling, and consistent culinary performance for culinary and retail brands.'
  },
  {
    id: 'black-tiger-prawns',
    name: 'Black Tiger Prawns',
    scientific: 'Penaeus monodon',
    category: 'shellfish',
    origin: 'Bay of Bengal & Southeast Asian Mangrove Aquaculture (FAO 57/71)',
    format: 'HOSO (Head-On), HLSO (Headless), PDTO, Tail-On, Easy-Peel',
    grade: 'Grade A1 / Semi-IQF / Block Frozen',
    freezing: 'Quick Nitrogen IQF (-40°C)',
    packaging: '1kg retail inner boxes x 10 per master carton / Bulk 20kg',
    moisture: 'Strictly monitored counts: 8/12, 13/15, 16/20, 21/25 pcs/lb',
    description: 'Famous for bold dark tiger striping, firm bite, and natural sweet succulent flavor. Tested lot-by-lot for zero antibiotic residues with full certificate of analysis.'
  },
  {
    id: 'atlantic-cod',
    name: 'Atlantic Cod',
    scientific: 'Gadus morhua',
    category: 'pelagic',
    origin: 'Barents Sea & Norwegian Sea (FAO 27.1 / 27.2)',
    format: 'Skinless/Boneless Fillets, Loins, Tails, Salted / Dried Bacalao',
    grade: 'MSC Certified Whitefish / Grade A',
    freezing: 'Sea-Frozen at Sea (FAS) within 4 hours of catch',
    packaging: 'Interleaved 3x6.81kg (50 lbs) master cartons / IQF polybags',
    moisture: 'Pristine translucent white meat, non-injected',
    description: 'Caught in the ice-cold Arctic waters of the Barents Sea. Celebrated globally for tender flaky texture and delicate pure flavor. Perfect for European foodservice and US institutional markets.'
  },
  {
    id: 'humboldt-squid',
    name: 'Giant Humboldt Squid',
    scientific: 'Dosidicus gigas',
    category: 'shellfish',
    origin: 'Eastern Central & Southeast Pacific (FAO 77 / 87)',
    format: 'Whole Cleaned, Fillets (Tube), Wings, Tentacles, Rings & Strips',
    grade: 'First-Class Industrial Processing Grade',
    freezing: 'Block Frozen at Sea / Onshore IQF',
    packaging: '10kg / 20kg / 25kg Poly-woven bags & Master Cartons',
    moisture: 'Natural or softened / tenderized according to buyer specifications',
    description: 'High-volume export item suited for global re-processors, calamari ring manufacturers, and canning facilities. Consistent year-round supply with high protein yield.'
  },
  {
    id: 'pacific-mackerel',
    name: 'Pacific Mackerel',
    scientific: 'Scomber japonicus',
    category: 'pelagic',
    origin: 'Northwest Pacific & South American Coast (FAO 61 / 87)',
    format: 'Whole Round, Headed & Gutted (H&G), Butterfly Fillets',
    grade: 'Commercial Pelagic Grade / High Fat Content (16%+)',
    freezing: 'Sea-Frozen Block / Blast Frozen IQF',
    packaging: '10kg or 15kg cartons (100% net weight FCL shipment)',
    moisture: 'Count ranges: 100-200g, 200-300g, 300-500g, 500g+',
    description: 'Rich in healthy natural oils and protein. Essential staple export for African, Southeast Asian, and Eastern European wholesale commodity markets.'
  },
  {
    id: 'chilean-seabass',
    name: 'Chilean Seabass (Patagonian Toothfish)',
    scientific: 'Dissostichus eleginoides',
    category: 'pelagic',
    origin: 'Antarctic & Sub-Antarctic Ocean (CCAMLR & FAO 88)',
    format: 'HGT (Headed, Gutted, Tail-off), Portions, Skin-On Fillets',
    grade: 'Premium Fine-Dining Export Grade',
    freezing: 'Blast Frozen FAS (-40°C)',
    packaging: '25kg variable-weight master boxes with catch certificate',
    moisture: 'High-density snow-white meat with luxuriant buttery oil balance',
    description: 'Strictly harvested under CCAMLR legal catch certification. The pinnacle of whitefish gastronomy, renowned for rich flaky meat that retains moisture under any culinary technique.'
  },
  {
    id: 'value-added-fillets',
    name: 'Custom IQF Fillet Portions & Packs',
    scientific: 'Multi-Species Tailored Specifications',
    category: 'processed',
    origin: 'Custom Sourced from Global Zfish Certified Facilities',
    format: 'Exact-Weight Portions (120g, 150g, 200g), Skinless/Skin-on, Glazed',
    grade: 'Private Label / Retail & Foodservice Ready',
    freezing: 'Individual Quick Frozen (IQF) with custom protective glaze',
    packaging: 'Printed Retail Pouches, Skin-Packs, Bulk Foodservice Totes',
    moisture: 'Calibrated to buyer contract specs (2% to 15% protective glaze)',
    description: 'Tailored co-packing and private label manufacturing for supermarkets and restaurant chains. Fully certified traceability from dock to customized shelf packaging.'
  }
];

export default function ProductsSection({ onSelectProductForQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'pelagic', label: 'Pelagic & Whitefish' },
    { id: 'salmonids', label: 'Salmonids' },
    { id: 'shellfish', label: 'Shellfish & Cephalopods' },
    { id: 'processed', label: 'Processed & Value-Added' }
  ];

  const filteredProducts = productsData.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.scientific.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.origin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="products-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Commercial Product Portfolio</span>
          <h2 className="section-title font-serif">Global Seafood & Aquatic Ingredients</h2>
          <p className="section-desc">
            Sourced directly from verified sustainable fisheries, aquaculture estates, and industrial vessels. 
            All products adhere to international phytosanitary standards and Incoterms 2020 delivery terms.
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="catalog-toolbar">
          <div className="category-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search species, scientific name, FAO area..."
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

        {/* Product Cards Grid */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-card-top">
                <div className="product-badge-wrap">
                  <span className="badge badge-gold">{product.grade.split('/')[0]}</span>
                  <span className="badge badge-milky">{product.category.toUpperCase()}</span>
                </div>
                <h3 className="product-title">{product.name}</h3>
                <span className="product-scientific font-serif">{product.scientific}</span>
              </div>

              <div className="product-specs">
                <div className="spec-row">
                  <Compass size={15} className="spec-icon" />
                  <div className="spec-detail">
                    <span className="spec-label">Catch Area / Origin:</span>
                    <span className="spec-value">{product.origin}</span>
                  </div>
                </div>

                <div className="spec-row">
                  <Package size={15} className="spec-icon" />
                  <div className="spec-detail">
                    <span className="spec-label">Formats & Cuts:</span>
                    <span className="spec-value">{product.format}</span>
                  </div>
                </div>

                <div className="spec-row">
                  <ThermometerSnowflake size={15} className="spec-icon" />
                  <div className="spec-detail">
                    <span className="spec-label">Freezing Tech:</span>
                    <span className="spec-value">{product.freezing}</span>
                  </div>
                </div>
              </div>

              <div className="product-card-footer">
                <button 
                  className="btn btn-secondary card-btn-spec"
                  onClick={() => setSelectedProduct(product)}
                >
                  <span>Technical Specs</span>
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

        {filteredProducts.length === 0 && (
          <div className="no-results">
            <p>No products match your search criteria. Please adjust your keywords or category filter.</p>
            <button 
              className="btn btn-secondary" 
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
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
                <span className="modal-category">{selectedProduct.category.toUpperCase()} SPECIFICATION</span>
                <h3 className="modal-title">{selectedProduct.name}</h3>
                <span className="modal-scientific font-serif">{selectedProduct.scientific}</span>
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
                <div className="modal-row">
                  <span className="row-key">Harvest & Sourcing Origin</span>
                  <span className="row-val">{selectedProduct.origin}</span>
                </div>
                <div className="modal-row">
                  <span className="row-key">Available Export Cuts</span>
                  <span className="row-val">{selectedProduct.format}</span>
                </div>
                <div className="modal-row">
                  <span className="row-key">Grading & Quality Standard</span>
                  <span className="row-val">{selectedProduct.grade}</span>
                </div>
                <div className="modal-row">
                  <span className="row-key">Thermal Preservation</span>
                  <span className="row-val">{selectedProduct.freezing}</span>
                </div>
                <div className="modal-row">
                  <span className="row-key">Export Packaging Options</span>
                  <span className="row-val">{selectedProduct.packaging}</span>
                </div>
                <div className="modal-row">
                  <span className="row-key">Glaze & Moisture Calibration</span>
                  <span className="row-val">{selectedProduct.moisture}</span>
                </div>
              </div>

              <div className="modal-certifications">
                <div className="cert-badge">
                  <CheckCircle2 size={16} className="cert-icon" />
                  <span>Veterinary Health Certificate</span>
                </div>
                <div className="cert-badge">
                  <CheckCircle2 size={16} className="cert-icon" />
                  <span>Certificate of Origin</span>
                </div>
                <div className="cert-badge">
                  <CheckCircle2 size={16} className="cert-icon" />
                  <span>Third-Party Lab Tested</span>
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
                <span>Request Quotation for {selectedProduct.name}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .products-section {
          padding: 96px 0;
          position: relative;
        }

        .catalog-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .category-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .category-tab {
          padding: 8px 18px;
          font-size: 0.88rem;
          font-weight: 600;
          background: var(--card-bg);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .category-tab:hover {
          color: var(--accent-navy);
          border-color: var(--accent-navy);
          background: var(--bg-milky-warm);
        }

        .category-tab.active {
          background: var(--accent-navy);
          color: #FFFFFF;
          border-color: var(--accent-navy);
          box-shadow: 0 4px 12px rgba(14, 58, 83, 0.2);
        }

        .search-box {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 320px;
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

        .product-card-top {
          margin-bottom: 20px;
        }

        .product-badge-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .product-title {
          font-size: 1.45rem;
          color: var(--accent-navy);
          margin-bottom: 4px;
        }

        .product-scientific {
          font-size: 0.88rem;
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
          margin-bottom: 20px;
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
          font-size: 0.74rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-light);
          font-weight: 600;
        }

        .spec-value {
          font-size: 0.86rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .product-card-footer {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 10px;
        }

        .card-btn-spec {
          font-size: 0.84rem;
          padding: 10px;
        }

        .card-btn-rfq {
          font-size: 0.84rem;
          padding: 10px;
        }

        .no-results {
          text-align: center;
          padding: 60px 20px;
          background: #FFFFFF;
          border-radius: var(--radius-md);
          border: 1px dashed var(--border-medium);
        }

        .no-results p {
          color: var(--text-muted);
          margin-bottom: 16px;
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
          font-size: 1.6rem;
          color: var(--accent-navy);
          margin-top: 4px;
        }

        .modal-scientific {
          font-size: 0.95rem;
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

        @media (max-width: 768px) {
          .catalog-toolbar {
            flex-direction: column;
            align-items: stretch;
          }

          .search-box {
            min-width: 100%;
          }

          .products-grid {
            grid-template-columns: 1fr;
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
