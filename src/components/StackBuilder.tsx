"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import { calculateStackPricing } from "@/utils/pricing";

interface StackItem {
  id: string;
  title: string;
  price: number;
  selectedColor: string;
  textColor: string;
}

export default function StackBuilder() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const items: StackItem[] = [
    {
      id: "resume",
      title: "3 Targeted Resumes",
      price: 1200,
      selectedColor: "bg-[#1E4FE0]",
      textColor: "text-white",
    },
    {
      id: "linkedin",
      title: "LinkedIn Optimization",
      price: 3200,
      selectedColor: "bg-[#F4C430]",
      textColor: "text-[#0A0A0A]",
    },
    {
      id: "applications",
      title: "Job Application Assistance",
      price: 4500,
      selectedColor: "bg-[#F2436C]",
      textColor: "text-white",
    },
  ];

  const toggleItem = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedItems = items.filter((item) => selectedIds.includes(item.id));
  const pricing = calculateStackPricing(selectedIds);

  return (
    <section id="build-stack" className="py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Eyebrow & Headline */}
      <div className="flex flex-col items-start mb-10">
        {/* Rotated Sticker Badge with Hover Wiggle Animation */}
        <motion.div
          initial={{ rotate: -4 }}
          whileHover={{ rotate: [-4, 2, -6, 0], scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="neo-sticker bg-[#7B2FF7] text-white font-heading font-black mb-4 cursor-pointer select-none"
        >
          BUILD YOUR STACK
        </motion.div>

        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl tracking-tight text-[#0A0A0A] uppercase mb-2">
          BUILD YOUR JOB SEARCH STACK
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 font-medium">
          Tap the ones you want. Total updates instantly with automatic bundle discounts.
        </p>

        {/* Bundle Discount Callout Banner */}
        <div className="mt-4 inline-flex items-center gap-2 bg-[#D7FF3F] text-black neo-border-sm rounded-xl px-4 py-2 text-xs sm:text-sm font-heading font-black">
          <Tag className="w-4 h-4 stroke-[3]" />
          <span>BUNDLE OFFER: Pick 2+ services & get up to ₹2,100 flat discount!</span>
        </div>
      </div>

      {/* 3 Selectable Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {items.map((item) => {
          const isSelected = selectedIds.includes(item.id);

          return (
            <motion.div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`cursor-pointer neo-border rounded-2xl p-6 transition-all duration-200 relative min-h-[140px] flex flex-col justify-between select-none ${
                isSelected
                  ? `${item.selectedColor} ${item.textColor} neo-shadow-lg`
                  : "bg-white text-[#0A0A0A] neo-shadow-sm hover:neo-shadow"
              }`}
            >
              {/* Top Row: Checkbox & Price */}
              <div className="flex items-center justify-between">
                <div
                  className={`w-6 h-6 rounded-md neo-border-sm flex items-center justify-center transition-colors ${
                    isSelected ? "bg-black text-white" : "bg-white text-transparent"
                  }`}
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="font-heading font-black text-xl md:text-2xl">
                  ₹{item.price.toLocaleString("en-IN")}
                </div>
              </div>

              {/* Bottom Title */}
              <div className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight mt-4">
                {item.title}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Left Box: Selected Services List & Total */}
        <div className="md:col-span-6 lg:col-span-5 bg-white neo-border neo-shadow-lg rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-heading font-black text-xs uppercase tracking-widest text-neutral-400">
                SELECTED SERVICES
              </span>
              {pricing.hasDiscount && (
                <span className="neo-sticker bg-[#D7FF3F] text-black text-[10px] font-black uppercase px-2 py-0.5">
                  BUNDLE UNLOCKED
                </span>
              )}
            </div>

            {selectedItems.length === 0 ? (
              <p className="text-sm font-medium text-neutral-400 italic my-6">
                Nothing selected yet. Try tapping one.
              </p>
            ) : (
              <ul className="space-y-3 mb-6">
                <AnimatePresence>
                  {selectedItems.map((item) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="flex items-center justify-between text-sm font-semibold text-[#0A0A0A]"
                    >
                      <span>{item.title}</span>
                      <span className="font-mono font-bold">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            )}
          </div>

          <div>
            <hr className="border-black/20 mb-4" />

            {/* Subtotal & Savings breakdown if discount is applicable */}
            {pricing.hasDiscount && (
              <div className="space-y-1.5 mb-3 pb-3 border-b border-black/10 text-xs font-semibold">
                <div className="flex items-center justify-between text-neutral-500 font-mono">
                  <span>Subtotal:</span>
                  <span className="line-through">₹{pricing.originalPrice.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex items-center justify-between text-[#7B2FF7] font-heading font-bold">
                  <span>Bundle Discount:</span>
                  <span>-₹{pricing.discountAmount.toLocaleString("en-IN")} OFF</span>
                </div>
              </div>
            )}

            <div className="flex items-baseline justify-between">
              <div>
                <span className="font-heading font-black text-xs uppercase tracking-widest text-neutral-500 block">
                  TOTAL
                </span>
                {pricing.hasDiscount && (
                  <span className="text-xs font-bold text-[#7B2FF7]">
                    Saved ₹{pricing.discountAmount.toLocaleString("en-IN")}
                  </span>
                )}
              </div>
              <span className="font-heading font-black text-3xl sm:text-4xl text-[#0A0A0A]">
                ₹{pricing.finalPrice.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>

        {/* Right Box: Continue CTA Button */}
        <div className="md:col-span-6 lg:col-span-7 flex items-center">
          {selectedIds.length > 0 ? (
            <Link
              href={`/checkout?items=${selectedIds.join(",")}`}
              className="w-full neo-btn-primary rounded-2xl p-6 sm:p-8 font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-wider flex items-center justify-center gap-3 text-center transition-all bg-[#0A0A0A] text-[#D7FF3F] neo-shadow-lg"
            >
              Continue
              <ArrowRight className="w-7 h-7 sm:w-8 sm:h-8" />
            </Link>
          ) : (
            <div className="w-full bg-[#E5E5E0] neo-border rounded-2xl p-6 sm:p-8 font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-wider flex items-center justify-center gap-3 text-center text-neutral-400 select-none cursor-not-allowed">
              Continue
              <ArrowRight className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-400" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
