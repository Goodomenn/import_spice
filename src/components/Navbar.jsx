import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { 
  Anchor, 
  Search, 
  Phone, 
  Mail, 
  Globe, 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck,
  FileText
} from 'lucide-react';

export default function Navbar({ onSearchClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemClass = ({ isActive }) => 
    `nav-link ${isActive ? 'active' : ''}`;

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Utility Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-item">
              <ShieldCheck size={14} className="top-icon" />
              <span>HACCP, ISO 22000 & FDA Compliant Cold-Chain</span>
            </span>
            <span className="top-divider">|</span>
            <span className="top-item">
              <Phone size={14} className="top-icon" />
              <span>+31 (0) 10 742 8800 (Global Trading Desk)</span>
            </span>
          </div>
          <div className="top-bar-right">
            <span className="top-item">
              <Mail size={14} className="top-icon" />
              <span>exports@zfish-global.com</span>
            </span>
            <span className="top-divider">|</span>
            <div className="lang-picker">
              <Globe size={14} />
              <span>EN (Global / CIF & FOB)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container nav-inner">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo">
            <div className="logo-icon-wrap">
              <Anchor className="logo-icon" size={24} />
            </div>
            <div className="logo-text">
              <span className="brand-name">ZFISH</span>
              <span className="brand-tagline">GLOBAL IMPORT & EXPORT</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            <NavLink to="/products" className={navItemClass}>Products</NavLink>
            <NavLink to="/about" className={navItemClass}>About Us</NavLink>
            <NavLink to="/sourcing" className={navItemClass}>Sourcing & Processing</NavLink>
            <NavLink to="/network" className={navItemClass}>Global Network</NavLink>
            <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
          </div>

          {/* Nav Actions */}
          <div className="nav-actions">
            <button 
              className="search-btn" 
              onClick={onSearchClick}
              aria-label="Search catalog"
              title="Search products and specifications"
            >
              <Search size={18} />
            </button>
            <Link 
              to="/contact"
              className="btn btn-primary nav-cta"
            >
              <FileText size={16} />
              <span>Request a Quote</span>
            </Link>
            <button 
              className="mobile-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-links">
            <NavLink 
              to="/products" 
              className="mobile-link" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Products</span>
              <ChevronRight size={18} />
            </NavLink>
            <NavLink 
              to="/about" 
              className="mobile-link" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>About Us</span>
              <ChevronRight size={18} />
            </NavLink>
            <NavLink 
              to="/sourcing" 
              className="mobile-link" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Sourcing & Processing</span>
              <ChevronRight size={18} />
            </NavLink>
            <NavLink 
              to="/network" 
              className="mobile-link" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Global Network</span>
              <ChevronRight size={18} />
            </NavLink>
            <NavLink 
              to="/contact" 
              className="mobile-link" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Contact</span>
              <ChevronRight size={18} />
            </NavLink>
          </div>
          <div className="mobile-cta-wrap">
            <Link 
              to="/contact" 
              className="btn btn-primary" 
              style={{ width: '100%', textDecoration: 'none' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileText size={16} />
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 100;
          transition: all 0.3s ease;
          background: rgba(250, 247, 242, 0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--border-subtle);
        }

        .navbar-wrapper.scrolled {
          box-shadow: 0 4px 20px rgba(70, 50, 30, 0.07);
        }

        .top-bar {
          background-color: #F3ECE2;
          border-bottom: 1px solid var(--border-subtle);
          font-size: 0.78rem;
          color: var(--text-muted);
          padding: 6px 0;
        }

        .top-bar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .top-bar-left, .top-bar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .top-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .top-icon {
          color: var(--accent-gold);
        }

        .top-divider {
          color: var(--border-medium);
        }

        .lang-picker {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          color: var(--accent-navy);
          font-weight: 600;
        }

        .main-nav {
          padding: 16px 0;
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--text-main);
        }

        .logo-icon-wrap {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, var(--accent-navy), #1A5478);
          color: #FFF;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 10px rgba(14, 58, 83, 0.25);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-size: 1.45rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: var(--accent-navy);
          line-height: 1;
        }

        .brand-tagline {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--accent-gold);
          margin-top: 3px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.95rem;
          position: relative;
          padding: 6px 0;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--accent-gold);
        }

        .nav-link.active {
          color: var(--accent-navy);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-gold);
          transition: width 0.25s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .search-btn {
          background: var(--card-bg);
          border: 1px solid var(--border-medium);
          color: var(--text-muted);
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .search-btn:hover {
          border-color: var(--accent-navy);
          color: var(--accent-navy);
          background: var(--bg-milky-warm);
        }

        .nav-cta {
          padding: 10px 20px;
          font-size: 0.88rem;
          text-decoration: none;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }

        .mobile-drawer {
          display: none;
        }

        @media (max-width: 960px) {
          .top-bar {
            display: none;
          }

          .nav-links {
            display: none;
          }

          .nav-cta {
            display: none;
          }

          .mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mobile-drawer {
            display: block;
            background: var(--bg-milky-light);
            border-top: 1px solid var(--border-subtle);
            padding: 20px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          }

          .mobile-links {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .mobile-link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
            background: var(--card-bg);
            border-radius: var(--radius-sm);
            text-decoration: none;
            color: var(--text-main);
            font-weight: 600;
            border: 1px solid var(--border-subtle);
          }

          .mobile-link.active {
            border-color: var(--accent-gold);
            background: var(--bg-milky-warm);
            color: var(--accent-navy);
          }

          .mobile-cta-wrap {
            margin-top: 16px;
          }
        }
      `}</style>
    </header>
  );
}
