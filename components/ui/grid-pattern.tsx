"use client";
import { useEffect, useRef } from "react";

interface GridPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  spacing?: number;
  size?: number;
  dotColor?: string;
  dotOpacity?: number;
  blur?: number;
}

export function GridPattern({
  width = 100,
  height = 100,
  spacing = 30,
  size = 1,
  dotColor = "#6366F1",
  dotOpacity = 0.3,
  blur = 0,
  className,
  ...props
}: GridPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const canvasWidth = width * dpr;
    const canvasHeight = height * dpr;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);
    ctx.fillStyle = dotColor;
    ctx.globalAlpha = dotOpacity;

    if (blur > 0) {
      ctx.filter = `blur(${blur}px)`;
    }

    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  }, [width, height, spacing, size, dotColor, dotOpacity, blur]);

  return (
    <div className={className} {...props}>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          pointerEvents: "none",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
} 