"use client";

import React from "react";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 pb-16 px-4 md:px-8 border-t-4 border-black select-none relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Main Footer Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-16">
          {/* Left Column: Brand & Contacts */}
          <div className="md:col-span-6 flex flex-col items-start">
            {/* Clean White Inverted Brand Logo */}
            <Link href="/" className="inline-flex items-center mb-5 hover:scale-105 transition-transform">
              <img
                src="/AmiPlaced_Logo.svg"
                alt="AmiPlaced"
                className="h-10 sm:h-12 w-auto object-contain filter brightness-0 invert"
              />
            </Link>

            <p className="text-sm sm:text-base text-neutral-400 font-medium max-w-sm mb-6 leading-relaxed">
              Made for students tired of sending <br />
              <span className="font-mono text-neutral-300">Resume_Final_Final.pdf.</span>
            </p>

            {/* Email & WhatsApp Badges (Instagram removed) */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Email Badge with Mail Icon */}
              <a
                href="mailto:amiplaced@gmail.com"
                aria-label="Email Us"
                className="neo-border-sm bg-[#F2436C] text-white font-heading font-extrabold text-xs px-4 py-2.5 rounded-xl hover:scale-105 transition-transform flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>amiplaced@gmail.com</span>
              </a>

              {/* WhatsApp Badge */}
              <a
                href="https://wa.me/919958484106?text=Hi%20AmiPlaced"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-border-sm bg-[#D7FF3F] text-black font-heading font-extrabold text-xs px-4.5 py-2.5 rounded-xl hover:scale-105 transition-transform flex items-center gap-1.5"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Middle Column: Services (Linked directly to sections) */}
          <div className="md:col-span-3 flex flex-col items-start">
            <span className="font-heading font-black text-xs uppercase tracking-widest text-[#D7FF3F] block mb-4">
              SERVICES
            </span>
            <ul className="space-y-2.5 text-sm font-medium text-neutral-300">
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">3 Targeted Resumes</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">LinkedIn Optimization</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Job Applications</a>
              </li>
            </ul>
          </div>

          {/* Right Column: Legal */}
          <div className="md:col-span-3 flex flex-col items-start">
            <span className="font-heading font-black text-xs uppercase tracking-widest text-[#D7FF3F] block mb-4">
              LEGAL
            </span>
            <ul className="space-y-2.5 text-sm font-medium text-neutral-400">
              <li>
                <span>Privacy Policy</span>
              </li>
              <li>
                <span>Terms of Service</span>
              </li>
              <li>
                <span>Disclaimer</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="w-full pt-8 border-t border-neutral-800 flex items-center justify-center text-xs font-semibold text-neutral-500">
          <span>&copy; {new Date().getFullYear()} AmiPlaced. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
