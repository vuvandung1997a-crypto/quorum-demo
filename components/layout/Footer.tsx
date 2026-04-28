"use client";

import Link from "next/link";

const footerLinks = {
  index: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  company: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Twitter / X", href: "https://x.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] bg-[#0a0a0a]">
      {/* CTA band */}
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 w-full py-20 md:py-28 border-b border-[#1e1e1e]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-widest text-[#888880] mb-4">
              Quorum HQ
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-[#f5f5f0] mb-6">
              Gain clarity, speed, and precision with intelligent systems built
              specifically for your workflows.
            </h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-full bg-[#c8fa5f] text-[#0a0a0a] hover:bg-[#d4fb6e] transition-colors"
              >
                Book a free discovery call
              </a>
              <a
                href="mailto:hello@quorum.ai"
                className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-full border border-[#1e1e1e] text-[#888880] hover:text-[#f5f5f0] hover:border-[#333] transition-all"
              >
                or send an email
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#888880] hover:text-[#f5f5f0] transition-colors"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 w-full py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <span className="text-base font-semibold tracking-tight">
              Quorum
            </span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#888880] mb-4">
              Index
            </p>
            <ul className="space-y-2">
              {footerLinks.index.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-[#888880] hover:text-[#f5f5f0] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#888880] mb-4">
              Company
            </p>
            <ul className="space-y-2">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#888880] hover:text-[#f5f5f0] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#888880] mb-4">
              Socials
            </p>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#888880] hover:text-[#f5f5f0] transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1e1e1e] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#555550]">
            © 2025 Quorum LLC. All Rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-[#555550]">
            <a href="/cookie-policy" className="hover:text-[#888880] transition-colors">
              Cookie Policy
            </a>
            <span>•</span>
            <a href="/privacy-policy" className="hover:text-[#888880] transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="/legal" className="hover:text-[#888880] transition-colors">
              Legal Notices
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
