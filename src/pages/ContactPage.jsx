import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import { 
  HelpCircle, 
  FileText, 
  Clock, 
  CreditCard, 
  ShieldCheck, 
  ChevronDown 
} from 'lucide-react';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get('product') || '';

  const faqs = [
    {
      q: 'What is the Minimum Order Quantity (MOQ) for international container shipments?',
      a: 'Our standard trade MOQ is one Full Container Load (FCL), typically 1x 40ft High-Cube container for tires, batteries, coffee, or sesame seeds (~20-25 Metric Tons), or 1x 20ft container (~12-15 MT). For culinary spices or fresh horticultural produce via air freight, we accommodate palletized consignments starting at 500kg to 2,000kg.'
    },
    {
      q: 'What payment and credit instruments does FF Importing accept for international contracts?',
      a: 'We work primarily with Irrevocable Documentary Letters of Credit (L/C at sight) issued or confirmed by top-tier prime banks, Telegraphic Transfer (T/T with advance deposit and balance against copy of Bill of Lading), and credit insurance limits approved through Euler Hermes / Coface for established long-term buyers.'
    },
    {
      q: 'Can FF Importing provide official certificates of origin, inspection reports, and phytosanitary certificates for customs clearance?',
      a: 'Yes, 100% of our consignments are accompanied by official government-issued Certificates of Origin, independent inspection certificates (SGS/Bureau Veritas), Phytosanitary Certificates, packing lists, and commercial invoices stamped by the relevant chamber of commerce.'
    },
    {
      q: 'How are product samples dispatched for laboratory testing, cupping, or industrial evaluation?',
      a: 'Upon execution of a mutual commercial discussion, verified commodity samples (such as green coffee beans, sesame seeds, whole cumin, tire engineering data sheets, or battery technical specs) are dispatched via DHL/FedEx Express to your QA laboratory or buying office within 48 to 72 hours.'
    }
  ];

  return (
    <div className="contact-page">
      {/* Page Header Banner */}
      <div className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/" className="crumb-link">Home</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">Contact</span>
          </div>
          <h1 className="page-title font-serif">Commercial Trade Desk & Inquiries</h1>
          <p className="page-lead">
            Connect with our international trade desk, factory procurement managers, 
            and commodity quality specialists. We respond to all formal RFQs within 24 hours.
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <ContactSection prefilledProduct={prefilledProduct} />

      {/* Commercial FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Commercial Trade Guide</span>
            <h2 className="section-title font-serif">Frequently Asked Questions</h2>
            <p className="section-desc">
              Key information on container freight parameters, payment instruments, and regulatory clearance.
            </p>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <div className="faq-q-wrap">
                  <HelpCircle size={20} className="faq-icon" />
                  <h3 className="faq-question">{faq.q}</h3>
                </div>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

        .faq-section {
          padding: 80px 0;
          background: #F5EFEB;
          border-top: 1px solid var(--border-medium);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .faq-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 32px;
          box-shadow: var(--shadow-sm);
        }

        .faq-q-wrap {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          margin-bottom: 14px;
        }

        .faq-icon {
          color: var(--accent-gold);
          margin-top: 3px;
          flex-shrink: 0;
        }

        .faq-question {
          font-size: 1.15rem;
          color: var(--accent-navy);
          line-height: 1.35;
        }

        .faq-answer {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.65;
          padding-left: 32px;
        }

        @media (max-width: 900px) {
          .faq-grid {
            grid-template-columns: 1fr;
          }

          .faq-answer {
            padding-left: 0;
            margin-top: 10px;
          }
        }
      `}</style>
    </div>
  );
}
