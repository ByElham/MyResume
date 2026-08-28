import React, { useEffect, useRef } from 'react';
import { useSakura } from '../../context/SakuraContext';
import { useTheme } from '../../context/ThemeContext';

interface Petal {
  x: number;
  y: number;
  z: number; // depth layer: 0.4 to 1.6
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  angleSpeed: number;
  tiltAngle: number;
  tiltAngleSpeed: number;
  opacity: number;
  colorType: number;
  flipSpeed: number;
  flip: number;
}

export const SakuraPetalsCanvas: React.FC = () => {
  const { sakuraMode } = useSakura();
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!sakuraMode) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive petal count (fewer on mobile for 60fps smoothness)
    const isMobile = width < 768;
    const PETAL_COUNT = isMobile ? 18 : 55;

    // Petal color palettes depending on dark / light mode
    const isDark = theme === 'dark';
    const petalColorsLight = [
      { start: 'rgba(255, 182, 193, 0.85)', end: 'rgba(255, 105, 180, 0.7)', edge: 'rgba(244, 114, 182, 0.9)' },
      { start: 'rgba(255, 192, 203, 0.9)', end: 'rgba(251, 113, 133, 0.75)', edge: 'rgba(244, 63, 94, 0.85)' },
      { start: 'rgba(254, 205, 211, 0.95)', end: 'rgba(244, 114, 182, 0.8)', edge: 'rgba(225, 29, 72, 0.7)' },
      { start: 'rgba(255, 228, 230, 0.85)', end: 'rgba(253, 164, 175, 0.7)', edge: 'rgba(251, 113, 133, 0.8)' },
    ];

    const petalColorsDark = [
      { start: 'rgba(244, 114, 182, 0.9)', end: 'rgba(219, 39, 119, 0.8)', edge: 'rgba(251, 113, 133, 0.95)' },
      { start: 'rgba(251, 113, 133, 0.85)', end: 'rgba(225, 29, 72, 0.75)', edge: 'rgba(244, 63, 94, 0.9)' },
      { start: 'rgba(249, 168, 212, 0.8)', end: 'rgba(190, 24, 93, 0.7)', edge: 'rgba(253, 164, 175, 0.85)' },
      { start: 'rgba(253, 164, 175, 0.85)', end: 'rgba(157, 23, 77, 0.8)', edge: 'rgba(244, 114, 182, 0.9)' },
    ];

    const colors = isDark ? petalColorsDark : petalColorsLight;

    const createPetal = (initialY = -20): Petal => {
      const z = 0.4 + Math.random() * 1.0;
      return {
        x: Math.random() * (width + 200) - 100,
        y: initialY === -20 ? Math.random() * -height * 0.5 - 20 : initialY,
        z,
        size: (12 + Math.random() * 14) * z,
        speedY: (0.7 + Math.random() * 1.2) * z,
        speedX: (0.4 + Math.random() * 0.9) * z,
        angle: Math.random() * Math.PI * 2,
        angleSpeed: (Math.random() - 0.5) * 0.02,
        tiltAngle: Math.random() * Math.PI,
        tiltAngleSpeed: 0.015 + Math.random() * 0.025,
        opacity: (0.65 + Math.random() * 0.35),
        colorType: Math.floor(Math.random() * colors.length),
        flipSpeed: 0.02 + Math.random() * 0.03,
        flip: Math.random() * Math.PI,
      };
    };

    const petals: Petal[] = [];
    for (let i = 0; i < PETAL_COUNT; i++) {
      // distribute initial petals evenly across screen height on load
      const initialY = Math.random() * height;
      petals.push(createPetal(initialY));
    }

    let wind = 0.5;
    let windTarget = 0.5;
    let lastWindChange = Date.now();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const drawRealisticPetal = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      angle: number,
      tilt: number,
      flip: number,
      colorSet: (typeof colors)[0],
      opacity: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);

      // 3D perspective squish based on tilt & flip
      const scaleX = Math.cos(tilt);
      const scaleY = Math.sin(flip);
      ctx.scale(scaleX, scaleY);
      ctx.globalAlpha = opacity;

      // Realistic natural cherry blossom petal curve path
      ctx.beginPath();
      ctx.moveTo(0, -size);
      // Left outer curve
      ctx.bezierCurveTo(-size * 0.75, -size * 0.5, -size * 0.85, size * 0.3, -size * 0.2, size);
      // Petal base notch (center notch at top of petal)
      ctx.quadraticCurveTo(0, size * 0.85, size * 0.2, size);
      // Right outer curve
      ctx.bezierCurveTo(size * 0.85, size * 0.3, size * 0.75, -size * 0.5, 0, -size);
      ctx.closePath();

      // Delicate gradient fill
      const grad = ctx.createLinearGradient(0, -size, 0, size);
      grad.addColorStop(0, colorSet.start);
      grad.addColorStop(0.7, colorSet.end);
      grad.addColorStop(1, colorSet.edge);
      ctx.fillStyle = grad;
      ctx.fill();

      // Subtle translucent petal vein
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.8);
      ctx.quadraticCurveTo(size * 0.1, 0, 0, size * 0.7);
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.restore();
    };

    let lastTime = performance.now();

    const render = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Dynamic wind gusts
      if (Date.now() - lastWindChange > 3000) {
        windTarget = 0.2 + Math.random() * 0.8;
        lastWindChange = Date.now();
      }
      wind += (windTarget - wind) * 0.01;

      // Update and render petals
      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        p.y += p.speedY * (delta * 60);
        p.x += (p.speedX + wind) * (delta * 60) + Math.sin(p.tiltAngle) * 0.8;
        p.angle += p.angleSpeed * (delta * 60);
        p.tiltAngle += p.tiltAngleSpeed * (delta * 60);
        p.flip += p.flipSpeed * (delta * 60);

        const colorSet = colors[p.colorType];
        drawRealisticPetal(
          ctx,
          p.x,
          p.y,
          p.size,
          p.angle,
          p.tiltAngle,
          p.flip,
          colorSet,
          p.opacity
        );

        // Respawn if off screen
        if (p.y > height + 40 || p.x > width + 100 || p.x < -100) {
          petals[i] = createPetal(-30);
          petals[i].x = Math.random() * (width + 100) - 50;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [sakuraMode, theme]);

  if (!sakuraMode) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-40 pointer-events-none w-full h-full"
      style={{ mixBlendMode: 'normal' }}
      aria-hidden="true"
    />
  );
};
