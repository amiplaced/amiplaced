"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function BigMood() {
  return (
    <section id="big-mood" className="py-12 md:py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white neo-border-lg neo-shadow-lg rounded-3xl p-8 sm:p-12 relative max-w-4xl mx-auto"
      >
        {/* Rotated Sticker Badge with Hover Wiggle Animation */}
        <motion.div
          initial={{ rotate: -4 }}
          whileHover={{ rotate: [-4, 2, -6, 0], scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="absolute -top-4 left-8 neo-sticker bg-[#F2436C] text-white font-heading font-black cursor-pointer select-none"
        >
          BIG MOOD
        </motion.div>

        <div className="space-y-6 pt-2">
          {/* Recruiter Quote 1 */}
          <div>
            <span className="font-heading font-black text-xs uppercase tracking-widest text-neutral-400 block mb-1">
              RECRUITER
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#0A0A0A] tracking-tight">
              &ldquo;We&apos;re looking for someone with <span className="italic font-extrabold underline decoration-[#7B2FF7] decoration-2">experience.</span>&rdquo;
            </h3>
          </div>

          {/* Student Quote */}
          <div>
            <span className="font-heading font-black text-xs uppercase tracking-widest text-neutral-400 block mb-1">
              STUDENT
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#0A0A0A] tracking-tight">
              &ldquo;How do I get experience if nobody gives me experience?&rdquo;
            </h3>
          </div>

          {/* Recruiter Seen Reply */}
          <div>
            <span className="font-heading font-black text-xs uppercase tracking-widest text-neutral-400 block mb-1">
              RECRUITER
            </span>
            <div className="flex items-center gap-2 font-heading font-black text-2xl sm:text-3xl text-[#7B2FF7]">
              <Sparkles className="w-6 h-6 text-amber-400 fill-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Seen 2:17 PM</span>
              <Sparkles className="w-6 h-6 text-amber-400 fill-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-neutral-600 font-medium pt-4 border-t border-black/10">
            We can&apos;t fix the job market. But we can make sure your profile isn&apos;t making things harder.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href="#pricing"
              className="neo-btn-primary rounded-xl px-7 py-3.5 font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider inline-flex items-center gap-2"
            >
              Fair Enough. Fix My Resume
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
