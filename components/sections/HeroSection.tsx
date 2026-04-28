"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "+23%", label: "Team productivity growth" },
  { value: "100%", label: "Leaks detected" },
  { value: "75+", label: "Campaigns launched" },
  { value: "85%", label: "Manpower release" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(bgRef.current, {
        yPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c8fa5f] opacity-[0.06] blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#4a90e2] opacity-[0.04] blur-[100px]" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1e1e1e 1px, transparent 1px), linear-gradient(to right, #1e1e1e 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.3,
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Main Container - Tighter max-width for better "gutter" feel */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="tag-pill">Humans behind AI</span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-[9rem] font-light leading-[0.9] tracking-tight text-[#f5f5f0]"
          >
            Flex
            <span className="italic text-[#888880]">ibility</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-lg md:text-xl text-[#888880] leading-relaxed font-light"
          >
            We translate messy processes into clean, automated flows that
            compound your team&apos;s output and free up strategic time.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <a
              href="#pricing"
              className="group relative inline-flex items-center gap-2 text-sm font-medium px-8 py-4 rounded-full bg-[#c8fa5f] text-[#0a0a0a] hover:scale-105 transition-transform"
            >
              Get Started
              <span className="group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </a>
            <a
              href="#case-studies"
              className="text-sm text-[#888880] hover:text-[#f5f5f0] transition-colors flex items-center gap-2"
            >
              <span className="w-10 h-px bg-[#333]" />
              Latest case study
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-[#1e1e1e] mt-20"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <p className="stat-number text-3xl md:text-4xl font-light text-[#f5f5f0] mb-2">
                {stat.value}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-[#555550] leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-[#333330]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#333330] to-transparent"
        />
      </motion.div>
    </section>
  );
}
