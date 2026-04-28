"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Quorum transformed how our team operates — turning scattered processes into a unified AI workflow that saves us hours every single day.",
    name: "Helena Flows",
    role: "Founder, Altura AI",
    avatar: "HF",
  },
  {
    quote:
      "Quorum is an extension of our team. They delivered our AI integration in record time with zero hand-holding — just results.",
    name: "Samira Claude",
    role: "CFO, Qorps",
    avatar: "SC",
  },
  {
    quote:
      "The ROI was visible within the first month. Their approach to AI automation is unlike anything we've seen from other agencies.",
    name: "Marcus Reid",
    role: "CEO, NovaBridge",
    avatar: "MR",
  },
];

const stats = [
  { value: "1,200+", label: "Businesses Served" },
  { value: "94%", label: "Client Retention Rate" },
  { value: "16", label: "Years of operation" },
  { value: "1 Day", label: "Turnaround on Urgent Filings", italic: true },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  useGSAP(
    () => {
      const statItems = statsRef.current?.querySelectorAll(".stat-item");
      statItems?.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 md:py-36"
    >
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
              Testimonials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-light text-[#f5f5f0] leading-tight"
            >
              What clients say
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-sm text-[#888880] hover:text-[#f5f5f0] transition-colors"
          >
            View Case Studies
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </motion.a>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="p-8 rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] flex flex-col"
            >
              {/* Quote marks */}
              <div className="text-4xl font-serif text-[#333] mb-4 leading-none">
                &ldquo;
              </div>
              <p className="text-[#f5f5f0] text-sm leading-relaxed mb-8 flex-1">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-6 border-t border-[#1a1a1a]">
                <div className="w-9 h-9 rounded-full bg-[#1e1e1e] flex items-center justify-center text-xs font-medium text-[#888880]">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#f5f5f0]">{t.name}</p>
                  <p className="text-xs text-[#555550]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-[#1e1e1e]"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item opacity-0">
              <p
                className={`stat-number text-4xl md:text-5xl font-light text-[#f5f5f0] mb-2 ${
                  stat.italic ? "italic" : ""
                }`}
              >
                {stat.value}
              </p>
              <p className="text-xs text-[#555550] leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
