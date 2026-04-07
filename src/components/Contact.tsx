"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section className="bg-flame py-24 md:py-36 overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-paper/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-void/20 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] tracking-[0.22em] uppercase text-void/60 mb-6 font-medium">
            Ready to grow?
          </p>
          <h2
            className="font-display font-bold text-void leading-[0.92] mb-10"
            style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
          >
            Let's build<br />
            something that<br />
            <em className="not-italic text-void/40">converts.</em>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              data-cursor="LET'S GO"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-void text-paper font-display font-bold text-[13px] tracking-[0.12em] uppercase hover:bg-paper hover:text-void transition-colors duration-300"
            >
              Start a Project
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:contact@symm.studio"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 border border-void/20 text-void font-display font-semibold text-[11px] sm:text-[13px] tracking-[0.1em] sm:tracking-[0.12em] uppercase hover:border-void hover:bg-void/10 transition-colors min-w-0 overflow-hidden"
            >
              <span className="truncate">contact@symm.studio</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
