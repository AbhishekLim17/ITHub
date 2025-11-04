import Hero from "@/components/Hero";
import ValueStrip from "@/components/ValueStrip";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";
import CaseStudies from "@/components/CaseStudies";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <ServicesGrid />
      <ProcessSection />
      <CaseStudies />
      <TrustSection />
      <AboutSection />
      <ContactSection />
      <FloatingCTA />
    </>
  );
}
