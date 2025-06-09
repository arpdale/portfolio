import SectionHeading from "@/polymet/components/section-heading";
import ContactSection from "@/polymet/components/contact-section";

export default function ContactPage() {
  return (
    <div className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Let's Connect"
          subtitle="I'm open to new opportunities, consulting, or just a good design conversation."
          alignment="center"
        />

        <div className="mt-12">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
