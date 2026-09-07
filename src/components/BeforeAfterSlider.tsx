"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider() {
  // sliderPos is the percentage of BEFORE layer visible (0% to 100%)
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  // Global Mouse/Touch Event Listeners for silky-smooth drag without glitching
  useEffect(() => {
    const handleWindowMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = "touches" in e && e.touches && e.touches.length > 0 ? e.touches[0].clientX : (e as MouseEvent).clientX;
      updatePos(clientX);
    };

    const handleWindowUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleWindowMove);
      window.addEventListener("mouseup", handleWindowUp);
      window.addEventListener("touchmove", handleWindowMove);
      window.addEventListener("touchend", handleWindowUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleWindowMove);
      window.removeEventListener("mouseup", handleWindowUp);
      window.removeEventListener("touchmove", handleWindowMove);
      window.removeEventListener("touchend", handleWindowUp);
    };
  }, [isDragging, updatePos]);

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e && e.touches && e.touches.length > 0 ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    updatePos(clientX);
  };

  const beforePoints = [
    "Resume_Final_Final2.pdf",
    "Generic objective statement",
    "Every skill imaginable",
    "Four-line bullets",
    "No measurable achievements",
    "Same resume for every application",
  ];

  const afterPoints = [
    "Business_Analyst_Resume.pdf",
    "Role-specific summary",
    "Relevant skills",
    "Concise accomplishment bullets",
    "ATS-friendly",
    "Targeted keywords",
    "Cleaner hierarchy",
  ];

  return (
    <section id="before-after" className="py-12 md:py-16 px-4 md:px-8 max-w-5xl mx-auto select-none">
      {/* Sticker Tag & Headline */}
      <div className="flex flex-col items-start mb-12">
        {/* Rotated Sticker Badge with Hover Wiggle Animation */}
        <motion.div
          initial={{ rotate: -4 }}
          whileHover={{ rotate: [-4, 2, -6, 0], scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="neo-sticker bg-[#1E4FE0] text-white font-heading font-black mb-6 cursor-pointer"
        >
          DRAG ME
        </motion.div>

        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#0A0A0A]">
          BEFORE. AFTER. NO CAP
        </h2>
      </div>

      {/* Interactive Drag Container Box */}
      <div
        ref={containerRef}
        onMouseDown={handlePointerDown}
        onTouchStart={handlePointerDown}
        className="relative bg-white neo-border-lg neo-shadow-lg rounded-3xl min-h-[380px] sm:min-h-[420px] overflow-hidden cursor-ew-resize touch-none"
      >
        {/* AFTER Layer (Bottom Base - White Background) */}
        <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-center bg-white text-[#0A0A0A] w-full h-full">
          <span className="font-heading font-black text-xs uppercase tracking-widest text-[#F2436C] block mb-6">
            AFTER
          </span>
          <ul className="space-y-3.5 font-heading font-bold text-sm sm:text-base">
            {afterPoints.map((pt, idx) => (
              <li key={idx} className="flex items-center gap-2.5">
                <span className="text-black font-black">✓</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* BEFORE Layer (Top Overlay - Yellow Background Clipped via CSS Clip-Path) */}
        <div
          className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-center bg-[#F4C430] text-[#0A0A0A] w-full h-full"
          style={{
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          }}
        >
          <span className="font-heading font-black text-xs uppercase tracking-widest text-[#0A0A0A] block mb-6">
            BEFORE
          </span>
          <ul className="space-y-3.5 font-heading font-bold text-sm sm:text-base">
            {beforePoints.map((pt, idx) => (
              <li key={idx} className="flex items-center gap-2.5 opacity-90">
                <span className="text-black font-black">✕</span>
                <span className="line-through">{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider Line & Neon Draggable Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-black z-30 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Circular Drag Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#D7FF3F] neo-border neo-shadow-sm flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
            <MoveHorizontal className="w-5 h-5 text-black stroke-[3]" />
          </div>
        </div>
      </div>
    </section>
  );
}
