"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Target, FileText } from "lucide-react";

export default function ZeroBS() {
  const features = [
    {
      id: "fake-exp",
      title: "No Fake Experience",
      desc: "We improve presentation. We don't manufacture achievements.",
      icon: ShieldCheck,
      bgColor: "bg-[#D7FF3F]",
      textColor: "text-[#0A0A0A]",
      iconBg: "bg-[#0A0A0A] text-[#D7FF3F]",
    },
    {
      id: "human-qa",
      title: "Human QA",
      desc: "Every delivered resume is reviewed by a real person.",
      icon: UserCheck,
      bgColor: "bg-[#F4C430]",
      textColor: "text-[#0A0A0A]",
      iconBg: "bg-[#0A0A0A] text-[#F4C430]",
    },
    {
      id: "job-specific",
      title: "Job-Specific",
      desc: "Different roles get different positioning. Always.",
      icon: Target,
      bgColor: "bg-[#F2436C]",
      textColor: "text-white",
      iconBg: "bg-[#0A0A0A] text-[#F2436C]",
    },
    {
      id: "clear-deliverables",
      title: "Clear Deliverables",
      desc: "You know exactly what you've purchased. No fine print.",
      icon: FileText,
      bgColor: "bg-[#1E4FE0]",
      textColor: "text-white",
      iconBg: "bg-[#0A0A0A] text-[#D7FF3F]",
    },
  ];

  return (
    <section id="zero-bs" className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Sticker Tag & Headline */}
      <div className="flex flex-col items-start mb-12">
        {/* Rotated Sticker Badge with Hover Wiggle Animation */}
        <motion.div
          initial={{ rotate: -4 }}
          whileHover={{ rotate: [-4, 2, -6, 0], scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="neo-sticker bg-[#D7FF3F] text-[#0A0A0A] font-heading font-black mb-6 cursor-pointer select-none"
        >
          ZERO BS
        </motion.div>

        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#0A0A0A]">
          ZERO CAREER GURU NONSENSE
        </h2>
      </div>

      {/* 4 Color-Coded Neubrutalist Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {features.map((feat, idx) => {
          const IconComp = feat.icon;

          return (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`${feat.bgColor} ${feat.textColor} neo-border neo-shadow-lg rounded-2xl p-7 flex flex-col justify-between min-h-[250px]`}
            >
              <div>
                {/* Icon Container */}
                <div className={`w-11 h-11 rounded-xl neo-border-sm flex items-center justify-center mb-6 ${feat.iconBg}`}>
                  <IconComp className="w-6 h-6 stroke-[2.5]" />
                </div>

                {/* Title */}
                <h3 className="font-heading font-extrabold text-2xl tracking-tight mb-3">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-medium opacity-90 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
