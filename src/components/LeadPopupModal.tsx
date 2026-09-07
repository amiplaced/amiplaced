"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";

export default function LeadPopupModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if user has already seen/closed the popup in this session
    const hasSeen = sessionStorage.getItem("hasSeenLeadPopup");
    if (!hasSeen) {
      // Auto-trigger popup after 3.5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenLeadPopup", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Record submission to API
    try {
      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch((err) => console.error("Lead submission error:", err));
    } catch (err) {
      console.error(err);
    }

    sessionStorage.setItem("hasSeenLeadPopup", "true");

    // Immediately redirect to checkout page with pre-filled lead data
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      router.push(
        `/checkout?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(
          formData.email
        )}&phone=${encodeURIComponent(formData.whatsapp)}`
      );
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white neo-border neo-shadow-xl rounded-[2.5rem] p-7 sm:p-9 text-left z-10 shadow-2xl overflow-hidden"
          >
            {/* Close X Button */}
            <button
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors text-neutral-600 hover:text-black cursor-pointer"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {isSubmitted ? (
              /* Success Screen */
              <div className="py-4 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#D7FF3F] neo-border-sm flex items-center justify-center mb-5 shadow-[4px_4px_0px_#000]">
                  <CheckCircle2 className="w-9 h-9 text-black stroke-[3]" />
                </div>

                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#0A0A0A] mb-2">
                  Checklist On Its Way! 🚀
                </h3>

                <p className="text-sm font-medium text-neutral-600 mb-6 leading-relaxed">
                  Redirecting to your checkout profile...
                </p>
              </div>
            ) : (
              /* Form Screen */
              <div>
                {/* Rotated Neon Sticker Badge */}
                <motion.div
                  initial={{ rotate: -2 }}
                  whileHover={{ rotate: [-2, 2, -4, 0], scale: 1.05 }}
                  className="neo-sticker bg-[#D7FF3F] text-[#0A0A0A] font-heading font-black text-xs px-3.5 py-1 mb-4 inline-block select-none cursor-pointer"
                >
                  FREE &middot; NO SPAM
                </motion.div>

                {/* Headline & Subtitle */}
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight leading-tight mb-2">
                  Not ready to buy yet?
                </h3>
                <p className="text-sm font-medium text-neutral-600 leading-relaxed mb-6">
                  Get a free 5-point resume checklist. Fix the obvious stuff yourself.
                </p>

                {/* Form Inputs */}
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white neo-border-sm rounded-2xl px-4 py-3.5 text-sm font-medium text-[#0A0A0A] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#7B2FF7] transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white neo-border-sm rounded-2xl px-4 py-3.5 text-sm font-medium text-[#0A0A0A] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#7B2FF7] transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp number"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-white neo-border-sm rounded-2xl px-4 py-3.5 text-sm font-medium text-[#0A0A0A] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#7B2FF7] transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0A0A0A] text-[#D7FF3F] neo-border neo-shadow rounded-2xl py-4 px-6 font-heading font-extrabold text-base uppercase tracking-wider hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Redirecting...</span>
                      ) : (
                        <>
                          <span>Send my checklist</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
