import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Handle high DPI screens
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle settings
    const particleCount = 110;
    const particles = [];
    const maxDistance = 120; // Connecting line threshold
    const mouse = { x: null, y: null, radius: 180 };

    // Initial 3D particle mesh creation
    for (let i = 0; i < particleCount; i++) {
      // 3D coordinates centered around (0,0,0) in a spherical distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = 250 + Math.random() * 300; // Spherical radius

      particles.push({
        x3d: radius * Math.sin(phi) * Math.cos(theta),
        y3d: radius * Math.sin(phi) * Math.sin(theta),
        z3d: radius * Math.cos(phi),
        baseSize: 1 + Math.random() * 2,
        color: i % 5 === 0 ? 'rgba(255, 87, 34, 0.7)' : 'rgba(148, 163, 184, 0.4)', // Accent orange vs slate grey
      });
    }

    // Rotation angles
    let angleX = 0.0003;
    let angleY = 0.0004;
    let angleZ = 0.0002;

    // Track mouse coordinates
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Dynamic rendering loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const fov = 400; // Field of view / perspective factor

      // Rotate particles in 3D space
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosZ = Math.cos(angleZ);
      const sinZ = Math.sin(angleZ);

      // Adjust rotation speed based on mouse position
      let currentAngleY = angleY;
      let currentAngleX = angleX;

      if (mouse.x !== null) {
        const dx = mouse.x - centerX;
        const dy = mouse.y - centerY;
        currentAngleY = angleY + (dx * 0.000002);
        currentAngleX = angleX + (dy * 0.000002);
      }

      // Project particles to 2D
      const projectedParticles = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Rotate Y-axis
        let x1 = p.x3d * Math.cos(currentAngleY) - p.z3d * Math.sin(currentAngleY);
        let z1 = p.x3d * Math.sin(currentAngleY) + p.z3d * Math.cos(currentAngleY);

        // Rotate X-axis
        let y2 = p.y3d * Math.cos(currentAngleX) - z1 * Math.sin(currentAngleX);
        let z2 = p.y3d * Math.sin(currentAngleX) + z1 * Math.cos(currentAngleX);

        // Rotate Z-axis
        let x3 = x1 * cosZ - y2 * sinZ;
        let y3 = x1 * sinZ + y2 * cosZ;

        // Save back coordinates
        p.x3d = x3;
        p.y3d = y3;
        p.z3d = z2;

        // 3D Perspective Projection
        const scale = fov / (fov + z2);
        const x2d = centerX + x3 * scale;
        const y2d = centerY + y3 * scale;

        // Add mouse interaction in 2D viewport
        let displayX = x2d;
        let displayY = y2d;

        if (mouse.x !== null) {
          const dx = x2d - mouse.x;
          const dy = y2d - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            // Push away from mouse (force proportional to proximity)
            const force = (mouse.radius - dist) / mouse.radius;
            const pushX = (dx / dist) * force * 40;
            const pushY = (dy / dist) * force * 40;

            displayX += pushX;
            displayY += pushY;
          }
        }

        projectedParticles.push({
          x: displayX,
          y: displayY,
          size: p.baseSize * scale * 1.5,
          color: p.color,
          depth: z2, // for sorting & connecting lines
        });
      }

      // Draw connecting constellation lines
      for (let i = 0; i < projectedParticles.length; i++) {
        const p1 = projectedParticles[i];

        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p2 = projectedParticles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            // Transparency increases with distance and z-depth
            const alpha = (1 - (dist / maxDistance)) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 87, 34, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < projectedParticles.length; i++) {
        const p = projectedParticles[i];
        if (p.x < 0 || p.x > window.innerWidth || p.y < 0 || p.y > window.innerHeight) continue;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, p.size), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.color.includes('255, 87') ? 10 : 0;
        ctx.shadowColor = 'rgba(255, 87, 34, 0.6)';
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for next drawings
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.85,
      }}
    />
  );
};

export default ParticleBackground;
