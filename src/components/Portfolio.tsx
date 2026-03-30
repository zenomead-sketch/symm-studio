"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    n: "01",
    title: "Lien On Us\nMedical",
    category: "Healthcare Platform",
    tags: ["Web App", "Analytics", "Dashboard"],
    desc: "A medical referral platform with real-time provider dashboard and case tracking — engineered for serious volume.",
    href: "https://www.lienonusmedical.com/",
    live: true,
    year: "2024",
    accent: "#2a6496",
    dimAccent: "rgba(42,100,150,0.08)",
    img: "/portfolio-lien-on-us.png",
  },
  {
    n: "02",
    title: "Ticket\nSnipes",
    category: "Automation Platform",
    tags: ["Full Stack", "E-commerce", "Automation"],
    desc: "High-throughput ticket acquisition system built for speed — fully automated purchasing with real-time monitoring.",
    href: "https://ticketsnipes.lovable.app/",
    live: true,
    year: "2024",
    accent: "#7b5ea7",
    dimAccent: "rgba(123,94,167,0.08)",
    img: "/portfolio-ticket-snipes.png",
  },
  {
    n: "03",
    title: "Cod\nMasters 8",
    category: "Community Platform",
    tags: ["Discord Bot", "Community", "Full Stack"],
    desc: "Full-stack gaming community platform with a custom Discord bot for automated management and live leaderboard alerts.",
    href: "https://codmaster8s.com/",
    live: true,
    year: "2023",
    accent: "#1a7a5e",
    dimAccent: "rgba(26,122,94,0.08)",
    img: "/portfolio-cod-masters.png",
  },
];

function ProjectPanel({ p, index }: { p: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className="relative border-t border-paper/[0.06] overflow-hidden group"
      style={{ minHeight: "clamp(320px, 45vw, 520px)" }}
    >
      {/* Accent glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 60% at 30% 50%, ${p.accent}18, transparent)` }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20 flex flex-col md:flex-row items-start md:items-center gap-10 h-full relative z-10">

        {/* Left: number + title */}
        <motion.div style={{ y: yText, opacity }} className="flex-1 min-w-0">
          <div className="flex items-start gap-5 mb-6">
            <span
              className="font-display font-bold text-paper/[0.06] leading-none select-none flex-shrink-0"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
            >
              {p.n}
            </span>
          </div>
          <div className="mb-6 overflow-hidden rounded-sm opacity-60 group-hover:opacity-90 transition-opacity duration-500" style={{ maxWidth: "clamp(200px, 30vw, 380px)" }}>
            <Image src={p.img} alt={p.title.replace("\n", " ")} width={760} height={427} className="w-full h-auto object-cover" />
          </div>
          <h3
            className="font-display font-bold text-paper group-hover:text-paper transition-colors leading-[0.9]"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              letterSpacing: "-0.035em",
              whiteSpace: "pre-line",
            }}
          >
            {p.title}
          </h3>
        </motion.div>

        {/* Right: meta + desc */}
        <motion.div
          style={{ opacity }}
          className="md:max-w-sm flex-shrink-0 w-full"
        >
          <p
            className="text-[10px] tracking-[0.22em] uppercase mb-3 font-medium"
            style={{ color: p.accent }}
          >
            {p.category}
          </p>
          <p className="text-paper/40 text-sm leading-relaxed mb-6">{p.desc}</p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 border"
                style={{ borderColor: `${p.accent}30`, color: `${p.accent}90` }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[10px] text-paper/20 font-mono">{p.year}</span>
            {p.live ? (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="OPEN"
                className="group/link inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-medium transition-colors"
                style={{ color: p.accent }}
              >
                View Live
                <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            ) : (
              <span className="text-[10px] tracking-widest uppercase text-paper/20">
                Case study soon
              </span>
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom border line that grows on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div
          className="h-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
          style={{ background: p.accent, opacity: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section className="bg-[#faf8f5] border-t border-paper/[0.05]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.22em] uppercase text-paper/60 mb-4">
              Selected Work
            </p>
            <h2
              className="font-display font-bold text-paper leading-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.025em" }}
            >
              Projects we're<br />proud of
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-paper/50 hover:text-paper transition-colors flex-shrink-0"
          >
            All Work <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>

      {/* Cinematic project panels */}
      <div className="pb-0">
        {projects.map((p, i) => (
          <ProjectPanel key={p.n} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}
