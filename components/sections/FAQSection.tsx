"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

const faqs = [
  {
    question: "What exactly does Quorum integrate?",
    answer:
      "We connect AI models, APIs, internal tools, and third-party platforms into a unified workflow that removes manual work and speeds up decision-making.",
  },
  {
    question: "How long does a typical integration take?",
    answer:
      "Most projects start showing functional results in 2–4 weeks, depending on complexity and the number of systems involved.",
  },
  {
    question: "Do we need technical expertise on our side?",
    answer:
      "No. We handle the architecture, development, and optimization. Your team only provides context and feedback.",
  },
  {
    question: "Can you work with our existing tools?",
    answer:
      "Yes. We adapt to your current stack — CRMs, project management tools, data sources, or custom internal systems.",
  },
  {
    question: "How do you ensure data privacy and security?",
    answer:
      "We follow strict access controls, encryption standards, and secure data-routing practices. No sensitive data is used without explicit approval.",
  },
  {
    question: "What happens after the integration is complete?",
    answer:
      "We provide ongoing optimization, update the AI models as needed, and monitor performance so your systems stay reliable as your business grows.",
  },
];

function FAQItem({
  faq,
  index,
}: {
  faq: (typeof faqs)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b border-[#1a1a1a]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={open}
      >
        <span className="text-sm md:text-base text-[#f5f5f0] group-hover:text-[#c8fa5f] transition-colors pr-8">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-6 h-6 rounded-full border border-[#333] flex items-center justify-center text-[#888880]"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-[#888880] leading-relaxed pb-6">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="faq" className="py-24 md:py-36 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left column */}
          <div ref={headerRef} className="md:sticky md:top-24 md:self-start">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-widest text-[#888880] mb-4"
            >
              FAQ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-light text-[#f5f5f0] leading-tight mb-6"
            >
              Got
              <br />
              Questions?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-[#555550] leading-relaxed mb-8"
            >
              Need help with something? Our team is here to make things easy.
              Don&apos;t hesitate to reach out.
            </motion.p>
            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full border border-[#1e1e1e] text-[#888880] hover:text-[#f5f5f0] hover:border-[#333] transition-all"
            >
              Contact us →
            </motion.a>
          </div>

          {/* Right column - accordions */}
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
