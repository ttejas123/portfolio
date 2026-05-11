"use client";

import { PERSONAL } from "@/lib/data";
import { IconMail, IconExternalLink, IconMapPin } from "./Icons";
import { event } from "@/utils/analytics";

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="section-container relative py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4 group/footer">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-border flex items-center justify-center overflow-hidden shadow-sm transition-all group-hover/footer:border-accent/30">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-cover p-1.5 transition-transform duration-500 group-hover/footer:scale-110 dark:invert dark:hue-rotate-180" />
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
              <a 
                href={`mailto:${PERSONAL.email}`} 
                onClick={() => {
                  event({
                    action: "contact_email_clicked",
                    category: "engagement",
                    label: "Footer Email Clicked",
                  });
                }}
                className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <IconMail size={14} className="text-accent shrink-0" /> {PERSONAL.email}
              </a>
              <a 
                href={PERSONAL.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => {
                  event({
                    action: "social_link_clicked",
                    category: "engagement",
                    label: "Footer LinkedIn Clicked",
                  });
                }}
                className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-accent transition-colors"
              >
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
            <div className="bg-glass backdrop-blur-[20px] border border-border transition-all duration-300 will-change-transform hover:bg-glass-hover hover:border-border-hover hover:-translate-y-[1px] rounded-lg p-5">
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
