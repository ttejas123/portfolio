"use client";

import { motion } from "framer-motion";
import { JOURNAL_TOPICS } from "@/lib/data";
import { IconBookOpen, getIcon } from "./Icons";

const CATEGORY_COLORS: Record<string, string> = {
  "Data Structures": "text-green border-2 border-green bg-bg-primary",
  "Runtime Internals": "text-amber border-2 border-amber bg-bg-primary",
  "Distributed Systems": "text-cyan border-2 border-cyan bg-bg-primary",
  Databases: "text-red border-2 border-red bg-bg-primary",
  Performance: "text-accent-light border-2 border-white bg-bg-primary",
  Architecture: "text-accent border-2 border-white bg-bg-primary",
};

export default function EngineeringJournal() {
  return (
    <section id="journal" className="relative">
      {/* Black headline band */}
      <div className="relative bg-bg-primary border-b-2 border-white">
        <div className="absolute inset-0 dot-bg pointer-events-none opacity-60" />
        <div className="section-container relative py-16 md:py-20">
          <div className="section-label w-fit mb-6">
            <IconBookOpen size={13} className="text-accent-light" />
            Engineering Journal
          </div>
          <h2 className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(2rem,5.5vw,4rem)] max-w-3xl">
            <span className="block text-text-primary">DEEP DIVES &amp;</span>
            <span className="block gradient-text">EXPLORATIONS.</span>
          </h2>
          <p className="text-text-muted text-sm max-w-xl mt-5 leading-relaxed border-l-2 border-white pl-4">
            Topics I study, experiment with, and apply in production.
            Each entry represents hours of research and practical application.
          </p>
        </div>
      </div>

      {/* Purple content band */}
      <div className="relative bg-bg-primary">
        <div className="absolute inset-0 dot-bg pointer-events-none" />
        <div className="section-container relative py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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
                className="retro-card rounded-sm p-5 sm:p-6 group cursor-default flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-bg-primary border-2 border-white flex items-center justify-center">
                    <Icon size={16} className="text-accent-light" />
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-display font-medium border ${categoryStyle}`}
                  >
                    {topic.category}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-text-primary mb-2.5 group-hover:text-accent transition-colors">
                  {topic.title}
                </h3>

                <p className="text-xs text-text-muted leading-relaxed mb-5">
                  {topic.description}
                </p>

                {/* Decorative code block */}
                <div className="mt-auto pt-4">
                  <div className="font-mono text-[10px] text-accent-light bg-bg-primary rounded p-2.5 border-2 border-white">
                    <span className="text-text-muted/40">// research/</span>
                    {topic.title.toLowerCase().replace(/\s+/g, "_")}.md
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
