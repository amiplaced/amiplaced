import React from "react";
import CheckoutForm from "@/components/CheckoutForm";
import Navbar from "@/components/Navbar";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#F4F3ED] text-[#0A0A0A] font-sans">
      <Navbar />
      <div className="pt-20">
        <CheckoutForm />
      </div>
    </main>
  );
}
