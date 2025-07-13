
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import GallerySection from "@/components/GallerySection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import QuickMessage from "@/components/QuickMessage";

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <MobileHeader />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <GallerySection />
      <ServiceAreasSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <QuickMessage />
    </div>
  );
};

export default Index;
