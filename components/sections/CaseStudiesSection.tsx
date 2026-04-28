"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: "supportpilot",
    tags: ["Multichannel Integration", "Knowledge Base Engineering"],
    title: "Support Pilot — Multichannel AI Customer Assistant",
    stats: [
      { value: "−64%", label: "Response time" },
      { value: "−40%", label: "Backlog" },
      { value: "24/7", label: "Uptime" },
    ],
    color: "#1a2a1a",
    accentColor: "#4ade80",
  },
  {
    id: "retailflow",
    tags: ["AI Forecasting", "Process Automation", "Systems Integration"],
    title: "Retail Flow — AI-Driven Demand Forecasting & Inventory Automation",
    stats: [
      { value: "32%", label: "Stockout reduction" },
      { value: "+18%", label: "Turnover rate" },
      { value: "12h/w", label: "Saved per store" },
    ],
    color: "#1a1a2a",
    accentColor: "#60a5fa",
  },
  {
    id: "leadsense",
    tags: ["AI Lead Scoring", "Workflow Automation"],
    title: "Leadsense — Automated Lead Qualification & Routing Engine",
    stats: [
      { value: "+45%", label: "CR Increase" },
      { value: "−99%", label: "Response time" },
      { value: "100h/mo", label: "Time saved" },
    ],
    color: "#2a1a1a",
    accentColor: "#f87171",
  },
  {
    id: "lease",
    tags: ["AI Lead Scoring", "Workflow Automation"],
    title: "Leadsense — Automated Lead Qualification & Routing Engine",
    stats: [
      { value: "+45%", label: "CR Increase" },
      { value: "−99%", label: "Response time" },
      { value: "100h/mo", label: "Time saved" },
    ],
    color: "#2a1a1a",
    accentColor: "#f87171",
  },
];

interface CaseStudyCardProps {
  study: (typeof caseStudies)[0];
  index: number;
}

function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group block rounded-2xl border border-[#1e1e1e] overflow-hidden cursor-pointer hover:border-[#2a2a2a] transition-all duration-500"
      style={{ background: study.color }}
    >
      {/* Card image area */}
      <div className="relative h-52 md:h-64 overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${study.accentColor}22 0%, transparent 60%), ${study.color}`,
          }}
        />
        {/* Abstract visual element */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-32 h-32 rounded-full opacity-20 blur-2xl group-hover:scale-125 transition-transform duration-700"
            style={{ background: study.accentColor }}
          />
          <div
            className="absolute w-16 h-16 rounded-full opacity-40"
            style={{
              background: `radial-gradient(circle, ${study.accentColor} 0%, transparent 70%)`,
            }}
          />
        </div>
        {/* Top bar */}
        <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="tag-pill"
              style={{
                borderColor: `${study.accentColor}30`,
                color: study.accentColor + "aa",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Arrow */}
        <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-[#333] flex items-center justify-center group-hover:border-[#c8fa5f] group-hover:bg-[#c8fa5f] transition-all duration-300">
          <svg
            className="w-3.5 h-3.5 text-[#555] group-hover:text-[#0a0a0a] transition-colors"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M2 12L12 2M12 2H4M12 2V10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6 md:p-8 border-t border-[#1e1e1e]">
        <h3 className="text-base md:text-lg font-medium text-[#f5f5f0] mb-6 leading-snug">
          {study.title}
        </h3>
        <div className="flex gap-6">
          {study.stats.map((stat) => (
            <div key={stat.label}>
              <p
                className="stat-number text-xl font-light"
                style={{ color: study.accentColor }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-[#555550] mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function CaseStudiesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="case-studies" className="py-24 md:py-36 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
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
              Let&apos;s talk
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-light text-[#f5f5f0] leading-tight"
            >
              Case Studies
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-sm text-[#888880] hover:text-[#f5f5f0] transition-colors"
          >
            View all case studies
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>

        {/* "View all" card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7 }}
          className="mt-4 p-8 rounded-2xl border border-[#1e1e1e] bg-[#0a0a0a] flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-lg font-medium text-[#f5f5f0] mb-1">
              View all case studies
            </h3>
            <p className="text-sm text-[#555550]">
              Access in-depth reports, strategic analysis, and thought
              leadership
            </p>
          </div>
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border border-[#1e1e1e] text-[#888880] hover:text-[#f5f5f0] hover:border-[#333] transition-all flex-shrink-0"
          >
            Learn more →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
