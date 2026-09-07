"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export default function TrustBuilder() {
  const checklist = [
    { text: "Nothing fabricated", isCheck: false },
    { text: "Dates checked", isCheck: true },
    { text: "Grammar checked", isCheck: true },
    { text: "Formatting checked", isCheck: true },
    { text: "Resumes genuinely different", isCheck: true },
    { text: "Keywords relevant", isCheck: false },
    { text: "ATS-friendly structure", isCheck: true },
    { text: "Strong bullets", isCheck: true },
    { text: "Unnecessary fluff removed", isCheck: true },
    { text: "Job-specific positioning", isCheck: true },
    { text: "Achievements quantified only when genuine", isCheck: false },
    { text: "Skills supported by your actual background", isCheck: true },
  ];

  return (
    <section id="trust-builder" className="py-12 md:py-16 bg-[#0A0A0A] text-white border-y-4 border-black px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline & Subhead */}
        <div className="lg:col-span-5 flex flex-col items-start relative">
          {/* Rotated Sticker Badge with Hover Wiggle Animation */}
          <motion.div
            initial={{ rotate: -4 }}
            whileHover={{ rotate: [-4, 2, -6, 0], scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="neo-sticker bg-[#D7FF3F] text-[#0A0A0A] font-heading font-black mb-6 cursor-pointer select-none"
          >
            TRUST BUILDER
          </motion.div>

          {/* Headline */}
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl tracking-tight text-white uppercase leading-[0.98] mb-6">
            AI CAN WRITE <br />
            <span className="text-[#D7FF3F]">HUMANS STILL CHECK</span>
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-neutral-300 font-medium leading-relaxed max-w-md">
            Every resume goes through QA before delivery. <br />
            Red flags become green ticks, or we send it back.
          </p>

          {/* Decorative Neon Dot */}
          <div className="w-4 h-4 rounded-full bg-[#D7FF3F] mt-6 shadow-[0_0_15px_#D7FF3F] animate-pulse" />
        </div>

        {/* Right Column: 12 Scroll-Animated Checklist Items */}
        <div className="lg:col-span-7 space-y-3">
          {checklist.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0.4, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ x: 6, backgroundColor: "#1A1A1A" }}
              className="bg-[#141414] border border-neutral-800 rounded-xl p-3.5 sm:p-4 flex items-center gap-3.5 transition-all duration-200 cursor-pointer group"
            >
              {/* Scroll Animated Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.6 }}
                whileInView={{ scale: [0.8, 1.2, 1], opacity: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="shrink-0"
              >
                {item.isCheck ? (
                  <CheckCircle2 className="w-5 h-5 text-[#D7FF3F] stroke-[2.5]" />
                ) : (
                  <XCircle className="w-5 h-5 text-[#D7FF3F] stroke-[2.5]" />
                )}
              </motion.div>

              {/* Text */}
              <span className="font-heading font-bold text-sm sm:text-base text-neutral-200 group-hover:text-white transition-colors">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
