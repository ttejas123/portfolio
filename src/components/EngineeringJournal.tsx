"use client";

import { motion } from "framer-motion";
import { JOURNAL_TOPICS } from "@/lib/data";
import { IconBookOpen, getIcon } from "./Icons";

const CATEGORY_COLORS: Record<string, string> = {
  "Data Structures": "text-green border-green/20 bg-green/5",
  "Runtime Internals": "text-amber border-amber/20 bg-amber/5",
  "Distributed Systems": "text-cyan border-cyan/20 bg-cyan/5",
  Databases: "text-red border-red/20 bg-red/5",
  Performance: "text-accent-light border-accent/20 bg-accent/5",
  Architecture: "text-accent border-accent/20 bg-accent/5",
};

export default function EngineeringJournal() {
  return (
    <section id="journal" className="section-spacing relative">
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
            <IconBookOpen size={13} className="text-accent-light" />
            Engineering Journal
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-3">
            Deep dives & <span className="gradient-text">explorations</span>
          </h2>
          <p className="text-text-muted text-sm max-w-2xl mx-auto leading-relaxed">
            Topics I study, experiment with, and apply in production.
            Each entry represents hours of research and practical application.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {JOURNAL_TOPICS.map((topic, i) => {
            const categoryStyle =
              CATEGORY_COLORS[topic.category] || CATEGORY_COLORS.Architecture;
            const Icon = getIcon(topic.icon);

            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-card rounded-xl p-6 sm:p-7 group hover:bg-glass-hover transition-all cursor-default flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon size={16} className="text-accent-light" />
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${categoryStyle}`}
                  >
                    {topic.category}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-text-primary mb-2.5 group-hover:text-accent transition-colors">
                  {topic.title}
                </h3>

                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  {topic.description}
                </p>

                {/* Decorative code block */}
                <div className="mt-auto pt-4">
                  <div className="font-mono text-[10px] text-accent/40 bg-accent/5 rounded p-2.5 border border-accent/10">
                    <span className="text-text-muted/40">// research/</span>
                    {topic.title.toLowerCase().replace(/\s+/g, "_")}.md
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
