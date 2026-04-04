"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const PROJECTS = [
  {
    id: "lien-on-us",
    slug: "lien-on-us-medical",
    n: "01",
    label: "Lien On Us Medical",
    category: "Healthcare Platform",
    tags: ["Web App", "Analytics", "Dashboard"],
    image: "/lien-1.png",
    description: "A medical referral platform with real-time provider dashboard and case tracking, engineered for serious volume.",
    href: "https://www.lienonusmedical.com/",
    accent: "#2a6496",
    year: "2024",
  },
  {
    id: "ticket-snipes",
    slug: "ticket-snipes",
    n: "02",
    label: "Ticket Snipes",
    category: "Automation Platform",
    tags: ["Full Stack", "E-commerce", "Automation"],
    image: "/snipes-1.png",
    description: "High-throughput ticket acquisition system built for speed, with automated purchasing and real-time monitoring.",
    href: "https://ticketsnipes.lovable.app/",
    accent: "#7b5ea7",
    year: "2024",
  },
  {
    id: "cod-masters",
    slug: "cod-masters-8",
    n: "03",
    label: "Cod Master 8s",
    category: "Community Platform",
    tags: ["Discord Bot", "Community", "Full Stack"],
    image: "/cod-1.png",
    description: "Full-stack gaming community platform with a custom Discord bot for automated management and live leaderboards.",
    href: "https://codmaster8s.com/",
    accent: "#1a7a5e",
    year: "2023",
  },
];

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 96;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const len = PROJECTS.length;
  const currentIndex = ((step % len) + len) % len;
  const active = PROJECTS[currentIndex];

  const nextStep = useCallback(() => setStep((prev) => prev + 1), []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + len) % len;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    let d = diff;
    if (diff > len / 2) d -= len;
    if (diff < -len / 2) d += len;
    if (d === 0) return "active";
    if (d === -1) return "prev";
    if (d === 1) return "next";
    return "hidden";
  };

  return (
    <section style={{ background: "#faf8f5" }}>
      <div className="flex flex-col lg:flex-row" style={{ minHeight: 640 }}>

        {/* ── LEFT PANEL ── */}
        <div
          className="w-full lg:w-1/2 flex flex-col justify-between px-8 md:px-14 pt-14 pb-0 lg:py-14 lg:border-b-0 lg:border-r"
          style={{ borderColor: "rgba(15,14,13,0.08)" }}
        >
          {/* Heading */}
          <div className="mb-10">
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#e8541a" }}>
              Selected Work
            </p>
            <h2
              className="font-display font-bold text-paper leading-[0.92]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", letterSpacing: "-0.03em" }}
            >
              Projects we&apos;re<br />proud of
            </h2>
          </div>

          {/* Scrolling list */}
          <div className="relative flex-1 mt-20" style={{ minHeight: ITEM_HEIGHT * len }}>
            {/* Top fade */}
            <div className="absolute inset-x-0 top-0 h-10 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, #faf8f5, transparent)" }} />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-10 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to top, #faf8f5, transparent)" }} />

            {/* Centering wrapper */}
            <div className="absolute inset-0 flex items-center">
              <div className="relative w-full" style={{ height: ITEM_HEIGHT * len }}>
                {PROJECTS.map((project, index) => {
                  const isActive = index === currentIndex;
                  const distance = index - currentIndex;
                  const wrappedDistance = wrap(-(len / 2), len / 2, distance);

                  return (
                    <motion.div
                      key={project.id}
                      style={{ height: ITEM_HEIGHT, width: "100%" }}
                      animate={{
                        y: wrappedDistance * ITEM_HEIGHT,
                        opacity: isActive ? 1 : 1 - Math.abs(wrappedDistance) * 0.6,
                      }}
                      transition={{ type: "spring", stiffness: 90, damping: 22, mass: 1 }}
                      className="absolute inset-x-0 flex items-center"
                    >
                      <div
                        onClick={() => handleChipClick(index)}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="w-full flex items-center gap-5 py-5 text-left border-t transition-all duration-500 cursor-pointer"
                        style={{ borderColor: isActive ? "rgba(232,84,26,0.35)" : "rgba(15,14,13,0.06)" }}
                      >
                        {/* Flame bar */}
                        <motion.div
                          className="flex-shrink-0 w-[3px] self-stretch"
                          animate={{ background: isActive ? "#e8541a" : "transparent" }}
                          transition={{ duration: 0.4 }}
                        />

                        {/* Number */}
                        <span
                          className="font-display text-[11px] tracking-widest flex-shrink-0 transition-colors duration-300"
                          style={{ color: isActive ? "rgba(232,84,26,0.65)" : "rgba(15,14,13,0.2)" }}
                        >
                          {project.n}
                        </span>

                        {/* Title + category */}
                        <div className="flex-1 min-w-0">
                          <p
                            className="font-display font-bold leading-tight truncate transition-colors duration-300"
                            style={{
                              fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
                              color: isActive ? "#1c1a17" : "rgba(15,14,13,0.28)",
                            }}
                          >
                            {project.label}
                          </p>
                          <p
                            className="text-[10px] tracking-[0.18em] uppercase mt-1 transition-colors duration-300"
                            style={{ color: isActive ? "rgba(232,84,26,0.7)" : "rgba(15,14,13,0.18)" }}
                          >
                            {project.category}
                          </p>
                        </div>

                        {/* Arrow */}
                        <Link
                          href={`/work/${project.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex-shrink-0"
                          aria-label={`View case study: ${project.label}`}
                        >
                          <ArrowUpRight
                            size={14}
                            className="transition-all duration-300"
                            style={{
                              color: "#e8541a",
                              opacity: isActive ? 1 : 0,
                            }}
                          />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer link — desktop only (mobile version lives below the image panel) */}
          <Link
            href="/work"
            aria-label="View all work and case studies"
            className="hidden lg:inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 self-start mt-8"
            style={{ color: "rgba(15,14,13,0.3)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e8541a")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(15,14,13,0.3)")}
          >
            All Work <ArrowUpRight size={12} />
          </Link>
        </div>

        {/* ── RIGHT PANEL — stacked image cards ── */}
        <div className="w-full lg:w-1/2 flex flex-col" style={{ minHeight: 360 }}>

          {/* Image area — stacked cards */}
          <div className="relative flex-1 overflow-hidden flex items-center justify-center px-10 pt-1 pb-14 lg:py-14">

            {/* Card stack container */}
            <div className="relative w-full max-w-[520px] aspect-[4/3]">

            {PROJECTS.map((project, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={project.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -60 : isNext ? 60 : 0,
                    y: isActive ? 0 : isPrev ? 12 : isNext ? -12 : 0,
                    scale: isActive ? 1 : isPrev ? 0.9 : isNext ? 0.82 : 0.74,
                    rotate: isActive ? 0 : isPrev ? -3 : isNext ? 3 : 0,
                    opacity: isActive ? 1 : isPrev ? 0.55 : isNext ? 0.35 : 0,
                    zIndex: isActive ? 20 : isPrev ? 10 : isNext ? 5 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 28, mass: 0.9 }}
                  className="absolute inset-0 overflow-hidden"
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                >
                  <Image
                    src={project.image}
                    alt={project.label}
                    fill
                    className="object-cover"
                    style={{
                      filter: isActive ? "none" : "grayscale(70%) brightness(0.55)",
                      transition: "filter 0.6s ease",
                    }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(15,14,13,0.97) 0%, rgba(15,14,13,0.25) 50%, transparent 75%)" }}
                  />

                  {/* Project info — active only */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-x-0 bottom-0 px-10 pb-10"
                      >
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold px-6 py-3 transition-opacity duration-300 hover:opacity-80"
                          style={{ background: project.accent, color: "#faf8f5" }}
                        >
                          View Case Study <ArrowUpRight size={12} />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            </div>{/* end card stack container */}


          </div>
        </div>

      </div>

      {/* All Work link — mobile only, sits below image panel */}
      <div className="lg:hidden px-8 pb-10 pt-2" style={{ background: "#faf8f5" }}>
        <Link
          href="/work"
          aria-label="See all work and case studies"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase transition-colors duration-300"
          style={{ color: "rgba(15,14,13,0.3)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#e8541a")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(15,14,13,0.3)")}
        >
          All Work <ArrowUpRight size={12} />
        </Link>
      </div>

    </section>
  );
}

export default FeatureCarousel;
