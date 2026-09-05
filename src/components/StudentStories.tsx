"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StudentStories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const stories = [
    { id: 1, univ: "Delhi University", role: "Business Analyst Intern" },
    { id: 2, univ: "IIT Bombay", role: "Product Management Analyst" },
    { id: 3, univ: "NMIMS Mumbai", role: "Operations Trainee" },
    { id: 4, univ: "Christ University", role: "Consulting Associate" },
    { id: 5, univ: "SRCC Delhi", role: "Strategy Consultant" },
  ];

  return (
    <section id="stories" className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Sticker Tag & Headline */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
        <div className="flex flex-col items-start">
          {/* Rotated Sticker Badge with Hover Wiggle Animation */}
          <motion.div
            initial={{ rotate: -4 }}
            whileHover={{ rotate: [-4, 2, -6, 0], scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="neo-sticker bg-[#F4C430] text-[#0A0A0A] font-heading font-black mb-6 cursor-pointer select-none"
          >
            COMING SOON
          </motion.div>

          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            STUDENT STORIES.
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-medium max-w-xl">
            We only publish real testimonials with consent. Placeholders below until then.
          </p>
        </div>

        {/* Scroll Controls (Left / Right Arrow Buttons) */}
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="neo-btn-secondary p-3 rounded-full flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-black stroke-[3]" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="neo-btn-secondary p-3 rounded-full flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-black stroke-[3]" />
          </button>
        </div>
      </div>

      {/* Horizontal Cards Scroller Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {stories.map((story) => (
          <motion.div
            key={story.id}
            whileHover={{ y: -6, scale: 1.01 }}
            className="shrink-0 w-[280px] sm:w-[340px] snap-start bg-white neo-border neo-shadow-lg rounded-2xl p-7 flex flex-col justify-between min-h-[260px]"
          >
            <div>
              <span className="font-heading font-black text-xs uppercase tracking-widest text-[#7B2FF7] block mb-4">
                STORY COMING SOON
              </span>

              <p className="text-sm text-neutral-600 font-medium italic leading-relaxed">
                &ldquo;[Real testimonial will appear here once we have written consent from the student.]&rdquo;
              </p>
            </div>

            {/* Author / Placeholder Footer */}
            <div className="flex items-center gap-3.5 pt-6 mt-4 border-t border-black/10">
              <div className="w-9 h-9 rounded-full bg-[#D7FF3F] neo-border-sm shrink-0" />
              <div>
                <div className="font-heading font-black text-sm text-[#0A0A0A]">
                  Placeholder
                </div>
                <div className="text-xs font-medium text-neutral-500">
                  &ndash; {story.univ} &middot; {story.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
