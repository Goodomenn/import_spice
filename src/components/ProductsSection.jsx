import React, { useState } from 'react';
import { 
  Search, 
  ChevronRight, 
  Package, 
  Compass, 
  Award,
  CheckCircle2,
  X,
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
  Briefcase,
  Nut,
  FileCheck
} from 'lucide-react';
import { productsData, categoriesMeta } from '../data/productsData';

export { productsData, categoriesMeta };

// 3D Pedestal Artwork Renderer for all 8 commodity categories
function PedestalArt({ category, index, productId }) {
  // Real Photography for Tires
  if (productId === 'tbr-truck-tires') {
    return (
      <div className="pedestal-photo-wrapper">
        <img 
          src="/tbr-truck-tire.png" 
          alt="Heavy-Duty Truck Radials (TBR 315/80R22.5)" 
          className="pedestal-item-photo"
          loading="lazy"
        />
      </div>
    );
  }
  if (productId === 'pcr-passenger-tires') {
    return (
      <div className="pedestal-photo-wrapper">
        <img 
          src="/pcr-passenger-tire.png" 
          alt="Passenger Car Radial Tires (PCR High Performance)" 
          className="pedestal-item-photo"
          loading="lazy"
        />
      </div>
    );
  }
  if (productId === 'otr-agricultural-tires') {
    return (
      <div className="pedestal-photo-wrapper">
        <img 
          src="/otr-agricultural-tire.png" 
          alt="Agricultural & Off-The-Road (OTR / Earthmover)" 
          className="pedestal-item-photo"
          loading="lazy"
        />
      </div>
    );
  }

  switch (category) {
    case 'tires':
      return (
        <div className="pedestal-photo-wrapper">
          <img 
            src="/tbr-truck-tire.png" 
            alt="Tire Product" 
            className="pedestal-item-photo"
            loading="lazy"
          />
        </div>
      );

    case 'batteries':
      return (
        <svg className="pedestal-item-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="136" rx="44" ry="8" fill="rgba(0,0,0,0.55)" filter="blur(3px)" />
          {/* Battery casing */}
          <rect x="36" y="62" width="88" height="66" rx="6" fill="#1E293B" stroke="#334155" strokeWidth="2" />
          {/* Top lid */}
          <rect x="34" y="56" width="92" height="12" rx="3" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
          {/* Carrying handle */}
          <path d="M52 56 C52 40 108 40 108 56" stroke="#CBD5E1" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          {/* Terminal posts (+ and -) */}
          <rect x="44" y="48" width="10" height="9" rx="2" fill="#EF4444" stroke="#B91C1C" strokeWidth="1" />
          <text x="49" y="44" fill="#EF4444" fontSize="9" fontWeight="bold" textAnchor="middle">+</text>
          <rect x="106" y="48" width="10" height="9" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1" />
          <text x="111" y="44" fill="#3B82F6" fontSize="9" fontWeight="bold" textAnchor="middle">-</text>
          {/* Front technical spec label */}
          <rect x="46" y="76" width="68" height="40" rx="4" fill="#0F172A" stroke="#0284C7" strokeWidth="1" />
          <circle cx="58" cy="88" r="4" fill="#10B981" stroke="#059669" strokeWidth="1" />
          <text x="58" y="104" fill="#94A3B8" fontSize="6.5" textAnchor="middle">12V SMF</text>
          <path d="M72 88 L104 88 M72 96 L98 96 M72 104 L90 104" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'spices':
      return (
        <svg className="pedestal-item-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="136" rx="42" ry="9" fill="rgba(0,0,0,0.55)" filter="blur(3px)" />
          {/* Earthenware bowl */}
          <path d="M42 102 Q80 144 118 102 Z" fill="#78350F" stroke="#92400E" strokeWidth="1.5" />
          <ellipse cx="80" cy="102" rx="38" ry="12" fill="#9A3412" />
          {/* Spices mound */}
          <ellipse cx="80" cy="96" rx="34" ry="14" fill="#B45309" />
          {/* Peppercorns */}
          <circle cx="68" cy="92" r="3.5" fill="#1F2937" stroke="#111827" strokeWidth="0.5" />
          <circle cx="76" cy="88" r="3.5" fill="#1F2937" />
          <circle cx="84" cy="93" r="3" fill="#1F2937" />
          <circle cx="94" cy="91" r="3.5" fill="#1F2937" />
          <circle cx="73" cy="98" r="3" fill="#1F2937" />
          <circle cx="88" cy="99" r="3" fill="#1F2937" />
          {/* Cardamom pods */}
          <ellipse cx="64" cy="84" rx="4" ry="7" fill="#16A34A" stroke="#15803D" strokeWidth="0.5" transform="rotate(-25 64 84)" />
          <ellipse cx="96" cy="86" rx="4" ry="7" fill="#22C55E" stroke="#16A34A" strokeWidth="0.5" transform="rotate(30 96 86)" />
          {/* Cinnamon quills */}
          <rect x="74" y="60" width="5.5" height="34" rx="2" fill="#78350F" stroke="#92400E" strokeWidth="0.8" transform="rotate(-18 74 60)" />
          <rect x="84" y="60" width="5.5" height="34" rx="2" fill="#9A3412" stroke="#B45309" strokeWidth="0.8" transform="rotate(15 84 60)" />
          {/* Star anise */}
          <circle cx="80" cy="76" r="5" fill="#B45309" />
          <path d="M80 67 L80 85 M71 76 L89 76 M73 70 L87 82 M73 82 L87 70" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'leather':
      return (
        <svg className="pedestal-item-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="136" rx="44" ry="9" fill="rgba(0,0,0,0.55)" filter="blur(3px)" />
          {/* Rolled Leather hide */}
          <path d="M50 114 C42 110 40 92 52 88 C70 82 108 78 116 84 C122 88 122 106 114 114 C104 122 62 120 50 114 Z" fill="#78350F" stroke="#92400E" strokeWidth="1.5" />
          <ellipse cx="50" cy="100" rx="8" ry="14" fill="#92400E" />
          <ellipse cx="50" cy="100" rx="5" ry="10" fill="#B45309" />
          <ellipse cx="50" cy="100" rx="2" ry="5" fill="#451A03" />
          {/* Draped outer hide */}
          <path d="M52 92 Q84 86 116 88 L112 110 Q80 118 52 108 Z" fill="#9A3412" />
          {/* Stitch line */}
          <path d="M78 88 L80 118" stroke="#F59E0B" strokeWidth="2.5" strokeDasharray="3 2" />
          {/* Polished brass buckle */}
          <rect x="74" y="98" width="12" height="12" rx="2" fill="none" stroke="#FBBF24" strokeWidth="2" />
          <line x1="80" y1="98" x2="80" y2="110" stroke="#FBBF24" strokeWidth="2" />
        </svg>
      );

    case 'coffee':
      return (
        <svg className="pedestal-item-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="136" rx="42" ry="9" fill="rgba(0,0,0,0.55)" filter="blur(3px)" />
          {/* Burlap coffee sack */}
          <path d="M46 95 C42 125 60 134 80 134 C100 134 118 125 114 95 C110 82 105 78 80 78 C55 78 50 82 46 95 Z" fill="#92400E" stroke="#78350F" strokeWidth="1.5" />
          <path d="M48 88 Q80 82 112 88" stroke="#451A03" strokeWidth="3" fill="none" />
          <path d="M52 82 Q80 74 108 82" fill="#B45309" />
          {/* Coffee beans */}
          <ellipse cx="72" cy="74" rx="5" ry="7" fill="#451A03" stroke="#260E04" strokeWidth="0.8" transform="rotate(-20 72 74)" />
          <path d="M70 70 Q73 74 74 78" stroke="#78350F" strokeWidth="1" fill="none" />
          <ellipse cx="86" cy="72" rx="5" ry="7" fill="#3B180A" stroke="#260E04" strokeWidth="0.8" transform="rotate(25 86 72)" />
          <path d="M84 68 Q87 72 88 76" stroke="#78350F" strokeWidth="1" fill="none" />
          <ellipse cx="80" cy="65" rx="5" ry="7" fill="#451A03" stroke="#260E04" strokeWidth="0.8" />
          <path d="M79 61 Q81 65 81 69" stroke="#78350F" strokeWidth="1" fill="none" />
          {/* Ripe red coffee cherries */}
          <circle cx="62" cy="78" r="5" fill="#DC2626" stroke="#991B1B" strokeWidth="0.8" />
          <circle cx="98" cy="76" r="5" fill="#EF4444" stroke="#991B1B" strokeWidth="0.8" />
          <path d="M58 75 C48 68 45 56 46 48 C55 52 60 64 60 74" fill="#15803D" />
          <path d="M102 73 C112 66 115 54 114 46 C105 50 100 62 100 72" fill="#16A34A" />
        </svg>
      );

    case 'sesame':
      return (
        <svg className="pedestal-item-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="136" rx="42" ry="9" fill="rgba(0,0,0,0.55)" filter="blur(3px)" />
          {/* Ceramic bowl */}
          <path d="M46 102 Q80 142 114 102 Z" fill="#334155" stroke="#475569" strokeWidth="1.5" />
          <ellipse cx="80" cy="102" rx="34" ry="10" fill="#475569" />
          {/* Ivory sesame mound */}
          <ellipse cx="80" cy="96" rx="30" ry="12" fill="#FEF08A" />
          <ellipse cx="72" cy="94" rx="1.5" ry="3" fill="#CA8A04" transform="rotate(-30 72 94)" />
          <ellipse cx="80" cy="91" rx="1.5" ry="3" fill="#A16207" transform="rotate(15 80 91)" />
          <ellipse cx="88" cy="95" rx="1.5" ry="3" fill="#CA8A04" transform="rotate(45 88 95)" />
          <ellipse cx="76" cy="99" rx="1.5" ry="3" fill="#EAB308" transform="rotate(-15 76 99)" />
          {/* Golden sesame stalks */}
          <path d="M80 94 L80 44" stroke="#CA8A04" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="75" cy="56" rx="3" ry="6" fill="#FACC15" stroke="#CA8A04" strokeWidth="0.8" transform="rotate(-25 75 56)" />
          <ellipse cx="85" cy="56" rx="3" ry="6" fill="#FACC15" stroke="#CA8A04" strokeWidth="0.8" transform="rotate(25 85 56)" />
          <ellipse cx="75" cy="70" rx="3" ry="6" fill="#EAB308" stroke="#CA8A04" strokeWidth="0.8" transform="rotate(-25 75 70)" />
          <ellipse cx="85" cy="70" rx="3" ry="6" fill="#EAB308" stroke="#CA8A04" strokeWidth="0.8" transform="rotate(25 85 70)" />
        </svg>
      );

    case 'nuts':
      return (
        <svg className="pedestal-item-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="136" rx="42" ry="9" fill="rgba(0,0,0,0.55)" filter="blur(3px)" />
          {/* Carved Teakwood Bowl */}
          <path d="M44 100 Q80 142 116 100 Z" fill="#78350F" stroke="#92400E" strokeWidth="1.5" />
          <ellipse cx="80" cy="100" rx="36" ry="11" fill="#92400E" />
          <ellipse cx="80" cy="94" rx="32" ry="13" fill="#B45309" />
          {/* Roasted Cashew nuts */}
          <path d="M64 88 C60 82 66 74 74 76 C78 78 80 84 76 88 C72 92 66 92 64 88" fill="#FDE68A" stroke="#D97706" strokeWidth="1" />
          <path d="M84 86 C88 80 96 82 98 88 C100 94 94 98 88 96 C84 94 82 90 84 86" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" />
          <path d="M72 74 C76 68 84 70 86 76 C88 82 82 86 76 84 C72 82 70 78 72 74" fill="#FDE68A" stroke="#D97706" strokeWidth="1" />
          {/* Macadamia nut */}
          <circle cx="94" cy="78" r="6" fill="#FEF9C3" stroke="#CA8A04" strokeWidth="1" />
          {/* In-shell raw cashew */}
          <path d="M60 76 C55 70 58 62 65 64 C70 66 70 74 65 76 Z" fill="#713F12" stroke="#451A03" strokeWidth="1" />
        </svg>
      );

    case 'vegetables':
    default:
      return (
        <svg className="pedestal-item-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="134" rx="42" ry="10" fill="rgba(0,0,0,0.5)" filter="blur(4px)" />
          {/* Pot base */}
          <path d="M52 110 L60 134 Q80 138 100 134 L108 110 Z" fill={index % 3 === 0 ? '#4A3B32' : index % 3 === 1 ? '#2E4C38' : '#735747'} />
          <ellipse cx="80" cy="110" rx="28" ry="7" fill={index % 3 === 0 ? '#634F43' : index % 3 === 1 ? '#3F684D' : '#8C6C58'} />
          <ellipse cx="80" cy="110" rx="24" ry="5" fill="#241B15" />

          {/* Plant foliage */}
          {index % 4 === 0 && (
            <g>
              <path d="M80 110 C80 80 65 60 55 45 C75 55 82 75 80 110" fill="#4ADE80" />
              <path d="M80 110 C80 75 95 50 108 38 C95 58 86 80 80 110" fill="#22C55E" />
              <path d="M80 110 C75 70 78 40 80 25 C84 45 83 75 80 110" fill="#86EFAC" />
              <path d="M80 110 C68 85 45 75 35 70 C52 75 70 90 80 110" fill="#16A34A" />
            </g>
          )}
          {index % 4 === 1 && (
            <g>
              <path d="M80 110 C70 90 60 70 50 60 C68 65 76 85 80 110" fill="#86EFAC" />
              <path d="M80 110 C90 90 100 70 110 60 C92 65 84 85 80 110" fill="#4ADE80" />
              <path d="M80 110 C75 80 70 50 68 35 C78 48 80 78 80 110" fill="#22C55E" />
              <circle cx="68" cy="40" r="4" fill="#BBF7D0" />
              <circle cx="92" cy="40" r="4" fill="#BBF7D0" />
            </g>
          )}
          {index % 4 === 2 && (
            <g>
              <path d="M80 110 C72 85 55 65 42 55 C60 62 74 80 80 110" fill="#34D399" />
              <path d="M80 110 C88 85 105 65 118 55 C100 62 86 80 80 110" fill="#10B981" />
              <path d="M80 110 C76 75 74 48 80 32 C84 48 82 75 80 110" fill="#059669" />
              <ellipse cx="62" cy="85" rx="8" ry="12" fill="#064E3B" transform="rotate(-15 62 85)" />
            </g>
          )}
          {index % 4 === 3 && (
            <g>
              <path d="M80 110 L68 45 L74 42 L80 110" fill="#A7F3D0" />
              <path d="M80 110 L92 45 L86 42 L80 110" fill="#6EE7B7" />
              <circle cx="68" cy="42" r="5" fill="#4ADE80" />
              <circle cx="92" cy="42" r="5" fill="#22C55E" />
              <circle cx="80" cy="28" r="6" fill="#86EFAC" />
            </g>
          )}
        </svg>
      );
  }
}

// Returns dynamic styling classes & plinth colors per category
function getCategoryTheme(cat) {
  switch (cat) {
    case 'tires':
      return {
        pillColor: '#38BDF8',
        pillBg: 'rgba(56, 189, 248, 0.14)',
        pillBorder: 'rgba(56, 189, 248, 0.3)',
        glow: 'rgba(56, 189, 248, 0.18)',
        topPlinth: 'radial-gradient(ellipse at center, #1E293B 0%, #0F172A 80%, #020617 100%)',
        sidePlinth: 'linear-gradient(180deg, #1E293B 0%, #020617 100%)',
        rfqBg: '#0284C7',
        rfqBorder: '#38BDF8'
      };
    case 'batteries':
      return {
        pillColor: '#FBBF24',
        pillBg: 'rgba(251, 191, 36, 0.14)',
        pillBorder: 'rgba(251, 191, 36, 0.3)',
        glow: 'rgba(251, 191, 36, 0.18)',
        topPlinth: 'radial-gradient(ellipse at center, #1E293B 0%, #0F172A 80%, #020617 100%)',
        sidePlinth: 'linear-gradient(180deg, #1E293B 0%, #020617 100%)',
        rfqBg: '#D97706',
        rfqBorder: '#FBBF24'
      };
    case 'spices':
      return {
        pillColor: '#F59E0B',
        pillBg: 'rgba(245, 158, 11, 0.14)',
        pillBorder: 'rgba(245, 158, 11, 0.3)',
        glow: 'rgba(245, 158, 11, 0.18)',
        topPlinth: 'radial-gradient(ellipse at center, #451A03 0%, #290F02 80%, #170801 100%)',
        sidePlinth: 'linear-gradient(180deg, #3A1502 0%, #170801 100%)',
        rfqBg: '#B45309',
        rfqBorder: '#F59E0B'
      };
    case 'leather':
      return {
        pillColor: '#FB923C',
        pillBg: 'rgba(251, 146, 60, 0.14)',
        pillBorder: 'rgba(251, 146, 60, 0.3)',
        glow: 'rgba(251, 146, 60, 0.18)',
        topPlinth: 'radial-gradient(ellipse at center, #3C1E0F 0%, #231108 80%, #120904 100%)',
        sidePlinth: 'linear-gradient(180deg, #32190D 0%, #120904 100%)',
        rfqBg: '#C2410C',
        rfqBorder: '#FB923C'
      };
    case 'coffee':
      return {
        pillColor: '#FDE047',
        pillBg: 'rgba(253, 224, 71, 0.14)',
        pillBorder: 'rgba(253, 224, 71, 0.3)',
        glow: 'rgba(202, 138, 4, 0.18)',
        topPlinth: 'radial-gradient(ellipse at center, #3F2314 0%, #26140B 80%, #140A05 100%)',
        sidePlinth: 'linear-gradient(180deg, #321B0F 0%, #140A05 100%)',
        rfqBg: '#854D0E',
        rfqBorder: '#EAB308'
      };
    case 'sesame':
      return {
        pillColor: '#FEF08A',
        pillBg: 'rgba(254, 240, 138, 0.14)',
        pillBorder: 'rgba(254, 240, 138, 0.3)',
        glow: 'rgba(234, 179, 8, 0.18)',
        topPlinth: 'radial-gradient(ellipse at center, #37332A 0%, #22201A 80%, #13120E 100%)',
        sidePlinth: 'linear-gradient(180deg, #2E2B23 0%, #13120E 100%)',
        rfqBg: '#A16207',
        rfqBorder: '#FACC15'
      };
    case 'nuts':
      return {
        pillColor: '#FDBA74',
        pillBg: 'rgba(253, 186, 116, 0.14)',
        pillBorder: 'rgba(253, 186, 116, 0.3)',
        glow: 'rgba(249, 115, 22, 0.18)',
        topPlinth: 'radial-gradient(ellipse at center, #3A2312 0%, #22140A 80%, #130B05 100%)',
        sidePlinth: 'linear-gradient(180deg, #301D0F 0%, #130B05 100%)',
        rfqBg: '#9A3412',
        rfqBorder: '#FB923C'
      };
    case 'vegetables':
    default:
      return {
        pillColor: '#4ADE80',
        pillBg: 'rgba(34, 197, 94, 0.14)',
        pillBorder: 'rgba(74, 222, 128, 0.25)',
        glow: 'rgba(74, 222, 128, 0.18)',
        topPlinth: 'radial-gradient(ellipse at center, #234D34 0%, #153421 80%, #0F2517 100%)',
        sidePlinth: 'linear-gradient(180deg, #153421 0%, #0B1C12 100%)',
        rfqBg: '#15803D',
        rfqBorder: '#22C55E'
      };
  }
}

export default function ProductsSection({ onSelectProductForQuote, initialCategory = 'all' }) {
  const [activeDivision, setActiveDivision] = useState('all'); // 'all' | 'import' | 'export'
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const allCategories = [
    ...categoriesMeta.import,
    ...categoriesMeta.export
  ];

  const visibleCategories = activeDivision === 'all' 
    ? allCategories 
    : categoriesMeta[activeDivision] || [];

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

  return (
    <section id="products" className="products-section universal-pedestal-theme">
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
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className={`cat-division-dot ${cat.division}`}></span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search tires, battery, spices, coffee, sesame, nuts, leather, veg..."
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

        {/* Dedicated Category Header Banner */}
        {activeCategory !== 'all' && (
          <div className="dedicated-banner">
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
        {/* UNIVERSAL 3D FLOATING PEDESTAL SHOWCASE FOR ALL CATEGORIES */}
        {/* ========================================================= */}
        <div className="pedestal-grid">
          {filteredProducts.map((prod, idx) => {
            const theme = getCategoryTheme(prod.category);

            return (
              <div key={prod.id} className="pedestal-card">
                {/* Floating top header */}
                <div className="pedestal-card-header">
                  <span 
                    className="pedestal-pill-badge"
                    style={{
                      color: theme.pillColor,
                      backgroundColor: theme.pillBg,
                      borderColor: theme.pillBorder
                    }}
                  >
                    <span className="pedestal-dot" style={{ backgroundColor: theme.pillColor, boxShadow: `0 0 6px ${theme.pillColor}` }}></span>
                    {prod.division.toUpperCase()} &bull; {prod.category.toUpperCase()}
                  </span>
                  
                  <button 
                    className="pedestal-circle-action"
                    onClick={() => setSelectedProduct(prod)}
                    title="Inspect technical specifications"
                    aria-label="View specifications"
                  >
                    <Info size={16} />
                  </button>
                </div>

                {/* 3D Floating Pedestal Plinth Stage */}
                <div className="pedestal-stage">
                  <div 
                    className="pedestal-ambient-glow"
                    style={{ background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)` }}
                  ></div>

                  {/* Artwork Sitting On Pedestal */}
                  <div className="pedestal-item-container">
                    <PedestalArt category={prod.category} index={idx} productId={prod.id} />
                  </div>

                  {/* 3D Cylindrical Pedestal */}
                  <div className="pedestal-cylinder">
                    <div 
                      className="pedestal-top"
                      style={{ background: theme.topPlinth }}
                    ></div>
                    <div 
                      className="pedestal-side"
                      style={{ background: theme.sidePlinth }}
                    ></div>
                    <div className="pedestal-base-shadow"></div>
                  </div>
                </div>

                {/* Information & Metrics Strip */}
                <div className="pedestal-card-info">
                  <span className="pedestal-subtitle font-serif">
                    {prod.subtitle || prod.plantName || 'Export Specification'}
                  </span>
                  
                  <h4 className="pedestal-product-name">{prod.name}</h4>

                  <div className="pedestal-metrics-strip">
                    <div className="p-metric">
                      <span className="p-lbl">Key Spec</span>
                      <span className="p-val" title={prod.specs?.size || prod.specs?.voltageCapacity || prod.specs?.grade || prod.specs?.purity || 'Certified Standard'}>
                        {prod.specs?.size?.split(',')[0]?.split('(')[0]?.trim() || 
                         prod.specs?.voltageCapacity?.split('(')[0]?.trim() || 
                         prod.specs?.grade?.split('/')[0]?.trim() || 
                         prod.specs?.purity || 
                         'Certified'}
                      </span>
                    </div>

                    <div className="p-metric">
                      <span className="p-lbl">Origin</span>
                      <span className="p-val" title={prod.specs?.origin}>
                        {prod.specs?.origin?.split('/')[0]?.split('(')[0]?.trim() || 'Direct Origin'}
                      </span>
                    </div>

                    <div className="p-metric">
                      <span className="p-lbl">Packaging</span>
                      <span className="p-val" title={prod.packaging}>
                        {prod.packaging?.split('(')[0]?.split(',')[0]?.trim() || 'Containerized'}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pedestal-card-actions">
                    <button 
                      className="pedestal-btn-spec"
                      onClick={() => setSelectedProduct(prod)}
                    >
                      Specs & Analysis
                    </button>
                    <button 
                      className="pedestal-btn-rfq"
                      style={{
                        backgroundColor: theme.rfqBg,
                        borderColor: theme.rfqBorder
                      }}
                      onClick={() => onSelectProductForQuote(prod.name)}
                    >
                      <span>Inquire RFQ</span>
                      <ChevronRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

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
        .universal-pedestal-theme {
          background: #081711;
          color: #E2E8F0;
          padding: 80px 0 100px;
          position: relative;
        }

        .universal-pedestal-theme .section-title {
          color: #FFFFFF;
        }

        .universal-pedestal-theme .section-desc {
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
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: left;
          color: #F1F5F9;
        }

        .tier-btn:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .tier-btn.active {
          background: #112F24;
          border-color: #22C55E;
          box-shadow: 0 0 24px rgba(34, 197, 94, 0.25);
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
          color: #94A3B8;
          margin-top: 2px;
        }

        .tier-btn.active .tier-sub {
          color: #86EFAC;
        }

        .tier-icon {
          flex-shrink: 0;
        }

        .import-icon {
          color: #38BDF8;
        }

        .export-icon {
          color: #4ADE80;
        }

        .tier-count {
          font-size: 0.76rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.1);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          color: #F8FAFC;
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
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-sm);
          color: #CBD5E1;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
        }

        .cat-division-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .cat-division-dot.import {
          background: #38BDF8;
        }

        .cat-division-dot.export {
          background: #4ADE80;
        }

        .category-tab:hover {
          border-color: #4ADE80;
          color: #FFFFFF;
        }

        .category-tab.active {
          background: #14532D;
          color: #FFFFFF;
          border-color: #22C55E;
          box-shadow: 0 0 16px rgba(34, 197, 94, 0.3);
        }

        .search-box {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 360px;
        }

        .search-icon {
          position: absolute;
          left: 14px;
          color: #94A3B8;
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 10px 38px 10px 42px;
          font-size: 0.9rem;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-sm);
          color: #FFFFFF;
          font-family: inherit;
          outline: none;
          transition: all 0.2s;
        }

        .search-input:focus {
          border-color: #22C55E;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 16px rgba(34, 197, 94, 0.2);
        }

        .clear-btn {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
        }

        /* Dedicated Banner */
        .dedicated-banner {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(74, 222, 128, 0.2);
          backdrop-filter: blur(12px);
          border-radius: var(--radius-md);
          padding: 24px 32px;
          margin-bottom: 36px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        .dedicated-banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #FBBF24;
          margin-bottom: 6px;
        }

        .dedicated-banner-title {
          font-size: 1.65rem;
          color: #FFFFFF;
          margin-bottom: 6px;
        }

        .dedicated-banner-desc {
          font-size: 0.92rem;
          color: #94A3B8;
          max-width: 650px;
        }

        .dedicated-banner-stats {
          display: flex;
          gap: 24px;
          border-left: 1px solid rgba(255, 255, 255, 0.12);
          padding-left: 24px;
        }

        .d-stat {
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        .d-stat-val {
          font-size: 1.18rem;
          font-weight: 800;
          color: #4ADE80;
        }

        .d-stat-lbl {
          font-size: 0.7rem;
          color: #94A3B8;
          text-transform: uppercase;
        }

        /* ========================================================= */
        /* UNIVERSAL PEDESTAL GRID (3-COLUMNS MATCHED TO IMAGE) */
        /* ========================================================= */
        .pedestal-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .pedestal-card {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 28px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 16px 36px rgba(0, 15, 10, 0.35);
          position: relative;
          overflow: hidden;
        }

        .pedestal-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .pedestal-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 24px 48px rgba(0, 20, 12, 0.5), 0 0 24px rgba(74, 222, 128, 0.15);
        }

        .pedestal-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .pedestal-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid transparent;
        }

        .pedestal-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }

        .pedestal-circle-action {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #F1F5F9;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .pedestal-circle-action:hover {
          background: rgba(255, 255, 255, 0.2);
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
          margin: 6px 0 22px;
        }

        .pedestal-ambient-glow {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          pointer-events: none;
          top: 25px;
        }

        .pedestal-item-container {
          position: relative;
          z-index: 2;
          transform: translateY(26px);
          transition: transform 0.3s ease;
        }

        .pedestal-card:hover .pedestal-item-container {
          transform: translateY(20px) scale(1.05);
        }

        .pedestal-item-svg {
          width: 150px;
          height: 150px;
          filter: drop-shadow(0 14px 18px rgba(0, 10, 5, 0.7));
        }

        .pedestal-photo-wrapper {
          width: 150px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .pedestal-item-photo {
          max-width: 145px;
          max-height: 145px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 16px 20px rgba(0, 5, 10, 0.85)) drop-shadow(0 4px 10px rgba(56, 189, 248, 0.25));
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: bottom center;
        }

        .pedestal-card:hover .pedestal-item-photo {
          transform: scale(1.08) translateY(-4px);
          filter: drop-shadow(0 20px 24px rgba(0, 5, 10, 0.95)) drop-shadow(0 6px 14px rgba(56, 189, 248, 0.35));
        }

        /* 3D Cylindrical Pedestal / Plinth */
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
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.2);
        }

        .pedestal-side {
          width: 150px;
          height: 14px;
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
          background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.7) 0%, transparent 75%);
          position: absolute;
          bottom: -10px;
          left: -10px;
          filter: blur(4px);
        }

        /* Card Info */
        .pedestal-card-info {
          display: flex;
          flex-direction: column;
        }

        .pedestal-subtitle {
          font-size: 0.78rem;
          color: #A7F3D0;
          font-style: italic;
          margin-bottom: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .pedestal-product-name {
          font-size: 1.25rem;
          color: #FFFFFF;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 14px;
          min-height: 2.6em;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .pedestal-metrics-strip {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 6px;
          padding: 10px 10px;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          margin-bottom: 16px;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .p-metric {
          display: flex;
          flex-direction: column;
          min-width: 0;
          overflow: hidden;
        }

        .p-lbl {
          font-size: 0.64rem;
          text-transform: uppercase;
          color: #94A3B8;
          letter-spacing: 0.04em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }

        .p-val {
          font-size: 0.74rem;
          color: #F8FAFC;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
          width: 100%;
        }

        .pedestal-card-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .pedestal-btn-spec {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #F1F5F9;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 9px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .pedestal-btn-spec:hover {
          background: rgba(255, 255, 255, 0.18);
          color: #FFFFFF;
        }

        .pedestal-btn-rfq {
          color: #FFFFFF;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 9px;
          border-radius: 8px;
          border: 1px solid;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          transition: all 0.2s;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
        }

        .pedestal-btn-rfq:hover {
          transform: translateY(-1px);
          filter: brightness(1.15);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
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
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-md);
          border: 1px dashed rgba(255, 255, 255, 0.15);
          color: #94A3B8;
        }

        @media (max-width: 1024px) {
          .pedestal-grid {
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
            border-top: 1px solid rgba(255, 255, 255, 0.12);
            padding-left: 0;
            padding-top: 16px;
            width: 100%;
            justify-content: space-around;
          }
        }

        @media (max-width: 680px) {
          .pedestal-grid {
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
