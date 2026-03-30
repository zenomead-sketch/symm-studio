"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// TODO: Replace with real client testimonials before launch
const testimonials = [
  {
    quote:
      "Symm Studios completely transformed how our practice shows up online. The platform they built is intuitive, fast, and our referral volume has measurably increased.",
    author: "Client",
    role: "Lien On Us Medical",
    initials: "LM",
  },
  {
    quote:
      "They understood our business immediately. Within weeks we had a site that looks better than anything our competitors have — and it actually generates leads.",
    author: "Client",
    role: "Ticket Snipes",
    initials: "TS",
  },
  {
    quote:
      "The attention to detail is extraordinary. Every micro-interaction, every piece of copy — it felt like they cared as much about our brand as we did.",
    author: "Client",
    role: "Cod Masters 8",
    initials: "CM",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d: number) => {
    setDir(d);
    setIndex((prev) => (prev + d + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section className="py-24 md:py-36" style={{ background: "#faf8f5", borderTop: "1px solid rgba(15,14,13,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">
              Client Voices
            </p>
            <h2
              className="font-display font-bold text-paper leading-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              What our clients say
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="w-10 h-10 border border-border flex items-center justify-center text-muted hover:border-flame hover:text-flame transition-colors"
            >
              <ArrowLeft size={15} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="w-10 h-10 border border-border flex items-center justify-center text-muted hover:border-flame hover:text-flame transition-colors"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Quote */}
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
              {/* Quote text */}
              <blockquote>
                <p
                  className="font-serif text-paper/90 leading-[1.4] mb-10"
                  style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)", fontStyle: "italic" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-flame/20 border border-flame/30 flex items-center justify-center">
                    <span className="text-flame text-xs font-display font-bold">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-paper text-sm font-medium">{t.author}</p>
                    <p className="text-muted text-xs">{t.role}</p>
                  </div>
                </div>
              </blockquote>

              {/* Dots */}
              <div className="flex md:flex-col gap-2 md:pt-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      i === index ? "bg-flame" : "bg-border-light"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
