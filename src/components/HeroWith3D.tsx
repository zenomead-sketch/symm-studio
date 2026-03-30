"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Scene3D } from "./Scene3D";
import { Preloader } from "./Preloader";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((m) => m.Canvas),
  { ssr: false }
);

function SplitText({
  text,
  className,
  delay = 0,
  style,
}: {
  text: string;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  return (
    <span className={`inline-block ${className ?? ""}`} style={style}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.032,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export function HeroWith3D() {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <Preloader onComplete={handleComplete} />

      <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: "#faf8f5" }}>
        {/* Full-viewport 3D — fills entire hero */}
        <div className="absolute inset-0 z-0" style={{ width: "100%", height: "100%" }}>
          <Canvas
            camera={{ position: [0, 0, 7], fov: 40 }}
            gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
            dpr={[1, 2]}
          >
            <Scene3D />
          </Canvas>
        </div>

        {/* Edge vignette — subtle, keeps scene breathing */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 60% 50%, transparent 40%, rgba(250,248,245,0.45) 75%, rgba(250,248,245,0.85) 100%)",
          }}
        />

        {/* Left-side text legibility fade */}
        <div
          className="absolute inset-y-0 left-0 w-[50%] z-[1] pointer-events-none hidden md:block"
          style={{ background: "linear-gradient(to right, rgba(250,248,245,0.72) 30%, transparent)" }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
          style={{
            height: "28%",
            background: "linear-gradient(to bottom, transparent, #faf8f5)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end min-h-screen max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 pt-24 w-full">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-xs tracking-[0.32em] uppercase text-paper/65 mb-10 font-medium"
          >
            Creative Studio — Est. 2021
          </motion.p>

          {/* Headline */}
          <div
            className="mb-10 font-display font-bold overflow-hidden"
            style={{
              fontSize: "clamp(4rem, 10.5vw, 10rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
            }}
          >
            {loaded && (
              <>
                <div className="overflow-hidden">
                  <SplitText text="Brand." className="text-paper block" delay={0.1} />
                </div>
                <div className="overflow-hidden">
                  <SplitText text="Web." className="text-paper block" delay={0.28} />
                </div>
                <div className="overflow-hidden">
                  <SplitText text="Design." className="text-flame italic block" delay={0.46} />
                </div>
                <div className="overflow-hidden">
                  <SplitText text="Growth." className="block" delay={0.62}
                    style={{ color: "rgba(15,14,13,0.15)" }}
                  />
                </div>
              </>
            )}
          </div>

          {/* Sub + CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 1.1, ease: [0.19, 1, 0.22, 1] }}
              className="text-paper/70 text-base leading-relaxed max-w-sm"
            >
              World-class digital experiences for brands with global ambition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 1.25, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/contact"
                data-cursor="GO"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-flame text-void font-display font-bold text-[12px] tracking-[0.14em] uppercase hover:bg-paper transition-colors duration-300"
              >
                Start a Project
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/work"
                data-cursor="VIEW"
                className="inline-flex items-center px-7 py-4 border border-paper/20 text-paper/70 font-display font-semibold text-[12px] tracking-[0.14em] uppercase hover:border-paper/50 hover:text-paper transition-colors duration-300"
              >
                Our Work
              </Link>
            </motion.div>
          </div>

          {/* Client strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 1.6 }}
            className="mt-14 pt-5 border-t border-paper/[0.07] flex items-center gap-5"
          >
            <span className="text-xs tracking-[0.25em] uppercase text-paper/50 flex-shrink-0">
              Work
            </span>
            <div className="flex items-center gap-7">
              {["Lien On Us Medical", "Ticket Snipes", "Cod Masters 8"].map((c) => (
                <span key={c} className="text-xs text-paper/45 whitespace-nowrap font-medium">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
