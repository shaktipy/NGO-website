import React, { useState } from 'react';
import { Send, CheckCircle2, User, Mail, Briefcase, MessageSquare, X } from 'lucide-react';
import TiltCard from './TiltCard';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'student',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const roles = [
    { value: 'student', label: 'Student Learner (Gain skills without fear)' },
    { value: 'volunteer', label: 'Community Volunteer (Support student circles)' },
    { value: 'mentor', label: 'Professional Mentor (Share industry knowledge)' },
    { value: 'other', label: 'Other Support / Sponsor' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for that field on typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Motivation message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({
        name: '',
        email: '',
        role: 'student',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="join-us" style={{ position: 'relative' }}>
      <div className="section-header">
        <span className="section-subtitle">Get Involved</span>
        <h2 className="section-title">
          Join the <span className="text-gradient">She Can Family</span>.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: '56px',
          alignItems: 'start',
          marginTop: '40px',
        }}
        className="form-grid"
      >
        {/* Left Column: Information Card */}
        <div style={{ position: 'sticky', top: '120px' }}>
          <h3
            style={{
              fontSize: '1.8rem',
              fontFamily: 'var(--font-serif)',
              marginBottom: '20px',
              color: '#ffffff',
            }}
          >
            Become Part of the Journey
          </h3>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.7',
              marginBottom: '24px',
            }}
          >
            Whether you are a student looking for a safe, rejection-free environment to begin your learning path, a volunteer wanting to support community operations, or a professional aiming to guide future talent—**there is a place for you here.**
          </p>

          <div
            className="glass-panel"
            style={{
              padding: '30px',
              background: 'rgba(255, 87, 34, 0.02)',
              border: '1px dashed rgba(255, 87, 34, 0.2)',
              marginTop: '30px',
            }}
          >
            <h4
              style={{
                fontSize: '1.15rem',
                fontWeight: '600',
                color: 'var(--primary)',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <CheckCircle2 size={18} />
              What to expect:
            </h4>
            <ul
              style={{
                listStyleType: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                fontSize: '0.95rem',
                paddingLeft: '0',
              }}
            >
              <li>• Rapid, constructive feedback (never cold rejections)</li>
              <li>• Access to standard training curriculum free of charge</li>
              <li>• Opportunities to lead and orchestrate community tasks</li>
              <li>• Inclusive peer network support across multiple fields</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Dynamic Form card */}
        <div>
          <TiltCard maxTilt={5} scale={1.01}>
            <form
              onSubmit={handleSubmit}
              className="glass-panel"
              style={{
                padding: '40px',
                background: 'rgba(12, 14, 21, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
              noValidate
            >
              {/* Name Field */}
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <User size={14} />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="form-control"
                  style={{ borderColor: errors.name ? 'rgba(239, 68, 68, 0.5)' : '' }}
                />
                {errors.name && (
                  <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '6px', display: 'block' }}>
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={14} />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="form-control"
                  style={{ borderColor: errors.email ? 'rgba(239, 68, 68, 0.5)' : '' }}
                />
                {errors.email && (
                  <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '6px', display: 'block' }}>
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Role Select Dropdown */}
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Briefcase size={14} />
                  How would you like to join?
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="form-control"
                  style={{
                    appearance: 'none',
                    backgroundPosition: 'calc(100% - 20px) 50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,
                    paddingRight: '40px',
                  }}
                >
                  {roles.map((r) => (
                    <option key={r.value} value={r.value} style={{ background: '#0a0b10', color: '#fff' }}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Motivation message text */}
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MessageSquare size={14} />
                  Why do you want to join She Can?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us a little bit about yourself and what you want to learn or contribute..."
                  rows={4}
                  className="form-control"
                  style={{ resize: 'none', borderColor: errors.message ? 'rgba(239, 68, 68, 0.5)' : '' }}
                />
                {errors.message && (
                  <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '6px', display: 'block' }}>
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit CTA button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  marginTop: '10px',
                  opacity: isSubmitting ? 0.75 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  padding: '16px',
                }}
              >
                {isSubmitting ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <svg className="animate-spin" style={{ width: '18px', height: '18px', color: '#fff' }} viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" style={{ opacity: 0.25 }}></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" style={{ opacity: 0.75 }}></path>
                    </svg>
                    Processing Registration...
                  </span>
                ) : (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    Submit Application
                    <Send size={16} />
                  </span>
                )}
              </button>
            </form>
          </TiltCard>
        </div>
      </div>

      {/* Success Modal Overlay (Jaw-dropping glassmorphism card popups) */}
      {showSuccessModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(6, 7, 10, 0.7)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '480px',
              width: '100%',
              padding: '40px',
              textAlign: 'center',
              position: 'relative',
              background: 'rgba(13, 16, 23, 0.85)',
              border: '1px solid rgba(255, 87, 34, 0.3)',
              boxShadow: '0 20px 60px rgba(255, 87, 34, 0.15)',
              animation: 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Close button modal */}
            <button
              onClick={() => setShowSuccessModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255,255,255,0.05)',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '6px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition-fast)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            >
              <X size={16} />
            </button>

            {/* Checkmark bubble */}
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(255, 87, 34, 0.1)',
                border: '2px solid var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                boxShadow: '0 0 25px rgba(255, 87, 34, 0.3)',
              }}
            >
              <CheckCircle2 size={36} style={{ color: 'var(--primary)' }} />
            </div>

            <h3
              style={{
                fontSize: '1.8rem',
                fontFamily: 'var(--font-serif)',
                color: '#ffffff',
                marginBottom: '12px',
              }}
            >
              Welcome Aboard!
            </h3>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '28px' }}>
              Your application has been received successfully. We are excited about your interest and our coordinators will reach out within 24 hours to secure your place!
            </p>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="btn-primary"
              style={{ padding: '12px 32px', width: '100%', justifyContent: 'center' }}
            >
              Let's Go!
            </button>
          </div>
        </div>
      )}

      {/* Spinner keyframes & responsive adjustments */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @media (max-width: 1024px) {
          .form-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default VolunteerForm;
