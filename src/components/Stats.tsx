"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "1+", label: "Years building" },
  { value: "11", label: "Happy clients" },
  { value: "100%", label: "Client satisfaction" },
  { value: "24h", label: "Average response time" },
];

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-24 bg-flame">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`px-6 md:px-10 py-8 md:py-0 border-void/20
                ${i % 2 === 1 ? "border-l" : ""}
                ${i >= 2 ? "border-t md:border-t-0" : ""}
                ${i >= 1 ? "md:border-l" : ""}
                ${i === 0 ? "md:border-l-0" : ""}
              `}
            >
              <p
                className="font-display font-bold text-void mb-2 leading-none"
                style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}
              >
                {stat.value}
              </p>
              <p className="text-void/60 text-sm tracking-wide leading-snug max-w-[140px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
