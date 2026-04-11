"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

const ease = [0.16, 1, 0.3, 1] as const;

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="py-24 md:py-36" style={{ background: "#faf8f5" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-border pb-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-[11px] tracking-[0.25em] uppercase text-muted mb-3"
            >
              From the Studio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.06, ease }}
              className="font-display text-3xl md:text-4xl font-bold text-paper"
            >
              Articles & Updates
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
            className="hidden md:block"
          >
            <Link
              href="/blog"
              className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-medium text-muted hover:text-flame transition-colors"
            >
              View all <ArrowRight size={13} />
            </Link>
          </motion.div>
        </div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block p-6 md:px-8 h-full">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-5">
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

                {/* Title */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-paper group-hover:text-flame transition-colors duration-300 leading-snug mb-4">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-muted/50">{post.date}</span>
                  <span className="text-xs text-muted/50">{post.readTime}</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-10 md:hidden text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-medium text-muted hover:text-flame transition-colors"
          >
            View all articles <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
