"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Case Studies", href: "#case-studies" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#1e1e1e]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 w-full h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-base font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            Quorum
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#888880] hover:text-[#f5f5f0] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="group relative text-sm font-medium px-4 py-2 rounded-full border border-[#1e1e1e] hover:border-[#333] text-[#f5f5f0] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Contact us</span>
              <span className="absolute inset-0 bg-[#1e1e1e] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#pricing"
              className="group relative text-sm font-medium px-4 py-2 rounded-full bg-[#c8fa5f] text-[#0a0a0a] hover:bg-[#d4fb6e] transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-[#f5f5f0] transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              className="block w-5 h-0.5 bg-[#f5f5f0] transition-all"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-[#f5f5f0] transition-all"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col pt-20 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-light text-[#f5f5f0] border-b border-[#1e1e1e] pb-6 hover:text-[#c8fa5f] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto mb-12 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-center text-sm font-medium px-4 py-3 rounded-full border border-[#1e1e1e] text-[#f5f5f0]"
              >
                Contact us
              </a>
              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
                className="text-center text-sm font-medium px-4 py-3 rounded-full bg-[#c8fa5f] text-[#0a0a0a]"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
