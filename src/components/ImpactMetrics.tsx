"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { IMPACT_METRICS } from "@/lib/data";
import { IconBarChart } from "./Icons";
import { getIcon } from "./Icons";

function AnimatedCounter({
  value,
  suffix,
  duration = 2,
  inView,
}: {
  value: number;
  suffix: string;
  duration?: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const isDecimal = value % 1 !== 0;

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;

      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function ImpactMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="relative">
      {/* Black headline band */}
      <div className="relative bg-bg-primary border-b-2 border-border">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />
        <div className="section-container relative py-16 md:py-20">
          <div className="section-label w-fit mb-6">
            <IconBarChart size={13} className="text-accent-light" />
            Production Impact
          </div>
          <h2 className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(2rem,5.5vw,4rem)] max-w-3xl">
            <span className="block text-text-primary">NUMBERS FROM</span>
            <span className="block gradient-text">PRODUCTION SYSTEMS.</span>
          </h2>
          <p className="text-text-muted text-sm max-w-xl mt-5 leading-relaxed border-l-2 border-border pl-4">
            Real metrics from systems I&apos;ve designed, built, and maintained at scale.
          </p>
        </div>
      </div>

      {/* Purple content band */}
      <div className="relative bg-bg-primary">
        <div className="absolute inset-0 dot-bg pointer-events-none" />
        <div className="section-container relative py-16">

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {IMPACT_METRICS.map((metric, i) => {
            const Icon = getIcon(metric.icon);
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="retro-card rounded-sm p-5 text-center group"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-9 h-9 rounded-lg bg-bg-primary border-2 border-border flex items-center justify-center">
                    <Icon size={16} className="text-accent-light" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-mono gradient-text mb-2">
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                    inView={isInView}
                  />
                </div>
                <div className="text-xs font-semibold text-text-primary mb-1">
                  {metric.label}
                </div>
                <div className="text-[11px] text-text-muted leading-relaxed">{metric.description}</div>

                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
