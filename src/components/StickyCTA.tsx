"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  // Don't show on contact page
  const isContact = pathname === "/contact";

  useEffect(() => {
    if (isContact || dismissed) return;

    const onScroll = () => {
      // Show after user has scrolled 60% of the page
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      setVisible(scrolled / total > 0.55);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isContact, dismissed]);

  if (isContact) return null;

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border"
          style={{ background: "rgba(28,26,23,0.92)", backdropFilter: "blur(16px)" }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-6">
            <p className="text-paper/50 text-sm hidden sm:block">
              Ready to grow your business?{" "}
              <span className="text-paper/80">Let's talk.</span>
            </p>
            <div className="flex items-center gap-3 ml-auto">
              <Link
                href="/contact"
                data-cursor="LET'S GO"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-flame text-void font-display font-bold text-[12px] tracking-[0.12em] uppercase hover:bg-paper transition-colors duration-300"
              >
                Start a Project
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => setDismissed(true)}
                aria-label="Dismiss"
                className="p-2 text-muted hover:text-paper transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
