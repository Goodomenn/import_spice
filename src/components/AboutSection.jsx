import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Microscope, 
  Scale, 
  CheckCircle, 
  Ship, 
  FileBadge, 
  Anchor
} from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: Ship,
      title: 'Direct Dockside Sourcing',
      desc: 'We operate long-term procurement partnerships with vetted fishing vessel fleets and certified aquaculture operators, eliminating non-value-added middlemen.'
    },
    {
      icon: Microscope,
      title: 'Laboratory Quality Analysis',
      desc: 'Every batch undergoes rigorous lot-by-lot inspection for histamine levels, TVB-N (Total Volatile Basic Nitrogen), microbiological safety, and heavy metals.'
    },
    {
      icon: ShieldCheck,
      title: 'Global Regulatory Compliance',
      desc: 'Full alignment with EU health regulations, US FDA FSVP (Foreign Supplier Verification Program), and certified under ISO 22000 and HACCP.'
    },
    {
      icon: Scale,
      title: 'Guaranteed Contract Integrity',
      desc: 'We secure consistent commercial availability, hedged pricing structures, and punctual shipping schedules even during peak market volatility.'
    }
  ];

  const certifications = [
    'HACCP Certified',
    'ISO 22000:2018',
    'EU Export Approved',
    'US FDA Registered',
    'MSC Chain of Custody',
    'ASC Farm Sourced',
    'BRCGS Food Safety',
    'IFS Food Standard'
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Top Header */}
        <div className="section-header">
          <span className="section-subtitle">About Zfish</span>
          <h2 className="section-title font-serif">A Trusted Global Partner in Seafood Trading</h2>
          <p className="section-desc">
            Headquartered at the crossroads of international maritime trade, Zfish bridges raw 
            ocean harvest origins with the worlds most demanding food processors, wholesalers, 
            and retail brands.
          </p>
        </div>

        {/* Corporate Profile Card */}
        <div className="about-grid">
          <div className="about-text-card">
            <h3 className="about-card-title font-serif">
              Connecting Marine Harvests with Industrial Food Markets
            </h3>
            <p className="about-p">
              Founded on deep maritime expertise and end-to-end cold chain management, 
              Zfish manages the complex logistics of international seafood trade. 
              Our integrated supply model guarantees that whether you order a single 40ft reefer 
              container or seasonal charter shipments, product integrity remains pristine from 
              dock to delivery.
            </p>
            <p className="about-p">
              Unlike traditional brokers, we physically inspect catches at port, oversee 
              immediate blast-freezing, and manage customs documentation with precision. 
              Our clients in Europe, Asia, North America, and the Middle East rely on us 
              for unwavering consistency and market intelligence.
            </p>

            <div className="about-stats">
              <div className="stat-box">
                <span className="stat-value">25+</span>
                <span className="stat-label">Years of Trading Experience</span>
              </div>
              <div className="stat-box">
                <span className="stat-value">99.4%</span>
                <span className="stat-label">On-Time Discharge Rate</span>
              </div>
              <div className="stat-box">
                <span className="stat-value">600+</span>
                <span className="stat-label">Reefer Containers Handled/Yr</span>
              </div>
            </div>
          </div>

          <div className="about-pillars-card">
            <h3 className="pillars-heading">Our Core Operating Standards</h3>
            <div className="pillars-list">
              {pillars.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="pillar-item">
                    <div className="pillar-icon-wrap">
                      <IconComponent size={20} className="pillar-icon" />
                    </div>
                    <div className="pillar-content">
                      <h4 className="pillar-title">{item.title}</h4>
                      <p className="pillar-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quality & Certifications Bar */}
        <div className="certifications-bar">
          <div className="cert-title-wrap">
            <FileBadge size={20} className="cert-lead-icon" />
            <span className="cert-lead-text">Internationally Audited & Certified Compliance:</span>
          </div>
          <div className="cert-tags-wrap">
            {certifications.map((cert, index) => (
              <span key={index} className="cert-tag">
                <CheckCircle size={14} className="cert-check" />
                <span>{cert}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 96px 0;
          background: #F5EFEB;
          border-top: 1px solid var(--border-medium);
          border-bottom: 1px solid var(--border-medium);
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 36px;
          margin-bottom: 48px;
        }

        .about-text-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 40px;
          box-shadow: var(--shadow-sm);
        }

        .about-card-title {
          font-size: 1.75rem;
          color: var(--accent-navy);
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .about-p {
          font-size: 0.98rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          padding-top: 24px;
          margin-top: 24px;
          border-top: 1px solid var(--border-subtle);
        }

        .stat-box {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--accent-gold);
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-top: 2px;
        }

        .about-pillars-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 36px;
          box-shadow: var(--shadow-sm);
        }

        .pillars-heading {
          font-size: 1.25rem;
          color: var(--accent-navy);
          margin-bottom: 24px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .pillars-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .pillar-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .pillar-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: var(--bg-milky);
          border: 1px solid var(--border-medium);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-icon {
          color: var(--accent-navy);
        }

        .pillar-content {
          display: flex;
          flex-direction: column;
        }

        .pillar-title {
          font-size: 0.98rem;
          color: var(--accent-navy);
          margin-bottom: 4px;
        }

        .pillar-desc {
          font-size: 0.86rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .certifications-bar {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 24px 32px;
          display: flex;
          align-items: center;
          gap: 24px;
          box-shadow: var(--shadow-sm);
          flex-wrap: wrap;
        }

        .cert-title-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
        }

        .cert-lead-icon {
          color: var(--accent-gold);
        }

        .cert-lead-text {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--accent-navy);
        }

        .cert-tags-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .cert-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: var(--bg-milky);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .cert-check {
          color: #10B981;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }

          .about-stats {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .certifications-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
