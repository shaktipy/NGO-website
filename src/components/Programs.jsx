import React from 'react';
import { Code, Users, Presentation, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

const Programs = () => {
  const programList = [
    {
      title: 'Tech & Design Bootcamps',
      desc: 'Hands-on coding, product design, and standard tech workshops starting from absolute scratch. Learn modern workflows with zero baseline demands.',
      icon: <Code size={24} style={{ color: 'var(--primary)' }} />,
      color: 'var(--primary)',
      accentBg: 'rgba(255, 87, 34, 0.05)',
    },
    {
      title: 'Mentorship Circles',
      desc: 'Direct channels connecting students with experienced industry professionals for career pathway maps, interview preparation, and mental wellness guidance.',
      icon: <Users size={24} style={{ color: '#4fd1c5' }} />,
      color: '#4fd1c5',
      accentBg: 'rgba(79, 209, 197, 0.05)',
    },
    {
      title: 'Leadership & Speaking',
      desc: 'Interactive peer circles developed to build public presentation confidence, articulate structural solutions, and prepare students to guide community projects.',
      icon: <Presentation size={24} style={{ color: '#f6ad55' }} />,
      color: '#f6ad55',
      accentBg: 'rgba(246, 173, 85, 0.05)',
    },
  ];

  return (
    <section id="programs" style={{ position: 'relative' }}>
      {/* Decorative Blur Backplate */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(255, 87, 34, 0.03) 0%, rgba(0,0,0,0) 80%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="section-header">
        <span className="section-subtitle">Our Programs</span>
        <h2 className="section-title">
          Empowering Competencies, <br />
          <span className="text-gradient">No Strings Attached</span>.
        </h2>
      </div>

      {/* Program Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          marginTop: '50px',
          zIndex: 5,
        }}
        className="programs-grid"
      >
        {programList.map((prog, index) => (
          <TiltCard key={index} maxTilt={10} scale={1.03} className="program-tilt-wrapper">
            <div
              className="glass-panel program-card"
              style={{
                padding: '40px 30px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'rgba(11, 13, 20, 0.65)',
                border: '1px solid var(--border-glass)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'var(--transition-smooth)',
              }}
            >
              {/* Highlight accent background */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: prog.color,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '150px',
                  height: '150px',
                  background: `radial-gradient(circle, ${prog.color}06 0%, rgba(0,0,0,0) 70%)`,
                  borderRadius: '50%',
                  zIndex: 0,
                }}
              />

              <div style={{ zIndex: 2 }}>
                {/* Icon bubble */}
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: prog.accentBg,
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '28px',
                    boxShadow: `0 8px 20px -6px ${prog.color}30`,
                  }}
                >
                  {prog.icon}
                </div>

                <h3
                  style={{
                    fontSize: '1.45rem',
                    color: '#ffffff',
                    fontFamily: 'var(--font-serif)',
                    marginBottom: '16px',
                    lineHeight: '1.3',
                  }}
                >
                  {prog.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.65',
                    color: 'var(--text-muted)',
                  }}
                >
                  {prog.desc}
                </p>
              </div>

              {/* Glowing anchor action */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '36px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: prog.color,
                  cursor: 'pointer',
                  zIndex: 2,
                }}
                className="program-action-link"
              >
                <span>Learn how it works</span>
                <ArrowRight size={14} className="action-arrow" style={{ transition: 'transform 0.3s ease' }} />
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      <style>{`
        .program-card:hover {
          border-color: rgba(255, 255, 255, 0.15) !important;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4) !important;
        }
        .program-card:hover .action-arrow {
          transform: translateX(5px);
        }
        @media (max-width: 1024px) {
          .programs-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .program-tilt-wrapper {
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Programs;
