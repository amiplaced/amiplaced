"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "No AI Guarantee", href: "/#no-ai-guarantee" },
    { name: "Services", href: "/#pricing" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-5xl bg-[#F4F3ED] neo-border neo-shadow rounded-full py-2.5 px-4 md:px-6 flex items-center justify-between backdrop-blur-md bg-opacity-95"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-[#7B2FF7] text-white neo-border flex items-center justify-center font-heading font-extrabold text-lg shadow-[2px_2px_0px_#000] group-hover:scale-105 transition-transform">
            A
          </div>
          <span className="font-heading font-extrabold text-xl md:text-2xl tracking-tight text-[#0A0A0A]">
            AmiPlaced
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-sm text-[#0A0A0A] hover:text-[#7B2FF7] hover:underline underline-offset-4 decoration-2 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/checkout"
            className="neo-btn-primary rounded-full px-5 py-2 text-xs font-bold font-heading uppercase tracking-wider flex items-center gap-1.5"
          >
            Get Started
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#0A0A0A] neo-border-sm bg-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed top-20 left-4 right-4 bg-[#F4F3ED] neo-border neo-shadow-lg rounded-2xl p-6 z-50 md:hidden flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-heading font-bold text-lg text-[#0A0A0A] py-2 border-b border-black/10"
            >
              {link.name}
            </a>
          ))}
          <Link
            href="/checkout"
            onClick={() => setMobileMenuOpen(false)}
            className="neo-btn-primary rounded-xl py-3 text-center font-heading font-extrabold text-sm uppercase tracking-wider mt-2 flex items-center justify-center gap-2"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      )}
    </div>
  );
}
