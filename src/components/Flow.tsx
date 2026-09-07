"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Flow() {
  const steps = [
    { num: "01", title: "Choose Your Package" },
    { num: "02", title: "Make Payment" },
    { num: "03", title: "Tell Us About Yourself" },
    { num: "04", title: "Upload Existing Resume" },
    { num: "05", title: "Tell Us Your Target Roles" },
    { num: "06", title: "We Get To Work" },
    { num: "07", title: "Human QA" },
    { num: "08", title: "Delivery" },
    { num: "09", title: "LinkedIn / Applications Continue If Purchased" },
    { num: "10", title: "You Apply Smarter" },
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Eyebrow Tag & Heading */}
      <div className="flex flex-col items-start mb-14 relative">

        {/* Rotated Sticker Badge with Wiggle/Rotate Micro-Animation on Hover */}
        <motion.div
          initial={{ rotate: -4 }}
          whileHover={{ rotate: [-4, 2, -6, 0], scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="neo-sticker bg-[#D7FF3F] text-[#0A0A0A] font-heading font-black mb-6 cursor-pointer select-none"
        >
          THE FLOW
        </motion.div>

        {/* Headline */}
        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#0A0A0A] leading-[0.98]">
          YOU BUY <br />
          <span className="text-[#7B2FF7]">WE DO THE BORING PART</span>
        </h2>
      </div>

      {/* 10-Step Grid (2 columns on desktop, 1 column on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {steps.map((step, idx) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{
              y: -4,
              scale: 1.01,
              rotate: idx % 2 === 0 ? 0.8 : -0.8,
              boxShadow: "7px 7px 0px #000000",
            }}
            className="bg-white neo-border neo-shadow-sm rounded-2xl sm:rounded-full py-4 px-6 md:px-8 flex items-center gap-5 transition-all duration-200 cursor-pointer group"
          >
            {/* Number Pill */}
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#7B2FF7] group-hover:scale-110 group-hover:text-black transition-transform duration-200 shrink-0">
              {step.num}
            </span>

            {/* Step Title */}
            <span className="font-heading font-bold text-sm sm:text-base text-[#0A0A0A] group-hover:translate-x-1 transition-transform duration-200">
              {step.title}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
