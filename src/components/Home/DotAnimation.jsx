import React, { useRef, useEffect } from 'react';

const DotAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const spacing = 22;
        const margin = 8;
        let width = 0;
        let height = 0;
        let dots = [];

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            width = rect.width;
            height = rect.height;

            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;

            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            dots = [];
            for (let x = margin; x < width - margin; x += spacing) {
                for (let y = margin; y < height - margin; y += spacing) {
                    dots.push({
                        x,
                        y,
                        baseX: x,
                        baseY: y,
                        size: Math.random() * 3 + 2,
                        color: `hsl(${Math.random() * 300 + 200}, 70%, 60%)`
                    });
                }
            }
        };

        resizeCanvas();

        const resizeObserver = new ResizeObserver(resizeCanvas);
        resizeObserver.observe(canvas);

        const mouse = { x: null, y: null, active: false };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            dots.forEach(dot => {
                if (mouse.active) {
                    const dx = mouse.x - dot.x;
                    const dy = mouse.y - dot.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 80;

                    if (distance < maxDist) {
                        const angle = Math.atan2(dy, dx);
                        const force = (maxDist - distance) / maxDist;
                        const moveX = Math.cos(angle) * force * 10;
                        const moveY = Math.sin(angle) * force * 10;
                        dot.x -= moveX;
                        dot.y -= moveY;
                    } else {
                        dot.x += (dot.baseX - dot.x) * 0.07;
                        dot.y += (dot.baseY - dot.y) * 0.07;
                    }
                } else {
                    dot.x += (dot.baseX - dot.x) * 0.07;
                    dot.y += (dot.baseY - dot.y) * 0.07;
                }

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
                ctx.fillStyle = dot.color;
                ctx.fill();
            });

            requestAnimationFrame(draw);
        };

        draw();

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseEnter = () => { mouse.active = true; };
        const handleMouseLeave = () => {
            mouse.active = false;
            mouse.x = null;
            mouse.y = null;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseenter', handleMouseEnter);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            resizeObserver.disconnect();
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseenter', handleMouseEnter);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: '100%',
                height: '100%',
                display: 'block',
                cursor: 'pointer',
                borderRadius: '20px',
            }}
        />
    );
};

export default DotAnimation;
