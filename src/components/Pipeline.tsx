"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Pipeline() {
  const steps = [
    { num: 1, title: "Understand Candidate" },
    { num: 2, title: "Analyze Job Description" },
    { num: 3, title: "Find Relevant Keywords" },
    { num: 4, title: "Create Resume #1" },
    { num: 5, title: "Create Resume #2" },
    { num: 6, title: "Create Resume #3" },
    { num: 7, title: "Grammar + Formatting Checks" },
    { num: 8, title: "Human QA" },
    { num: 9, title: "Delivery" },
  ];

  return (
    <section id="pipeline" className="py-12 md:py-16 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Sticker Tag & Headline */}
      <div className="flex flex-col items-start mb-16">
        {/* Rotated Sticker Badge with Hover Wiggle Animation */}
        <motion.div
          initial={{ rotate: -4 }}
          whileHover={{ rotate: [-4, 2, -6, 0], scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="neo-sticker bg-[#F2436C] text-white font-heading font-black mb-6 cursor-pointer select-none"
        >
          THE PIPELINE
        </motion.div>

        {/* Headline */}
        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#0A0A0A] leading-[0.98]">
          WHAT ACTUALLY HAPPENS <br />
          <span className="text-[#7B2FF7]">AFTER YOU PAY?</span>
        </h2>
      </div>

      {/* Vertical Pipeline Timeline */}
      <div className="relative pl-4 sm:pl-8">
        {/* Continuous Vertical Timeline Track */}
        <div className="absolute left-[30px] sm:left-[51px] top-6 bottom-6 w-1 bg-black/80 rounded" />

        <div className="space-y-4 sm:space-y-5">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center gap-4 sm:gap-6 relative group"
            >
              {/* Number Circle Badge with Scroll Reveal Green Glow Animation */}
              <motion.div
                initial={{ backgroundColor: "#FFFFFF", scale: 0.9 }}
                whileInView={{
                  backgroundColor: "#D7FF3F",
                  scale: [0.9, 1.15, 1],
                  borderColor: "#0A0A0A",
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-black flex items-center justify-center font-heading font-extrabold text-xs sm:text-sm text-black z-10 shrink-0 shadow-[2px_2px_0px_#000] group-hover:scale-110 transition-transform"
              >
                {step.num}
              </motion.div>

              {/* Step Title Card */}
              <motion.div
                whileHover={{
                  y: -3,
                  x: 3,
                  boxShadow: "6px 6px 0px #000000",
                }}
                className="flex-1 bg-white neo-border neo-shadow-sm rounded-2xl py-3.5 px-6 flex items-center transition-all duration-200 cursor-pointer"
              >
                <span className="font-heading font-bold text-sm sm:text-base text-[#0A0A0A] group-hover:text-[#7B2FF7] transition-colors">
                  {step.title}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footnote Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs sm:text-sm text-neutral-600 font-medium italic mt-8 pl-4 sm:pl-8"
      >
        &ldquo;Yep. Humans check it.&rdquo;
      </motion.p>
    </section>
  );
}
