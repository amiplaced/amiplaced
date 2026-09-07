"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, UserCheck, Bot, CheckCircle2, Sparkles, AlertTriangle } from "lucide-react";

export default function NoAiGuarantee() {
  const guarantees = [
    {
      id: "no-ai",
      tag: "100% HUMAN WRITTEN",
      title: "0% AI Generated Content",
      desc: "Recruiters and ATS filters instantly flag ChatGPT & AI generated text. We craft every line manually from your authentic experience.",
      icon: Bot,
      bgColor: "bg-[#D7FF3F]",
      textColor: "text-[#0A0A0A]",
      badgeBg: "bg-[#0A0A0A] text-[#D7FF3F]",
    },
    {
      id: "zero-plagiarism",
      tag: "100% UNIQUE",
      title: "Zero Plagiarism Guarantee",
      desc: "No recycled templates or stolen bullet points. Your achievements are written 100% from scratch to showcase your real impact.",
      icon: FileCheck,
      bgColor: "bg-[#F2436C]",
      textColor: "text-white",
      badgeBg: "bg-white text-[#F2436C]",
    },
    {
      id: "human-verified",
      tag: "EXPERT REVIEWED",
      title: "Human Specialist Proofreading",
      desc: "Every resume undergoes rigorous human QA by experienced career strategists before delivery, never automated bots.",
      icon: UserCheck,
      bgColor: "bg-[#1E4FE0]",
      textColor: "text-white",
      badgeBg: "bg-[#D7FF3F] text-[#0A0A0A]",
    },
    {
      id: "ats-pass",
      tag: "SCANNER VERIFIED",
      title: "100% ATS & HR Safe",
      desc: "Built to bypass aggressive AI resume screeners, Turnitin, and Copyleaks, scoring 100% human written authenticity.",
      icon: ShieldCheck,
      bgColor: "bg-[#F4C430]",
      textColor: "text-[#0A0A0A]",
      badgeBg: "bg-[#0A0A0A] text-[#F4C430]",
    },
  ];

  return (
    <section id="no-ai-guarantee" className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Eyebrow Tag & Headline */}
      <div className="flex flex-col items-start mb-12">
        {/* Rotated Sticker Tag with Hover Wiggle */}
        <motion.div
          initial={{ rotate: -3 }}
          whileHover={{ rotate: [-3, 3, -5, 0], scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="neo-sticker bg-[#F2436C] text-white font-heading font-black mb-6 cursor-pointer select-none"
        >
          100% ORIGINAL &amp; HUMAN CRAFTED
        </motion.div>

        {/* Main Headline */}
        <h2 className="font-heading font-black text-xl sm:text-2xl md:text-3xl lg:text-[2.4rem] xl:text-[2.75rem] uppercase tracking-tighter leading-[1.05] max-w-full mb-0">
          <span className="text-[#0A0A0A] block mb-1.5 sm:whitespace-nowrap">
            NO AI GENERATED CONTENT &amp; ZERO PLAGIARISM
          </span>
          <span className="relative inline-block text-[#7B2FF7] sm:whitespace-nowrap">
            THROUGHOUT YOUR ENTIRE RESUME
            <span className="absolute left-0 bottom-1 w-full h-3 bg-[#D7FF3F] -z-10 transform -rotate-1"></span>
          </span>
        </h2>
      </div>

      {/* Grid of 4 Neubrutalist Guarantee Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
        {guarantees.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`${item.bgColor} ${item.textColor} neo-border neo-shadow-lg rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden`}
            >
              {/* Sticker Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className={`text-[11px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded-md border border-black/20 ${item.badgeBg}`}>
                  {item.tag}
                </span>
                <IconComp className="w-6 h-6 shrink-0" />
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-2xl tracking-tight leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-sm font-medium opacity-90 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/15 flex items-center gap-2 text-xs font-bold font-mono">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Guaranteed Standard</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Feature Showcase Banner: AI Vs Human-Crafted Comparison Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white neo-border neo-shadow-lg rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#F2436C] text-white neo-border-sm flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <h4 className="font-heading font-extrabold text-lg sm:text-xl text-[#0A0A0A] uppercase tracking-tight mb-1">
              Did You Know? 78% of HR Bots Reject AI Generated Resumes
            </h4>
            <p className="text-sm text-neutral-600 font-medium max-w-2xl">
              Generic buzzwords like &quot;synergized cross functional leverage&quot; flag your resume for instant rejection. Our human crafted approach ensures your resume sounds real, impactful, and authentic.
            </p>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-3 w-full lg:w-auto justify-end">
          <div className="bg-[#D7FF3F] neo-border rounded-xl px-5 py-3 font-heading font-black text-xs sm:text-sm text-[#0A0A0A] uppercase tracking-wider flex items-center gap-2 select-none shadow-[3px_3px_0px_#000]">
            <Sparkles className="w-4 h-4 text-[#7B2FF7] fill-[#7B2FF7]" />
            100% Human Assurance
          </div>
        </div>
      </motion.div>
    </section>
  );
}
