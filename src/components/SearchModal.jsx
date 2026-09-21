import React, { useState } from 'react';
import { Search, X, ChevronRight, Package, MapPin, Shield } from 'lucide-react';
import { productsData } from './ProductsSection';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = productsData.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    (p.subtitle && p.subtitle.toLowerCase().includes(query.toLowerCase())) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.division.toLowerCase().includes(query.toLowerCase()) ||
    (p.specs?.origin && p.specs.origin.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="search-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal-header">
          <Search size={22} className="modal-search-icon" />
          <input 
            type="text"
            autoFocus
            placeholder="Type tires, batteries, spices, coffee, sesame, nuts, leather, vegetables..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="modal-search-input"
          />
          <button className="modal-close-btn" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="search-modal-results">
          {query.trim() === '' ? (
            <div className="quick-suggestions">
              <span className="sugg-title">Popular Import & Export Searches:</span>
              <div className="sugg-tags">
                {[
                  'Heavy Truck Tires', 
                  'Solar Tubular Batteries', 
                  'Tellicherry Black Pepper', 
                  'Kenya AA Coffee', 
                  'Humera White Sesame', 
                  'Roasted Cashews', 
                  'Full-Grain Leather', 
                  'French Green Beans'
                ].map((tag, idx) => (
                  <button 
                    key={idx} 
                    className="sugg-btn"
                    onClick={() => setQuery(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="results-list">
              {results.map(prod => (
                <div 
                  key={prod.id} 
                  className="result-row"
                  onClick={() => {
                    onClose();
                    onSelectProduct(prod.name);
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="result-info">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <strong className="result-name">{prod.name}</strong>
                      <span className={`badge ${prod.division === 'import' ? 'badge-import' : 'badge-export'}`} style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                        {prod.division.toUpperCase()}
                      </span>
                    </div>
                    <span className="result-sci font-serif">{prod.subtitle}</span>
                    <span className="result-origin">{prod.specs?.origin}</span>
                  </div>
                  <button className="result-btn">
                    <span>RFQ</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-search-results">
              <p>No products found for "{query}". Try a different commodity or specification.</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .search-modal-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          max-width: 640px;
          width: 100%;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          animation: slideDown 0.25s ease;
        }

        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .search-modal-header {
          display: flex;
          align-items: center;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border-subtle);
          background: var(--bg-milky-warm);
          gap: 12px;
        }

        .modal-search-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }

        .modal-search-input {
          flex: 1;
          border: none;
          background: transparent;
          font-size: 1.05rem;
          font-family: inherit;
          color: var(--text-main);
          outline: none;
        }

        .modal-close-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-muted);
          padding: 4px;
          border-radius: 4px;
        }

        .modal-close-btn:hover {
          background: var(--bg-milky-darker);
          color: var(--text-main);
        }

        .search-modal-results {
          padding: 24px;
          max-height: 400px;
          overflow-y: auto;
        }

        .quick-suggestions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sugg-title {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-light);
          letter-spacing: 0.06em;
        }

        .sugg-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .sugg-btn {
          background: var(--bg-milky);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          padding: 8px 14px;
          font-size: 0.86rem;
          color: var(--text-main);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .sugg-btn:hover {
          background: var(--accent-navy);
          color: #FFFFFF;
          border-color: var(--accent-navy);
        }

        .results-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .result-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s;
        }

        .result-row:hover {
          background: var(--bg-milky-warm);
          border-color: var(--accent-gold);
        }

        .result-info {
          display: flex;
          flex-direction: column;
        }

        .result-name {
          font-size: 1rem;
          color: var(--accent-navy);
        }

        .result-sci {
          font-size: 0.82rem;
          font-style: italic;
          color: var(--accent-gold);
        }

        .result-origin {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .result-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: var(--accent-navy);
          color: #FFFFFF;
          border: none;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 700;
        }

        .no-search-results {
          text-align: center;
          color: var(--text-muted);
          padding: 24px;
        }
      `}</style>
    </div>
  );
}
