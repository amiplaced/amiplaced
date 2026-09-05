import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import NoAiGuarantee from "@/components/NoAiGuarantee";
import Problem from "@/components/Problem";
import Pricing from "@/components/Pricing";
import StackBuilder from "@/components/StackBuilder";
import Flow from "@/components/Flow";
import Pipeline from "@/components/Pipeline";
import TrustBuilder from "@/components/TrustBuilder";
import BigMood from "@/components/BigMood";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ThreeDirections from "@/components/ThreeDirections";
import RealTalk from "@/components/RealTalk";
import StudentStories from "@/components/StudentStories";
import ZeroBS from "@/components/ZeroBS";
import PricingRecap from "@/components/PricingRecap";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#F4F3ED] text-[#0A0A0A] font-sans overflow-x-hidden">
      {/* 1. Top Floating Pill Header */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Infinite Scrolling Ticker Banner */}
      <Ticker />

      {/* 4. No AI Content & Zero Plagiarism Section */}
      <NoAiGuarantee />

      {/* 5. The Real Problem Section (Before vs After Comparison) */}
      <Problem />

      {/* 6. The Menu Pricing Cards (3 Services) */}
      <Pricing />

      {/* 7. Custom Stack Builder Package Calculator */}
      <StackBuilder />

      {/* 8. The Flow 10-Step Timeline */}
      <Flow />

      {/* 9. The Pipeline Section */}
      <Pipeline />

      {/* 10. Trust Builder Section */}
      <TrustBuilder />

      {/* 11. Big Mood Section */}
      <BigMood />

      {/* 12. Interactive Before/After Split Slider Section */}
      <BeforeAfterSlider />

      {/* 13. Three Directions Section */}
      <ThreeDirections />

      {/* 14. Real Talk Section */}
      <RealTalk />

      {/* 15. Student Stories Section */}
      <StudentStories />

      {/* 16. Zero BS Section */}
      <ZeroBS />

      {/* 17. Simple Flat Pricing Recap & Want Everything Banner */}
      <PricingRecap />

      {/* 18. FAQ Section */}
      <FAQ />

      {/* 19. Final Dramatic CTA Section (RESUME_FINAL_FINAL.PDF) */}
      <FinalCTA />

      {/* White Spacing Divider Strip between Final CTA and Footer */}
      <div className="w-full h-12 sm:h-16 bg-[#F4F3ED]" />

      {/* 20. Footer */}
      <Footer />

      {/* Floating Bottom-Right WhatsApp CTA (Only floating badge) */}
      <FloatingWhatsApp />
    </main>
  );
}
