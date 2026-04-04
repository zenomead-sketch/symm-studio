"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Plus, Minus, CheckCircle2 } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Brand Identity",
    tag: "Foundation",
    desc: "Logos, visual systems, and brand guidelines that make your business instantly recognizable and impossible to forget.",
    deliverables: [
      "Primary logo + secondary variants + icon mark",
      "Full color palette with hex/RGB/CMYK codes",
      "Typography system with usage rules",
      "Brand guidelines PDF (print & digital)",
      "Business card + letterhead design",
      "Social media kit (profile, cover, post templates)",
    ],
    timeline: "2–3 weeks",
    why: [
      "First impressions are permanent. 94% of customers cite visual appearance as the #1 reason they distrust a business.",
      "A cohesive brand identity lets you charge more, attract better clients, and compete with companies 10x your size.",
      "Without it, you're invisible. With it, people remember you after one interaction.",
    ],
  },
  {
    n: "02",
    title: "Web Development",
    tag: "Core Product",
    desc: "Custom Next.js/React websites built for speed, accessibility, and conversion, from landing pages to complex web apps.",
    deliverables: [
      "Custom Next.js site (no templates, no page builders)",
      "CMS integration (Sanity, Contentful, or headless WP)",
      "Mobile-first responsive design across all breakpoints",
      "Core Web Vitals optimization (90+ Lighthouse score)",
      "Analytics & conversion tracking setup",
      "30-day post-launch support included",
    ],
    timeline: "3–6 weeks",
    why: [
      "A 1-second delay in load time reduces conversions by 7%. Template sites are slow, generic, and built for everyone, meaning they work for no one.",
      "Your website is your best salesperson. It works 24/7, never calls in sick, and can close clients while you sleep.",
      "Custom development means built exactly for your business logic, your customers, and your growth trajectory.",
    ],
  },
  {
    n: "03",
    title: "UI/UX Design",
    tag: "Experience",
    desc: "User-centered interfaces that look premium and convert. Designed for real humans across web and mobile.",
    deliverables: [
      "User research summary & persona development",
      "Information architecture & user flow mapping",
      "Low-fidelity wireframes for all key screens",
      "High-fidelity mockups in Figma",
      "Interactive clickable prototype",
      "Design system & component library with handoff specs",
    ],
    timeline: "2–4 weeks",
    why: [
      "Every extra click costs you customers. Poor UX is the #1 silent killer of digital products. Users leave before they ever complain.",
      "Good UX reduces support costs, increases retention, and makes your product feel premium without changing a single feature.",
      "We design based on how people actually behave, not how we wish they did.",
    ],
  },
  {
    n: "04",
    title: "Creative Direction",
    tag: "Strategy",
    desc: "A cohesive visual strategy across every touchpoint so your brand maintains a compelling, consistent presence everywhere.",
    deliverables: [
      "Full brand audit (current state analysis)",
      "Visual strategy & positioning document",
      "Art direction guidelines for photo & video",
      "Moodboard & reference system",
      "Cross-channel consistency review",
      "Ongoing creative consultation (monthly retainer option)",
    ],
    timeline: "1–2 weeks",
    why: [
      "Inconsistent branding makes you look amateur. Customers unconsciously assess trustworthiness through visual consistency.",
      "Creative direction ensures your Instagram, website, pitch deck, and packaging all feel like one company, not four different freelancers.",
      "It's the difference between a brand people recognize and one they forget.",
    ],
  },
  {
    n: "05",
    title: "Content Creation",
    tag: "Growth",
    desc: "Engaging content, from short-form social to long-form editorial, that builds authority and drives real business outcomes.",
    deliverables: [
      "Content strategy & audience analysis",
      "Monthly content calendar",
      "Social media posts (copy + creative direction)",
      "Blog articles & long-form content",
      "Email newsletter sequences",
      "Video scripts & storyboards",
    ],
    timeline: "Ongoing or project-based",
    why: [
      "Businesses that publish consistent content generate 3x more leads than those that don't.",
      "Content builds authority. It's the only marketing asset that compounds in value over time instead of disappearing when the budget stops.",
      "Without content, you're invisible between sales cycles. With it, you stay top-of-mind when customers are ready to buy.",
    ],
  },
  {
    n: "06",
    title: "Copywriting",
    tag: "Conversion",
    desc: "Clear, persuasive copy for websites, ads, and marketing materials that drives real action, not just page views.",
    deliverables: [
      "Full website copy (all pages)",
      "Headline variants for A/B testing",
      "Meta titles & descriptions for SEO",
      "Email sequences (welcome, nurture, sales)",
      "Ad copy for paid campaigns",
      "Brand voice guide for internal use",
    ],
    timeline: "1–2 weeks",
    why: [
      "You can have the best product in the world and lose to a competitor with worse copy. Words sell.",
      "Most business copy is written by owners who know too much. It confuses customers. Expert copy speaks the customer's language.",
      "A single rewritten headline can increase conversions by 40%. Copy is the highest-ROI investment in your marketing stack.",
    ],
  },
  {
    n: "07",
    title: "App Development",
    tag: "Build",
    desc: "Native and cross-platform mobile applications on modern stacks, delivering great experiences on every device, at every scale.",
    deliverables: [
      "iOS & Android app (React Native or native)",
      "Backend API & database architecture",
      "Admin dashboard for content/user management",
      "Push notifications & in-app messaging",
      "App Store & Google Play submission",
      "60-day post-launch support & bug fixes",
    ],
    timeline: "8–16 weeks",
    why: [
      "If your business process requires repetitive manual work, an app pays for itself, often within months.",
      "Mobile users expect app-quality experiences. A clunky web experience on mobile is a lost customer.",
      "Custom apps give you a competitive moat. Off-the-shelf software gives your competitors the exact same tools.",
    ],
  },
  {
    n: "08",
    title: "Virtual Agents",
    tag: "Automation",
    desc: "AI-powered chatbots and agents for customer support, lead capture, sales automation, and internal workflows.",
    deliverables: [
      "Custom AI agent trained on your business data",
      "Knowledge base creation & management",
      "CRM & workflow integrations (HubSpot, Slack, etc.)",
      "Conversation analytics dashboard",
      "Staff training & handoff protocols",
      "Ongoing optimization & retraining",
    ],
    timeline: "2–4 weeks",
    why: [
      "The average business loses 40% of leads due to slow follow-up. An AI agent responds in seconds, any hour, any day.",
      "Virtual agents handle the repetitive 80% of customer questions, freeing your team to focus on the 20% that actually requires a human.",
      "This is not a future technology. Businesses using AI agents right now are outpacing competitors who are still on hold music.",
    ],
  },
  {
    n: "09",
    title: "SEO & Metadata",
    tag: "Visibility",
    desc: "Search optimization and metadata strategy so the right customers find you at exactly the right moment.",
    deliverables: [
      "Full technical SEO audit & fix roadmap",
      "Keyword research & content gap analysis",
      "On-page optimization (titles, headings, structure)",
      "Schema markup & structured data implementation",
      "Sitemap, robots.txt & crawl optimization",
      "Monthly performance reporting",
    ],
    timeline: "Ongoing (first results 60–90 days)",
    why: [
      "75% of users never scroll past the first page of Google. If you're not there, you don't exist to most of your market.",
      "Paid ads stop the moment you stop paying. SEO compounds. Content you publish today can drive traffic for years.",
      "Metadata controls how your business looks when shared on social or in search results. It's your digital first impression before anyone even clicks.",
    ],
  },
];

const guarantees = [
  { n: "01", title: "No templates. Ever.", desc: "Every project is built from scratch for your business. You won't find your website on a theme marketplace." },
  { n: "02", title: "Everything in-house.", desc: "No subcontractors, no handoffs, no diluted quality. The team you talk to is the team that builds." },
  { n: "03", title: "Fixed scope. Fixed price.", desc: "We lock deliverables and price before a line of code is written. No surprise invoices at the finish line." },
  { n: "04", title: "You own it all.", desc: "Full code ownership, no vendor lock-in. Everything we build is yours: clean, documented, and ready to hand off." },
];

function ServiceRow({ s, i }: { s: typeof services[0]; i: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: i * 0.04 }}
      className="border-b border-border"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 sm:gap-10 py-7 px-3 -mx-3 text-left hover:bg-surface transition-colors group"
        aria-expanded={open}
      >
        <span className="text-xs tracking-widest text-muted/60 font-mono w-6 flex-shrink-0">{s.n}</span>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 flex-shrink-0 md:w-72">
          <h2
            className="font-display font-bold text-paper group-hover:text-flame transition-colors"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
          >
            {s.title}
          </h2>
          <span className="text-[9px] tracking-[0.2em] uppercase text-flame/70 border border-flame/20 px-2 py-0.5 font-mono hidden sm:inline-block">
            {s.tag}
          </span>
        </div>
        <p className="text-muted text-sm leading-relaxed max-w-md hidden md:block">{s.desc}</p>
        <span className="ml-auto flex-shrink-0 text-muted group-hover:text-flame transition-colors">
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 px-3 -mx-3 pl-4 sm:pl-[calc(1.5rem+2.5rem)] md:pl-[calc(1.5rem+4rem)]">
              {/* Mobile desc */}
              <p className="text-muted text-sm leading-relaxed mb-8 md:hidden">{s.desc}</p>

              <div className="grid md:grid-cols-2 gap-10 md:gap-16">
                {/* Deliverables */}
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-flame mb-4 font-medium">What&apos;s included</p>
                  <ul className="space-y-2.5">
                    {s.deliverables.map((d, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                        <CheckCircle2 size={13} className="text-flame mt-[3px] flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why */}
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-flame mb-4 font-medium">Why you need this</p>
                  <ul className="space-y-3">
                    {s.why.map((point, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted leading-relaxed">
                        <span className="text-flame mt-[3px] flex-shrink-0">›</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-flame/60 hover:text-flame transition-colors"
                >
                  See pricing
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ServicesPageContent() {
  return (
    <div className="min-h-screen" style={{ background: "#faf8f5" }}>

      {/* ── HERO ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-44 pb-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>

          <h1
            className="font-display font-bold text-paper leading-[0.92]"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.04em" }}
          >
            Everything your<br />
            <em className="not-italic text-flame">brand needs.</em>
          </h1>
        </motion.div>
      </div>

      {/* ── HERO IMAGE ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 md:px-10 pb-16"
      >
        <div className="relative w-full overflow-hidden aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/8]">
          <Image
            src="/services-hero.png"
            alt="Symm Studios: full-service creative studio"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* ── INTRO ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-20">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-24 items-start">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-bold text-paper leading-tight"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.025em" }}
          >
            Nine services. One studio. Zero handoffs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-muted text-sm leading-relaxed"
          >
            Most agencies specialize in one thing and subcontract the rest, adding cost, delay, and diluted quality at every handoff. Symm keeps everything in-house, from the first brand concept to the final deployed product. Expand any service below to see exactly what you get.
          </motion.p>
        </div>
      </div>

      {/* ── SERVICES LIST ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-36">
        <div className="border-t border-border">
          {services.map((s, i) => (
            <ServiceRow key={s.n} s={s} i={i} />
          ))}
        </div>
      </div>

      {/* ── GUARANTEES ── */}
      <div className="border-t border-border" style={{ background: "#1c1a17" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs tracking-[0.22em] uppercase text-flame mb-4">Our standards</p>
            <h2
              className="font-display font-bold text-void leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.025em" }}
            >
              What every project includes.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {guarantees.map((item, i) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-void p-8 md:p-10"
              >
                <span className="font-display font-bold text-flame/20 block mb-4 leading-none" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", letterSpacing: "-0.04em" }}>{item.n}</span>
                <h3
                  className="font-display font-bold text-paper mb-3 leading-tight"
                  style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)", letterSpacing: "-0.02em" }}
                >
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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
              Not sure what<br />
              you need? <span className="text-flame">Ask us.</span>
            </h2>
            <p className="text-muted text-sm mt-4 max-w-sm leading-relaxed">
              We scope every project from scratch. Tell us where you are and where you want to go. We'll tell you exactly what it takes to get there.
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
              Start a Project
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
