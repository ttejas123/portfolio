"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ENGINEERING_CONCEPTS } from "@/lib/data";
import { IconBrain, getIcon } from "./Icons";

export default function EngineeringMindset() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="mindset" className="section-spacing relative">
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
            <IconBrain size={13} className="text-accent-light" />
            Engineering Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-3">
            How I <span className="gradient-text">think about systems</span>
          </h2>
          <p className="text-text-muted text-sm max-w-2xl mx-auto leading-relaxed">
            Principles and patterns that guide my architectural decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
                className={`glass-card rounded-xl p-6 sm:p-7 cursor-pointer group transition-all duration-300 flex flex-col h-full ${
                  isExpanded
                    ? "ring-1 ring-accent/30 bg-glass-hover"
                    : "hover:bg-glass-hover"
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <Icon size={16} className="text-accent-light" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-2.5 group-hover:text-accent transition-colors">
                  {concept.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  {concept.description}
                </p>

                {/* Bottom Section (Pushed to bottom) */}
                <div className="mt-auto pt-2">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {concept.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono text-accent/70 border border-accent/15 rounded bg-accent/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

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
                        <div className="pt-4 border-t border-border">
                          <p className="text-xs text-text-secondary leading-relaxed">
                            {concept.detail}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand indicator */}
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-[10px] font-mono text-text-muted">
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
    </section>
  );
}
