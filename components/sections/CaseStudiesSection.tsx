"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const caseStudies = [
  {
    id: "supportpilot",
    tags: ["Multichannel Integration", "Knowledge Base Engineering"],
    title: "Support Pilot — Multichannel AI Customer Assistant",
    description: "Built a comprehensive AI-driven customer support system that handles 85% of queries without human intervention across email, chat, and social media.",
    stats: [
      { value: "−64%", label: "Response time" },
      { value: "−40%", label: "Backlog" },
      { value: "24/7", label: "Uptime" },
    ],
    color: "#161c16",
    accentColor: "#4ade80",
    image: "/globe.svg",
  },
  {
    id: "retailflow",
    tags: ["AI Forecasting", "Process Automation"],
    title: "Retail Flow — AI-Driven Demand Forecasting & Inventory Automation",
    description: "Implemented a machine learning solution for a major retail chain to predict demand and automate stock replenishment across 500+ locations.",
    stats: [
      { value: "32%", label: "Stockout reduction" },
      { value: "+18%", label: "Turnover rate" },
      { value: "12h/w", label: "Saved per store" },
    ],
    color: "#16161c",
    accentColor: "#60a5fa",
    image: "/window.svg",
  },
  {
    id: "leadsense",
    tags: ["AI Lead Scoring", "Workflow Automation"],
    title: "Leadsense — Automated Lead Qualification & Routing Engine",
    description: "Developed an intelligent routing engine that scores leads in real-time and connects high-intent prospects with the right sales representatives instantly.",
    stats: [
      { value: "+45%", label: "CR Increase" },
      { value: "−99%", label: "Response time" },
      { value: "100h/mo", label: "Time saved" },
    ],
    color: "#1c1616",
    accentColor: "#f87171",
    image: "/next.svg",
  },
  {
    id: "quantum",
    tags: ["Predictive Analytics", "Data Engineering"],
    title: "Quantum — Real-time Financial Risk Assessment Platform",
    description: "Engineered a high-performance data pipeline for financial institutions to assess market risk and liquidity in real-time using advanced predictive models.",
    stats: [
      { value: "1.2ms", label: "Latency" },
      { value: "99.99%", label: "Accuracy" },
      { value: "4.2TB", label: "Daily data" },
    ],
    color: "#1c1c16",
    accentColor: "#fbbf24",
    image: "/vercel.svg",
  },
];

interface CaseStudyCardProps {
  study: (typeof caseStudies)[0];
  index: number;
  total: number;
}

function CaseStudyCard({ study, index, total }: CaseStudyCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const isLast = index === total - 1;
  
  const scale = useTransform(scrollYProgress, [0.7, 1], [1, isLast ? 1 : 0.92]);
  const dimOpacity = useTransform(scrollYProgress, [0.7, 1], [0, isLast ? 0 : 0.4]);

  return (
    <div 
      ref={containerRef}
      className="sticky top-[10vh] w-full mb-[15vh] last:mb-0"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ 
          scale,
          backgroundColor: study.color,
        }}
        className="relative min-h-[550px] md:min-h-[650px] rounded-[40px] border border-[#ffffff10] overflow-hidden flex flex-col md:flex-row shadow-[0_-20px_50px_rgba(0,0,0,0.5)] will-change-transform"
      >
        <motion.div 
          className="absolute inset-0 bg-black z-10 pointer-events-none"
          style={{ opacity: dimOpacity }}
        />

        {/* Visual Side */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-[#00000015]">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at center, ${study.accentColor}44 0%, transparent 70%)`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full aspect-square max-w-[280px]"
            >
              <div
                className="absolute inset-0 rounded-full blur-[80px] opacity-20"
                style={{ backgroundColor: study.accentColor }}
              />
              <img 
                src={study.image} 
                alt={study.title}
                className="w-full h-full object-contain relative z-10 brightness-0 invert opacity-40"
              />
            </motion.div>
          </div>
          
          <div className="absolute top-8 left-8 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest bg-black/30 backdrop-blur-md border border-white/10 text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-between relative z-20">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div 
                className="w-1.5 h-1.5 rounded-full" 
                style={{ backgroundColor: study.accentColor }} 
              />
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">Project Review</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#f5f5f0] mb-8 leading-[1.2]">
              {study.title}
            </h3>
            
            <p className="text-white/50 text-base md:text-lg mb-12 max-w-md leading-relaxed font-light">
              {study.description}
            </p>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-6 mb-12 border-t border-white/5 pt-10">
              {study.stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-xl md:text-2xl font-light mb-1"
                    style={{ color: study.accentColor }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[9px] uppercase tracking-widest text-white/30 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ x: 8 }}
              className="group inline-flex items-center gap-4 text-sm font-light text-white/80 hover:text-white transition-colors"
            >
              Read full case study
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2 12L12 2M12 2H4M12 2V10"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function CaseStudiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="case-studies" className="py-32 md:py-48 bg-[#0a0a0a]">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.4em] text-[#c8fa5f] mb-6 font-medium"
            >
              Our Impact
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-light text-[#f5f5f0] leading-[1.05]"
            >
              Proven results from the <span className="text-white/30 italic">front lines</span> of AI.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="/case-studies"
              className="group inline-flex items-center gap-3 text-sm text-white/40 hover:text-white transition-colors"
            >
              View all work
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </motion.div>
        </div>

        {/* Stacking Container */}
        <div ref={containerRef} className="relative flex flex-col items-center">
          {caseStudies.map((study, i) => (
            <CaseStudyCard 
              key={study.id} 
              study={study} 
              index={i} 
              total={caseStudies.length}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8 }}
          className="mt-32 p-12 md:p-20 rounded-[48px] border border-white/5 bg-[#111] flex flex-col lg:flex-row lg:items-center justify-between gap-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c8fa5f] opacity-[0.02] blur-[120px] -mr-64 -mt-64 pointer-events-none" />
          
          <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl md:text-4xl font-light text-[#f5f5f0] mb-6">
              Ready to automate your success?
            </h3>
            <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed">
              We help ambitious companies leverage cutting-edge AI to solve complex problems and unlock new revenue streams.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#c8fa5f] text-[#0a0a0a] text-sm font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_30px_rgba(200,250,95,0.2)]"
            >
              Start a project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
