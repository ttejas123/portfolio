"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PERSONAL, HERO_HEADLINES } from "@/lib/data";
import NetworkGraph from "./NetworkGraph";
import TerminalOverlay from "./TerminalOverlay";

export default function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const headline = HERO_HEADLINES[headlineIndex];

    if (isTyping) {
      if (displayText.length < headline.length) {
        const timeout = setTimeout(() => {
          setDisplayText(headline.slice(0, displayText.length + 1));
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2500);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 20);
        return () => clearTimeout(timeout);
      } else {
        setHeadlineIndex((prev) => (prev + 1) % HERO_HEADLINES.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, headlineIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0">
        <NetworkGraph />
      </div>

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(10, 10, 15, 0.6) 50%, rgba(10, 10, 15, 0.95) 100%)",
        }}
      />

      {/* Top gradient fade */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-bg-primary to-transparent pointer-events-none" />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 section-container w-full pt-24 pb-12">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 xl:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-label mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-glow" />
                Systems Engineer
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
            >
              <span className="text-text-primary">I build </span>
              <span className="gradient-text">scalable systems</span>
              <span className="text-text-primary"> that power products.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-mono text-base sm:text-lg text-text-secondary mb-3 h-14"
            >
              <span className="text-accent">❯ </span>
              <span>{displayText}</span>
              <span className="inline-block w-2.5 h-5 bg-accent/70 ml-0.5 animate-blink align-middle" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-text-muted text-base max-w-xl mb-8 leading-relaxed"
            >
              {PERSONAL.tagline} Currently engineering analytics infrastructure
              at <span className="text-text-secondary font-medium">Brandlock</span>,
              processing{" "}
              <span className="text-accent font-medium">1M+ records/day</span>{" "}
              across 200+ merchant clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#systems"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-light transition-all glow-accent"
              >
                Explore Systems
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-0.5"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-secondary font-medium text-sm hover:border-accent/30 hover:text-accent transition-all"
              >
                View Architecture
              </a>
            </motion.div>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {["Node.js", "PostgreSQL", "Redis", "RabbitMQ", "React", "AWS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono text-text-muted border border-border rounded-full bg-glass"
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <TerminalOverlay />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-text-muted tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-4 h-7 rounded-full border border-border flex items-start justify-center p-1"
        >
          <div className="w-1 h-1.5 rounded-full bg-accent/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
