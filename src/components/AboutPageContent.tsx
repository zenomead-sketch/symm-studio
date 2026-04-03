"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Linkedin, Upload } from "lucide-react";

const values = [
  {
    n: "01",
    title: "We don't do average.",
    desc: "Average is the most dangerous place to be. It's invisible. Every decision we make — layout, copy, color, code — is deliberate and built to make you unforgettable.",
  },
  {
    n: "02",
    title: "We think like owners.",
    desc: "We don't clock in and execute tasks. We ask why, push back when something won't work, and treat your business like it's ours. Because when you win, we win.",
  },
  {
    n: "03",
    title: "Speed is a feature.",
    desc: "Great work doesn't have to take forever. We move fast without cutting corners — because your market isn't waiting, and neither should you.",
  },
  {
    n: "04",
    title: "Design serves business.",
    desc: "Beautiful work that doesn't convert is decoration. Every pixel we ship is in service of a business outcome — more leads, more trust, more revenue.",
  },
];

const team = [
  {
    name: "Jacob Broerman",
    title: "Founder & Lead Developer",
    linkedin: "https://www.linkedin.com/in/jacob-broerman",
    bio: "Jacob Broerman is the founder and lead developer of Symm Studios. With a sharp focus on performance-first engineering and modern web architecture, Jacob builds the digital infrastructure that powers every Symm project — from complex Next.js applications to custom e-commerce platforms. He translates creative vision into fast, scalable code that actually ships. Jacob founded Symm with a simple belief: that businesses deserve both beautiful design and bulletproof technology, not one or the other.",
  },
  {
    name: "Zen Mead",
    title: "Co-founder — Design, Marketing & Sales",
    linkedin: "https://www.linkedin.com/in/zen-mead",
    bio: "Zen Mead is the co-founder of Symm Studios and the creative force behind its brand identity, marketing strategy, and client growth. With a designer's eye and a marketer's mindset, Zen bridges the gap between how a brand looks and how it converts. He leads the visual direction of every Symm project — from logo systems and UI design to content strategy and sales — ensuring every touchpoint is built to make a lasting impression.",
  },
];

function TeamMemberCard({ member }: { member: typeof team[0] }) {
  const [preview, setPreview] = useState<string | null>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-8"
    >
      {/* Photo box */}
      <label className="group relative block w-full aspect-[4/5] bg-surface border border-border overflow-hidden cursor-pointer">
        {preview ? (
          <Image src={preview} alt={member.name} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted/40 group-hover:text-flame transition-colors">
            <Upload size={28} strokeWidth={1.5} />
            <span className="text-xs tracking-[0.18em] uppercase">Upload photo</span>
          </div>
        )}
        <input type="file" accept="image/*" className="sr-only" onChange={handleFile} />
        {preview && (
          <div className="absolute inset-0 bg-void/0 group-hover:bg-void/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Upload size={24} strokeWidth={1.5} className="text-paper" />
          </div>
        )}
      </label>

      {/* Info */}
      <div>
        <p className="text-xs tracking-[0.22em] uppercase text-muted mb-2">{member.title}</p>
        <h3
          className="font-display font-bold text-paper leading-tight mb-5"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.025em" }}
        >
          {member.name}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-6">{member.bio}</p>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-paper/60 hover:text-flame transition-colors"
        >
          <Linkedin size={14} strokeWidth={1.5} />
          LinkedIn
        </a>
      </div>
    </motion.div>
  );
}

const stats = [
  { value: "3+", label: "Years building" },
  { value: "13", label: "Happy clients" },
  { value: "100%", label: "Client retention" },
  { value: "< 24h", label: "Response time" },
];

function ParallaxWord({ text, offset }: { text: string; offset: [number, number] }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], offset);
  return (
    <motion.span ref={ref} style={{ x }} className="block whitespace-nowrap">
      {text}
    </motion.span>
  );
}

export function AboutPageContent() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#faf8f5" }}>

      {/* ── HERO ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-44 pb-16">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-paper leading-[0.88]"
          style={{ fontSize: "clamp(3.2rem, 9vw, 8rem)", letterSpacing: "-0.04em" }}
        >
          We build brands<br />
          that <em className="not-italic text-flame">demand</em><br />
          attention.
        </motion.h1>
      </div>

      {/* ── MARQUEE STATEMENT ── */}
      <div className="border-y border-border py-6 my-8 overflow-hidden">
        <div
          className="font-display font-bold text-paper/[0.06] whitespace-nowrap flex gap-16"
          style={{ fontSize: "clamp(4rem, 10vw, 8rem)", letterSpacing: "-0.04em", animation: "marquee 20s linear infinite" }}
        >
          {["BRAND", "WEB", "DESIGN", "GROWTH", "BRAND", "WEB", "DESIGN", "GROWTH", "BRAND", "WEB", "DESIGN", "GROWTH"].map((w, i) => (
            <span key={i} className="flex-shrink-0">{w} <span className="text-flame">·</span></span>
          ))}
        </div>
      </div>

      {/* ── WHO WE ARE ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs tracking-[0.22em] uppercase text-muted mb-6">Who we are</p>
            <h2
              className="font-display font-bold text-paper leading-tight mb-8"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.025em" }}
            >
              A small studio with an outsized impact.
            </h2>
            <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-border">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-flame" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}>
                    {s.value}
                  </p>
                  <p className="text-muted text-xs tracking-widest uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-muted leading-relaxed"
          >
            <p className="text-paper text-lg leading-relaxed">
              Symm Studios is a full-service creative studio based in St. Petersburg, FL — building brands, websites, and digital products for ambitious businesses everywhere.
            </p>
            <p>
              We started because we kept seeing the same problem: companies with great products losing to competitors with better branding and faster websites. We exist to fix that.
            </p>
            <p>
              We don't do retainer bloat, endless revision cycles, or design-by-committee. We work lean, move fast, and ship work that makes a real difference to your bottom line.
            </p>
            <p>
              Based in Florida. Built for the world.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── PARALLAX WORDS ── */}
      <div className="border-t border-border py-16 overflow-hidden">
        <div
          className="font-display font-bold text-paper leading-none"
          style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", letterSpacing: "-0.04em" }}
        >
          <ParallaxWord text="Brand Identity —" offset={[-60, 60]} />
          <ParallaxWord text="Web Development —" offset={[60, -60]} />
          <ParallaxWord text="UI / UX Design —" offset={[-40, 40]} />
          <ParallaxWord text="Agentic Automation —" offset={[-60, 60]} />
          <ParallaxWord text="SEO & Metadata —" offset={[60, -60]} />
        </div>
      </div>

      {/* ── VALUES ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.22em] uppercase text-muted mb-4">How we work</p>
          <h2
            className="font-display font-bold text-paper"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.025em" }}
          >
            The things we won't compromise on.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {values.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-void p-8 md:p-10 group hover:bg-surface transition-colors"
            >
              <span className="text-[10px] tracking-widest text-muted/30 font-mono block mb-6">{v.n}</span>
              <h3
                className="font-display font-bold text-paper group-hover:text-flame transition-colors mb-4 leading-tight"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", letterSpacing: "-0.02em" }}
              >
                {v.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── TEAM ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.22em] uppercase text-muted mb-4">The people behind it</p>
          <h2
            className="font-display font-bold text-paper"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.025em" }}
          >
            Meet the founders.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {team.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>

      {/* ── CLOSING CTA ── */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-paper leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
          >
            Ready to build<br />
            something <span className="text-flame">real?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact"
              data-cursor="LET'S GO"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-flame text-void font-display font-bold text-[13px] tracking-[0.12em] uppercase hover:bg-paper transition-colors duration-300"
            >
              Work With Us
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
