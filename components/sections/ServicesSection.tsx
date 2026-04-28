"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "strategy",
    title: "AI Strategy\n& Consulting",
    color: "#1c1600",
    accent: "#d4a843",
    bgAccent: "rgba(212,168,67,0.08)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="3"
          width="7"
          height="7"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="3"
          y="14"
          width="7"
          height="7"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M14 17.5h7M17.5 14v7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    items: [
      "AI Readiness Audit",
      "AI Roadmap Design",
      "Process Optimization Advisory",
    ],
  },
  {
    id: "workflow",
    title: "Workflow\nAutomation",
    color: "#1a0d0d",
    accent: "#e87070",
    bgAccent: "rgba(232,112,112,0.08)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M4 6h16M4 12h10M4 18h7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="19" cy="15" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M19 13v2l1 1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    items: [
      "CRM & Lead Automation",
      "Internal Process Bots",
      "Reporting Dashboards",
    ],
  },
  {
    id: "integrations",
    title: "AI Integrations\n& Custom Systems",
    color: "#0b1520",
    accent: "#5ab8d8",
    bgAccent: "rgba(90,184,216,0.08)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle
          cx="5.5"
          cy="12"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="18.5"
          cy="5.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="18.5"
          cy="18.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 11L16 7M8 13L16 17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    items: ["ChatGPT & LLM Integrations", "API Automation", "Custom AI Tools"],
  },
  {
    id: "data",
    title: "Data Intelligence\n& Analytics",
    color: "#0a1610",
    accent: "#56d68a",
    bgAccent: "rgba(86,214,138,0.08)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M3 18l5-6 4 3 5-7 4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 21h18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    items: [
      "Predictive Analytics",
      "Data Unification",
      "Insight Visualization",
    ],
  },
  {
    id: "marketing",
    title: "AI Marketing\n& Design",
    color: "#110c1e",
    accent: "#a07de8",
    bgAccent: "rgba(160,125,232,0.08)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    items: [
      "Personalized Campaigns",
      "Conversational Chatbots",
      "Content Generation Systems",
    ],
  },
];

const CARD_WIDTH = 360;
const CARD_GAP = 14;

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  useGSAP(
    () => {
      const track = trackRef.current;
      const pinWrap = pinWrapRef.current;
      if (!track || !pinWrap) return;

      // Total distance to scroll horizontally
      const getScrollDist = () => track.scrollWidth - pinWrap.offsetWidth;

      const st = ScrollTrigger.create({
        trigger: pinWrap,
        pin: true,
        start: "top top",
        end: () => `+=${getScrollDist()}`,
        scrub: 0.9,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          gsap.set(track, { x: -self.progress * getScrollDist() });
        },
      });

      return () => st.kill();
    },
    { scope: sectionRef }
  );

  return (
    <section id="services" ref={sectionRef}>
      {/* Scrollable section header */}
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 w-full pt-24 md:pt-36 pb-10">
        <div ref={headerRef}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-widest text-[#888880] mb-4"
          >
            Our Services
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-[#555550] max-w-xs leading-relaxed flex-shrink-0"
            >
              Scroll to explore all 5 service categories →
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── Pinned horizontal scroll area ── */}
      <div
        ref={pinWrapRef}
        className="relative overflow-hidden"
        style={{ height: "100svh" }}
      >
        {/* Horizontal card track */}
        <div
          ref={trackRef}
          className="absolute inset-0 flex items-center will-change-transform"
          style={{
            gap: `${CARD_GAP}px`,
            paddingLeft: "max(24px, calc((100vw - 1280px) / 2 + 48px))",
            paddingRight: 80,
            width: "max-content",
          }}
        >
          {services.map((service, idx) => (
            <article
              key={service.id}
              className="service-card flex-shrink-0 rounded-3xl border flex flex-col overflow-hidden"
              style={{
                width: CARD_WIDTH,
                height: "min(520px, 72vh)",
                background: service.color,
                borderColor: `${service.accent}20`,
              }}
            >
              {/* Card header */}
              <div className="p-7 pb-6">
                <div className="flex items-center justify-between mb-7">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center border"
                    style={{
                      background: service.bgAccent,
                      color: service.accent,
                      borderColor: `${service.accent}25`,
                    }}
                  >
                    {service.icon}
                  </div>
                  {/* Counter */}
                  <span
                    className="text-xs font-mono"
                    style={{ color: `${service.accent}60` }}
                  >
                    {String(idx + 1).padStart(2, "0")} /{" "}
                    {String(services.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-[1.4rem] font-semibold leading-tight whitespace-pre-line"
                  style={{ color: service.accent }}
                >
                  {service.title}
                </h3>
              </div>

              {/* Divider */}
              <div
                className="mx-7"
                style={{ height: 1, background: `${service.accent}18` }}
              />

              {/* Items */}
              <ul className="px-7 py-5 flex flex-col flex-1 justify-center gap-0">
                {service.items.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center justify-between py-4"
                    style={{
                      borderBottom:
                        i < service.items.length - 1
                          ? `1px solid ${service.accent}12`
                          : "none",
                    }}
                  >
                    <span
                      className="text-sm"
                      style={{ color: `${service.accent}cc` }}
                    >
                      {item}
                    </span>
                    <span
                      className="w-6 h-6 rounded-full text-xs flex items-center justify-center flex-shrink-0 font-medium"
                      style={{
                        background: `${service.accent}15`,
                        color: service.accent,
                        border: `1px solid ${service.accent}25`,
                      }}
                    >
                      +
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {/* CTA end card */}
          <div
            className="service-card flex-shrink-0 rounded-3xl border border-[#1e1e1e] bg-[#0d0d0d] flex flex-col items-start justify-between p-8"
            style={{ width: 260, height: "min(520px, 72vh)" }}
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-[#c8fa5f]/10 flex items-center justify-center mb-6">
                <svg
                  className="w-4 h-4 text-[#c8fa5f]"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2 8h12M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-widest text-[#555550] mb-3">
                Ready to start?
              </p>
              <p className="text-xl font-light text-[#f5f5f0] leading-snug">
                Let&apos;s build something meaningful together.
              </p>
            </div>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-full bg-[#c8fa5f] text-[#0a0a0a] hover:bg-[#d4fb6e] transition-colors"
            >
              Get Started →
            </a>
          </div>
        </div>

        {/* Bottom hint */}
        <div className="absolute bottom-8 right-8 flex items-center gap-2 pointer-events-none">
          <span className="text-[10px] uppercase tracking-widest text-[#333330]">
            Scroll to explore
          </span>
          <svg
            className="w-3.5 h-3.5 text-[#333330]"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M2 7h10M7 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
