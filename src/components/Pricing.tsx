"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const cards = [
    {
      id: "resume",
      subhead: "RESUME",
      title: "3 Targeted Resumes",
      subtitle: "Not one resume copied three times.",
      price: "₹1,200",
      time: "Within 24 hours",
      timeBadge: "24 HOURS",
      badgeBg: "bg-[#D7FF3F] text-black",
      bgColor: "bg-[#1E4FE0]",
      textColor: "text-white",
      subheadColor: "text-blue-200",
      checkColor: "text-[#D7FF3F]",
      buttonText: "Get My 3 Resumes →",
      features: [
        "ATS-friendly formatting",
        "JD-specific keywords",
        "Stronger bullet writing",
        "Grammar & consistency QA",
        "Genuine achievements only",
        "Three genuinely different versions",
      ],
    },
    {
      id: "linkedin",
      subhead: "LINKEDIN",
      title: "LinkedIn Glow-Up",
      subtitle: "Not another 'optimization'.",
      price: "₹3,200",
      time: "2-3 working days",
      timeBadge: "RECRUITER READY",
      badgeBg: "bg-[#0A0A0A] text-white",
      bgColor: "bg-[#F4C430]",
      textColor: "text-[#0A0A0A]",
      subheadColor: "text-black/70",
      checkColor: "text-black",
      buttonText: "Fix My LinkedIn →",
      features: [
        "Headline · About · Experience",
        "Projects · Skills · Featured",
        "Recruiter-search positioning",
        "Keyword optimization",
        "Banner + profile guidance",
        "Open-to-work strategy",
      ],
    },
    {
      id: "applications",
      subhead: "APPLICATIONS",
      title: "Job Application Assistance",
      subtitle: "Application assistance. Not a placement promise.",
      price: "₹4,500",
      time: "Ongoing 2-3 weeks",
      timeBadge: "REAL HELP",
      badgeBg: "bg-[#D7FF3F] text-black",
      bgColor: "bg-[#F2436C]",
      textColor: "text-white",
      subheadColor: "text-pink-200",
      checkColor: "text-[#D7FF3F]",
      buttonText: "Help Me Apply →",
      features: [
        "Relevant job discovery",
        "Role shortlisting",
        "Applications on selected portals",
        "Application tracking",
        "Correct resume variant selection",
        "Basic JD matching",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-start mb-16">
        {/* Eyebrow Tag with Hover Wiggle */}
        <motion.div
          initial={{ rotate: -3 }}
          whileHover={{ rotate: [-4, 2, -6, 0], scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="neo-sticker bg-[#D7FF3F] text-[#0A0A0A] font-heading font-black mb-6 cursor-pointer select-none"
        >
          THE MENU
        </motion.div>

        {/* Headline */}
        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl tracking-tight text-[#0A0A0A] uppercase">
          PICK YOUR CAREER UPGRADE
        </h2>
      </div>

      {/* 3-Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {cards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ y: -6 }}
            className={`relative ${card.bgColor} ${card.textColor} neo-border neo-shadow-lg rounded-2xl p-7 sm:p-8 flex flex-col justify-between`}
          >
            {/* Top Corner Sticker Badge with Hover Wiggle */}
            <motion.div
              whileHover={{ rotate: [2, -4, 3, 0], scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className={`absolute -top-3.5 right-6 neo-sticker ${card.badgeBg} font-black text-xs transform ${
                idx % 2 === 0 ? "rotate-2" : "-rotate-2"
              } cursor-pointer select-none`}
            >
              {card.timeBadge}
            </motion.div>

            <div>
              {/* Category Subhead */}
              <span className={`font-heading font-black text-xs uppercase tracking-widest block mb-2 ${card.subheadColor}`}>
                {card.subhead}
              </span>

              {/* Title */}
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight mb-2">
                {card.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm font-medium opacity-90 mb-6 min-h-[40px]">
                {card.subtitle}
              </p>

              {/* Price Tag */}
              <div className="mb-6 pb-6 border-b border-black/20">
                <div className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tight">
                  {card.price}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold mt-1 opacity-90">
                  {card.id === "resume" && <Zap className="w-3.5 h-3.5 fill-[#D7FF3F] text-[#D7FF3F]" />}
                  <span>{card.time}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 mb-8">
                {card.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-sm font-semibold">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${card.checkColor}`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <Link
              href={`/checkout?plan=${card.id}`}
              className="neo-btn-primary rounded-xl py-3.5 px-5 font-heading font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 text-center w-full mt-auto"
            >
              {card.buttonText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
