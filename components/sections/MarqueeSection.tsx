"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const marqueeItems = [
  "Operational Clarity",
  "AI that removes friction",
  "Technical Precision",
  "Built for complex workflows",
  "Faster Impact",
  "Results, delivered quickly",
];

export function MarqueeSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => {
          return parseFloat(x) % totalWidth;
        }),
      },
    });
  });

  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <section className="py-8 border-y border-[#1e1e1e] overflow-hidden bg-[#0d0d0d]">
      <div className="marquee-container">
        <div ref={trackRef} className="marquee-track whitespace-nowrap flex">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 px-8 text-sm font-light text-[#444440] uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8fa5f] flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
