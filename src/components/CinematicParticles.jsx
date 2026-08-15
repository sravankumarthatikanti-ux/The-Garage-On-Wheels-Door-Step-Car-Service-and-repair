import React, { useEffect, useRef } from 'react';

/**
 * Cinematic Floating Micro-Particles
 * High-performance HTML5 Canvas simulation of subtle automotive studio light motes / dust motes.
 * Ultra-low opacity, soft edges, gentle organic drift.
 */
export default function CinematicParticles({ 
  density = 28, 
  color = '162, 194, 212', // Soft Ice Blue in RGB
  maxSpeed = 0.25,
  className = "absolute inset-0 pointer-events-none"
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initialize particles
    const particles = [];
    for (let i = 0; i < density; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6, // Small micro-particles 0.6px to 2.4px
        alpha: Math.random() * 0.12 + 0.04, // Very low opacity (0.04 - 0.16)
        targetAlpha: Math.random() * 0.14 + 0.04,
        vx: (Math.random() - 0.5) * maxSpeed * 0.5,
        vy: -(Math.random() * maxSpeed + 0.08), // Gentle upward drift
        pulseSpeed: Math.random() * 0.008 + 0.003,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries smoothly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        // Subtle alpha breathing
        p.alpha += (p.targetAlpha - p.alpha) * p.pulseSpeed;
        if (Math.abs(p.targetAlpha - p.alpha) < 0.01) {
          p.targetAlpha = Math.random() * 0.14 + 0.04;
        }

        // Draw soft blurred particle
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
        gradient.addColorStop(0, `rgba(${color}, ${p.alpha})`);
        gradient.addColorStop(0.5, `rgba(${color}, ${p.alpha * 0.4})`);
        gradient.addColorStop(1, `rgba(${color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, color, maxSpeed]);

  return (
    <canvas 
      ref={canvasRef} 
      className={className} 
      style={{ width: '100%', height: '100%' }}
    />
  );
}
