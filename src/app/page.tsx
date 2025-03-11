// import Image from "next/image";
// import styles from "./page.module.css";

import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
// import ServicesSection from '@/components/sections/ServiceSection';
// import FeaturesSection from '@/components/sections/FeatureSection';
// import CaseStudiesSection from '@/components/sections/CaseStudiesSevtion';
// import TestimonialsSection from '@/components/sections/TestimonialsSection';
// import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import ResearchSection from '@/components/sections/ResearchSection';
import ManufacturingSection from '@/components/sections/ManufacturingSection';
// import AtomsSection from '@/components/sections/AtomsSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import ProductsSection from '@/components/sections/ProductsSection';
import SearchProductSection from '@/components/sections/SearchProductSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />  
      {/* <ServicesSection />  */}
       <ResearchSection/> 
       <ManufacturingSection/> 
      {/* <AtomsSection/>  */}
      <CategoriesSection/> 
       <ProductsSection/> 
       <SearchProductSection/>
      {/* <FeaturesSection />
      <CaseStudiesSection />
      <TestimonialsSection /> */}
       {/* <AboutSection /> */}
        <ContactSection />
    </>
  );
}