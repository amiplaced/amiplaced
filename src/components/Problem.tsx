"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section id="why-us" className="py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col items-start mb-12">
        {/* Eyebrow Tag with Hover Wiggle */}
        <motion.div
          initial={{ rotate: -3 }}
          whileHover={{ rotate: [-3, 2, -5, 0], scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="neo-sticker bg-[#F2436C] text-white font-heading font-black text-xs sm:text-sm px-3.5 py-1.5 mb-6 cursor-pointer select-none -rotate-3 uppercase"
        >
          THE REAL PROBLEM
        </motion.div>

        {/* Headline */}
        <h2 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase tracking-tighter leading-[0.98] max-w-5xl mb-6">
          <span className="text-[#0A0A0A] block mb-1.5 whitespace-normal sm:whitespace-nowrap">
            YOUR RESUME MIGHT NOT BE BAD.
          </span>
          <span className="text-[#7B2FF7] block">
            IT MIGHT JUST BE WRONG FOR THE
          </span>
          <span className="text-[#7B2FF7] block">
            JOB.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-neutral-700 font-medium max-w-2xl leading-relaxed">
          One student can legitimately fit multiple career paths. Their resume shouldn&apos;t pretend those jobs are identical.
        </p>
      </div>

      {/* Comparison Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative">
        {/* Left Card: Generic Resume */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white neo-border neo-shadow-lg rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between"
        >
          {/* Sticker Tag with Hover Wiggle */}
          <motion.div
            whileHover={{ rotate: [3, -2, 5, 0], scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-3.5 right-6 neo-sticker bg-[#F2436C] text-white font-black text-xs transform rotate-3 cursor-pointer select-none uppercase"
          >
            BORING
          </motion.div>

          <div>
            <span className="font-heading font-black text-xs uppercase tracking-widest text-[#F2436C] block mb-6">
              GENERIC RESUME
            </span>

            <ul className="space-y-4 text-neutral-600 font-medium text-sm sm:text-base">
              <li className="line-through opacity-70">
                Managed university event
              </li>
              <li className="line-through opacity-70">
                Good at teamwork
              </li>
              <li className="line-through opacity-70">
                Hardworking &amp; passionate
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right Card: Targeted Resume */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-[#D7FF3F] neo-border neo-shadow-lg rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between"
        >
          {/* Sticker Tag with Hover Wiggle */}
          <motion.div
            whileHover={{ rotate: [-2, 4, -3, 0], scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-3.5 right-6 neo-sticker bg-[#0A0A0A] text-white font-black text-xs transform -rotate-2 cursor-pointer select-none uppercase"
          >
            ATS APPROVES
          </motion.div>

          <div>
            <span className="font-heading font-black text-xs uppercase tracking-widest text-[#0A0A0A] block mb-6">
              TARGETED RESUME
            </span>

            <ul className="space-y-4 text-[#0A0A0A] font-semibold text-sm sm:text-base">
              <li>
                Coordinated a 12-member team across ops, vendor management &amp; event execution.
              </li>
              <li>
                Led cross-functional planning for a 400-attendee cultural fest.
              </li>
              <li>
                Streamlined vendor onboarding, cutting setup time by 40%.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Note Footnote */}
      <p className="text-xs sm:text-sm text-neutral-500 font-medium italic mt-6 text-left">
        Note: Accomplishments are improved in presentation, never invented.
      </p>
    </section>
  );
}
