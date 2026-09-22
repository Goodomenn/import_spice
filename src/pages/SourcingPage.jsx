import React from 'react';
import { Link } from 'react-router-dom';
import SourcingSection from '../components/SourcingSection';

export default function SourcingPage() {

  return (
    <div className="sourcing-page">
      {/* Page Header Banner */}
      <div className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/" className="crumb-link">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Sourcing & Processing</span>
          </div>
          <h1 className="page-title font-serif">Commodity Sourcing & Technical Processing</h1>
          <p className="page-lead">
            Unbroken quality engineering, direct factory and farm-gate origin procurement, 
            and certified industrial processing safeguard commodity integrity from source to global discharge.
          </p>
        </div>
      </div>

      {/* 5-Stage Supply Chain Roadmap */}
      <SourcingSection />



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

      `}</style>
    </div>
  );
}
