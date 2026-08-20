"use client";

import { PERSONAL } from "@/lib/data";
import { IconMail, IconExternalLink, IconMapPin } from "./Icons";
import { event } from "@/utils/analytics";

const INITIALS = PERSONAL.name
  .split(" ")
  .map((w) => w[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-border bg-bg-secondary">
      <div className="section-container relative py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 pb-14 border-b border-border">
          <h2 className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(2.25rem,6vw,4.5rem)]">
            <span className="block text-on-panel">LET&apos;S BUILD</span>
            <span className="block gradient-text retro-glow-text italic">SOMETHING.</span>
          </h2>
          <a
            href={`mailto:${PERSONAL.email}`}
            onClick={() => {
              event({
                action: "contact_email_clicked",
                category: "engagement",
                label: "Footer Big CTA Clicked",
              });
            }}
            className="retro-btn px-7 py-3.5 text-sm shrink-0"
          >
            Say Hello
          </a>
        </div>

        <div className="section-label w-fit mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
          End of transmission
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4 group/footer">
              <div
                className="w-10 h-10 bg-accent flex items-center justify-center font-display font-extrabold text-sm text-bg-primary transition-all group-hover/footer:shadow-[3px_3px_0_0_var(--color-accent-light)]"
                style={{ transform: "rotate(-4deg)" }}
              >
                {INITIALS}
              </div>
              <span className="font-display font-bold text-lg text-on-panel">{PERSONAL.name}</span>
            </div>
            <p className="text-sm text-on-panel-muted leading-relaxed mb-4">{PERSONAL.tagline}</p>
            <p className="text-xs font-display font-semibold text-accent-light bracket">Built with systems thinking</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-display font-semibold text-on-panel-muted uppercase tracking-wide mb-4 bracket w-fit">Contact</h4>
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
                className="flex items-center gap-2.5 text-sm text-on-panel hover:text-accent transition-colors"
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
                className="flex items-center gap-2.5 text-sm text-on-panel hover:text-accent transition-colors"
              >
                <IconExternalLink size={14} className="text-accent shrink-0" /> LinkedIn
              </a>
              <p className="flex items-center gap-2.5 text-sm text-on-panel-muted">
                <IconMapPin size={14} className="text-accent shrink-0" /> {PERSONAL.location}
              </p>
            </div>
          </div>

          {/* Status */}
          <div>
            <h4 className="text-xs font-display font-semibold text-on-panel-muted uppercase tracking-wide mb-4 bracket w-fit">Status</h4>
            <div className="retro-card p-5">
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
          <p className="text-xs text-on-panel-muted font-display">© {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.</p>
          <p className="text-xs text-on-panel-muted font-display">Next.js · TypeScript · Tailwind · Framer Motion · React Flow</p>
        </div>
      </div>
    </footer>
  );
}
