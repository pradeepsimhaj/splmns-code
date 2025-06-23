import React, { useRef, useEffect } from 'react';

export default function ConfettiBackground() {
  const ref = useRef();
  useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext('2d');
    let w = c.width = window.innerWidth;
    let h = c.height = window.innerHeight;
    const colors = ['#FFD700','#FF69B4','#00FFFF','#ADFF2F','#FF4500'];
    const pieces = Array.from({ length: 200 }).map(() => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 4 + 2,
      dx: (Math.random() - .5) * 1.5,
      dy: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    let anim;
    const update = () => {
      ctx.clearRect(0,0,w,h);
      pieces.forEach(p => {
        p.x += p.dx; p.y += p.dy;
        if (p.y > h) { p.y = -10; p.x = Math.random() * w; }
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.r, p.r);
      });
      anim = requestAnimationFrame(update);
    };
    update();

    window.addEventListener('resize', () => {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
    });
    return () => cancelAnimationFrame(anim);
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position:'fixed',top:0,left:0,zIndex:0 }}
    />
  );
}
