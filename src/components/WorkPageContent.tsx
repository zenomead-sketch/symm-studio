"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

type Project = {
  n: string; title: string; category: string; tags: string[];
  desc: string; href: string; live: boolean; year: string;
  accent: string; bg: string; img: string;
};

const projects: Project[] = [
  {
    n: "01", title: "Lien On Us Medical", category: "Healthcare Platform",
    tags: ["Web App", "Analytics", "Healthcare"],
    desc: "A medical referral platform featuring a provider dashboard with real-time analytics and case tracking — built to handle serious volume for Tampa Bay healthcare providers.",
    href: "https://www.lienonusmedical.com/", live: true, year: "2024",
    accent: "#2a6496", bg: "from-[#04101f] to-[#faf8f5]", img: "/portfolio-lien-on-us.png",
  },
  {
    n: "02", title: "Ticket Snipes", category: "Automation Platform",
    tags: ["Full Stack", "E-commerce", "Automation"],
    desc: "High-throughput ticket acquisition system engineered for speed, with fully automated purchasing workflows and real-time inventory monitoring.",
    href: "https://ticketsnipes.lovable.app/", live: true, year: "2024",
    accent: "#7b5ea7", bg: "from-[#0f0620] to-[#faf8f5]", img: "/portfolio-ticket-snipes.png",
  },
  {
    n: "03", title: "Cod Masters 8", category: "Community Platform",
    tags: ["Discord Bot", "Community", "Full Stack"],
    desc: "Full-stack gaming community platform integrated with a custom Discord bot for automated management, alerts, and live leaderboard tracking.",
    href: "https://codmaster8s.com/", live: true, year: "2023",
    accent: "#1a7a5e", bg: "from-[#03120d] to-[#faf8f5]", img: "/portfolio-cod-masters.png",
  },
];

export function WorkPageContent() {
  return (
    <div className="min-h-screen" style={{ background: "#faf8f5" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-44 pb-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
          <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-6">Selected Work</p>
          <h1
            className="font-display font-bold text-paper leading-[0.92]"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Projects we've<br />
            <em className="not-italic text-flame">built.</em>
          </h1>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-36">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border-t border-border">
          {projects.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16,1,0.3,1] }}
              className="bg-void"
            >
              {p.live ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" data-cursor="OPEN" className="group block">
                  <ProjectCard p={p} />
                </a>
              ) : (
                <div className="group"><ProjectCard p={p} /></div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/contact"
            data-cursor="LET'S GO"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-flame text-void font-display font-bold text-[13px] tracking-[0.12em] uppercase hover:bg-paper transition-colors duration-300"
          >
            Start Your Project
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <>
      <div className="relative h-52 overflow-hidden">
        <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 40%, ${p.accent}30)` }} />
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span key={t} className="text-[9px] tracking-widest uppercase px-2 py-1 border backdrop-blur-sm" style={{ borderColor: `${p.accent}60`, color: `${p.accent}ee`, background: "rgba(2,4,11,0.6)" }}>{t}</span>
          ))}
        </div>
      </div>
      <div className="p-6 border-t border-border">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <p className="text-[10px] tracking-widest uppercase text-muted mb-1">{p.category}</p>
            <h2 className="font-display font-bold text-paper group-hover:text-flame transition-colors text-lg">{p.title}</h2>
          </div>
          <div className="flex items-center gap-2 pt-1 flex-shrink-0">
            <span className="text-[10px] text-muted/30 font-mono">{p.year}</span>
            {p.live && (
              <div className="w-6 h-6 border border-border flex items-center justify-center text-muted group-hover:border-flame group-hover:text-flame transition-colors">
                <ArrowUpRight size={11} />
              </div>
            )}
          </div>
        </div>
        <p className="text-muted text-xs leading-relaxed">{p.desc}</p>
        {!p.live && <p className="text-muted/30 text-[10px] tracking-widest uppercase mt-3">Case study coming soon</p>}
      </div>
    </>
  );
}
