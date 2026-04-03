"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";
import { type ProjectDetail } from "@/lib/projects";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.75, delay, ease: EASE },
});

const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, delay, ease: EASE },
});


export function CaseStudyContent({
  project: p,
  nextProject: next,
}: {
  project: ProjectDetail;
  nextProject: ProjectDetail;
}) {
  return (
    <div className="min-h-screen" style={{ background: "#faf8f5" }}>

      {/* ── HERO ── */}
      <div style={{ background: "#faf8f5" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-12 md:pb-16">

          {/* Back nav */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-10"
          >
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase font-mono text-muted hover:text-flame transition-colors"
            >
              <ArrowLeft size={10} className="group-hover:-translate-x-0.5 transition-transform" />
              All Work
            </Link>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.13, ease: EASE }}
            className="font-display font-bold text-paper leading-[0.9]"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9.5rem)", letterSpacing: "-0.04em" }}
          >
            {p.title}
          </motion.h1>

          {/* Desc + tags */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
            className="mt-8 border-t border-border"
          >
            <p className="text-[10px] tracking-[0.26em] uppercase font-mono text-flame pt-4 mb-6">{p.category}</p>
            <div className="flex md:justify-end">
              <div className="flex flex-col md:items-end gap-3">
                <p className="text-muted text-sm leading-relaxed md:text-right max-w-sm">{p.desc}</p>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] tracking-[0.18em] uppercase px-2.5 py-1.5 border border-border font-mono text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── HERO IMAGE ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
        className="relative w-full"
        style={{ height: "clamp(320px, 60vh, 700px)" }}
      >
        <Image
          src={p.images[0].src}
          alt={p.images[0].alt}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, #faf8f5 0%, transparent 8%, transparent 80%, #faf8f5 100%)" }}
        />
      </motion.div>


      {/* ── CHALLENGE + APPROACH ── */}
      <div style={{ background: "#faf8f5" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">

          {/* Challenge */}
          <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-20 pb-20 md:pb-28 border-b border-border">
            <motion.div {...fade(0)}>
              <span
                className="block font-display font-bold leading-none mb-3 select-none"
                style={{ fontSize: "clamp(3.5rem, 6vw, 5rem)", letterSpacing: "-0.05em", color: "rgba(28,26,23,0.07)" }}
              >
                01
              </span>
              <p className="text-[10px] tracking-[0.22em] uppercase font-mono text-flame">The Challenge</p>
            </motion.div>
            <motion.div {...reveal(0.05)}>
              <h2
                className="font-display font-bold text-paper leading-tight mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.03em" }}
              >
                What needed solving
              </h2>
              <p className="text-muted text-base leading-[1.8] max-w-2xl">{p.problem}</p>
            </motion.div>
          </div>

          {/* Approach */}
          <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-20 pt-20 md:pt-28">
            <motion.div {...fade(0)}>
              <span
                className="block font-display font-bold leading-none mb-3 select-none"
                style={{ fontSize: "clamp(3.5rem, 6vw, 5rem)", letterSpacing: "-0.05em", color: "rgba(28,26,23,0.07)" }}
              >
                02
              </span>
              <p className="text-[10px] tracking-[0.22em] uppercase font-mono text-flame">Our Approach</p>
            </motion.div>
            <motion.div {...reveal(0.05)}>
              <h2
                className="font-display font-bold text-paper leading-tight mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.03em" }}
              >
                What we built
              </h2>
              <p className="text-muted text-base leading-[1.8] max-w-2xl">{p.solution}</p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── WHAT WE BUILT (features) ── */}
      <div style={{ background: "#f3f0eb" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <motion.div {...fade(0)} className="mb-16">
            <p className="text-[10px] tracking-[0.26em] uppercase font-mono text-muted mb-3">Capabilities</p>
            <h2
              className="font-display font-bold text-paper leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.035em" }}
            >
              What we delivered
            </h2>
          </motion.div>

          <div className="divide-y" style={{ borderColor: "rgba(28,26,23,0.08)" }}>
            {p.features.map((f, i) => (
              <motion.div
                key={f.title}
                {...reveal(i * 0.06)}
                className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-8 md:py-10"
              >
                <span
                  className="font-mono text-[10px] tracking-widest pt-1 flex-shrink-0 md:w-10"
                  style={{ color: "rgba(28,26,23,0.2)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 grid md:grid-cols-[1fr_1.4fr] gap-4 md:gap-10">
                  <h3
                    className="font-display font-bold text-paper leading-tight group-hover:text-flame transition-colors duration-300"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", letterSpacing: "-0.02em" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── GALLERY ── */}
      {p.images.length > 1 && (
        <div style={{ background: "#faf8f5" }}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-24">
            <motion.p {...fade(0)} className="text-[10px] tracking-[0.26em] uppercase font-mono text-muted mb-16">
              Gallery
            </motion.p>
            <div className="space-y-8">
              {p.images.slice(1).map((img, i) => (
                <motion.div
                  key={img.src}
                  {...reveal(0)}
                  className="grid items-start gap-5"
                  style={{ gridTemplateColumns: "5rem 1fr" }}
                >
                  {/* Index number — same ghost style as rest of page, alternating gray/flame */}
                  <span
                    className="font-display font-bold leading-none select-none text-right"
                    style={{
                      fontSize: "clamp(3rem, 5vw, 4.5rem)",
                      letterSpacing: "-0.05em",
                      color: i % 2 === 0 ? "rgba(232,84,26,0.25)" : "rgba(28,26,23,0.07)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Image — natural aspect ratio, no crop */}
                  <div className="border border-border overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto block"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── TECH STACK ── */}
      <div style={{ background: "#1c1a17" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">
          <motion.p
            {...fade(0)}
            className="text-[10px] tracking-[0.26em] uppercase font-mono mb-12"
            style={{ color: "rgba(250,248,245,0.25)" }}
          >
            Built With
          </motion.p>
          <div className="grid sm:grid-cols-3 gap-12 md:gap-16">
            {p.techStack.map((group, i) => (
              <motion.div key={group.label} {...reveal(i * 0.08)}>
                <p
                  className="text-[9px] tracking-[0.26em] uppercase font-mono mb-5 pb-4 border-b"
                  style={{ color: p.accent, borderColor: `${p.accent}25` }}
                >
                  {group.label}
                </p>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-display font-bold text-sm"
                      style={{ color: "rgba(250,248,245,0.6)", letterSpacing: "-0.01em" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── OUTCOME PULLQUOTE ── */}
      <div style={{ background: "#faf8f5" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <motion.p
            {...fade(0)}
            className="text-[10px] tracking-[0.26em] uppercase font-mono text-muted mb-10"
          >
            The Result
          </motion.p>
          <motion.blockquote
            {...reveal(0.05)}
            className="font-serif leading-tight text-paper mb-14"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)", letterSpacing: "-0.02em", maxWidth: "900px" }}
          >
            &ldquo;{p.outcome}&rdquo;
          </motion.blockquote>
          <motion.div {...reveal(0.12)} className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              data-cursor="LET'S GO"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-flame text-void font-display font-bold text-[12px] tracking-[0.12em] uppercase hover:bg-paper transition-colors duration-300"
            >
              Start Your Project
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-border text-paper font-display font-bold text-[12px] tracking-[0.12em] uppercase hover:border-paper transition-colors duration-300"
            >
              View Live Site
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── NEXT PROJECT ── */}
      <Link
        href={`/work/${next.slug}`}
        data-cursor="VIEW"
        className="group relative flex flex-col justify-end overflow-hidden"
        style={{ background: "#0f0e0d", minHeight: "clamp(280px, 45vh, 500px)" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={next.img}
            alt={next.title}
            fill
            className="object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0f0e0d 30%, rgba(15,14,13,0.5) 100%)" }} />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 pb-14 md:pb-16 pt-20">
          <p
            className="text-[9px] tracking-[0.26em] uppercase font-mono mb-5"
            style={{ color: "rgba(250,248,245,0.3)" }}
          >
            Next Project
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8">
            <div className="min-w-0">
              <p className="text-[10px] tracking-[0.18em] uppercase font-mono mb-3" style={{ color: next.accent }}>
                {next.category}
              </p>
              <h3
                className="font-display font-bold text-white leading-tight group-hover:text-flame transition-colors duration-500"
                style={{ fontSize: "clamp(2rem, 6vw, 5rem)", letterSpacing: "-0.04em" }}
              >
                {next.title}
              </h3>
            </div>
            <div
              className="w-12 h-12 border flex items-center justify-center flex-shrink-0 self-start sm:self-auto group-hover:border-flame group-hover:text-flame transition-colors duration-300"
              style={{ borderColor: "rgba(250,248,245,0.2)", color: "rgba(250,248,245,0.4)" }}
            >
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </Link>

    </div>
  );
}
