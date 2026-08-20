"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ENGINEERING_CONCEPTS } from "@/lib/data";
import { IconBrain, getIcon } from "./Icons";

export default function EngineeringMindset() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="mindset" className="relative">
      {/* Black headline band */}
      <div className="relative bg-bg-primary border-b-2 border-white">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />
        <div className="section-container relative py-16 md:py-20">
          <div className="section-label w-fit mb-6">
            <IconBrain size={13} className="text-accent-light" />
            Engineering Mindset
          </div>
          <h2 className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(2rem,5.5vw,4rem)] max-w-3xl">
            <span className="block text-text-primary">HOW I THINK</span>
            <span className="block gradient-text">ABOUT SYSTEMS.</span>
          </h2>
          <p className="text-text-muted text-sm max-w-xl mt-5 leading-relaxed border-l-2 border-white pl-4">
            Principles and patterns that guide my architectural decisions.
          </p>
        </div>
      </div>

      {/* Purple content band */}
      <div className="relative bg-bg-primary">
        <div className="absolute inset-0 dot-bg pointer-events-none" />
        <div className="section-container relative py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {ENGINEERING_CONCEPTS.map((concept, i) => {
            const isExpanded = expandedIndex === i;
            const Icon = getIcon(concept.icon);
            return (
              <motion.div
                key={concept.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className={`retro-card rounded-sm p-5 sm:p-6 cursor-pointer group transition-all duration-300 flex flex-col h-full ${
                  isExpanded
                    ? "ring-2 ring-accent bg-bg-tertiary"
                    : "hover:bg-glass-hover"
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-bg-primary border-2 border-white flex items-center justify-center mb-4">
                  <Icon size={16} className="text-accent-light" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-2.5 group-hover:text-accent transition-colors">
                  {concept.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mb-5">
                  {concept.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {concept.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-display font-medium text-accent-light border-2 border-white rounded bg-bg-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Section (Pushed to bottom) */}
                <div className="mt-auto flex flex-col">
                  {/* Expanded detail */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-2 border-t border-border">
                          <p className="text-xs text-text-secondary leading-relaxed">
                            {concept.detail}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand indicator */}
                  <div className="flex items-center gap-1.5 mt-5">
                    <span className="text-[10px] font-display font-medium text-text-muted uppercase tracking-wide">
                      {isExpanded ? "collapse" : "expand"}
                    </span>
                    <motion.svg
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      className="text-text-muted"
                    >
                      <path
                        d="M2 4l3 3 3-3"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
