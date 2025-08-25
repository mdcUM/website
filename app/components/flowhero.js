'use client';

import { useEffect, useRef } from 'react';

export default function FlowFieldHeroBg({
  className = '',
  background = '#0b0b11',
  colorA = '#E6DAFF',
  colorB = '#9080DB',
  //density = 0.00015,
  density = 0.0015,
  speed = 0.8,
  //maxParticles = 5500,
  maxParticles = 25000,
  trails = 0.22,     // 0 = no trails; higher = quicker fade
  fps = 60,          // 45–60 is smooth; lower saves battery
  lineAlpha = 0.75,
  lineWidth = 0.7,
  interactive = true,
} = {}) {
  const ref = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const MAX_DPR = 2;
    let dpr = Math.max(1, Math.min(MAX_DPR, window.devicePixelRatio || 1));
    let w = 0, h = 0;
    let gradient = null;

    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const mouse = { x: -9999, y: -9999, active: false };
    const particles = [];

    const field = {
      angle(x, y, t) {
        const s = Math.sin(y * 0.002 + t * 0.6);
        const c = Math.cos(x * 0.0018 - t * 0.42);
        return (s + c) * 1.45;
      },
    };

    function seedParticles() {
      const target = Math.min(maxParticles, Math.round(w * h * density));
      particles.length = 0;
      for (let i = 0; i < target; i++) {
        //particles.push({ x: Math.random() * w, y: Math.random() * h });
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          xoff: Math.random() * 10000,
          yoff: Math.random() * 10000
        });

      }
    }

    function setupGradient() {
      gradient = ctx.createLinearGradient(0, 0, w, 0);
      gradient.addColorStop(0, colorA);
      gradient.addColorStop(1, colorB);
    }

    function resize() {
      dpr = Math.max(1, Math.min(MAX_DPR, window.devicePixelRatio || 1));
      const { clientWidth, clientHeight } = canvas;
      w = clientWidth | 0;
      h = clientHeight | 0;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, w, h);

      setupGradient();
      seedParticles();
    }

    const ro = 'ResizeObserver' in window ? new ResizeObserver(resize) : null;
    if (ro) ro.observe(canvas);
    else window.addEventListener('resize', resize);

    function onMove(e) {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = mouse.x >= 0 && mouse.y >= 0 && mouse.x <= rect.width && mouse.y <= rect.height;
    }
    function onLeave() {
      mouse.active = false;
    }

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);

    resize();

    function drawStatic() {
      if (!gradient) return;
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      ctx.globalAlpha = lineAlpha;

      ctx.beginPath();
      const t = 0;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const phase = Math.random() * Math.PI * 2;
        const a = field.angle(p.x + p.xoff, p.y + p.yoff, t + phase);
        const nx = p.x + Math.cos(a) * 16;
        const ny = p.y + Math.sin(a) * 16;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
      }
      ctx.stroke();
    }

    let lastPaint = performance.now();
    const minFrameMs = Math.max(16, Math.floor(1000 / Math.max(1, Math.min(120, fps))));

    function tick(now) {
      if (now - lastPaint < minFrameMs) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const dt = Math.min(0.033, (now - lastPaint) / 1000);
      lastPaint = now;

      if (!gradient) setupGradient();

      // fade (trails) or full clear
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = trails > 0 ? trails : 1;
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, w, h);

      // one batched stroke
      ctx.globalAlpha = lineAlpha;
      ctx.strokeStyle = gradient;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      ctx.beginPath();

      const t = now * 0.001;
      const step = 60 * speed * dt;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        let a = field.angle(p.x, p.y, t);

        if (interactive && mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 180 * 180) a += Math.atan2(dy, dx) * 0.3;
        }

        const nx = p.x + Math.cos(a) * step;
        const ny = p.y + Math.sin(a) * step;

        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);

        // wrap
        if (nx < 0 || nx > w || ny < 0 || ny > h) {
          p.x = Math.random() * w;
          p.y = Math.random() * h;
        } else {
          p.x = nx;
          p.y = ny;
        }



      }

      ctx.stroke();
      rafRef.current = requestAnimationFrame(tick);
    }

    if (prefersReduce) {
      drawStatic();
    } else {
      rafRef.current = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      if (ro) ro.disconnect();
      else window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
    };
  }, [
    background, colorA, colorB,
    density, speed, maxParticles,
    trails, fps, lineAlpha, lineWidth, interactive
  ]);

  return (
    <div className={`absolute inset-0 z-0 ${className}`} aria-hidden="true">
      <canvas ref={ref} className="h-full w-full pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay
        [background:repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(255,255,255,.05)_3px,transparent_4px)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
}
