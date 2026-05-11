"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { IconRocket } from "./Icons";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section-spacing relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label mx-auto w-fit">
            <IconRocket size={13} className="text-accent-light" /> Engineering Missions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-3">
            Where I&apos;ve <span className="gradient-text">engineered impact</span>
          </h2>
          <p className="text-text-muted text-sm max-w-2xl mx-auto leading-relaxed">
            Each role was a mission with technical challenges and measurable outcomes.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-accent via-accent/50 to-transparent" />

          {EXPERIENCE.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={exp.company}
                className={`relative flex mb-12 ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative pl-14 md:pl-0 w-full md:w-[calc(50%-2rem)]"
                >
                {/* Connecting Line (Mobile) */}
                <div className="md:hidden absolute top-[30px] left-[24px] h-px bg-border z-0 w-[32px]" />
                
                {/* Connecting Line (Desktop) */}
                <div className={`hidden md:block absolute top-[30px] h-px bg-border z-0 w-[32px] ${
                  isLeft ? "-right-[32px]" : "-left-[32px]"
                }`} />

                <div className={`absolute top-6 w-3 h-3 rounded-full bg-accent border-2 border-bg-primary z-10 left-[18px] ${
                  isLeft
                    ? "md:left-auto md:-right-[38px]"
                    : "md:-left-[38px]"
                }`}>
                  <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
                </div>

                <div className="bg-glass backdrop-blur-[20px] border border-border transition-all duration-300 will-change-transform hover:bg-glass-hover hover:border-border-hover hover:-translate-y-[1px] rounded-xl p-6 glow-accent-hover">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">{exp.company}</h3>
                      <p className="text-sm text-accent font-medium mt-0.5">{exp.role}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-mono text-text-muted">{exp.period}</p>
                      <p className="text-xs text-text-muted">{exp.location}</p>
                    </div>
                  </div>

                  <div className="font-mono text-[11px] text-amber bg-amber/5 border border-amber/15 rounded-lg px-3 py-2 mb-4">
                    <span className="text-text-muted">MISSION:</span> {exp.mission}
                  </div>

                  <p className="text-sm text-text-muted mb-4 leading-relaxed">{exp.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {exp.achievements.map((a, ai) => (
                      <div key={ai} className="bg-bg-secondary/50 rounded-lg p-3 border border-border">
                        <div className="text-lg font-bold font-mono gradient-text">{a.metric}</div>
                        <div className="text-[11px] text-text-muted leading-snug mt-1">{a.description}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">Key Contributions</h4>
                    <ul className="space-y-1.5">
                      {exp.highlights.slice(0, 4).map((h, hi) => (
                        <li key={hi} className="flex items-start gap-2 text-xs text-text-secondary">
                          <span className="text-accent mt-0.5 shrink-0">▸</span>{h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] font-mono text-accent/70 border border-accent/15 rounded bg-accent/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
