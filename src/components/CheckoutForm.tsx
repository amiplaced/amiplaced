"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowLeft, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface ServiceOption {
  id: string;
  name: string;
  price: number;
}

const ALL_SERVICES: ServiceOption[] = [
  { id: "resume", name: "3 Targeted Resumes", price: 1200 },
  { id: "linkedin", name: "LinkedIn Optimization", price: 3200 },
  { id: "applications", name: "Job Application Assistance", price: 4500 },
];

function CheckoutContent() {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get("plan") || "linkedin";
  const initialItems = searchParams.get("items");

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    gradYear: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialItems) {
      const itemsArr = initialItems.split(",").filter((id) => ALL_SERVICES.some((s) => s.id === id));
      if (itemsArr.length > 0) {
        setSelectedIds(itemsArr);
        return;
      }
    }

    if (initialPlan && ALL_SERVICES.some((s) => s.id === initialPlan)) {
      setSelectedIds([initialPlan]);
    } else {
      setSelectedIds(["linkedin"]);
    }
  }, [initialPlan, initialItems]);

  const toggleService = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length === 1) return; // keep at least 1 selected
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedServices = ALL_SERVICES.filter((s) => selectedIds.includes(s.id));
  const totalPrice = selectedServices.reduce((acc, curr) => acc + curr.price, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Instant UI transition to success screen (0ms latency)
    setIsSubmitted(true);

    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        college: formData.college,
        course: formData.course,
        gradYear: formData.gradYear,
        selectedServices: selectedServices.map((s) => s.name).join(" + "),
        totalPrice: totalPrice,
      };

      fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }).catch((err) => console.error("Error submitting form:", err));
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F3ED] text-[#0A0A0A] font-sans py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-heading font-extrabold text-sm uppercase tracking-wider text-[#0A0A0A] hover:text-[#7B2FF7] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to AmiPlaced
        </Link>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white neo-border neo-shadow-lg rounded-3xl p-8 sm:p-14 max-w-2xl mx-auto text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#D7FF3F] border-3 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_#000]">
                <CheckCircle2 className="w-10 h-10 text-black stroke-[3]" />
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight mb-4">
                Order Received! 🎉
              </h2>

              <p className="text-neutral-600 font-medium text-base sm:text-lg mb-8 max-w-md">
                Thank you <strong className="text-black">{formData.fullName || "Student"}</strong>! We have locked in your selected package (<strong className="text-[#7B2FF7]">₹{totalPrice.toLocaleString("en-IN")}</strong>).
              </p>

              <div className="bg-neutral-50 neo-border-sm rounded-2xl p-6 w-full text-left mb-8 space-y-2 text-sm">
                <div className="flex justify-between font-mono">
                  <span className="text-neutral-500">Package:</span>
                  <span className="font-bold">{selectedServices.map((s) => s.name).join(" + ")}</span>
                </div>
                <div className="flex justify-between font-mono">
                  <span className="text-neutral-500">WhatsApp / Phone:</span>
                  <span className="font-bold">{formData.phone || "Provided"}</span>
                </div>
                <div className="flex justify-between font-mono">
                  <span className="text-neutral-500">Email:</span>
                  <span className="font-bold">{formData.email || "Provided"}</span>
                </div>
              </div>

              <a
                href={`https://wa.me/919958484106?text=Hi%20AmiPlaced!%20I've%20just%20placed%20an%20order%20for%20${encodeURIComponent(
                  selectedServices.map((s) => s.name).join(" + ")
                )}%20(Name:%20${encodeURIComponent(formData.fullName)},%20Phone:%20${encodeURIComponent(formData.phone)})`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D7FF3F] text-black border-3 border-black neo-border rounded-2xl py-4 px-8 font-heading font-extrabold text-lg uppercase tracking-wider shadow-[5px_5px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all w-full flex items-center justify-center gap-2"
              >
                Send Details on WhatsApp
                <Sparkles className="w-5 h-5" />
              </a>
            </motion.div>
          ) : (
            <motion.div
              key="checkout"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Left Column: Form Inputs & Service Selectors */}
              <div className="lg:col-span-7 flex flex-col items-start">
                {/* Sticker Badge */}
                <motion.div
                  initial={{ rotate: -4 }}
                  whileHover={{ rotate: [-4, 2, -6, 0], scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="neo-sticker bg-[#D7FF3F] text-[#0A0A0A] font-heading font-black mb-4 cursor-pointer select-none"
                >
                  CHECKOUT
                </motion.div>

                <h1 className="font-heading font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-[#0A0A0A] mb-2">
                  Almost there.
                </h1>
                <p className="text-base sm:text-lg text-neutral-600 font-medium mb-8">
                  Fill the basics. Payment is instant.
                </p>

                <form onSubmit={handleSubmit} className="w-full space-y-4">
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white neo-border neo-shadow-sm rounded-2xl px-5 py-4 font-heading font-bold text-base text-[#0A0A0A] placeholder:text-neutral-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#7B2FF7] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white neo-border neo-shadow-sm rounded-2xl px-5 py-4 font-heading font-bold text-base text-[#0A0A0A] placeholder:text-neutral-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#7B2FF7] transition-all"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white neo-border neo-shadow-sm rounded-2xl px-5 py-4 font-heading font-bold text-base text-[#0A0A0A] placeholder:text-neutral-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#7B2FF7] transition-all"
                    />
                  </div>

                  {/* College (optional) */}
                  <div>
                    <input
                      type="text"
                      placeholder="College (optional)"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className="w-full bg-white neo-border neo-shadow-sm rounded-2xl px-5 py-4 font-heading font-bold text-base text-[#0A0A0A] placeholder:text-neutral-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#7B2FF7] transition-all"
                    />
                  </div>

                  {/* Course (optional) */}
                  <div>
                    <input
                      type="text"
                      placeholder="Course (optional)"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full bg-white neo-border neo-shadow-sm rounded-2xl px-5 py-4 font-heading font-bold text-base text-[#0A0A0A] placeholder:text-neutral-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#7B2FF7] transition-all"
                    />
                  </div>

                  {/* Graduation year (optional) */}
                  <div>
                    <input
                      type="text"
                      placeholder="Graduation year (optional)"
                      value={formData.gradYear}
                      onChange={(e) => setFormData({ ...formData, gradYear: e.target.value })}
                      className="w-full bg-white neo-border neo-shadow-sm rounded-2xl px-5 py-4 font-heading font-bold text-base text-[#0A0A0A] placeholder:text-neutral-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#7B2FF7] transition-all"
                    />
                  </div>

                  {/* Service Package Selection Checkboxes */}
                  <div className="pt-4">
                    <span className="font-heading font-black text-xs uppercase tracking-widest text-neutral-500 block mb-3">
                      SELECT SERVICES
                    </span>
                    <div className="space-y-3">
                      {ALL_SERVICES.map((service) => {
                        const isSelected = selectedIds.includes(service.id);
                        return (
                          <div
                            key={service.id}
                            onClick={() => toggleService(service.id)}
                            className={`cursor-pointer neo-border-sm rounded-2xl p-4 flex items-center justify-between transition-all select-none ${
                              isSelected
                                ? "bg-white neo-shadow border-black"
                                : "bg-neutral-100 opacity-60 hover:opacity-100"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-5 h-5 rounded-md border-2 border-black flex items-center justify-center ${
                                  isSelected ? "bg-[#7B2FF7] text-white" : "bg-white"
                                }`}
                              >
                                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>
                              <span className="font-heading font-extrabold text-sm sm:text-base text-[#0A0A0A]">
                                {service.name}
                              </span>
                            </div>
                            <span className="font-heading font-black text-base text-[#0A0A0A]">
                              ₹{service.price.toLocaleString("en-IN")}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0A0A0A] text-[#D7FF3F] neo-border neo-shadow-lg rounded-2xl py-4.5 px-6 font-heading font-extrabold text-lg sm:text-xl uppercase tracking-wider hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <span>Proceed to Payment · ₹{totalPrice.toLocaleString("en-IN")}</span>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column: Order Summary Card */}
              <div className="lg:col-span-5 sticky top-12">
                <div className="bg-white neo-border neo-shadow-lg rounded-3xl p-7 sm:p-8 flex flex-col justify-between min-h-[320px]">
                  <div>
                    <span className="font-heading font-black text-xs uppercase tracking-widest text-[#7B2FF7] block mb-6">
                      YOUR ORDER
                    </span>

                    <div className="space-y-4 mb-6 pb-6 border-b-2 border-black">
                      {selectedServices.map((service) => (
                        <div key={service.id} className="flex items-center justify-between">
                          <span className="font-heading font-extrabold text-base sm:text-lg text-[#0A0A0A]">
                            {service.name}
                          </span>
                          <span className="font-heading font-black text-base sm:text-lg text-[#0A0A0A]">
                            ₹{service.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-baseline justify-between mb-6">
                      <span className="font-heading font-black text-xs uppercase tracking-widest text-neutral-500">
                        TOTAL
                      </span>
                      <span className="font-heading font-black text-4xl sm:text-5xl text-[#0A0A0A]">
                        ₹{totalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <div className="bg-neutral-50 neo-border-sm rounded-xl p-4 text-xs font-medium text-neutral-600 flex items-start gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-[#7B2FF7] shrink-0 mt-0.5" />
                    <span>
                      Expected delivery: <strong className="text-black font-bold">Within 24 hours</strong> after full info received.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function CheckoutForm() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F4F3ED] flex items-center justify-center">Loading checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
