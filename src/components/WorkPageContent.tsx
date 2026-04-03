"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { getAllProjects, type ProjectDetail } from "@/lib/projects";

const projects = getAllProjects();

export function WorkPageContent() {
  return (
    <div className="min-h-screen" style={{ background: "#faf8f5" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-44 pb-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>

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
                  <Link href={`/work/${p.slug}`} data-cursor="VIEW" className="group block">
                <ProjectCard p={p} />
              </Link>
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

function ProjectCard({ p }: { p: ProjectDetail }) {
  return (
    <>
      <div className="relative h-52 overflow-hidden">
        <Image src={p.images[0].src} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 40%, ${p.accent}30)` }} />
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span key={t} className="text-[9px] tracking-widest uppercase px-2 py-1 border backdrop-blur-sm" style={{ borderColor: `${p.accent}60`, color: `${p.accent}ee`, background: "rgba(28,26,23,0.6)" }}>{t}</span>
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
