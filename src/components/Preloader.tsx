"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"letters" | "hold" | "exit">("letters");
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const letters = "SYMM".split("");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 1400);
    const t2 = setTimeout(() => setPhase("exit"), 2000);
    const t3 = setTimeout(() => onCompleteRef.current(), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []); // runs exactly once — ref keeps onComplete current without re-triggering

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#faf8f5]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        >
          {/* Counter top-right */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            className="absolute top-8 right-8 text-[11px] tracking-[0.3em] uppercase text-paper/40 font-display"
          >
            Loading
          </motion.span>

          {/* Letters */}
          <div className="flex items-end gap-1 overflow-hidden">
            {letters.map((l, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="font-display font-bold text-paper block"
                style={{ fontSize: "clamp(4rem, 14vw, 10rem)", letterSpacing: "-0.04em" }}
              >
                {l}
              </motion.span>
            ))}
          </div>

          {/* Bottom progress line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-border">
            <motion.div
              className="h-full bg-flame"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
