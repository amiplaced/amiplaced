"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why choose AmiPlaced?",
      a: "Over 427+ students have upgraded their career profiles with us. Every resume and LinkedIn optimization is handled by a dedicated team of 8+ career mentors and domain experts who understand actual recruiter standards.",
    },
    {
      q: "Is this resume ATS-friendly?",
      a: "Yes. Resumes are structured to follow ATS-friendly principles while targeting relevant job descriptions.",
    },
    {
      q: "Will you guarantee me an interview?",
      a: "No. No legitimate career service can guarantee interviews or jobs. We improve your positioning and application process.",
    },
    {
      q: "Are all 3 resumes different?",
      a: "Yes. They are designed around different target roles or job descriptions.",
    },
    {
      q: "Do you add fake experience?",
      a: "Absolutely not. We only improve presentation of what you actually have.",
    },
    {
      q: "What do I need to provide?",
      a: "Existing resume, education, experience, projects, internships, skills, certifications, achievements and target roles/JDs.",
    },
    {
      q: "How quickly will I receive my resumes?",
      a: "Target delivery: within 24 hours after receiving complete information.",
    },
    {
      q: "How long does LinkedIn optimization take?",
      a: "2-3 working days.",
    },
    {
      q: "Can I purchase services separately?",
      a: "Yes. Buy one, two, or all three.",
    },
    {
      q: "Do you apply to jobs for me?",
      a: "If Job Application Assistance is purchased, relevant applications are handled according to the defined scope of the selected plan.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 md:py-16 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Sticker Tag & Headline */}
      <div className="flex flex-col items-start mb-12">
        {/* Rotated Sticker Badge with Hover Wiggle Animation */}
        <motion.div
          initial={{ rotate: -4 }}
          whileHover={{ rotate: [-4, 2, -6, 0], scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="neo-sticker bg-[#7B2FF7] text-white font-heading font-black mb-6 cursor-pointer select-none"
        >
          QUESTIONS?
        </motion.div>

        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#0A0A0A]">
          FAQ. NO FLUFF
        </h2>
      </div>

      {/* Accordion Cards List */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="bg-white neo-border neo-shadow-sm rounded-2xl overflow-hidden transition-all duration-200"
            >
              {/* Question Header Button */}
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-extrabold text-base sm:text-lg text-[#0A0A0A] hover:bg-neutral-50 transition-colors cursor-pointer select-none"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-black shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#7B2FF7]" : ""
                  }`}
                />
              </button>

              {/* Answer Content Dropdown */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-neutral-600 font-medium leading-relaxed border-t border-black/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
