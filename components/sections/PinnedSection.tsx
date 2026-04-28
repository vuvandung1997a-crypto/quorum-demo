"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * PinnedSection — GSAP ScrollTrigger pin + scrub
 *
 * The section pins to the viewport while the user scrolls.
 * As they scroll, the right panel's content animates via scrub.
 * This replicates the "about us / values" section on the reference.
 */

const values = [
  {
    label: "Clarity",
    desc: "We strip away complexity and make AI understandable, practical, and immediately actionable for your team.",
  },
  {
    label: "Partnership",
    desc: "We work alongside you, not above you. Your goals shape every decision we make throughout the engagement.",
  },
  {
    label: "Precision",
    desc: "Every automation we build is engineered to exact specifications, tested thoroughly, and refined continuously.",
  },
];

export function PinnedSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Pin the inner section while scrolling through extra scroll distance
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: outerRef.current,
            pin: pinRef.current,
            start: "top top",
            end: "+=120%",
            scrub: 0.8,
            anticipatePin: 1,
          },
        });

        // Text word reveal
        if (textRef.current) {
          const words = textRef.current.querySelectorAll(".word");
          tl.fromTo(
            words,
            { opacity: 0.15, color: "#444440" },
            {
              opacity: 1,
              color: "#f5f5f0",
              stagger: 0.05,
              ease: "none",
            },
            0
          );
        }

        // Values slide in
        const valueItems = valuesRef.current?.querySelectorAll(".value-item");
        if (valueItems) {
          tl.fromTo(
            valueItems,
            { opacity: 0, x: 30 },
            {
              opacity: 1,
              x: 0,
              stagger: 0.15,
              ease: "power2.out",
            },
            0.3
          );
        }

        return () => mm.revert();
      });
    },
    { scope: outerRef }
  );

  const paragraphText =
    "We support founders, product teams, and operations leaders across industries — from fast-growing startups to established organizations — helping them unlock efficiency and reduce operational risk with practical AI systems.";

  const words = paragraphText.split(" ");

  return (
    <div ref={outerRef} className="relative">
      <div
        ref={pinRef}
        className="min-h-screen flex items-center py-24 md:py-0"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Left: Quote with word-by-word reveal */}
            <div>
              <p className="text-xs uppercase tracking-widest text-[#888880] mb-8">
                Mission and Values
              </p>
              <p ref={textRef} className="text-xl md:text-2xl leading-relaxed">
                {words.map((word, i) => (
                  <span key={i} className="word" style={{ display: "inline", opacity: 0.15 }}>
                    {word}{" "}
                  </span>
                ))}
              </p>
              <div className="mt-12 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1e1e1e] flex items-center justify-center text-xs font-medium text-[#888880]">
                  ML
                </div>
                <div>
                  <p className="text-sm font-medium text-[#f5f5f0]">
                    Mira Lydon
                  </p>
                  <p className="text-xs text-[#555550]">
                    Quorum, Founder and Partner
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Values */}
            <div ref={valuesRef} className="space-y-px">
              {values.map((v, i) => (
                <div
                  key={v.label}
                  className="value-item opacity-0 p-6 md:p-8 rounded-2xl border border-[#1a1a1a] bg-[#0d0d0d] hover:border-[#2a2a2a] transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-mono text-[#888880]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8fa5f]" />
                  </div>
                  <h3 className="text-lg font-medium text-[#f5f5f0] mb-2">
                    {v.label}
                  </h3>
                  <p className="text-sm text-[#555550] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
