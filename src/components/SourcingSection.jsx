import React, { useState } from 'react';
import { 
  Factory, 
  Cpu, 
  Sparkles, 
  Container, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  PackageCheck
} from 'lucide-react';

export default function SourcingSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Factory & Origin Farm-Gate Procurement',
      subtitle: 'Direct Manufacturer Allocations & Agricultural Cooperatives',
      icon: Factory,
      desc: 'We secure direct volume contracts with Tier-1 tire and battery manufacturing complexes, eliminating unnecessary brokerage markups. For agricultural commodities, our procurement officers purchase directly from farm-gate farmer cooperatives in Ethiopia and Kenya, selecting prime parchment coffee, white Humera sesame seeds, and jumbo cashews directly at harvest.',
      metrics: [
        { label: 'Factory Sourcing', value: '100% Direct Allocations' },
        { label: 'Origin Verification', value: 'Single-Origin Cooperative' },
        { label: 'Pre-Shipment Audit', value: '< 24h Factory Gate' }
      ]
    },
    {
      step: '02',
      title: 'Sortex Optical Cleaning & Industrial Testing',
      subtitle: 'Machine Purity Grading & Physical Stress Analysis',
      icon: Cpu,
      desc: 'Agricultural seeds (cumin, sesame) undergo multi-stage Sortex bichromatic optical sorting and high-intensity rare-earth magnet separation, isolating foreign matter down to 99.8% purity. Industrial tires undergo computerized dynamic balancing, laser shearography, and high-energy X-ray testing. Storage batteries undergo automated charge-discharge cycle tests.',
      metrics: [
        { label: 'Seed Purity Level', value: '99.8% Sortex Grade' },
        { label: 'Tire Dynamic Balance', value: '100% Radial Uniformity' },
        { label: 'Battery Testing', value: 'Automated DIN/SAE CCA' }
      ]
    },
    {
      step: '03',
      title: 'Specialty Processing, Curing & Tanning',
      subtitle: 'Post-Harvest Fermentation, Cryo-Milling & Leather Finishing',
      icon: Sparkles,
      desc: 'Specialty coffee cherries undergo monitored wet-washing or natural African raised-bed sun drying to reach optimal 11% export moisture. Whole cumin and cinnamon undergo cryogenic micro-milling to retain volatile essential oils. Raw bovine hides are tanned in LWG Gold-rated tanneries into full-grain upholstery sides and machine-flayed wet-blue skins.',
      metrics: [
        { label: 'Coffee Moisture', value: '10.5% - 11.5% Target' },
        { label: 'Spice Volatile Oils', value: 'High Cinnamaldehyde & Terpenes' },
        { label: 'Leather Tannage', value: 'LWG Gold & REACH Compliant' }
      ]
    },
    {
      step: '04',
      title: 'Hermetic Barrier & Heavy Cargo Containerization',
      subtitle: 'GrainPro Moisture Shielding & Specialized Pallet Staging',
      icon: Container,
      desc: 'Agricultural crops like specialty coffee and sesame are sealed in multi-layer GrainPro hermetic barrier liners inside jute bags, preventing moisture absorption and insect infestation during ocean voyages. Commercial tires are interlaced with nylon strapping, batteries are secured on ISPM-15 heat-treated pallets, and fresh produce travels in active pre-cooled reefers.',
      metrics: [
        { label: 'Moisture Barrier', value: 'GrainPro Hermetic Liners' },
        { label: 'Pallet Staging', value: 'ISPM-15 Heat-Treated' },
        { label: 'Fresh Produce', value: '+2°C to +4°C Active Cold Chain' }
      ]
    },
    {
      step: '05',
      title: 'Customs Clearance, Incoterms & Port Discharge',
      subtitle: 'Complete Trade Dossiers & Punctual Maritime Logistics',
      icon: CheckCircle2,
      desc: 'We manage full international documentation: Bills of Lading, Certificates of Origin, EUR.1 / GSP forms, Phytosanitary Certificates, SCAA cupping reports, DOT/ECE tire certifications, and independent SGS / Bureau Veritas COAs across CIF, CFR, FOB, and DDP delivery terms.',
      metrics: [
        { label: 'Dossier Clearance', value: '100% Pre-cleared Documents' },
        { label: 'Incoterms 2020', value: 'CIF / CFR / FOB / DDP' },
        { label: 'Third-Party Survey', value: 'SGS / Bureau Veritas Certified' }
      ]
    }
  ];

  const currentStepData = steps[activeStep];
  const IconComponent = currentStepData.icon;

  return (
    <section id="sourcing" className="sourcing-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">Supply Chain Integrity & Quality Engineering</span>
          <h2 className="section-title font-serif">From Factory Floor & Farm-Gate to Global Destination</h2>
          <p className="section-desc">
            Our multi-stage procurement and technical processing framework guarantees uncompromised quality, 
            lot-level traceability, and precision international delivery across our entire import and export portfolio.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="step-nav-bar">
          {steps.map((item, index) => {
            return (
              <button
                key={index}
                className={`step-tab ${activeStep === index ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <span className="step-tab-num">STAGE {item.step}</span>
                <span className="step-tab-title">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase */}
        <div className="step-card">
          <div className="step-card-header">
            <div className="step-header-left">
              <div className="step-badge">
                <span className="step-badge-num">STAGE {currentStepData.step}</span>
                <span className="step-badge-subtitle">{currentStepData.subtitle}</span>
              </div>
              <h3 className="step-card-title font-serif">{currentStepData.title}</h3>
            </div>
            <div className="step-icon-large">
              <IconComponent size={32} />
            </div>
          </div>

          <p className="step-desc-p">{currentStepData.desc}</p>

          <div className="step-metrics-grid">
            {currentStepData.metrics.map((metric, idx) => (
              <div key={idx} className="step-metric-box">
                <span className="step-metric-label">{metric.label}</span>
                <span className="step-metric-value">{metric.value}</span>
              </div>
            ))}
          </div>

          <div className="step-card-footer">
            <div className="step-pagination">
              <span>Step {activeStep + 1} of {steps.length}</span>
            </div>
            <div className="step-actions">
              <button
                className="btn btn-secondary"
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              >
                Previous Stage
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setActiveStep(prev => (prev + 1) % steps.length)}
              >
                <span>{activeStep === steps.length - 1 ? 'Start Over' : 'Next Stage'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sourcing-section {
          padding: 96px 0;
          position: relative;
        }

        .step-nav-bar {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          margin-bottom: 32px;
        }

        .step-tab {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: left;
        }

        .step-tab:hover {
          background: var(--bg-milky-warm);
          border-color: var(--accent-navy);
        }

        .step-tab.active {
          background: var(--accent-navy);
          border-color: var(--accent-navy);
          box-shadow: 0 4px 14px rgba(14, 58, 83, 0.25);
        }

        .step-tab-num {
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent-gold);
        }

        .step-tab.active .step-tab-num {
          color: #F8D58A;
        }

        .step-tab-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.2;
        }

        .step-tab.active .step-tab-title {
          color: #FFFFFF;
        }

        .step-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 40px;
          box-shadow: var(--shadow-md);
        }

        .step-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .step-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .step-badge-num {
          font-size: 0.72rem;
          font-weight: 800;
          padding: 4px 10px;
          background: var(--accent-gold-soft);
          color: var(--accent-gold);
          border-radius: 4px;
          letter-spacing: 0.06em;
        }

        .step-badge-subtitle {
          font-size: 0.84rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .step-card-title {
          font-size: 2rem;
          color: var(--accent-navy);
        }

        .step-icon-large {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-md);
          background: var(--accent-navy-soft);
          color: var(--accent-navy);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .step-desc-p {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .step-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 36px;
        }

        .step-metric-box {
          background: var(--bg-milky);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .step-metric-label {
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-light);
          font-weight: 700;
        }

        .step-metric-value {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--accent-navy);
        }

        .step-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          border-top: 1px solid var(--border-subtle);
        }

        .step-pagination {
          font-size: 0.88rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .step-actions {
          display: flex;
          gap: 12px;
        }

        @media (max-width: 1024px) {
          .step-nav-bar {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .step-nav-bar {
            grid-template-columns: 1fr;
          }

          .step-metrics-grid {
            grid-template-columns: 1fr;
          }

          .step-card-header {
            flex-direction: column;
          }

          .step-card {
            padding: 28px 20px;
          }
        }
      `}</style>
    </section>
  );
}
