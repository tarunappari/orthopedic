
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import AboutSection from '@/components/landingpage/AboutSection';
import ContactSection from '@/components/landingpage/ContactSection';
import HeroSection from '@/components/landingpage/HeroSection';
import ServicesSection from '@/components/landingpage/ServicesSection';
import TestimonialsSection from '@/components/landingpage/TestimonialsSection';
import WhyChooseSection from '@/components/landingpage/WhyChooseSection';
export default function Home() {
  return (
    <div className='pageContainer relative'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
