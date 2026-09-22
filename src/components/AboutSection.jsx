import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Microscope, 
  Scale, 
  CheckCircle, 
  Globe2,
  Boxes
} from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: Building2,
      title: 'Direct Factory & Origin Procurement',
      desc: 'We operate long-term direct procurement allocations with certified tire and battery manufacturing complexes, alongside farm-gate origin cooperatives for agricultural commodities.'
    },
    {
      icon: Microscope,
      title: 'Certified Quality & Lot Analysis',
      desc: 'Every consignment undergoes strict batch inspection: machine-cleaned Sortex seed purity analysis, tire load and speed ratings, battery cycle-life benchmarking, and phytosanitary verification.'
    },
    {
      icon: ShieldCheck,
      title: 'International Trade & Regulatory Compliance',
      desc: 'Full alignment with Incoterms 2020 (CIF, FOB, CFR), verified Certificates of Origin, EUR.1 / GSP documentation, and third-party inspection certificates (SGS, Bureau Veritas).'
    },
    {
      icon: Scale,
      title: 'Guaranteed Contractual Integrity',
      desc: 'We secure guaranteed volume allocations, transparent spot and forward pricing, and punctual maritime shipping schedules across global trade lanes.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Top Header */}
        <div className="section-header">
          <span className="section-subtitle">About FF Importing</span>
          <h2 className="section-title font-serif">A Trusted Global Partner in Industrial Imports & Agricultural Exports</h2>
          <p className="section-desc">
            Headquartered at the crossroads of international trade, FF Importing bridges 
            global manufacturing origins and premier agricultural harvests with the world's most demanding distributors, 
            wholesalers, and commercial enterprises.
          </p>
        </div>

        {/* Corporate Profile Card */}
        <div className="about-grid">
          <div className="about-text-card">
            <h3 className="about-card-title font-serif">
              Connecting Premier Manufacturing Origins with Global Commodity Markets
            </h3>
            <p className="about-p">
              Founded on global trade acumen and rigorous supply chain management, 
              FF Importing directs the cross-border logistics of industrial and agricultural commerce. 
              Our integrated trade model guarantees that whether you order heavy-duty commercial radial tires, industrial storage batteries, 
              aromatic spices, specialty washed Arabica coffee, pure sesame seeds, or farm-fresh horticultural exports, product integrity remains pristine from 
              factory and farm-gate to destination delivery.
            </p>
            <p className="about-p">
              Unlike traditional brokers, we physically inspect consignments at origin, oversee 
              quality certification, and manage customs documentation with precision. 
              Our clients in Africa, the Middle East, Europe, and Asia-Pacific rely on us 
              for unwavering consistency, competitive pricing, and dependable supply lines.
            </p>
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

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
