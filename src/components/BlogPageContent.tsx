"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getAllPosts, BlogPost } from "@/lib/blog";

const ease = [0.16, 1, 0.3, 1] as const;

function PostCard({ post, i }: { post: BlogPost; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.55, delay: i * 0.07, ease }}
      className="group border-t border-border"
    >
      <Link href={`/blog/${post.slug}`} className="flex flex-col md:flex-row md:items-start gap-6 py-10">
        {/* Index */}
        <span className="shrink-0 text-[11px] tracking-[0.2em] text-muted/40 md:w-12 mt-1">
          {String(i + 1).padStart(2, "0")}
        </span>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted/60">
              {post.category}
            </span>
            {post.status === "in-progress" && (
              <span className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase font-medium text-flame">
                <span className="w-1.5 h-1.5 rounded-full bg-flame animate-pulse inline-block" />
                In Progress
              </span>
            )}
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-paper group-hover:text-flame transition-colors duration-300 leading-snug mb-3">
            {post.title}
          </h2>
          <p className="text-sm text-muted leading-relaxed max-w-2xl">{post.excerpt}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 border border-border text-muted/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Meta + arrow */}
        <div className="shrink-0 flex md:flex-col items-center md:items-end justify-between gap-4 md:pt-1">
          <div className="text-right space-y-1">
            <p className="text-xs text-muted/50">{post.date}</p>
            <p className="text-xs text-muted/40">{post.readTime}</p>
          </div>
          <ArrowRight
            size={16}
            className="text-muted/30 group-hover:text-flame group-hover:translate-x-1 transition-all duration-300"
          />
        </div>
      </Link>
    </motion.article>
  );
}

export function BlogPageContent() {
  const posts = getAllPosts();

  return (
    <main className="pt-28 pb-24 md:pt-36 md:pb-36" style={{ background: "#faf8f5" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-[11px] tracking-[0.25em] uppercase text-muted mb-4"
          >
            Symm Studios
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06, ease }}
            className="font-display font-bold text-paper leading-[0.95]"
            style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease }}
            className="mt-5 text-base text-muted max-w-xl"
          >
            Articles, case studies, and behind-the-scenes updates from the studio.
          </motion.p>
        </div>

        {/* Post list */}
        <div>
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} i={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
