"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 60);
      setVisible(y < lastY.current || y < 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
          !atTop && "bg-void/90 backdrop-blur-sm border-b border-border"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-sm font-semibold tracking-[0.12em] uppercase text-paper/90 hover:text-paper transition-colors"
          >
            Symm Studios
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[11px] tracking-[0.18em] uppercase font-medium transition-colors",
                    active ? "text-paper" : "text-muted hover:text-paper"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              data-cursor="TALK"
              className="ml-4 text-[11px] tracking-[0.18em] uppercase font-medium px-5 py-2.5 border border-paper/20 text-paper hover:bg-flame hover:border-flame hover:text-void transition-all duration-300"
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-paper origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-paper"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-paper origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-void flex flex-col justify-center px-8"
          >
            <div className="space-y-0">
              {[...navLinks, { href: "/contact", label: "Start a Project" }].map(
                (link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="border-b border-border"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-6 font-display text-4xl font-bold text-paper hover:text-flame transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              )}
            </div>
            <p className="mt-16 text-muted text-sm">symmwebstudio@gmail.com</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
