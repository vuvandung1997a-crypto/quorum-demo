"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const comparisonRows = [
  { feature: "End-to-end automations", quorum: "Up to 10", other: "1 – 2" },
  { feature: "Custom AI assistants", quorum: "✓", other: "✗" },
  { feature: "Real-time data pipelines", quorum: "✓", other: "✗" },
  { feature: "Scalable AI infrastructure", quorum: "✓", other: "Partial" },
];

const marqueeTextLeft = ["Operational clarity", "AI that removes friction", "Technical precision"];
const marqueeTextRight = ["Faster impact", "Results, delivered quickly", "Built for complex workflows"];

export function ComparisonSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeLRef = useRef<HTMLDivElement>(null);
  const marqueeRRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Pinned horizontal scroll marquees driven by scroll
      if (marqueeLRef.current) {
        gsap.to(marqueeLRef.current, {
          xPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
      if (marqueeRRef.current) {
        gsap.to(marqueeRRef.current, {
          xPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Table rows fade-in
      const rows = tableRef.current?.querySelectorAll(".comparison-row");
      rows?.forEach((row, i) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  const repeat = (arr: string[], n: number) =>
    Array.from({ length: n }, () => arr).flat();

  return (
    <section ref={sectionRef} className="py-24 md:py-36 overflow-hidden">
      <div className="container-custom mb-16">
        <p className="text-xs uppercase tracking-widest text-[#888880] mb-4">Agency</p>
        <h2 className="text-4xl md:text-6xl font-light text-[#f5f5f0] leading-tight">
          Why{" "}
          <span className="italic text-[#c8fa5f]">Quorum</span>
          <br /> over other agencies?
        </h2>
      </div>

      {/* Scroll-driven parallax text rows */}
      <div className="overflow-hidden mb-4 py-3 border-y border-[#1a1a1a]">
        <div
          ref={marqueeLRef}
          className="flex gap-12 whitespace-nowrap will-change-transform"
        >
          {repeat(marqueeTextLeft, 6).map((t, i) => (
            <span
              key={i}
              className="text-5xl md:text-7xl font-light text-[#1a1a1a] uppercase tracking-tighter"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="overflow-hidden mb-16 py-3 border-b border-[#1a1a1a]">
        <div
          ref={marqueeRRef}
          className="flex gap-12 whitespace-nowrap will-change-transform -translate-x-[10%]"
        >
          {repeat(marqueeTextRight, 6).map((t, i) => (
            <span
              key={i}
              className="text-5xl md:text-7xl font-light text-[#1a1a1a] uppercase tracking-tighter"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Comparison table */}
      <div className="container-custom" ref={tableRef}>
        <div className="rounded-2xl border border-[#1e1e1e] overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-3 border-b border-[#1e1e1e] bg-[#0d0d0d]">
            <div className="p-4 md:p-6 col-span-1 border-r border-[#1e1e1e]">
              <span className="text-xs uppercase tracking-widest text-[#555550]">
                Feature
              </span>
            </div>
            <div className="p-4 md:p-6 text-center border-r border-[#1e1e1e]">
              <span className="text-sm font-medium text-[#c8fa5f]">Quorum</span>
            </div>
            <div className="p-4 md:p-6 text-center">
              <span className="text-sm text-[#555550]">Other Agencies</span>
            </div>
          </div>

          {/* Rows */}
          {comparisonRows.map((row) => (
            <div
              key={row.feature}
              className="comparison-row opacity-0 grid grid-cols-3 border-b border-[#1a1a1a] last:border-b-0 hover:bg-[#0d0d0d] transition-colors"
            >
              <div className="p-4 md:p-6 border-r border-[#1a1a1a]">
                <span className="text-sm text-[#888880]">{row.feature}</span>
              </div>
              <div className="p-4 md:p-6 text-center border-r border-[#1a1a1a]">
                <span className="text-sm font-medium text-[#f5f5f0]">
                  {row.quorum}
                </span>
              </div>
              <div className="p-4 md:p-6 text-center">
                <span className="text-sm text-[#555550]">{row.other}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full bg-[#c8fa5f] text-[#0a0a0a] hover:bg-[#d4fb6e] transition-colors"
          >
            Book a call →
          </a>
        </div>
      </div>
    </section>
  );
}
