"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const blogPosts = [
  {
    slug: "calculating-break-even-on-ai-tool-subscriptions",
    title: "Calculating break-even on AI tool subscriptions",
    date: "Nov 20, 2025",
    readTime: "5 min read",
    category: "Finance",
  },
  {
    slug: "voice-ai-for-scheduling-where-it-breaks-down",
    title: "Voice AI for scheduling: where it breaks down",
    date: "Nov 20, 2025",
    readTime: "4 min read",
    category: "AI",
  },
  {
    slug: "measuring-ai-automation-success-beyond-cost-savings",
    title: "Measuring AI automation success beyond cost savings",
    date: "Nov 20, 2025",
    readTime: "6 min read",
    category: "Strategy",
  },
];

export function BlogSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 w-full">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-widest text-[#888880] mb-4"
            >
              Blog
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-light text-[#f5f5f0] leading-tight"
            >
              Latest insights
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm text-[#888880] hover:text-[#f5f5f0] transition-colors"
          >
            Visit Blog
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </motion.a>
        </div>

        {/* Blog posts list */}
        <div className="space-y-0">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.slug}
              href={`/blog/${post.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-[#1a1a1a] gap-4 hover:bg-[#0d0d0d] -mx-6 px-6 transition-colors"
            >
              <div className="flex items-start md:items-center gap-4 md:gap-8">
                <span className="tag-pill flex-shrink-0">{post.category}</span>
                <h3 className="text-base md:text-lg text-[#f5f5f0] group-hover:text-[#c8fa5f] transition-colors leading-snug">
                  {post.title}
                </h3>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0 pl-0 md:pl-8">
                <span className="text-xs text-[#555550]">{post.date}</span>
                <span className="text-xs text-[#555550]">{post.readTime}</span>
                <span className="w-6 h-6 rounded-full border border-[#1e1e1e] flex items-center justify-center text-[#555550] group-hover:border-[#c8fa5f] group-hover:text-[#c8fa5f] transition-all">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
