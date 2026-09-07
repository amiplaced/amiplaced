"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#pricing" },
    { name: "How It Works", href: "/#pipeline" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <div className="fixed top-4 right-0 z-50 flex justify-end pl-4 pointer-events-none">
      <motion.nav
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: isScrolled ? 0 : 80, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="pointer-events-auto w-full max-w-2xl md:max-w-3xl lg:max-w-4xl bg-[#F4F3ED] border-y-[3px] border-l-[3px] border-black shadow-[0px_6px_0px_0px_#000] rounded-l-[32px] rounded-r-none py-3.5 px-6 md:px-10 flex items-center justify-between backdrop-blur-md bg-opacity-95"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0 mr-8 md:mr-16 lg:mr-20 pl-2">
          <img
            src="/AmiPlaced_Logo.svg"
            alt="AmiPlaced"
            className="h-8 md:h-10 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center justify-between flex-1 gap-6 lg:gap-10 pr-2 lg:pr-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-semibold text-sm lg:text-base text-[#0A0A0A] hover:text-[#7B2FF7] hover:underline underline-offset-4 decoration-2 transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#0A0A0A] border-2 border-black bg-white ml-2"
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
          className="pointer-events-auto fixed top-20 right-4 left-4 bg-[#F4F3ED] neo-border neo-shadow-lg rounded-2xl p-6 z-50 md:hidden flex flex-col gap-4"
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
