"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pb-28 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Soft Purple Glow */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-[#7B2FF7]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
        {/* Left Column: Copy & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 flex flex-col items-start text-left"
        >
          {/* Eyebrow Sticker Badge */}
          <motion.div
            initial={{ rotate: -3 }}
            whileHover={{ rotate: [-3, 2, -5, 0], scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="neo-sticker bg-[#D7FF3F] text-[#0A0A0A] font-heading font-black text-xs sm:text-sm px-3.5 py-1.5 mb-6 cursor-pointer select-none -rotate-2"
          >
            BUILT FOR INDIAN STUDENTS
          </motion.div>

          {/* Large Clean Headline */}
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] leading-[0.92] tracking-tighter text-[#0A0A0A] uppercase mb-6">
            STOP SENDING <br />
            THE <br />
            SAME RESUME <br />
            EVERYWHERE
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-[#333333] font-medium max-w-2xl mb-8 leading-relaxed">
            Get <strong className="text-[#0A0A0A] font-bold">job-specific resumes</strong>, a recruiter-ready LinkedIn profile, and actual help applying for opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-4">
            <Link
              href="/checkout?plan=resume"
              className="bg-[#0A0A0A] text-[#D7FF3F] neo-border neo-shadow-lg rounded-2xl py-4 px-7 font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2.5 w-full sm:w-auto hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
            >
              <span>Fix My Career Profile</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="#why-us"
              className="bg-white text-black neo-border neo-shadow-lg rounded-2xl py-4 px-7 font-heading font-extrabold text-sm sm:text-base tracking-wide flex items-center justify-center w-full sm:w-auto hover:bg-neutral-50 hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
            >
              See How It Works
            </a>
          </div>

          {/* Footer Micro-text */}
          <p className="text-xs sm:text-sm text-neutral-500 font-semibold mt-2">
            Built for students. Not HR departments.
          </p>
        </motion.div>

        {/* Right Column: Neubrutalist Animated Fanning Cards Graphic Stack */}
        <div className="lg:col-span-4 flex justify-center items-center relative min-h-[440px] sm:min-h-[490px] pt-4 select-none">
          {/* Main White Resume Card (Exact Reference PDF Base) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-48 sm:w-56 h-72 sm:h-80 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-start relative z-10 -translate-y-24 select-none"
          >
            {/* Top Mock PDF Header & Resume Lines */}
            <div className="w-full space-y-2 mb-4">
              <div className="h-3 bg-black rounded-full w-3/4 mb-3" />
              <div className="h-2 bg-neutral-400 rounded-full w-3/5" />
              <div className="h-2 bg-neutral-300 rounded-full w-full" />
              <div className="h-2 bg-neutral-300 rounded-full w-4/5" />
              <div className="h-2 bg-neutral-300 rounded-full w-full" />
              <div className="h-2 bg-neutral-300 rounded-full w-2/3" />
            </div>

            {/* Centered PDF File Name Label */}
            <div className="text-center mt-1">
              <span className="font-sans text-xs sm:text-sm font-bold text-[#0A0A0A] tracking-tight">
                Resume_Final_Final.pdf
              </span>
            </div>
          </motion.div>

          {/* 1. BLUE CARD - BUSINESS ANALYST */}
          <motion.div
            initial={{ opacity: 0, x: 0, y: -60, rotate: 0, scale: 0.6 }}
            animate={{ opacity: 1, x: -70, y: 110, rotate: -11, scale: 1 }}
            whileHover={{ scale: 1.08, zIndex: 40 }}
            transition={{ duration: 0.7, delay: 0.35, type: "spring", stiffness: 150, damping: 16 }}
            className="absolute w-40 sm:w-44 h-56 sm:h-64 bg-[#0066FF] text-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl p-4 z-20 cursor-pointer"
          >
            <div className="font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-white mb-4 leading-tight">
              BUSINESS ANALYST
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                <span className="bg-[#0047BA] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg">Excel</span>
                <span className="bg-[#0047BA] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg">SQL</span>
              </div>
              <div>
                <span className="bg-[#0047BA] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg">Dashboard</span>
              </div>
            </div>
          </motion.div>

          {/* 2. YELLOW CARD - OPERATIONS */}
          <motion.div
            initial={{ opacity: 0, x: 0, y: -60, rotate: 0, scale: 0.6 }}
            animate={{ opacity: 1, x: -5, y: 145, rotate: 1, scale: 1 }}
            whileHover={{ scale: 1.08, zIndex: 40 }}
            transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 150, damping: 16 }}
            className="absolute w-40 sm:w-44 h-56 sm:h-64 bg-[#FFD600] text-[#0A0A0A] border-[3px] border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl p-4 z-25 cursor-pointer"
          >
            <div className="font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-black mb-4 leading-tight">
              OPERATIONS
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="bg-black/15 text-[#0A0A0A] text-[10px] font-extrabold px-2.5 py-1 rounded-lg">Vendors</span>
              <span className="bg-black/15 text-[#0A0A0A] text-[10px] font-extrabold px-2.5 py-1 rounded-lg">Coordination</span>
            </div>
          </motion.div>

          {/* 3. PINK CARD - CONSULTING */}
          <motion.div
            initial={{ opacity: 0, x: 0, y: -60, rotate: 0, scale: 0.6 }}
            animate={{ opacity: 1, x: 65, y: 120, rotate: 9, scale: 1 }}
            whileHover={{ scale: 1.08, zIndex: 40 }}
            transition={{ duration: 0.7, delay: 0.65, type: "spring", stiffness: 150, damping: 16 }}
            className="absolute w-44 sm:w-48 h-56 sm:h-64 bg-[#F2436C] text-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl p-4 z-30 cursor-pointer"
          >
            <div className="font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-white mb-4 leading-tight">
              CONSULTING
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                <span className="bg-black/20 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg">Strategy</span>
                <span className="bg-black/20 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg">Research</span>
              </div>
              <div>
                <span className="bg-black/20 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg">Slides</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
