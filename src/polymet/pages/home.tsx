import { useEffect } from "react";
import { analytics } from "@/lib/analytics";
import HeroSection from "@/polymet/components/hero-section";
import StatsSection from "@/polymet/components/stats-section";
import FeaturedProjectsSection from "@/polymet/components/featured-projects-section";
import AboutPreviewSection from "@/polymet/components/about-preview-section";
import ContactSection from "@/polymet/components/contact-section";

export default function HomePage() {
  useEffect(() => {
    // Track page view for better analytics
    document.title = "David Richard - Product Design Leader";
    
    // Test custom event to verify Pro plan tracking
    analytics.trackPageView("Home", { 
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent.includes('Mobile') ? 'mobile' : 'desktop'
    });
  }, []);

  return (
    <div>
      <HeroSection />

      <StatsSection />

      <FeaturedProjectsSection />

      <AboutPreviewSection />

      <ContactSection />
    </div>
  );
}
