import React, { useState } from 'react';
import { 
  Anchor, 
  Snowflake, 
  Microscope, 
  Container, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Clock,
  Thermometer
} from 'lucide-react';

export default function SourcingSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Selective Dockside Procurement',
      subtitle: 'Catch Certification & Port Inspection',
      icon: Anchor,
      desc: 'Our sourcing agents inspect catches immediately upon vessel docking. We verify legal catch certificates (IUU compliance), vessel logbooks, and conduct sensory evaluation on temperature, eye clarity, gill coloration, and flesh firmness.',
      metrics: [
        { label: 'Dock Inspection', value: '100% of lots' },
        { label: 'Traceability', value: 'Vessel ID & Catch Area' },
        { label: 'Landing Window', value: '< 2 Hours' }
      ]
    },
    {
      step: '02',
      title: 'Rapid IQF Blast-Freezing',
      subtitle: 'Preserving Peak Cellular Integrity',
      icon: Snowflake,
      desc: 'Within hours of landing, fish are transferred into our temperature-controlled processing halls. Employing advanced IQF (Individual Quick Freezing) and cryogenic tunnels down to -40°C, the formation of large ice crystals is prevented, preserving cellular moisture and texture.',
      metrics: [
        { label: 'Core Temp', value: '-35°C to -40°C' },
        { label: 'Processing Speed', value: 'Same-day landing' },
        { label: 'Moisture Retention', value: 'Zero cell rupture' }
      ]
    },
    {
      step: '03',
      title: 'Analytical Quality & Laboratory Grading',
      subtitle: 'Sensory, Chemical & Microbiological Screening',
      icon: Microscope,
      desc: 'Our in-house and accredited third-party laboratories test every batch. Screenings include Histamine testing (for scombroid species), Heavy Metals (Mercury, Cadmium, Lead), TVB-N freshness index, and complete absence of antibiotic/chemical residues.',
      metrics: [
        { label: 'Histamine Standard', value: '< 15 ppm' },
        { label: 'Microbiology', value: 'Salmonella & Listeria Neg' },
        { label: 'Laser Grading', value: '±2g accuracy' }
      ]
    },
    {
      step: '04',
      title: 'Continuous Cold-Chain Reefer Logistics',
      subtitle: 'Real-Time Datalogging & Ocean Freight',
      icon: Container,
      desc: 'All containerized shipments utilize state-of-the-art 40ft High-Cube refrigerated reefers equipped with continuous satellite temperature monitoring and automated controlled atmosphere (CA) technology for fresh consignments.',
      metrics: [
        { label: 'Reefer Temp', value: '-25°C to -28°C' },
        { label: 'Telemetry', value: '24/7 Satellite Track' },
        { label: 'Container Types', value: '20ft & 40ft Reefer FCL' }
      ]
    },
    {
      step: '05',
      title: 'Port Clearance & Destination Staging',
      subtitle: 'Smooth Customs & Delivery to Facility',
      icon: CheckCircle2,
      desc: 'We handle all export/import document packets: Health Certificates, Catch Certificates, Bills of Lading, Packing Lists, and Certificates of Analysis (COA). Delivery terms include FOB port of origin, CFR, CIF destination port, or DDP cold-storage.',
      metrics: [
        { label: 'Documentation', value: '100% Pre-cleared' },
        { label: 'Incoterms', value: 'CIF / CFR / FOB / DDP' },
        { label: 'Cold Storage', value: 'Bonded Port Depots' }
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
          <span className="section-subtitle">Supply Chain Integrity</span>
          <h2 className="section-title font-serif">From Ocean Dock to Global Port</h2>
          <p className="section-desc">
            Our multi-stage cold-chain framework guarantees complete traceability, 
            food safety compliance, and commercial consistency across every container shipped.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="step-nav-bar">
          {steps.map((item, index) => {
            const StepIcon = item.icon;
            return (
              <button
                key={index}
                className={`step-tab ${activeStep === index ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <span className="step-tab-num">{item.step}</span>
                <span className="step-tab-title">{item.title.split(' ')[0]} {item.title.split(' ')[1]}</span>
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

        @media (max-width: 900px) {
          .step-nav-bar {
            grid-template-columns: 1fr 1fr;
          }

          .step-metrics-grid {
            grid-template-columns: 1fr;
          }

          .step-card-header {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
