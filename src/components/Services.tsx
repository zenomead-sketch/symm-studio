"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  { n: "01", title: "Brand Identity",      desc: "Logos, systems, and visual language that make your business unforgettable." },
  { n: "02", title: "Web Development",     desc: "Custom Next.js/React sites engineered for speed, accessibility, and conversion." },
  { n: "03", title: "UI/UX Design",        desc: "Interfaces that feel effortless, from wireframe to pixel-perfect delivery." },
  { n: "04", title: "Creative Direction",  desc: "A clear visual language across every touchpoint, digital and physical." },
  { n: "05", title: "App Development",     desc: "Full-stack web and mobile applications built on modern stacks." },
  { n: "06", title: "SEO & Content",       desc: "Strategy and copy that rank, resonate, and convert." },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section style={{ background: "#0f0e0d" }} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 md:mb-20">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-flame mb-4">What We Do</p>
            <h2
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Services built<br className="hidden md:block" /> for growth
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-white/30 hover:text-flame transition-colors flex-shrink-0"
          >
            All Services <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Service rows */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              onHoverStart={() => setActive(i)}
              onHoverEnd={() => setActive(null)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex items-center gap-6 py-7 md:py-9 cursor-default overflow-hidden"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Flame sweep on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: "linear-gradient(90deg, rgba(232,84,26,0.1) 0%, rgba(232,84,26,0.03) 50%, transparent 100%)",
                }}
              />

              {/* Left accent bar */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[3px] bg-flame origin-top"
                animate={{ scaleY: active === i ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Number */}
              <span className="relative font-display text-[11px] tracking-widest text-white/20 flex-shrink-0 w-10 pl-3 select-none">
                {s.n}
              </span>

              {/* Title */}
              <motion.h3
                className="relative font-display font-bold leading-none flex-1"
                animate={{
                  color: active === i ? "#e8541a" : "#faf8f5",
                  x: active === i ? 6 : 0,
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontSize: "clamp(1.6rem, 4vw, 3.5rem)" }}
              >
                {s.title}
              </motion.h3>

              {/* Description — desktop only, fades in */}
              <motion.p
                className="relative text-white/35 text-sm leading-relaxed max-w-[260px] text-right flex-shrink-0 hidden lg:block"
                animate={{
                  opacity: active === i ? 1 : 0,
                  x: active === i ? 0 : 12,
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {s.desc}
              </motion.p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
