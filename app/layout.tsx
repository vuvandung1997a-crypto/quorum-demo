import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quorum — AI Automation Agency",
  description:
    "AI automation agency specializing in workflow optimization, business process automation, and custom AI integrations. Strategy to implementation for scale-ups.",
  openGraph: {
    title: "Quorum — AI Automation Agency",
    description:
      "We translate messy processes into clean, automated flows that compound your team's output.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans">
        {/* Film grain noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
