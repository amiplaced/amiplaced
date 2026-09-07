"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function Ticker() {
  const tickerItems = [
    "BUNDLE OFFER: PICK 2+ SERVICES & GET UP TO ₹2,100 FLAT DISCOUNT",
    "100% NO AI CONTENT & ZERO PLAGIARISM GUARANTEE",
    "SAME RESUME, DIFFERENT COMPANY, SAME REJECTION",
    "APPLIED TO 50 JOBS? 0 CALLBACKS?",
    "STOP COPY-PASTING GENERIC RESUMES",
    "BUILT FOR INDIAN STUDENTS",
    "GET JOB-SPECIFIC RESUMES",
    "RECRUITER-READY LINKEDIN GLOW-UP",
  ];

  return (
    <div className="w-full bg-[#0A0A0A] border-y-4 border-black py-4 overflow-hidden select-none mt-6 md:mt-10">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Repeat list 3 times to ensure continuous smooth seamless scrolling */}
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
