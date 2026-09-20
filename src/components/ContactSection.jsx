import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building, 
  HelpCircle,
  FileCheck
} from 'lucide-react';

export default function ContactSection({ prefilledProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'Commercial Export Inquiry',
    product: '',
    volume: '1x 40ft Reefer FCL (~25 MT)',
    destinationPort: '',
    incoterm: 'CIF Destination Port',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData(prev => ({
        ...prev,
        product: prefilledProduct,
        subject: 'Commercial Export Inquiry'
      }));
    }
  }, [prefilledProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Commercial Trade Desk</span>
          <h2 className="section-title font-serif">Connect with Our Global Sourcing Specialists</h2>
          <p className="section-desc">
            Whether you require spot pricing, forward contracting, custom packaging specifications, 
            or certified laboratory documentation, our international trade team responds within 24 hours.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Inquiries & Office Info */}
          <div className="contact-info-card">
            <h3 className="info-card-title font-serif">Direct Department Contacts</h3>
            <p className="info-card-desc">
              Get in touch directly with our specialized trading desks across time zones.
            </p>

            <div className="contact-desks">
              <div className="desk-item">
                <div className="desk-badge">Global Trading & Export Sales</div>
                <div className="desk-details">
                  <div className="desk-line">
                    <Mail size={15} className="desk-icon" />
                    <span>exports@zfish-global.com</span>
                  </div>
                  <div className="desk-line">
                    <Phone size={15} className="desk-icon" />
                    <span>+31 (0) 10 742 8801</span>
                  </div>
                </div>
              </div>

              <div className="desk-item">
                <div className="desk-badge">Fleet Sourcing & Procurement</div>
                <div className="desk-details">
                  <div className="desk-line">
                    <Mail size={15} className="desk-icon" />
                    <span>procurement@zfish-global.com</span>
                  </div>
                  <div className="desk-line">
                    <Phone size={15} className="desk-icon" />
                    <span>+31 (0) 10 742 8805</span>
                  </div>
                </div>
              </div>

              <div className="desk-item">
                <div className="desk-badge">Quality Assurance & Lab Documentation</div>
                <div className="desk-details">
                  <div className="desk-line">
                    <Mail size={15} className="desk-icon" />
                    <span>qa-compliance@zfish-global.com</span>
                  </div>
                  <div className="desk-line">
                    <Phone size={15} className="desk-icon" />
                    <span>+31 (0) 10 742 8808</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hours-block">
              <Clock size={18} className="hours-icon" />
              <div>
                <strong>Global Desk Operating Hours:</strong>
                <span>Monday – Friday: 07:00 – 19:00 CET (Rotterdam HQ)</span>
                <span>24/7 Monitoring for Live Reefer Consignments</span>
              </div>
            </div>
          </div>

          {/* Right Column: RFQ Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={48} className="success-icon" />
                </div>
                <h3 className="success-title font-serif">Inquiry Successfully Transmitted</h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.name}</strong> from <strong>{formData.company || 'your organization'}</strong>. 
                  Our commercial trade desk has received your request regarding <strong>{formData.product || 'seafood specifications'}</strong>. 
                  An assigned commercial trader will contact you with current CIF/FOB market offers and technical data sheets shortly.
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      subject: 'Commercial Export Inquiry',
                      product: '',
                      volume: '1x 40ft Reefer FCL (~25 MT)',
                      destinationPort: '',
                      incoterm: 'CIF Destination Port',
                      message: ''
                    });
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rfq-form">
                <div className="form-header">
                  <h3 className="form-title">Request for Quotation & Commercial Inquiry</h3>
                  <span className="form-sub">Please furnish your volume and port details for prompt pricing.</span>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Arthur Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Company / Legal Entity *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Nordic Seafood Wholesalers Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Corporate Email *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. a.vance@nordicseafood.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp (with country code)</label>
                    <input 
                      type="tel" 
                      placeholder="e.g. +44 20 7946 0912"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Inquiry Nature</label>
                    <select 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="form-select"
                    >
                      <option value="Commercial Export Inquiry">Commercial Export Inquiry (Buy)</option>
                      <option value="Fleet Procurement Offer">Fleet Procurement / Supplier Offer (Sell)</option>
                      <option value="Product Specification / Lab COA">Product Specification / Lab COA</option>
                      <option value="Sample Request">Commercial Sample Request</option>
                      <option value="Logistics & Reefer Freight">Logistics & Reefer Freight</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Product of Interest</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Yellowfin Tuna, Atlantic Salmon, Prawns"
                      value={formData.product}
                      onChange={(e) => setFormData({...formData, product: e.target.value})}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-grid-3">
                  <div className="form-group">
                    <label className="form-label">Estimated Volume</label>
                    <select 
                      value={formData.volume}
                      onChange={(e) => setFormData({...formData, volume: e.target.value})}
                      className="form-select"
                    >
                      <option value="Trial Pallet Order">Trial Pallet (1 - 3 MT)</option>
                      <option value="1x 20ft Reefer FCL (~12 MT)">1x 20ft Reefer FCL (~12 MT)</option>
                      <option value="1x 40ft Reefer FCL (~25 MT)">1x 40ft Reefer FCL (~25 MT)</option>
                      <option value="Multi-Container Contract (100+ MT)">Multi-Container Contract (100+ MT)</option>
                      <option value="Annual Supply Agreement">Annual Supply Agreement</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Destination Port / City</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Port of Felixstowe / Hamburg"
                      value={formData.destinationPort}
                      onChange={(e) => setFormData({...formData, destinationPort: e.target.value})}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Incoterms 2020</label>
                    <select 
                      value={formData.incoterm}
                      onChange={(e) => setFormData({...formData, incoterm: e.target.value})}
                      className="form-select"
                    >
                      <option value="CIF Destination Port">CIF (Cost, Insurance & Freight)</option>
                      <option value="CFR Destination Port">CFR (Cost & Freight)</option>
                      <option value="FOB Port of Origin">FOB (Free on Board origin)</option>
                      <option value="DDP Delivered Cold Storage">DDP (Delivered Duty Paid)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Specifications, Size Grades or Special Requirements</label>
                  <textarea 
                    rows={4}
                    placeholder="Provide specific size counts, cut preferences (e.g. IQF fillets, H&G), glazing percentage, or certification needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <Send size={16} />
                  <span>Transmit Inquiry to Commercial Desk</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 96px 0;
          position: relative;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 36px;
          align-items: flex-start;
        }

        .contact-info-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 36px;
          box-shadow: var(--shadow-sm);
        }

        .info-card-title {
          font-size: 1.6rem;
          color: var(--accent-navy);
          margin-bottom: 8px;
        }

        .info-card-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          margin-bottom: 28px;
          line-height: 1.5;
        }

        .contact-desks {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 28px;
        }

        .desk-item {
          background: var(--bg-milky);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 16px;
        }

        .desk-badge {
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--accent-gold);
          margin-bottom: 8px;
        }

        .desk-details {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .desk-line {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-main);
        }

        .desk-icon {
          color: var(--accent-navy);
        }

        .hours-block {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 16px;
          background: var(--bg-milky-warm);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          font-size: 0.84rem;
        }

        .hours-icon {
          color: var(--accent-gold);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .hours-block div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .hours-block strong {
          color: var(--accent-navy);
        }

        .hours-block span {
          color: var(--text-muted);
        }

        /* Form styling */
        .contact-form-card {
          background: #FFFFFF;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          padding: 40px;
          box-shadow: var(--shadow-sm);
        }

        .form-header {
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .form-title {
          font-size: 1.45rem;
          color: var(--accent-navy);
          margin-bottom: 4px;
        }

        .form-sub {
          font-size: 0.86rem;
          color: var(--text-muted);
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .form-grid-3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .form-label {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-main);
        }

        .form-input, .form-select, .form-textarea {
          padding: 11px 14px;
          background: var(--bg-milky-light);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          font-family: inherit;
          font-size: 0.9rem;
          color: var(--text-main);
          outline: none;
          transition: border-color 0.2s;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: var(--accent-navy);
          box-shadow: 0 0 0 3px rgba(14, 58, 83, 0.1);
          background: #FFFFFF;
        }

        .form-textarea {
          resize: vertical;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          font-size: 1rem;
          margin-top: 8px;
        }

        .form-success {
          text-align: center;
          padding: 40px 20px;
        }

        .success-icon-wrap {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #ECFDF5;
          color: #10B981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }

        .success-title {
          font-size: 1.8rem;
          color: var(--accent-navy);
          margin-bottom: 12px;
        }

        .success-desc {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 500px;
          margin: 0 auto 28px;
        }

        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr;
          }

          .form-grid-2, .form-grid-3 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
