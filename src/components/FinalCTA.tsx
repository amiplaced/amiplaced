"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative py-16 md:py-20 bg-[#0A0A0A] text-white border-y-4 border-black px-4 md:px-8 overflow-hidden select-none">
      {/* Background Repeated Resume Watermark Text with ultra-subtle 2.5% opacity */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none opacity-[0.025] leading-none overflow-hidden font-heading font-black text-6xl sm:text-8xl md:text-[140px] uppercase text-white tracking-tighter space-y-4">
        <div className="whitespace-nowrap transform -rotate-2">
          resume.pdf resume_updated.pdf resume_new.pdf
        </div>
        <div className="whitespace-nowrap transform rotate-1">
          resume_Final2.pdf resume_final_final.pdf
        </div>
        <div className="whitespace-nowrap transform -rotate-1">
          resume_v3.pdf resume_latest.pdf resume.pdf
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Headline */}
        <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[4.75rem] uppercase tracking-tighter text-white leading-[0.96] mb-10 max-w-full text-center">
          YOUR NEXT APPLICATION <br />
          DESERVES BETTER THAN <br />
          <span className="text-[#D7FF3F] block break-words">RESUME_FINAL_FINAL.PDF</span>
        </h2>

        {/* Action Button & Pricing Callout */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <Link
            href="/checkout?plan=resume"
            className="bg-[#D7FF3F] text-[#0A0A0A] neo-border rounded-2xl py-4 px-8 font-heading font-extrabold text-base sm:text-xl uppercase tracking-wider inline-flex items-center justify-center gap-3 neo-shadow hover:neo-shadow-lg hover:-translate-x-1 hover:-translate-y-1 transition-all cursor-pointer"
          >
            <span>Upgrade My Career Profile</span>
            <ArrowRight className="w-6 h-6 text-black stroke-[3]" />
          </Link>

          <div className="flex flex-col items-center text-center">
            <span className="text-xs text-neutral-400 font-medium">
              Start with 3 targeted resumes.
            </span>
            <span className="font-heading font-black text-3xl text-white tracking-tight">
              ₹1,200
            </span>
            <span className="text-xs text-neutral-400 font-medium">
              Within 24 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
