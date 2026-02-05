import { useEffect, useRef } from 'react';
import { Noise } from 'noisejs';

/**
 * PerlinFlowLines - Creates flowing lines that animate outward from origin
 * Lines grow/extend from center point with Perlin noise-based curves
 */
export default function PerlinBackground({
    lineCount = 100,
    lineLength = 1000,
    opacity = 0.08,
    speed = 10, // Pixels per frame to extend
    color = { r: 48, g: 221, b: 190 }
}) {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const noiseRef = useRef(null);
    const progressRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        noiseRef.current = new Noise(Math.random());
        progressRef.current = 0;

        // Set canvas size
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const noiseScale = 0.003;
        let noiseTime = Math.random() * 1000; // Random start for variety

        const render = () => {
            const width = canvas.width;
            const height = canvas.height;

            // Clear canvas
            ctx.clearRect(0, 0, width, height);

            // Origin point - just above mockup area (higher up so visible sooner)
            const originX = width / 2;
            const originY = height * 0.62;

            // Calculate max line length to reach screen edges
            const maxDistance = Math.max(
                Math.sqrt(originX * originX + originY * originY),
                Math.sqrt((width - originX) ** 2 + originY ** 2),
                width, height
            );
            const dynamicLineLength = Math.max(lineLength, maxDistance);

            // Animate progress (how far lines have extended)
            progressRef.current = Math.min(progressRef.current + speed, dynamicLineLength);
            const currentLength = progressRef.current;

            // Very slow noise evolution for subtle curve changes
            noiseTime += 0.001;

            // Draw flowing lines spreading from origin
            for (let i = 0; i < lineCount; i++) {
                // Distribute lines in a full fan pattern upward
                const spreadAngle = Math.PI * 1.4; // Wide spread
                const startAngle = -Math.PI / 2 - spreadAngle / 2;
                const angleStep = spreadAngle / (lineCount - 1);
                const baseAngle = startAngle + i * angleStep;

                // Stable per-line noise offset
                const lineNoiseSeed = i * 0.15;

                ctx.beginPath();

                let x = originX;
                let y = originY;

                ctx.moveTo(x, y);

                // Draw the curved line following Perlin noise
                const stepsToRender = Math.floor(currentLength / 3);

                for (let step = 0; step < stepsToRender; step++) {
                    // Get curve influence from Perlin noise
                    const noiseValue = noiseRef.current.perlin3(
                        x * noiseScale,
                        y * noiseScale,
                        noiseTime + lineNoiseSeed
                    );

                    // Curve increases gradually along the line
                    const curveInfluence = (step / stepsToRender) * 0.6;
                    const angle = baseAngle + noiseValue * curveInfluence;

                    // Move along the line
                    const stepSize = 3;
                    x += Math.cos(angle) * stepSize;
                    y += Math.sin(angle) * stepSize;

                    ctx.lineTo(x, y);
                }

                // Subtle color variation across spread
                const normalizedPos = i / lineCount;
                const hueShift = (normalizedPos - 0.5) * 30;
                const r = Math.max(0, Math.min(255, color.r + hueShift * 0.4));
                const g = Math.max(0, Math.min(255, color.g + hueShift * 0.2));
                const b = Math.max(0, Math.min(255, color.b - hueShift * 0.2));

                // Edge fade for softer appearance
                const edgeFade = 1 - Math.pow(Math.abs(normalizedPos - 0.5) * 2, 2) * 0.5;

                ctx.strokeStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${opacity * edgeFade})`;
                ctx.lineWidth = 0.6;
                ctx.stroke();
            }

            animationRef.current = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [lineCount, lineLength, opacity, speed, color]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
            aria-hidden="true"
        />
    );
}
