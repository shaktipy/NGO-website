import React from 'react';
import { ArrowRight, Globe, Shield, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '130px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 3D Decorative Orbs (Pure CSS parallax simulation) */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(255, 87, 34, 0.08) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '2%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(255, 120, 73, 0.05) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(20px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '48px',
          alignItems: 'center',
          width: '100%',
        }}
        className="hero-grid"
      >
        {/* Left Column: Typography & CTAs */}
        <div style={{ zIndex: 5 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 87, 34, 0.1)',
              border: '1px solid rgba(255, 87, 34, 0.15)',
              padding: '6px 16px',
              borderRadius: '20px',
              color: 'var(--primary)',
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '24px',
            }}
            className="hero-badge"
          >
            <Sparkles size={12} />
            A Rejection-Free Safe Space
          </div>

          <h1
            style={{
              fontSize: '4.2rem',
              lineHeight: '1.1',
              fontFamily: 'var(--font-serif)',
              marginBottom: '24px',
            }}
            className="hero-title"
          >
            Where Students Learn <br />
            <span className="text-gradient">Without Fear</span>.
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: '1.7',
              color: 'var(--text-muted)',
              marginBottom: '36px',
              maxWidth: '620px',
            }}
            className="hero-desc"
          >
            She Can Foundation is a student-first NGO dedicated to offering safe, fear-free environments. We reject standard, unrealistic expectations, giving every student a genuine, supportive chance to learn, fail, and thrive.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
            className="hero-buttons"
          >
            <a href="#join-us" className="btn-primary">
              Join the Movement
              <ArrowRight size={16} />
            </a>
            <a href="#about" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>

        {/* Right Column: Dynamic 3D Card Logo showcase */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
          className="hero-card-col"
        >
          <TiltCard maxTilt={15} scale={1.05}>
            <div
              className="glass-panel animate-float"
              style={{
                width: '320px',
                height: '420px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255, 87, 34, 0.15)',
                background: 'rgba(13, 16, 23, 0.75)',
                boxShadow: '0 20px 50px rgba(255, 87, 34, 0.1)',
              }}
            >
              {/* Backplate grid design */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'radial-gradient(rgba(255, 87, 34, 0.08) 1.5px, transparent 1.5px)',
                  backgroundSize: '16px 16px',
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              />

              {/* Glowing ring overlay */}
              <div
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'var(--primary-glow)',
                  filter: 'blur(30px)',
                  position: 'absolute',
                  top: '20%',
                  zIndex: 0,
                }}
              />

              <div style={{ zIndex: 1, marginTop: '20px' }}>
                <img
                  src="/logo.jpg"
                  alt="She Can Logo"
                  style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '24px',
                    border: '3px solid rgba(255, 87, 34, 0.4)',
                    boxShadow: '0 12px 30px rgba(255, 87, 34, 0.25)',
                    objectFit: 'cover',
                  }}
                />
              </div>

              <div style={{ zIndex: 1, marginBottom: '20px' }}>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontFamily: 'var(--font-serif)',
                    marginBottom: '8px',
                    color: '#fff',
                  }}
                >
                  She Can!
                </h3>
                <p style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: '700' }}>
                  Foundation
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    marginTop: '16px',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <Globe size={12} className="text-gradient" />
                  <span>shecanfoundation.org</span>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* Statistics section in bottom part of hero */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginTop: '80px',
          zIndex: 5,
        }}
        className="stats-grid"
      >
        {[
          { number: '5,000+', text: 'Lives Directly Empowered', icon: <Sparkles size={20} style={{ color: 'var(--primary)' }} /> },
          { number: '50+', text: 'Fear-Free Learning Bootcamps', icon: <Shield size={20} style={{ color: '#4fd1c5' }} /> },
          { number: '100%', text: 'Free Safe Spaces for Students', icon: <Globe size={20} style={{ color: '#f6ad55' }} /> },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="glass-panel"
            style={{
              padding: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              background: 'rgba(15, 18, 27, 0.45)',
            }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {stat.icon}
            </div>
            <div>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  fontFamily: 'var(--font-sans)',
                  color: '#fff',
                }}
              >
                {stat.number}
              </div>
              <p style={{ fontSize: '0.9rem', fontWeight: '500' }}>{stat.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Styles to make grid responsive */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 40px !important;
          }
          .hero-badge, .hero-buttons {
            justify-content: center !important;
            margin-left: auto;
            margin-right: auto;
          }
          .hero-desc {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-card-col {
            order: -1; /* Place 3D card above content on small viewports */
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            margin-top: 50px !important;
          }
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.8rem !important;
          }
          .hero-desc {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
