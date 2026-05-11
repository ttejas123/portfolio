"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { IconGear } from "./Icons";

const STATUS_CONFIG = {
  production: { label: "Production", color: "bg-green", textColor: "text-green" },
  shipped: { label: "Shipped", color: "bg-cyan", textColor: "text-cyan" },
  experiment: { label: "Experiment", color: "bg-amber", textColor: "text-amber" },
};

export default function SystemsExperiments() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filters = ["all", "production", "shipped", "experiment"];
  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.status === filter);

  return (
    <section id="systems" className="section-spacing relative">
      <div className="absolute inset-0 dot-bg pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label mx-auto w-fit">
            <IconGear size={13} className="text-accent-light" />
            Systems & Experiments
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-3">
            Engineering <span className="gradient-text">explorations</span>
          </h2>
          <p className="text-text-muted text-sm max-w-2xl mx-auto leading-relaxed">
            Production systems and experimental architectures I&apos;ve built,
            with the engineering tradeoffs behind each.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono capitalize transition-all ${
                filter === f
                  ? "bg-accent/15 text-accent border border-accent/30"
                  : "text-text-muted border border-border hover:border-border-hover hover:text-text-secondary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              const status =
                STATUS_CONFIG[project.status as keyof typeof STATUS_CONFIG];
              const globalIndex = PROJECTS.indexOf(project);
              const isSelected = selectedProject === globalIndex;

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  onClick={() =>
                    setSelectedProject(isSelected ? null : globalIndex)
                  }
                  className={`glass-card rounded-xl p-5 cursor-pointer group transition-all duration-300 ${
                    isSelected ? "ring-1 ring-accent/30" : ""
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono ${status.textColor} border border-current/20`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${status.color}`}
                      />
                      {status.label}
                    </span>
                  </div>

                  <p className="text-sm text-text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Architecture */}
                  <div className="font-mono text-[11px] text-accent/60 bg-accent/5 rounded-lg p-3 mb-4 border border-accent/10">
                    <span className="text-text-muted block mb-1 text-[10px] uppercase tracking-wider">
                      Architecture
                    </span>
                    {project.architecture}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono text-text-muted border border-border rounded bg-bg-secondary/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-border space-y-4">
                          {/* Challenges */}
                          <div>
                            <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                              Scaling Challenges
                            </h4>
                            <ul className="space-y-1.5">
                              {project.challenges.map((c, ci) => (
                                <li
                                  key={ci}
                                  className="flex items-start gap-2 text-xs text-text-secondary"
                                >
                                  <span className="text-amber mt-0.5">▸</span>
                                  {c}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tradeoffs */}
                          <div>
                            <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                              Engineering Tradeoffs
                            </h4>
                            <p className="text-xs text-text-secondary leading-relaxed">
                              {project.tradeoffs}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand indicator */}
                  <div className="flex items-center justify-end gap-1 mt-2">
                    <span className="text-[10px] font-mono text-text-muted">
                      {isSelected ? "less" : "details"}
                    </span>
                    <motion.svg
                      animate={{ rotate: isSelected ? 180 : 0 }}
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
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
