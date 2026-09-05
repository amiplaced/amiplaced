"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [activeCard, setActiveCard] = useState<"analyst" | "consulting" | "ops">("consulting");

  return (
    <section className="relative pt-32 pb-8 md:pt-40 md:pb-10 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Soft Purple Glow */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-[#7B2FF7]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#D7FF3F]/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Eyebrow Tag with Hover Wiggle */}
          <motion.div
            initial={{ rotate: -4 }}
            whileHover={{ rotate: [-4, 2, -6, 0], scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="neo-sticker bg-[#D7FF3F] text-[#0A0A0A] font-heading font-black mb-6 cursor-pointer select-none"
          >
            BUILT FOR INDIAN STUDENTS
          </motion.div>

          {/* Headline */}
          <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tighter text-[#0A0A0A] uppercase mb-6">
            STOP SENDING <br className="hidden sm:inline" />
            THE SAME RESUME <br className="hidden sm:inline" />
            <span className="relative inline-block">
              EVERYWHERE.
              <span className="absolute left-0 bottom-1 w-full h-3 bg-[#D7FF3F] -z-10 transform -rotate-1"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#333333] font-medium max-w-xl mb-8 leading-relaxed">
            Get <strong className="text-[#0A0A0A] font-bold underline decoration-[#7B2FF7] decoration-2">job-specific resumes</strong>, a recruiter-ready LinkedIn profile, and actual help applying for opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-6">
            <Link
              href="/checkout?plan=resume"
              className="neo-btn-primary rounded-xl px-7 py-4 font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2.5 w-full sm:w-auto"
            >
              Fix My Career Profile
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="#why-us"
              className="neo-btn-secondary rounded-xl px-7 py-4 font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider text-center w-full sm:w-auto"
            >
              See How It Works
            </a>
          </div>

          {/* Footer note */}
          <p className="text-xs sm:text-sm text-neutral-600 font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7B2FF7]" />
            Built for students. Not HR departments.
          </p>
        </motion.div>

        {/* Right Column: Neubrutalist Visual Graphic Stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          {/* Main Resume Card Frame */}
          <div className="w-full max-w-sm bg-white neo-border neo-shadow-lg rounded-2xl p-6 relative z-10">
            {/* Top PDF Mock Header */}
            <div className="bg-neutral-100 neo-border-sm rounded-xl p-3 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-[#7B2FF7]" />
                <span className="font-mono text-xs font-bold text-neutral-800 truncate max-w-[170px]">
                  Resume_Final_Final.pdf
                </span>
              </div>
              <span className="text-[10px] font-bold bg-[#D7FF3F] text-black px-2 py-0.5 rounded border border-black">
                READY
              </span>
            </div>

            {/* Skeleton Content lines */}
            <div className="space-y-2 mb-6 opacity-60">
              <div className="h-3 bg-neutral-300 rounded w-3/4" />
              <div className="h-2.5 bg-neutral-200 rounded w-full" />
              <div className="h-2.5 bg-neutral-200 rounded w-5/6" />
            </div>

            {/* Clickable Interactive Cards Stack */}
            <div className="relative space-y-3 pt-2">
              {/* Business Analyst Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                onClick={() => setActiveCard("analyst")}
                className={`cursor-pointer bg-[#1E4FE0] text-white p-4 rounded-xl neo-border transition-all ${
                  activeCard === "analyst" ? "neo-shadow-lg ring-2 ring-black" : "opacity-90"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-black text-xs uppercase tracking-widest text-blue-100">
                    BUSINESS ANALYST
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#D7FF3F]" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded">Excel</span>
                  <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded">SQL</span>
                  <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded">Dashboard</span>
                </div>
              </motion.div>

              {/* Consulting Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                onClick={() => setActiveCard("consulting")}
                className={`cursor-pointer bg-[#F2436C] text-white p-4 rounded-xl neo-border transition-all ${
                  activeCard === "consulting" ? "neo-shadow-lg ring-2 ring-black" : "opacity-90"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-black text-xs uppercase tracking-widest text-pink-100">
                    CONSULTING
                  </span>
                  <Sparkles className="w-4 h-4 text-[#D7FF3F]" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded">Strategy</span>
                  <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded">Research</span>
                  <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded">Slides</span>
                </div>
              </motion.div>

              {/* Operations Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: -2 }}
                onClick={() => setActiveCard("ops")}
                className={`cursor-pointer bg-[#F4C430] text-[#0A0A0A] p-4 rounded-xl neo-border transition-all ${
                  activeCard === "ops" ? "neo-shadow-lg ring-2 ring-black" : "opacity-90"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-black text-xs uppercase tracking-widest text-black">
                    OPERATIONS
                  </span>
                  <TrendingUp className="w-4 h-4 text-black" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-black/10 text-black text-[10px] font-bold px-2 py-0.5 rounded">Vendors</span>
                  <span className="bg-black/10 text-black text-[10px] font-bold px-2 py-0.5 rounded">Coordination</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Quote Box Badge Centered Below Main Card with Equal Top/Bottom Spacing */}
          <motion.div
            initial={{ rotate: 1 }}
            whileHover={{ scale: 1.05 }}
            animate={{ rotate: [1, -1, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="mt-6 bg-[#D7FF3F] text-[#0A0A0A] p-4 neo-border neo-shadow-sm rounded-xl w-full max-w-[240px] text-center z-20 cursor-pointer select-none"
          >
            <p className="font-heading font-extrabold text-xs italic leading-tight">
              &ldquo;Different jobs need different resumes?&rdquo;
            </p>
            <p className="font-heading font-black text-xs text-[#7B2FF7] mt-1.5 underline">
              Yes. Finally.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
