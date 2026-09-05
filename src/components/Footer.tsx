"use client";

import React from "react";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 pb-16 px-4 md:px-8 border-t-4 border-black select-none relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Main Footer Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-16">
          {/* Left Column: Brand & Socials */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="bg-white neo-border-sm rounded-2xl p-2.5 sm:p-3 inline-flex items-center mb-5 hover:scale-105 transition-transform shadow-[3px_3px_0px_#000]">
              <img
                src="/AmiPlaced_Logo.svg"
                alt="AmiPlaced"
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </div>
            <p className="text-sm sm:text-base text-neutral-400 font-medium max-w-sm mb-6 leading-relaxed">
              Made for students tired of sending <br />
              <span className="font-mono text-neutral-300">Resume_Final_Final.pdf.</span>
            </p>

            {/* Social Icons & Badges */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Instagram SVG */}
              <a
                href="https://www.instagram.com/amiplaced?igsi=MXM1cDE5OHEyYjAwMQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-[#833AB4] text-white neo-border-sm flex items-center justify-center hover:scale-105 transition-transform shrink-0"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Email Badge with Mail Icon */}
              <a
                href="mailto:amiplaced@gmail.com"
                aria-label="Email Us"
                className="neo-border-sm bg-[#F2436C] text-white font-heading font-extrabold text-xs px-3.5 py-2.5 rounded-xl hover:scale-105 transition-transform flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>amiplaced@gmail.com</span>
              </a>

              {/* WhatsApp Badge */}
              <a
                href="https://wa.me/919999999999?text=Hi%20AmiPlaced"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-border-sm bg-[#D7FF3F] text-black font-heading font-extrabold text-xs px-4 py-2.5 rounded-xl hover:scale-105 transition-transform flex items-center gap-1.5"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Middle Column: Services */}
          <div className="md:col-span-3 flex flex-col items-start">
            <span className="font-heading font-black text-xs uppercase tracking-widest text-[#D7FF3F] block mb-4">
              SERVICES
            </span>
            <ul className="space-y-2.5 text-sm font-medium text-neutral-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Resume</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Applications</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Right Column: Legal */}
          <div className="md:col-span-3 flex flex-col items-start">
            <span className="font-heading font-black text-xs uppercase tracking-widest text-[#D7FF3F] block mb-4">
              LEGAL
            </span>
            <ul className="space-y-2.5 text-sm font-medium text-neutral-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="w-full pt-8 border-t border-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-500">
          <div>&copy; 2026 AmiPlaced. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
