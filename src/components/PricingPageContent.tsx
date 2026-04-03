"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const webPackages = [
  {
    n: "01",
    name: "Basic",
    tag: "Starter",
    price: "$800+",
    timeline: "1–2 weeks",
    best: "Freelancers, coaches, small local businesses",
    desc: "Simple 3–5 page marketing website with clean design, contact form, and mobile optimization.",
    features: [
      "3–5 page marketing website",
      "Mobile-responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "Fast Next.js performance",
      "Clean code handover",
    ],
    highlight: false,
  },
  {
    n: "02",
    name: "Better",
    tag: "Most Popular",
    price: "$1,800+",
    timeline: "2–4 weeks",
    best: "Service businesses, startups, small brands",
    desc: "5–8 page professional website with smooth animations, multiple forms, and basic integrations.",
    features: [
      "5–8 page professional website",
      "Smooth scroll animations",
      "Multiple forms & integrations",
      "CMS integration (optional)",
      "Core Web Vitals optimization",
      "30-day post-launch support",
    ],
    highlight: true,
  },
  {
    n: "03",
    name: "Premium",
    tag: "Full Build",
    price: "$3,500+",
    timeline: "4–7 weeks",
    best: "Growing businesses wanting standout results",
    desc: "Custom 8–12+ page website with advanced animations, complex layouts, and refined features.",
    features: [
      "8–12+ page custom website",
      "Advanced animations & interactions",
      "Complex layouts & custom logic",
      "Full CMS + analytics setup",
      "90+ Lighthouse score target",
      "60-day post-launch support",
    ],
    highlight: false,
  },
];

const agentPackages = [
  {
    n: "01",
    name: "Simple Bot",
    tag: "Entry",
    price: "$500+",
    timeline: "3–7 days",
    best: "Small communities, basic support",
    desc: "Basic Discord bot, FAQ agent, or simple automation for straightforward use cases.",
    features: [
      "Single-platform deployment",
      "FAQ or command-based responses",
      "Basic workflow automation",
      "Simple trigger/action logic",
      "Documentation & handover",
    ],
    highlight: false,
  },
  {
    n: "02",
    name: "Standard",
    tag: "Most Popular",
    price: "$1,500+",
    timeline: "1–3 weeks",
    best: "Small businesses, gaming groups",
    desc: "Ready-to-deploy or customized bot/agent with integrations and multi-step workflows.",
    features: [
      "Multi-platform integrations",
      "Custom workflow logic",
      "CRM or API connections",
      "Conversation analytics",
      "Staff training included",
      "2-week post-launch support",
    ],
    highlight: true,
  },
  {
    n: "03",
    name: "Premium Agent",
    tag: "Custom",
    price: "$3,500+",
    timeline: "3–6 weeks",
    best: "Businesses needing smart, tailored solutions",
    desc: "Advanced AI agent or multi-step workflow automation with multiple integrations and custom logic.",
    features: [
      "Custom AI trained on your data",
      "Multi-step workflow automation",
      "Multiple platform integrations",
      "Conversation analytics dashboard",
      "Ongoing optimization retainer",
      "60-day post-launch support",
    ],
    highlight: false,
  },
];

const addOns = [
  {
    name: "Landing Page",
    desc: "One page with an intake form, social media display, and photo gallery — the absolute minimum to have a real web presence",
    price: "$200",
  },
  {
    name: "SEO & Metadata Optimization",
    desc: "On-page SEO, meta tags, sitemap, and structured data",
    price: "$199+",
  },
  {
    name: "Professional Copywriting",
    desc: "Sales copy written for all pages of your site",
    price: "$600+",
  },
  {
    name: "Advanced Animations",
    desc: "Custom scroll, entrance, and interactive animations",
    price: "$300+",
  },
  {
    name: "Extra Integrations",
    desc: "Stripe, third-party APIs, calendars, booking systems, etc.",
    price: "$400+ each",
  },
];

const steps = [
  { n: "01", title: "Discovery Call", desc: "Free 20-minute call to understand your goals, timeline, and budget. No commitment required." },
  { n: "02", title: "Fixed Proposal", desc: "Clear fixed-price proposal or custom quote for complex projects — scope and deliverables locked upfront." },
  { n: "03", title: "Build & Revise", desc: "50% deposit to start. We build fast, check in often, and revise until it's right." },
  { n: "04", title: "Launch & Support", desc: "We don't disappear at launch. Every project includes post-delivery support so you're covered." },
];

function PackageCard({ pkg, index }: { pkg: typeof webPackages[0]; index: number }) {
  const dark = pkg.highlight;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col border border-border"
      style={{ background: dark ? "#1c1a17" : "#faf8f5" }}
    >
      <div className="p-6 sm:p-8 border-b border-border" style={{ borderColor: dark ? "rgba(255,255,255,0.08)" : undefined }}>
        <div className="flex items-start justify-between gap-4 mb-6">
          <span className="text-[9px] tracking-[0.2em] uppercase font-mono" style={{ color: dark ? "rgba(250,248,245,0.4)" : "#5e574f" }}>
            {pkg.n}
          </span>
          <span
            className="text-[9px] tracking-[0.18em] uppercase px-2 py-1 border font-mono"
            style={dark
              ? { borderColor: "rgba(232,84,26,0.4)", color: "#e8541a" }
              : { borderColor: "rgba(232,84,26,0.2)", color: "rgba(232,84,26,0.7)" }
            }
          >
            {pkg.tag}
          </span>
        </div>
        <h3
          className="font-display font-bold leading-tight mb-2"
          style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", letterSpacing: "-0.03em", color: dark ? "#faf8f5" : "#1c1a17" }}
        >
          {pkg.name}
        </h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: dark ? "rgba(250,248,245,0.55)" : "#5e574f" }}>
          {pkg.desc}
        </p>
        <div className="flex items-baseline gap-2">
          <span
            className="font-display font-bold"
            style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", letterSpacing: "-0.04em", color: dark ? "#faf8f5" : "#1c1a17" }}
          >
            {pkg.price}
          </span>
        </div>
        <p className="text-[10px] tracking-widest uppercase mt-1" style={{ color: dark ? "rgba(250,248,245,0.35)" : "#5e574f" }}>
          Typical timeline: {pkg.timeline}
        </p>
      </div>

      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <ul className="space-y-3 flex-grow">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: dark ? "rgba(250,248,245,0.65)" : "#5e574f" }}>
              <CheckCircle2 size={13} className="flex-shrink-0 mt-[3px]" style={{ color: "#e8541a" }} />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-8 pt-6 border-t" style={{ borderColor: dark ? "rgba(255,255,255,0.08)" : "#d8d3cb" }}>
          <p className="text-[10px] tracking-[0.18em] uppercase mb-1" style={{ color: dark ? "rgba(250,248,245,0.35)" : "#5e574f" }}>
            Best for
          </p>
          <p className="text-xs leading-relaxed" style={{ color: dark ? "rgba(250,248,245,0.5)" : "#5e574f" }}>
            {pkg.best}
          </p>
        </div>
      </div>
    </motion.div>
  );
}


export function PricingPageContent() {
  return (
    <div className="min-h-screen" style={{ background: "#faf8f5" }}>

      {/* ── HERO ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-44 pb-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <h1
            className="font-display font-bold text-paper leading-[0.92]"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.04em" }}
          >
            Straightforward pricing.<br />
            <em className="not-italic text-flame">No surprises.</em>
          </h1>
          <p className="text-muted text-base mt-6 max-w-xl leading-relaxed">
            Fixed-price packages for most projects. Complex work is quoted individually — always transparently.
          </p>
        </motion.div>
      </div>

      {/* ── WEBSITE PACKAGES ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2
            className="font-display font-bold text-paper leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.03em" }}
          >
            Website Packages
          </h2>
          <p className="text-muted text-sm mt-2">Custom apps & complex platforms are quoted individually.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {webPackages.map((pkg, i) => (
            <PackageCard key={pkg.n} pkg={pkg} index={i} />
          ))}
        </div>
      </div>

      {/* ── AUTOMATION & AGENTS ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2
            className="font-display font-bold text-paper leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.03em" }}
          >
            Automation, Agents & Bots
          </h2>
          <p className="text-muted text-sm mt-2">
            Ready-to-deploy or built from scratch. Complex multi-agent systems are quoted individually.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {agentPackages.map((pkg, i) => (
            <PackageCard key={pkg.n} pkg={pkg} index={i} />
          ))}
        </div>
      </div>

      {/* ── ADD-ONS ── */}
      <div className="border-t border-border" style={{ background: "#1c1a17" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs tracking-[0.22em] uppercase text-flame mb-4">Enhancements</p>
            <h2
              className="font-display font-bold text-void leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.03em" }}
            >
              Other Options & Add-Ons
            </h2>
          </motion.div>
          <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            {addOns.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-6"
              >
                <div>
                  <p className="font-display font-bold text-void text-lg" style={{ letterSpacing: "-0.02em" }}>
                    {item.name}
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: "rgba(250,248,245,0.45)" }}>{item.desc}</p>
                </div>
                <span className="font-display font-bold text-flame flex-shrink-0 text-xl" style={{ letterSpacing: "-0.02em" }}>
                  {item.price}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAINTENANCE & SUPPORT ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2
            className="font-display font-bold text-paper leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.03em" }}
          >
            Maintenance & Support
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
          {[
            {
              name: "Hourly Maintenance",
              price: "$50 / hr",
              desc: "Content updates, bug fixes, small changes, or anything that comes up post-launch.",
            },
            {
              name: "Monthly Retainer",
              price: "$200 / mo",
              desc: "Vercel hosting + regular updates, backups, and priority support. Peace of mind every month.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-void p-6 sm:p-8 md:p-10"
            >
              <p className="font-display font-bold text-paper mb-2 text-xl" style={{ letterSpacing: "-0.025em" }}>
                {item.name}
              </p>
              <p className="font-display font-bold text-flame mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.04em" }}>
                {item.price}
              </p>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── CUSTOM QUOTE CALLOUT ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-flame/20 bg-flame-dim px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <div>
            <p className="text-xs tracking-[0.22em] uppercase text-flame mb-3">Not sure what fits?</p>
            <h3
              className="font-display font-bold text-paper leading-tight mb-2"
              style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", letterSpacing: "-0.025em" }}
            >
              Every project is different — and that&apos;s fine.
            </h3>
            <p className="text-muted text-sm leading-relaxed max-w-lg">
              If your project doesn&apos;t fit neatly into a package, or you&apos;re not sure which tier makes sense, reach out. We&apos;ll review your scope and send a custom quote — no commitment required.
            </p>
          </div>
          <Link
            href="/contact"
            data-cursor="TALK"
            className="group inline-flex items-center gap-3 px-7 py-4 bg-flame text-void font-display font-bold text-[12px] tracking-[0.12em] uppercase hover:bg-paper transition-colors duration-300 flex-shrink-0"
          >
            Get a Custom Quote
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <div className="border-t border-border" style={{ background: "#1c1a17" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.22em] uppercase text-flame mb-20"
          >
            The process
          </motion.p>

          <div>
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col pb-16 md:pb-20 ${i % 2 === 1 ? "items-end text-right" : "items-start"}`}
              >
                <span
                  className="font-mono text-[10px] tracking-[0.28em] uppercase mb-4 block"
                  style={{ color: "rgba(232,84,26,0.55)" }}
                >
                  {step.n}
                </span>
                <h3
                  className="font-display font-bold text-void leading-[0.95] mb-4"
                  style={{ fontSize: "clamp(1.8rem, 6vw, 5.5rem)", letterSpacing: "-0.04em" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-sm"
                  style={{ color: "rgba(250,248,245,0.4)" }}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs mt-4 border-t pt-10"
            style={{ color: "rgba(250,248,245,0.25)", borderColor: "rgba(250,248,245,0.07)" }}
          >
            All projects include responsive design, fast Next.js performance, and clean code handover.
          </motion.p>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ background: "#faf8f5" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="font-display font-bold text-paper leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
            >
              Ready to get started?<br />
              <span className="text-flame">Let&apos;s talk.</span>
            </h2>
            <p className="text-muted text-sm mt-4 max-w-sm leading-relaxed">
              Book a free 20-minute discovery call. We&apos;ll scope your project and send a fixed-price proposal within 24 hours.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact"
              data-cursor="LET'S GO"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-flame text-void font-display font-bold text-[13px] tracking-[0.12em] uppercase hover:bg-paper transition-colors duration-300"
            >
              Book a Discovery Call
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
