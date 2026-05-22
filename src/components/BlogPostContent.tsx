"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlogPost, ContentBlock } from "@/lib/blog";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.75, delay, ease: EASE },
});

const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, delay, ease: EASE },
});

type Section = { heading: string; blocks: ContentBlock[] };
type VideoBlock = Extract<ContentBlock, { type: "video" }>;

function groupSections(content: ContentBlock[]) {
  let heroVideo: VideoBlock | null = null;
  const intro: ContentBlock[] = [];
  const sections: Section[] = [];
  let current: Section | null = null;

  for (const block of content) {
    if (block.type === "video" && !heroVideo && !current) {
      heroVideo = block;
      continue;
    }
    if (block.type === "heading") {
      if (current) sections.push(current);
      current = { heading: block.text, blocks: [] };
    } else if (current) {
      current.blocks.push(block);
    } else {
      intro.push(block);
    }
  }
  if (current) sections.push(current);

  return { heroVideo, intro, sections };
}

function renderBlock(block: ContentBlock, key: string | number) {
  if (block.type === "paragraph") {
    return (
      <p key={key} className="text-base md:text-[17px] leading-[1.8] text-paper/80">
        {block.text}
      </p>
    );
  }

  if (block.type === "subheading") {
    return (
      <h3
        key={key}
        className="font-display font-bold pt-3 text-paper"
        style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)", letterSpacing: "-0.015em" }}
      >
        {block.text}
      </h3>
    );
  }

  if (block.type === "list") {
    return (
      <ul
        key={key}
        className="divide-y"
        style={{ borderColor: "rgba(28,26,23,0.08)", borderTopWidth: 1, borderBottomWidth: 1 }}
      >
        {block.items.map((item, j) => (
          <li key={j} className="flex items-start gap-5 py-4 md:py-5">
            <span
              className="font-mono text-[10px] tracking-widest pt-1.5 flex-shrink-0 w-6 text-flame"
            >
              {String(j + 1).padStart(2, "0")}
            </span>
            <span className="text-[15px] md:text-base leading-relaxed text-paper/80">
              {item}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "callout") {
    return (
      <aside key={key} className="relative pl-6 md:pl-8 py-1 border-l-2 border-flame my-2">
        <p className="text-base md:text-lg leading-relaxed italic text-muted">
          {block.text}
        </p>
      </aside>
    );
  }

  if (block.type === "video") {
    return (
      <figure key={key} className="my-2">
        <div className="rounded-lg overflow-hidden border border-border bg-black shadow-sm">
          <video
            src={block.src}
            controls
            preload="metadata"
            playsInline
            className="w-full h-auto block"
          />
        </div>
        {block.caption && (
          <figcaption className="mt-3 text-xs text-muted/60 italic text-center">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return null;
}

function renderHighlightedTitle(title: string, highlight?: string) {
  if (!highlight) return title;
  const idx = title.indexOf(highlight);
  if (idx === -1) return title;
  return (
    <>
      {title.slice(0, idx)}
      <em className="not-italic text-flame">{highlight}</em>
      {title.slice(idx + highlight.length)}
    </>
  );
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  const { heroVideo, intro, sections } = groupSections(post.content);

  return (
    <main className="min-h-screen" style={{ background: "#faf8f5" }}>
      {/* ── HERO ── */}
      <section style={{ background: "#faf8f5" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-12 md:pb-16">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-10"
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase font-mono text-muted hover:text-flame transition-colors"
            >
              <ArrowLeft size={10} className="group-hover:-translate-x-0.5 transition-transform" />
              All Articles
            </Link>
          </motion.div>

          {/* Status (in-progress only) */}
          {post.status === "in-progress" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase font-mono text-flame">
                <span className="w-1.5 h-1.5 rounded-full bg-flame animate-pulse" />
                In Progress
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.13, ease: EASE }}
            className="font-display font-bold text-paper leading-[0.95] max-w-5xl"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "-0.04em" }}
          >
            {renderHighlightedTitle(post.title, post.titleHighlight)}
          </motion.h1>

          {/* Meta row + excerpt */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
            className="mt-10 md:mt-14 border-t border-border pt-6"
          >
            <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-16 items-start">
              <p className="text-muted text-base md:text-[17px] leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-[10px] tracking-[0.22em] uppercase font-mono text-muted">
                <span>{post.author}</span>
                <span className="w-px h-3 bg-border" />
                <span>{post.date}</span>
                <span className="w-px h-3 bg-border" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HERO VIDEO ── */}
      {heroVideo && (
        <section style={{ background: "#faf8f5" }}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24">
            <motion.div {...fade(0)} className="flex items-end justify-between mb-6 md:mb-8">
              <p className="text-[10px] tracking-[0.26em] uppercase font-mono text-flame">
                Demo Video
              </p>
              <p className="text-[10px] tracking-[0.22em] uppercase font-mono text-muted/60">
                3:56
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1.01 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.0, ease: EASE }}
              className="relative"
            >
              <div className="relative overflow-hidden border border-border bg-black shadow-2xl">
                <video
                  src={heroVideo.src}
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-auto block"
                />
              </div>
              {heroVideo.caption && (
                <p className="mt-4 text-xs text-muted/60 italic text-center md:text-left">
                  {heroVideo.caption}
                </p>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── INTRO ── */}
      {intro.length > 0 && (
        <section style={{ background: "#faf8f5" }}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 border-t border-border pt-16 md:pt-24">
            <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-20">
              <motion.div {...fade(0)}>
                <span
                  className="block font-display font-bold leading-none select-none"
                  style={{
                    fontSize: "clamp(3.5rem, 6vw, 5rem)",
                    letterSpacing: "-0.05em",
                    color: "rgba(28,26,23,0.07)",
                  }}
                >
                  00
                </span>
              </motion.div>
              <motion.div {...reveal(0.05)} className="space-y-7 max-w-3xl">
                {intro.map((b, i) => renderBlock(b, i))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ── NUMBERED SECTIONS ── */}
      {sections.map((section, idx) => {
        const bandBg = idx % 2 === 0 ? "#f3f0eb" : "#faf8f5";

        return (
          <section key={section.heading} style={{ background: bandBg }}>
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
              <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-20">
                <motion.div {...fade(0)}>
                  <span
                    className="block font-display font-bold leading-none select-none"
                    style={{
                      fontSize: "clamp(3.5rem, 6vw, 5rem)",
                      letterSpacing: "-0.05em",
                      color: "rgba(28,26,23,0.07)",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </motion.div>
                <motion.div {...reveal(0.05)} className="space-y-7 max-w-3xl">
                  <h2
                    className="font-display font-bold leading-tight text-paper"
                    style={{
                      fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {section.heading}
                  </h2>
                  {section.blocks.map((b, i) => renderBlock(b, i))}
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── TAGS + CTA ── */}
      <section style={{ background: "#0f0e0d" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-20">
            <motion.div {...fade(0)}>
              <span
                className="block font-display font-bold leading-none mb-3 select-none"
                style={{
                  fontSize: "clamp(3.5rem, 6vw, 5rem)",
                  letterSpacing: "-0.05em",
                  color: "rgba(232,84,26,0.3)",
                }}
              >
                ✕
              </span>
              <p className="text-[10px] tracking-[0.22em] uppercase font-mono text-flame">
                End of Article
              </p>
            </motion.div>
            <motion.div {...reveal(0.05)} className="max-w-3xl">
              <div className="flex flex-wrap gap-2 mb-10">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[0.18em] uppercase px-2.5 py-1.5 border font-mono"
                    style={{ borderColor: "rgba(250,248,245,0.15)", color: "rgba(250,248,245,0.55)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3
                className="font-display font-bold leading-tight mb-8"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  letterSpacing: "-0.025em",
                  color: "#faf8f5",
                }}
              >
                Want one built for your stack?
              </h3>
              <p
                className="text-[15px] leading-relaxed mb-10 max-w-xl"
                style={{ color: "rgba(250,248,245,0.6)" }}
              >
                We design and ship clinical, financial, and operational AI agents that hold up under
                real-world data. If you have a workflow worth automating, let&apos;s talk.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  data-cursor="LET'S GO"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 bg-flame text-void font-display font-bold text-[11px] tracking-[0.12em] uppercase hover:bg-paper transition-colors duration-300"
                >
                  Start a Project
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/blog"
                  data-cursor="BACK"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 border font-display font-bold text-[11px] tracking-[0.12em] uppercase transition-colors duration-300 hover:border-paper"
                  style={{ borderColor: "rgba(250,248,245,0.2)", color: "rgba(250,248,245,0.7)" }}
                >
                  <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                  All Articles
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
