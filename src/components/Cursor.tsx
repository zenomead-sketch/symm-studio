"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a, button, [role='button']");
      if (link) {
        setHovered(true);
        setLabel(link.getAttribute("data-cursor") || "");
      } else {
        setHovered(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
        animate={{ x: pos.x - 6, y: pos.y - 6 }}
        transition={{ type: "spring", stiffness: 800, damping: 60, mass: 0.2 }}
      >
        <div className="w-3 h-3 rounded-full bg-white" />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none"
        animate={{
          x: pos.x - (hovered ? 32 : 20),
          y: pos.y - (hovered ? 32 : 20),
          scale: hovered ? 1 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30, mass: 0.5 }}
      >
        <motion.div
          animate={{
            width: hovered ? 64 : 40,
            height: hovered ? 64 : 40,
            borderColor: hovered ? "var(--flame)" : "rgba(255,255,255,0.85)",
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full border-2 flex items-center justify-center overflow-hidden"
        >
          {label && (
            <span className="text-[8px] tracking-widest uppercase text-paper font-medium whitespace-nowrap px-1">
              {label}
            </span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
