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
    {
      id: 1,
      name: "Aarav Sharma",
      univ: "SRCC",
      role: "Frontend Developer Intern",
      tag: "FRONTEND DEV",
      quote: "I was applying for both React and Full Stack roles with one generic CV. AmiPlaced tailored 3 tech-focused resumes highlighting my Next.js projects. Shortlisted in 2 weeks!",
    },
    {
      id: 2,
      name: "Ananya Verma",
      univ: "Delhi University",
      role: "UI/UX Designer",
      tag: "UI/UX DESIGN",
      quote: "My resume and portfolio links were poorly structured. The clean layout and recruiter-ready LinkedIn profile got me 4 design interview callbacks within days.",
    },
    {
      id: 3,
      name: "Rohan Gupta",
      univ: "Amity University",
      role: "Backend Developer",
      tag: "BACKEND DEV",
      quote: "ATS software was rejecting my application because of missing system design keywords. The team completely revamped my technical skills & Node.js project bullets!",
    },
    {
      id: 4,
      name: "Priya Nair",
      univ: "SRCC",
      role: "AI Engineer Intern",
      tag: "AI & ML",
      quote: "Having tailored resumes for AI/ML Research vs Applied LLM roles made a massive difference. The research paper & PyTorch impact metrics were spot on.",
    },
    {
      id: 5,
      name: "Kabir Mehta",
      univ: "Delhi University",
      role: "Full Stack Developer",
      tag: "FULL STACK",
      quote: "Super smooth process. Submitted my MERN stack details, got 3 killer resume versions plus cover letters customized for startup tech roles.",
    },
    {
      id: 6,
      name: "Ishaan Malhotra",
      univ: "Amity University",
      role: "DevOps Engineer Trainee",
      tag: "DEVOPS & CLOUD",
      quote: "Transformed my AWS & Docker deployment projects into professional achievement bullets. The LinkedIn rewrite also brought inbound recruiter messages.",
    },
    {
      id: 7,
      name: "Riya Kapoor",
      univ: "SRCC",
      role: "Data Engineer Intern",
      tag: "DATA ENG",
      quote: "I used to get zero responses for SQL & ETL pipeline roles. After using AmiPlaced's job-specific stack, I cracked interviews at top tech firms.",
    },
    {
      id: 8,
      name: "Siddharth Jain",
      univ: "Delhi University",
      role: "Mobile App Developer",
      tag: "MOBILE DEV",
      quote: "The difference between my old resume and the new one was night and day. ATS score jumped and tech recruiters actually started replying.",
    },
    {
      id: 9,
      name: "Sneha Sen",
      univ: "Amity University",
      role: "Product Designer",
      tag: "PRODUCT DESIGN",
      quote: "They didn't just reformat my CV; they highlighted my Figma design systems and user research case studies in a way that actually mattered to hiring managers.",
    },
    {
      id: 10,
      name: "Aditya Roy",
      univ: "SRCC",
      role: "AI & ML Researcher",
      tag: "AI RESEARCH",
      quote: "Best decision of my job hunt. Got 3 customized resumes for AI Research, Data Science, and ML Ops. Landed my dream tech internship!",
    },
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
            STUDENT REVIEWS
          </motion.div>

          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-[#0A0A0A] mb-3">
            STUDENT STORIES
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-medium max-w-xl">
            Real feedback from tech & design students who upgraded their job search stack.
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
            className="shrink-0 w-[280px] sm:w-[340px] snap-start bg-white neo-border neo-shadow-lg rounded-2xl p-7 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <span className="font-heading font-black text-xs uppercase tracking-widest text-[#7B2FF7] block mb-4">
                {story.tag}
              </span>

              <p className="text-sm text-neutral-700 font-medium leading-relaxed">
                &ldquo;{story.quote}&rdquo;
              </p>
            </div>

            {/* Author Footer */}
            <div className="flex items-center gap-3.5 pt-6 mt-4 border-t border-black/10">
              <div className="w-9 h-9 rounded-full bg-[#D7FF3F] neo-border-sm flex items-center justify-center font-heading font-black text-xs text-black shrink-0">
                {story.name.charAt(0)}
              </div>
              <div>
                <div className="font-heading font-black text-sm text-[#0A0A0A]">
                  {story.name}
                </div>
                <div className="text-xs font-medium text-neutral-500">
                  {story.univ} &middot; {story.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
