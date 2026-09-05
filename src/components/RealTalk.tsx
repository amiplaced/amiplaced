"use client";

import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function RealTalk() {
  const [count, setCount] = useState(1);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  // Animated counter sequence cycling between numbers up to 100 with slower timing
  useEffect(() => {
    if (!isInView) return;

    const sequence = [1, 7, 12, 24, 37, 52, 68, 83, 94, 100];
    let step = 0;

    const interval = setInterval(() => {
      step = (step + 1) % sequence.length;
      setCount(sequence[step]);
    }, 1000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      id="real-talk"
      ref={ref}
      className="py-16 md:py-20 bg-[#0A0A0A] text-white border-y-4 border-black px-4 md:px-8 text-center select-none"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        {/* Rotated Sticker Badge with Hover Wiggle Animation */}
        <motion.div
          initial={{ rotate: -4 }}
          whileHover={{ rotate: [-4, 2, -6, 0], scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="neo-sticker bg-[#F2436C] text-white font-heading font-black mb-6 cursor-pointer"
        >
          REAL TALK
        </motion.div>

        {/* Top Quote Headline */}
        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-8">
          &ldquo;Sending 100 applications isn&apos;t impressive.&rdquo;
        </h2>

        {/* Dynamic Animated Counter Number */}
        <div className="relative my-4 flex items-center justify-center min-h-[140px] sm:min-h-[180px]">
          <motion.span
            key={count}
            initial={{ opacity: 0.7, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="font-heading font-black text-7xl sm:text-9xl lg:text-[160px] text-[#D7FF3F] leading-none tracking-tight"
          >
            {count}
          </motion.span>
        </div>

        {/* Bottom Headline */}
        <h3 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase mt-6 mb-3">
          RELEVANT &gt; RANDOM.
        </h3>

        {/* Sub-caption */}
        <p className="text-sm sm:text-base text-neutral-400 font-medium">
          Quality &times; relevance &times; consistency.
        </p>
      </div>
    </section>
  );
}
