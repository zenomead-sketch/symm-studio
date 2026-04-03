"use client";

import Link from "next/link";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-surface border-t border-border">
      {/* Big wordmark */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-6 border-b border-border overflow-hidden">
        <p
          className="font-display font-bold text-paper/[0.04] leading-none select-none whitespace-nowrap"
          style={{ fontSize: "clamp(2rem, 14vw, 11rem)" }}
        >
          Symm Studios
        </p>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between gap-10 md:gap-6">
        <div className="space-y-3">
          <p className="text-sm text-muted leading-relaxed max-w-xs">
            World-class brand identity, web development, and creative direction. Based in St. Petersburg, FL.
          </p>
          <a
            href="mailto:symmwebstudio@gmail.com"
            className="block text-xs tracking-widest uppercase text-paper/50 hover:text-flame transition-colors"
          >
            symmwebstudio@gmail.com
          </a>
          <div className="flex gap-4 pt-1">
            <a href="https://instagram.com/symmwebstudio" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted hover:text-flame transition-colors"><Instagram size={17} /></a>
            <a href="https://linkedin.com/company/symmstudios" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-flame transition-colors"><Linkedin size={17} /></a>
            <a href="https://www.facebook.com/share/17P6SmkdwP/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted hover:text-flame transition-colors"><Facebook size={17} /></a>
            <a href="https://x.com/symmstudio" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-muted hover:text-flame transition-colors"><Twitter size={17} /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-muted/50 mb-4">Navigate</p>
            <ul className="space-y-2.5 text-sm">
              {[["Work", "/work"], ["Services", "/services"], ["Pricing", "/pricing"], ["About", "/about"], ["Contact", "/contact"]].map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="text-muted hover:text-paper transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-muted/50 mb-4">Services</p>
            <ul className="space-y-2.5 text-sm">
              {["Brand Identity", "Web Dev", "UI/UX", "App Dev", "Agentic Automation"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-muted hover:text-paper transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 border-t border-border flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
        <p className="text-xs text-muted/40">&copy; {year} Symm Studios LLC. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href="/privacy" className="text-xs text-muted/40 hover:text-muted transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-xs text-muted/40 hover:text-muted transition-colors">Terms of Service</Link>
          <p className="text-xs text-muted/40">Mon–Fri 7am–5pm EST</p>
        </div>
      </div>
    </footer>
  );
}
