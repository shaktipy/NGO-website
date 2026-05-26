import React, { useState, useRef } from 'react';

const TiltCard = ({ children, className = '', maxTilt = 10, scale = 1.03 }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  });
  const [shineStyle, setShineStyle] = useState({
    opacity: 0,
    transform: 'translate(-50%, -50%)',
    transition: 'opacity 0.5s ease',
  });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate mouse position relative to center of the card (-0.5 to 0.5)
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    // Calculate rotation: rotateX revolves around X-axis (up/down), triggered by Y displacement
    // rotateY revolves around Y-axis (left/right), triggered by X displacement
    const rotateX = -yPct * maxTilt;
    const rotateY = xPct * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.1s cubic-bezier(0.25, 0.8, 0.25, 1)',
    });

    // Move shine element
    setShineStyle({
      opacity: 0.15,
      left: `${mouseX}px`,
      top: `${mouseY}px`,
      transform: 'translate(-50%, -50%)',
      transition: 'opacity 0.1s ease',
    });
  };

  const handleMouseEnter = () => {
    setShineStyle((prev) => ({
      ...prev,
      opacity: 0.15,
    }));
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    });

    setShineStyle({
      opacity: 0,
      transform: 'translate(-50%, -50%)',
      transition: 'opacity 0.6s ease',
    });
  };

  return (
    <div
      ref={cardRef}
      className={`perspective-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Glare/Shine Effect */}
      <div
        style={{
          position: 'absolute',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 65%)',
          pointerEvents: 'none',
          zIndex: 5,
          mixBlendMode: 'overlay',
          ...shineStyle,
        }}
      />
      {children}
    </div>
  );
};

export default TiltCard;
