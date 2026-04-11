"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { BlogPost } from "@/lib/blog";

const ease = [0.16, 1, 0.3, 1] as const;

export function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <main className="pt-28 pb-24 md:pt-36 md:pb-36" style={{ background: "#faf8f5" }}>
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease }}
          className="mb-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-medium text-muted hover:text-flame transition-colors"
          >
            <ArrowLeft size={13} /> All Articles
          </Link>
        </motion.div>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted/60">
            {post.category}
          </span>
          {post.status === "in-progress" && (
            <span className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase font-medium text-flame">
              <span className="w-1.5 h-1.5 rounded-full bg-flame animate-pulse inline-block" />
              In Progress
            </span>
          )}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease }}
          className="font-display font-bold text-paper leading-[1.05] mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {post.title}
        </motion.h1>

        {/* Byline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease }}
          className="flex items-center gap-4 text-xs text-muted/60 border-b border-border pb-8 mb-12"
        >
          <span>{post.author}</span>
          <span className="w-px h-3 bg-border" />
          <span>{post.date}</span>
          <span className="w-px h-3 bg-border" />
          <span>{post.readTime}</span>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease }}
          className="space-y-8"
        >
          {post.content.map((block, i) => {
            if (block.type === "paragraph") {
              return (
                <p key={i} className="text-base md:text-lg text-paper/80 leading-relaxed">
                  {block.text}
                </p>
              );
            }

            if (block.type === "heading") {
              return (
                <h2
                  key={i}
                  className="font-display text-2xl md:text-3xl font-bold text-paper pt-6"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "subheading") {
              return (
                <h3
                  key={i}
                  className="font-display text-lg md:text-xl font-bold text-paper pt-2"
                >
                  {block.text}
                </h3>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={i} className="space-y-3 pl-0">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-base text-paper/80 leading-relaxed">
                      <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full bg-flame" />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            if (block.type === "callout") {
              return (
                <div
                  key={i}
                  className="border-l-2 border-flame pl-6 py-1"
                >
                  <p className="text-sm md:text-base text-muted leading-relaxed italic">
                    {block.text}
                  </p>
                </div>
              );
            }

            return null;
          })}
        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-16 pt-8 border-t border-border">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 border border-border text-muted/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-medium text-muted hover:text-flame transition-colors"
          >
            <ArrowLeft size={13} /> Back to all articles
          </Link>
        </div>
      </div>
    </main>
  );
}
