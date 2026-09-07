"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroTopRightOrb() {
  return (
    <div className="absolute -top-24 -right-24 sm:-top-28 sm:-right-28 w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] pointer-events-none z-0 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 15, -15, 0],
          y: [0, -15, 15, 0],
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(215,255,63,0.7)_0%,rgba(180,255,0,0.4)_45%,transparent_75%)] blur-[55px]"
      />
    </div>
  );
}
