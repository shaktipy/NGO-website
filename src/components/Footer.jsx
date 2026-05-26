import React from 'react';
import { ArrowUp, Mail, Send, Globe, Heart, ShieldAlert } from 'lucide-react';

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our updates!');
    e.target.reset();
  };

  return (
    <footer
      style={{
        background: 'rgba(5, 6, 8, 0.95)',
        borderTop: '1px solid var(--border-glass)',
        padding: '80px 24px 30px 24px',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr 0.8fr 1.2fr',
          gap: '40px',
          marginBottom: '60px',
        }}
        className="footer-grid"
      >
        {/* Column 1: Brand & Logo */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <img
              src="/logo.jpg"
              alt="She Can Logo"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1.5px solid var(--primary)',
                objectFit: 'cover',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: '800', fontSize: '1.15rem', lineHeight: '1.1', color: '#fff' }}>
                She Can!
              </span>
              <span style={{ fontSize: '0.6rem', color: 'var(--primary)', letterSpacing: '0.12em', fontWeight: '700', textTransform: 'uppercase' }}>
                Foundation
              </span>
            </div>
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px', maxWidth: '280px' }}>
            A student-first NGO building pressure-free learning havens. Giving every student a fair opportunity to fail, learn, and grow.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <Globe size={14} style={{ color: 'var(--primary)' }} />
            <a href="https://www.shecanfoundation.org" target="_blank" rel="noopener noreferrer" style={{ hover: { color: '#fff' } }}>
              www.shecanfoundation.org
            </a>
          </div>
        </div>

        {/* Column 2: Navigation links */}
        <div>
          <h4
            style={{
              fontSize: '1rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#ffffff',
              marginBottom: '20px',
            }}
          >
            Quick Links
          </h4>
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '0', fontSize: '0.9rem' }}>
            <li><a href="#home" className="footer-link">Home</a></li>
            <li><a href="#about" className="footer-link">About Us</a></li>
            <li><a href="#programs" className="footer-link">Our Programs</a></li>
            <li><a href="#join-us" className="footer-link">Join As Volunteer</a></li>
          </ul>
        </div>

        {/* Column 3: Resources / Programs */}
        <div>
          <h4
            style={{
              fontSize: '1rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#ffffff',
              marginBottom: '20px',
            }}
          >
            Focus Areas
          </h4>
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '0', fontSize: '0.9rem' }}>
            <li><a href="#programs" className="footer-link">Coding Bootcamps</a></li>
            <li><a href="#programs" className="footer-link">Mentorship Circles</a></li>
            <li><a href="#programs" className="footer-link">Leadership Hubs</a></li>
            <li><a href="#about" className="footer-link">Rejection-Free Learning</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4
            style={{
              fontSize: '1rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#ffffff',
              marginBottom: '20px',
            }}
          >
            Newsletter
          </h4>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
            Subscribe to receive insights, curriculum announcements, and event highlights from our team.
          </p>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <Mail size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }} />
              <input
                type="email"
                required
                placeholder="Your email address"
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-glass)',
                  borderRadius: '30px',
                  padding: '12px 16px 12px 40px',
                  color: '#fff',
                  fontSize: '0.85rem',
                  outline: 'none',
                  transition: 'var(--transition-fast)',
                }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.background = 'rgba(255,255,255,0.05)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'var(--border-glass)'; e.target.style.background = 'rgba(255, 255, 255, 0.03)'; }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--primary)',
                border: 'none',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 15px var(--primary-glow)',
                transition: 'var(--transition-smooth)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'; e.currentTarget.style.background = 'var(--primary-hover)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; e.currentTarget.style.background = 'var(--primary)'; }}
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Row */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '30px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          justifyContent: 'between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
        className="footer-bottom"
      >
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} She Can Foundation. All rights reserved.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <span>Crafted with</span>
          <Heart size={12} style={{ color: 'var(--primary)', fill: 'var(--primary)' }} />
          <span>for safe, fear-free student development</span>
        </div>

        {/* Back to Top floating-like anchor */}
        <a
          href="#home"
          onClick={scrollToTop}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-glass)',
            color: 'var(--text-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'var(--transition-smooth)',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; e.currentTarget.style.borderColor = 'var(--border-glass)'; e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <ArrowUp size={16} />
        </a>
      </div>

      <style>{`
        .footer-link {
          color: var(--text-muted);
          transition: var(--transition-fast);
        }
        .footer-link:hover {
          color: #ffffff !important;
          transform: translateX(3px);
          display: inline-block;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1.2fr 0.8fr 0.8fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
