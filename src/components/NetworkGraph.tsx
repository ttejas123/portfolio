"use client";

import { useRef, useEffect, useCallback } from "react";
import { NETWORK_NODES, NETWORK_EDGES } from "@/lib/data";

interface Particle {
  x: number;
  y: number;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  progress: number;
  speed: number;
  edgeIndex: number;
}

export default function NetworkGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1, y: -1 });

  const createParticle = useCallback(
    (w: number, h: number): Particle => {
      const edgeIndex = Math.floor(Math.random() * NETWORK_EDGES.length);
      const edge = NETWORK_EDGES[edgeIndex];
      const fromNode = NETWORK_NODES.find((n) => n.id === edge.from)!;
      const toNode = NETWORK_NODES.find((n) => n.id === edge.to)!;
      return {
        x: fromNode.x * w,
        y: fromNode.y * h,
        fromX: fromNode.x * w,
        fromY: fromNode.y * h,
        toX: toNode.x * w,
        toY: toNode.y * h,
        progress: 0,
        speed: 0.003 + Math.random() * 0.004,
        edgeIndex,
      };
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w: number, h: number;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Recreate particles
      particlesRef.current = Array.from({ length: 20 }, () =>
        createParticle(w, h)
      );
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", () => {
      mouseRef.current = { x: -1, y: -1 };
    });

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const mouse = mouseRef.current;

      // Draw edges
      NETWORK_EDGES.forEach((edge) => {
        const fromNode = NETWORK_NODES.find((n) => n.id === edge.from)!;
        const toNode = NETWORK_NODES.find((n) => n.id === edge.to)!;
        const fx = fromNode.x * w;
        const fy = fromNode.y * h;
        const tx = toNode.x * w;
        const ty = toNode.y * h;

        ctx.beginPath();
        ctx.moveTo(fx, fy);
        ctx.lineTo(tx, ty);
        ctx.strokeStyle = "rgba(99, 102, 241, 0.12)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw nodes
      NETWORK_NODES.forEach((node) => {
        const nx = node.x * w;
        const ny = node.y * h;

        // Check mouse proximity
        let proximity = 0;
        if (mouse.x >= 0) {
          const dist = Math.hypot(mouse.x - nx, mouse.y - ny);
          proximity = Math.max(0, 1 - dist / 150);
        }

        const baseRadius = 4 + proximity * 3;

        // Glow
        if (proximity > 0) {
          const gradient = ctx.createRadialGradient(
            nx, ny, 0,
            nx, ny, 30 + proximity * 20
          );
          gradient.addColorStop(0, `rgba(99, 102, 241, ${0.2 * proximity})`);
          gradient.addColorStop(1, "rgba(99, 102, 241, 0)");
          ctx.beginPath();
          ctx.arc(nx, ny, 30 + proximity * 20, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Node dot
        ctx.beginPath();
        ctx.arc(nx, ny, baseRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${0.6 + proximity * 0.4})`;
        ctx.fill();

        // Inner dot
        ctx.beginPath();
        ctx.arc(nx, ny, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#818cf8";
        ctx.fill();

        // Label
        ctx.font = `${10 + proximity * 2}px "JetBrains Mono", monospace`;
        ctx.fillStyle = `rgba(148, 163, 184, ${0.5 + proximity * 0.5})`;
        ctx.textAlign = "center";
        ctx.fillText(node.label, nx, ny - baseRadius - 8);
      });

      // Draw and update particles
      particlesRef.current.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          Object.assign(p, createParticle(w, h));
          return;
        }

        p.x = p.fromX + (p.toX - p.fromX) * p.progress;
        p.y = p.fromY + (p.toY - p.fromY) * p.progress;

        const alpha = Math.sin(p.progress * Math.PI) * 0.8;

        // Particle glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 8);
        grd.addColorStop(0, `rgba(129, 140, 248, ${alpha})`);
        grd.addColorStop(1, `rgba(129, 140, 248, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Particle core
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(199, 210, 254, ${alpha})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
}
