import React from 'react';
import { Smile, Award, ShieldCheck, HeartHandshake, HelpCircle } from 'lucide-react';
import TiltCard from './TiltCard';

const About = () => {
  const pillars = [
    {
      title: 'Rejection-Free Learning',
      desc: 'We offer spaces where students can make mistakes, experiment, and learn without the constant fear of being turned down or judged.',
      icon: <Smile size={24} style={{ color: 'var(--primary)' }} />,
    },
    {
      title: 'No Hidden Boundaries',
      desc: 'No experience prerequisites or unrealistic expectations. We begin exactly where you are and advance at your comfortable pace.',
      icon: <ShieldCheck size={24} style={{ color: '#4fd1c5' }} />,
    },
    {
      title: 'Active Mentorship Network',
      desc: 'Connect with senior industry guides who remember what it is like to be a beginner and are devoted to boosting you up.',
      icon: <HeartHandshake size={24} style={{ color: '#f6ad55' }} />,
    },
  ];

  return (
    <section id="about" style={{ position: 'relative' }}>
      {/* Dynamic Header */}
      <div className="section-header">
        <span className="section-subtitle">Our Philosophy</span>
        <h2 className="section-title">
          Redefining Learning, <br />
          <span className="text-gradient">Eliminating Rejection</span>.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '56px',
          alignItems: 'center',
          marginTop: '40px',
        }}
        className="about-grid"
      >
        {/* Left Column: Mission Description & Pillars */}
        <div>
          <h3
            style={{
              fontSize: '1.8rem',
              fontFamily: 'var(--font-serif)',
              marginBottom: '20px',
              color: '#ffffff',
            }}
          >
            Why We Exist
          </h3>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.7',
              marginBottom: '24px',
            }}
          >
            In today's fast-paced academic and professional environments, students face immense stress. Traditional platforms demand years of experience for basic learning programs and punish failures with swift rejection.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.7',
              marginBottom: '36px',
            }}
          >
            At **She Can Foundation**, we believe that true skill-building requires a safe harbor. We intentionally structure all our projects, workshops, and internship programs to allow room for trial, error, and immense growth. Every student receives an equal, fair opportunity to build their future.
          </p>

          {/* Pillars List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {pillars.map((pillar, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-glass)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {pillar.icon}
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: '600',
                      color: '#ffffff',
                      marginBottom: '6px',
                    }}
                  >
                    {pillar.title}
                  </h4>
                  <p style={{ fontSize: '0.95rem' }}>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Dynamic Stack of 3D Perspective Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} className="about-cards-col">
          {[
            {
              title: 'Empowerment First',
              subtitle: 'Our Core Tenet',
              desc: 'Helping youth gain confidence and command over modern technical resources through constructive learning cycles.',
              color: 'var(--primary)',
            },
            {
              title: 'Inclusion For All',
              subtitle: 'Our Commitment',
              desc: 'Breaking cultural and economic divides to provide standard education resources free of charge to any student.',
              color: '#4fd1c5',
            },
          ].map((card, idx) => (
            <TiltCard key={idx} maxTilt={8} scale={1.02}>
              <div
                className="glass-panel"
                style={{
                  padding: '30px',
                  position: 'relative',
                  background: 'rgba(12, 14, 21, 0.55)',
                  borderLeft: `4px solid ${card.color}`,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '24px',
                    right: '24px',
                    color: 'rgba(255, 255, 255, 0.02)',
                    fontSize: '4.5rem',
                    fontWeight: '900',
                    lineHeight: '1',
                    pointerEvents: 'none',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  0{idx + 1}
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: card.color,
                    letterSpacing: '0.1em',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  {card.subtitle}
                </span>
                <h4
                  style={{
                    fontSize: '1.4rem',
                    fontFamily: 'var(--font-serif)',
                    color: '#ffffff',
                    marginBottom: '12px',
                  }}
                >
                  {card.title}
                </h4>
                <p style={{ fontSize: '0.95rem', maxWidth: '340px' }}>{card.desc}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .about-cards-col {
            margin-top: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
