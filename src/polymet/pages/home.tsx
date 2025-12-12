import { useEffect } from "react";
import { analytics } from "@/lib/analytics";
import HeroSection from "@/polymet/components/hero-section";
import StatsSection from "@/polymet/components/stats-section";
import AboutPreviewSection from "@/polymet/components/about-preview-section";
import ContactSection from "@/polymet/components/contact-section";

export default function HomePage() {
  useEffect(() => {
    document.title = "David Richard - Product Design Leader";

    analytics.trackPageView("Home", {
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent.includes('Mobile') ? 'mobile' : 'desktop'
    });
  }, []);

  return (
    <div>
      <HeroSection />

      <StatsSection />

      <AboutPreviewSection />

      <ContactSection />
    </div>
  );
}
