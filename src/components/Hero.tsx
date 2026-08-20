"use client";

import { PERSONAL } from "@/lib/data";
import { event } from "@/utils/analytics";

const STACK = ["Node.js", "PostgreSQL", "Redis", "RabbitMQ", "React", "AWS"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden border-b-2 border-white">
      <div className="absolute inset-0 grid-bg" />

      {/* Oversized graphic block — static poster accent */}
      <div
        className="absolute -right-24 top-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-bg-primary border-2 border-white pointer-events-none hidden lg:block"
        style={{ transform: "translateY(-50%) rotate(8deg)" }}
      />
      <div
        className="absolute right-10 top-1/3 w-40 h-40 bg-accent pointer-events-none hidden lg:block"
        style={{ transform: "rotate(-12deg)" }}
      />

      {/* Vertical editorial label */}
      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-2 font-display font-medium text-xs tracking-[0.2em] text-accent-light uppercase"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green" />
        Systems Engineer — Mumbai, India
      </div>

      {/* Content */}
      <div className="relative z-10 section-container w-full pt-24 pb-16">
        <div className="max-w-4xl">
          <div className="section-label mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            Available for opportunities
          </div>

          <h1 className="font-display font-extrabold leading-[0.95] tracking-tight mb-8 text-[clamp(2.75rem,7vw,6rem)]">
            <span className="block text-text-primary">I BUILD</span>
            <span className="block gradient-text">SCALABLE</span>
            <span className="block text-text-primary">SYSTEMS.</span>
          </h1>

          <p className="text-text-secondary text-lg max-w-xl mb-10 leading-relaxed border-l-2 border-white pl-5">
            {PERSONAL.tagline} Currently engineering analytics infrastructure
            at <span className="text-text-primary font-semibold">Brandlock</span>,
            processing{" "}
            <span className="text-accent font-semibold">1M+ records/day</span>{" "}
            across 200+ merchant clients.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="/systems"
              onClick={() => {
                event({
                  action: "explore_systems_clicked",
                  category: "engagement",
                  label: "Hero Explore Systems CTA",
                });
              }}
              className="retro-btn px-7 py-3.5 text-sm"
            >
              Explore Systems
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
              href={`mailto:${PERSONAL.email}`}
              className="retro-btn-ghost px-7 py-3.5 text-sm uppercase"
            >
              Get in touch
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-display font-medium text-text-muted border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
