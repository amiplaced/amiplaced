"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ThreeDirections() {
  const cards = [
    {
      resumeNo: "RESUME #1",
      title: "Business Analyst",
      bgColor: "bg-[#1E4FE0]",
      textColor: "text-white",
      pillBg: "bg-black/20 text-white",
      lineBg: "bg-white/30",
      skills: ["Analytics", "Excel", "SQL", "Dashboards", "Research"],
    },
    {
      resumeNo: "RESUME #2",
      title: "Operations",
      bgColor: "bg-[#F4C430]",
      textColor: "text-[#0A0A0A]",
      pillBg: "bg-black/15 text-[#0A0A0A]",
      lineBg: "bg-black/20",
      skills: ["Execution", "Vendors", "Process", "Coordination", "Ops"],
    },
    {
      resumeNo: "RESUME #3",
      title: "Consulting",
      bgColor: "bg-[#F2436C]",
      textColor: "text-white",
      pillBg: "bg-black/20 text-white",
      lineBg: "bg-white/30",
      skills: ["Strategy", "Frameworks", "Research", "Slides", "Client-ready"],
    },
  ];

  return (
    <section id="three-directions" className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Sticker Tag & Headline */}
      <div className="flex flex-col items-start mb-12">
        {/* Rotated Sticker Badge with Hover Wiggle Animation */}
        <motion.div
          initial={{ rotate: -4 }}
          whileHover={{ rotate: [-4, 2, -6, 0], scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="neo-sticker bg-[#7B2FF7] text-white font-heading font-black mb-6 cursor-pointer select-none"
        >
          SAME STUDENT · 3 DIRECTIONS
        </motion.div>

        {/* Headline */}
        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#0A0A0A] leading-[0.98] mb-4">
          ONE PERSON <br />
          <span className="text-[#7B2FF7]">THREE DIRECTIONS</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-neutral-600 font-medium max-w-2xl leading-relaxed">
          Meet Aarav. BBA student. Curious about Business Analyst, Operations, and Consulting roles. Facts stay the same, only the emphasis changes.
        </p>
      </div>

      {/* 3 Neubrutalist Role Direction Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className={`${card.bgColor} ${card.textColor} neo-border neo-shadow-lg rounded-2xl p-7 sm:p-8 flex flex-col justify-between`}
          >
            <div>
              <span className="font-heading font-black text-xs uppercase tracking-widest block mb-2 opacity-80">
                {card.resumeNo}
              </span>
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight mb-6">
                {card.title}
              </h3>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {card.skills.map((sk, sIdx) => (
                  <span
                    key={sIdx}
                    className={`${card.pillBg} text-xs font-bold font-heading px-3 py-1.5 rounded-lg border border-black/10`}
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Skeleton Resume Lines */}
            <div className="space-y-2.5 pt-4 border-t border-black/10">
              <div className={`h-2.5 rounded-full w-full ${card.lineBg}`} />
              <div className={`h-2.5 rounded-full w-5/6 ${card.lineBg}`} />
              <div className={`h-2.5 rounded-full w-4/6 ${card.lineBg}`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footnote Caption */}
      <p className="text-xs sm:text-sm text-neutral-500 font-medium italic">
        Only positioning and emphasis change. Facts remain the same.
      </p>
    </section>
  );
}
