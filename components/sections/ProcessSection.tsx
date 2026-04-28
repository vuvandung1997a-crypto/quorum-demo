"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Analyze operations to uncover the most impactful AI opportunities.",
    bullets: [
      "Identify growth and efficiency gaps fast",
      "Data-driven insights instead of guesswork",
      "Understand ROI before implementation",
    ],
    cta: { label: "Book a free discovery call", href: "#contact" },
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Map the automation architecture and define AI solution flows.",
    bullets: [
      "Tailored system aligned with business goals",
      "Reduced launch risks and technical friction",
      "Built-in flexibility for future scaling",
    ],
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Deploy AI tools, connect APIs, and train custom models.",
    bullets: [
      "Seamless integration with existing workflows",
      "Automates repetitive tasks with precision",
      "Delivers measurable results within weeks",
    ],
  },
  {
    number: "04",
    title: "Optimize",
    subtitle: "Monitor performance, gather insights, and fine-tune automations.",
    bullets: [
      "Continuous improvement through iteration",
      "Lower costs and faster task execution",
      "Systems evolve with your business growth",
    ],
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  useGSAP(
    () => {
      const steps = sectionRef.current?.querySelectorAll(".process-step");
      if (!steps || steps.length === 0) return;

      // Scroll-linked progress bar
      if (progressBarRef.current && pinContainerRef.current) {
        gsap.to(progressBarRef.current, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: pinContainerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
          },
        });
      }

      // Each step fades in on scroll
      steps.forEach((step, i) => {
        gsap.fromTo(
          step,
          { opacity: 0.2, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 70%",
              end: "top 40%",
              scrub: false,
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="process" ref={sectionRef} className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 w-full">
        {/* Header */}
        <div ref={headerRef} className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-widest text-[#888880] mb-4"
          >
            Our process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-light text-[#f5f5f0] leading-tight"
          >
            How we work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-lg text-[#888880]"
          >
            A clear, adaptable framework for implementing AI — because every
            company&apos;s workflows, data, and goals are different.
          </motion.p>
        </div>

        {/* Steps with timeline */}
        <div ref={pinContainerRef} className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#1e1e1e] hidden md:block">
            <div
              ref={progressBarRef}
              className="absolute inset-0 bg-[#c8fa5f] origin-top scale-y-0"
            />
          </div>

          <div className="space-y-0 md:pl-24">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="process-step opacity-20 border-b border-[#1a1a1a] py-12 md:py-16 first:pt-0 last:border-b-0"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  {/* Step number */}
                  <div className="flex-shrink-0 md:w-24">
                    <span className="text-xs font-mono text-[#888880]">
                      {step.number}
                    </span>
                    {/* Mobile dot */}
                    <div className="md:hidden w-2 h-2 rounded-full bg-[#c8fa5f] mt-2" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col md:flex-row md:items-start gap-8">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-light text-[#f5f5f0] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[#888880] text-sm leading-relaxed mb-6">
                        {step.subtitle}
                      </p>
                      <ul className="space-y-2">
                        {step.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-center gap-3 text-sm text-[#666660]"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#c8fa5f] flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      {step.cta && (
                        <a
                          href={step.cta.href}
                          className="mt-6 inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-[#c8fa5f] text-[#0a0a0a] hover:bg-[#d4fb6e] transition-colors"
                        >
                          {step.cta.label} →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
