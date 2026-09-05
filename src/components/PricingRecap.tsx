"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PricingRecap() {
  const cards = [
    {
      id: "resume",
      subhead: "RESUME STARTER",
      price: "₹1,200",
      desc: "3 targeted resumes",
      time: "Within 24 hours",
      bgColor: "bg-white",
      textColor: "text-[#0A0A0A]",
      subheadColor: "text-[#7B2FF7]",
      priceColor: "text-[#7B2FF7]",
      descColor: "text-[#7B2FF7]",
      timeColor: "text-neutral-400",
    },
    {
      id: "linkedin",
      subhead: "LINKEDIN UPGRADE",
      price: "₹3,200",
      desc: "Full profile positioning",
      time: "2–3 working days",
      bgColor: "bg-[#F4C430]",
      textColor: "text-[#0A0A0A]",
      subheadColor: "text-black/80",
      priceColor: "text-black",
      descColor: "text-black",
      timeColor: "text-black/60",
    },
    {
      id: "applications",
      subhead: "APPLICATION ASSISTANCE",
      price: "₹4,500",
      desc: "Structured job application support",
      time: "Ongoing 2–3 weeks",
      bgColor: "bg-[#F2436C]",
      textColor: "text-white",
      subheadColor: "text-pink-200",
      priceColor: "text-white",
      descColor: "text-white",
      timeColor: "text-pink-100",
    },
  ];

  return (
    <section id="flat-pricing" className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Sticker Tag & Headline */}
      <div className="flex flex-col items-start mb-12">
        {/* Rotated Sticker Badge with Hover Wiggle Animation */}
        <motion.div
          initial={{ rotate: -4 }}
          whileHover={{ rotate: [-4, 2, -6, 0], scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="neo-sticker bg-[#1E4FE0] text-white font-heading font-black mb-6 cursor-pointer select-none"
        >
          PRICING
        </motion.div>

        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#0A0A0A]">
          SIMPLE. FLAT. NO SURPRISES.
        </h2>
      </div>

      {/* 3 Summary Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
        {cards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className={`${card.bgColor} ${card.textColor} neo-border neo-shadow-lg rounded-2xl p-8 flex flex-col justify-between min-h-[300px]`}
          >
            <div>
              <span className={`font-heading font-black text-xs uppercase tracking-widest block mb-4 ${card.subheadColor}`}>
                {card.subhead}
              </span>

              <div className={`font-heading font-extrabold text-5xl sm:text-6xl tracking-tight mb-2 ${card.priceColor}`}>
                {card.price}
              </div>

              <div className={`font-heading font-bold text-base mb-1 ${card.descColor}`}>
                {card.desc}
              </div>

              <div className={`text-xs font-semibold ${card.timeColor}`}>
                {card.time}
              </div>
            </div>

            <Link
              href={`/checkout?plan=${card.id}`}
              className="neo-btn-primary rounded-xl py-3.5 px-5 font-heading font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 text-center w-full mt-8"
            >
              Get Started
              <ArrowRight className="w-4 h-4 text-[#D7FF3F]" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom Dark Banner Box: WANT EVERYTHING? */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#0A0A0A] text-white neo-border neo-shadow-lg rounded-3xl p-8 sm:p-12 relative flex flex-col lg:flex-row lg:items-center justify-between gap-8"
      >
        <div className="flex flex-col items-start">
          {/* Rotated BEST VALUE Sticker */}
          <motion.div
            initial={{ rotate: -3 }}
            whileHover={{ rotate: [-3, 2, -5, 0], scale: 1.05 }}
            className="neo-sticker bg-[#D7FF3F] text-[#0A0A0A] font-heading font-black mb-4 select-none cursor-pointer"
          >
            BEST VALUE
          </motion.div>

          <h3 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white mb-2">
            WANT EVERYTHING?
          </h3>
          <p className="text-neutral-400 font-medium text-sm sm:text-base max-w-xl">
            Resume + LinkedIn + Applications. Build your own combo, pay only for what you pick.
          </p>
        </div>

        {/* Build Your Package Button */}
        <a
          href="#build-stack"
          className="bg-[#D7FF3F] text-[#0A0A0A] neo-border rounded-2xl py-4 px-8 font-heading font-extrabold text-base sm:text-lg uppercase tracking-wider inline-flex items-center justify-center gap-2.5 shrink-0 neo-shadow hover:neo-shadow-lg hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all duration-150 cursor-pointer"
        >
          <span>Build Your Package</span>
          <ArrowRight className="w-5 h-5 text-black stroke-[3]" />
        </a>
      </motion.div>
    </section>
  );
}
