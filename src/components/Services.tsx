"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  { n: "01", title: "Brand Identity", desc: "Logos, systems, and visual language that make your business unforgettable.", icon: "/icon-brand-identity.png" },
  { n: "02", title: "Web Development", desc: "Custom Next.js/React sites engineered for speed, accessibility, and conversion.", icon: "/icon-web-development.png" },
  { n: "03", title: "UI/UX Design", desc: "Interfaces that feel effortless — from wireframe to pixel-perfect delivery.", icon: "/icon-uiux-design.png" },
  { n: "04", title: "Creative Direction", desc: "A clear visual language across every touchpoint, digital and physical.", icon: "/icon-creative-direction.png" },
  { n: "05", title: "App Development", desc: "Full-stack web and mobile applications built on modern stacks.", icon: "/icon-app-development.png" },
  { n: "06", title: "SEO & Content", desc: "Strategy and copy that rank, resonate, and convert.", icon: "/icon-seo-content.png" },
];

export function Services() {
  return (
    <section className="border-t py-24 md:py-36" style={{ background: "#faf8f5", borderColor: "rgba(15,14,13,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-0">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
              What We Do
            </p>
            <h2
              className="font-display font-bold text-paper leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Services built for growth
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-muted hover:text-paper transition-colors flex-shrink-0"
          >
            All Services <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Numbered list */}
        <div className="mt-12 divide-y divide-border">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-6 hover:bg-surface transition-colors px-3 -mx-3"
            >
              <span className="font-display text-xs tracking-widest text-muted/60 w-6 flex-shrink-0">
                {s.n}
              </span>
              <Image
                src={s.icon}
                alt={s.title}
                width={36}
                height={36}
                className="flex-shrink-0 rounded opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <h3
                className="font-display font-bold text-paper group-hover:text-flame transition-colors leading-tight flex-shrink-0 md:w-56"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
              >
                {s.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed md:max-w-sm hidden sm:block">{s.desc}</p>
              <ArrowUpRight
                size={14}
                className="hidden sm:block ml-auto text-muted opacity-0 group-hover:opacity-60 transition-opacity flex-shrink-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
