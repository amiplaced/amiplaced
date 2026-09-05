"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function Ticker() {
  const tickerItems = [
    "100% NO AI CONTENT & ZERO PLAGIARISM GUARANTEE",
    "Same resume. Different company. Same rejection.",
    "Applied to 50 jobs? 0 callbacks?",
    "Stop copy-pasting generic resumes.",
    "Built for Indian Students.",
    "Get job-specific resumes.",
    "Recruiter-ready LinkedIn Glow-Up.",
  ];

  return (
    <div className="w-full bg-[#0A0A0A] border-y-4 border-black py-4 overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Repeat list twice to ensure continuous smooth seamless scrolling */}
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="font-heading font-extrabold text-base md:text-lg text-white uppercase tracking-wider">
              {item}
            </span>
            <Sparkles className="w-5 h-5 text-[#D7FF3F] shrink-0 fill-[#D7FF3F]" />
          </div>
        ))}
      </div>
    </div>
  );
}
