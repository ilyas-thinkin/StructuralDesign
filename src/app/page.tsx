import Hero from "@/components/Hero/Hero";
import SoftwareSection from "@/components/SoftwareSection/SoftwareSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection/WhyChooseSection";
import PortfolioSection from "@/components/PortfolioSection/PortfolioSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import ProjectShowcase from "@/components/ProjectShowcase/ProjectShowcase";
import ApproachSection from "@/components/ApproachSection/ApproachSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <SoftwareSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseSection />
      <AboutSection />
      <TestimonialsSection />
      <ProjectShowcase />
      <ApproachSection />
    </main>
  );
}
