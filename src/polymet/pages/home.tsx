import HeroSection from "@/polymet/components/hero-section";
import StatsSection from "@/polymet/components/stats-section";
import FeaturedProjectsSection from "@/polymet/components/featured-projects-section";
import AboutPreviewSection from "@/polymet/components/about-preview-section";
import ContactSection from "@/polymet/components/contact-section";

export default function HomePage() {
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
