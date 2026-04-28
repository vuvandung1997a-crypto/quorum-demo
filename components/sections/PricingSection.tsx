"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    id: "growth",
    tier: "Growth",
    subtitle: "Starter AI Integration Team",
    price: "$4,500",
    period: "/mo",
    description: "One request at a time. No hidden fees.",
    features: [
      "1 request at a time",
      "48h turnaround",
      "Unlimited revisions",
      "One Senior AI Specialist",
      "Pause or Cancel Anytime",
    ],
    featured: false,
  },
  {
    id: "scale",
    tier: "Scale",
    badge: "2 spots left",
    subtitle: "Advanced AI Integration Team",
    price: "$7,500",
    period: "/mo",
    description: "Double the game. No hidden fees.",
    features: [
      "2 requests at a time",
      "48h turnaround",
      "Unlimited revisions",
      "Two Senior Specialists",
      "Pause or Cancel Anytime",
    ],
    featured: true,
  },
];

export function PricingSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="pricing" className="py-24 md:py-36 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-widest text-[#888880] mb-4"
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-light text-[#f5f5f0] leading-tight"
          >
            Simple, transparent
            <br />
            <span className="italic text-[#888880]">pricing</span>
          </motion.h2>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`relative p-8 rounded-2xl border flex flex-col ${
                plan.featured
                  ? "border-[#c8fa5f]/30 bg-[#111a0d]"
                  : "border-[#1e1e1e] bg-[#0a0a0a]"
              }`}
            >
              {plan.badge && (
                <span className="absolute top-4 right-4 text-xs font-medium px-3 py-1 rounded-full bg-[#c8fa5f]/10 text-[#c8fa5f] border border-[#c8fa5f]/20">
                  {plan.badge}
                </span>
              )}

              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-[#888880] mb-1">
                  {plan.tier}
                </p>
                <p className="text-sm text-[#555550] mb-6">{plan.subtitle}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl md:text-5xl font-light text-[#f5f5f0]">
                    {plan.price}
                  </span>
                  <span className="text-[#888880] mb-1">{plan.period}</span>
                </div>
                <p className="text-sm text-[#555550] mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[#888880]">
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.featured ? "bg-[#c8fa5f]/20" : "bg-[#1a1a1a]"
                      }`}
                    >
                      <svg
                        className={`w-2.5 h-2.5 ${plan.featured ? "text-[#c8fa5f]" : "text-[#555550]"}`}
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 5L4 7L8 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full text-center text-sm font-medium py-3 rounded-full transition-colors ${
                  plan.featured
                    ? "bg-[#c8fa5f] text-[#0a0a0a] hover:bg-[#d4fb6e]"
                    : "border border-[#1e1e1e] text-[#888880] hover:text-[#f5f5f0] hover:border-[#333]"
                }`}
              >
                Book a discovery call
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom plan banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4 max-w-3xl mx-auto p-8 rounded-2xl border border-[#1e1e1e] bg-[#0a0a0a] flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-lg font-medium text-[#f5f5f0] mb-1">
              Need something custom?
            </h3>
            <p className="text-sm text-[#555550]">
              We&apos;re here to help. Let&apos;s talk and collaborate.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-full border border-[#1e1e1e] text-[#888880] hover:text-[#f5f5f0] hover:border-[#333] transition-all flex-shrink-0"
          >
            Contact Sales →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
