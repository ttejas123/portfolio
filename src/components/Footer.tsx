"use client";

import { PERSONAL } from "@/lib/data";
import { IconMail, IconExternalLink, IconMapPin } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="section-container relative py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="font-mono text-accent font-bold text-sm">T</span>
              </div>
              <span className="font-semibold text-text-primary">{PERSONAL.name}</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-4">{PERSONAL.tagline}</p>
            <p className="text-xs font-mono text-text-muted">Built with systems thinking.</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3">
              <a href={`mailto:${PERSONAL.email}`} className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-accent transition-colors">
                <IconMail size={14} className="text-accent shrink-0" /> {PERSONAL.email}
              </a>
              <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-accent transition-colors">
                <IconExternalLink size={14} className="text-accent shrink-0" /> LinkedIn
              </a>
              <p className="flex items-center gap-2.5 text-sm text-text-muted">
                <IconMapPin size={14} className="text-accent shrink-0" /> {PERSONAL.location}
              </p>
            </div>
          </div>

          {/* Status */}
          <div>
            <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">Status</h4>
            <div className="glass-card rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse-glow" />
                <span className="text-sm text-green font-medium">Available for opportunities</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Open to senior engineering roles involving distributed systems, backend architecture, and platform engineering.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted font-mono">© {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.</p>
          <p className="text-xs text-text-muted font-mono">Next.js · TypeScript · Tailwind · Framer Motion · React Flow</p>
        </div>
      </div>
    </footer>
  );
}
