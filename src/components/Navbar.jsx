import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track window scroll to add darker background after scroll threshold
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section for nav indicators
      const sections = ['home', 'about', 'programs', 'join-us'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Programs', href: '#programs', id: 'programs' },
    { name: 'Join Us', href: '#join-us', id: 'join-us' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: scrolled ? '15px' : '0px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: scrolled ? 'calc(100% - 32px)' : '100%',
          maxWidth: scrolled ? '1200px' : '100%',
          height: '75px',
          background: scrolled ? 'var(--bg-nav)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-glass)' : '1px solid transparent',
          borderRadius: scrolled ? '20px' : '0px',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        {/* Brand Logo & Name */}
        <a
          href="#home"
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <img
            src="/logo.jpg"
            alt="She Can! Foundation Logo"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid var(--primary)',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: '800',
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
                color: '#fff',
              }}
            >
              She Can!
            </span>
            <span
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: 'var(--primary)',
                fontWeight: '700',
                textTransform: 'uppercase',
              }}
            >
              Foundation
            </span>
          </div>
        </a>

        {/* Desktop Menu links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.9rem',
                fontWeight: '600',
                position: 'relative',
                padding: '8px 4px',
                color: activeSection === link.id ? '#ffffff' : 'var(--text-muted)',
              }}
            >
              {link.name}
              {activeSection === link.id && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    background: 'var(--primary)',
                    borderRadius: '2px',
                    boxShadow: '0 0 8px var(--primary)',
                  }}
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA Join Button Desktop */}
        <div className="desktop-menu">
          <a href="#join-us" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
            Volunteer Now
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-glass)',
            color: '#fff',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '10px',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-fast)',
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100vw',
          height: '100vh',
          background: 'rgba(6, 7, 10, 0.6)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'all' : 'none',
          zIndex: 98,
          transition: 'opacity 0.4s ease',
        }}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Menu Content */}
      <div
        style={{
          position: 'fixed',
          top: '90px',
          left: '16px',
          width: 'calc(100vw - 32px)',
          background: 'var(--bg-card)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--border-glass)',
          borderRadius: '20px',
          padding: '24px',
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'all' : 'none',
          zIndex: 99,
          boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                padding: '12px 16px',
                borderRadius: '12px',
                background: activeSection === link.id ? 'rgba(255, 87, 34, 0.1)' : 'transparent',
                color: activeSection === link.id ? 'var(--primary)' : 'var(--text-main)',
                borderLeft: activeSection === link.id ? '3px solid var(--primary)' : '3px solid transparent',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#join-us"
            onClick={() => setIsOpen(false)}
            className="btn-primary"
            style={{
              justifyContent: 'center',
              width: '100%',
              marginTop: '10px',
              padding: '12px',
            }}
          >
            Volunteer Now
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Inline styles for responsive Navbar hide/show */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
