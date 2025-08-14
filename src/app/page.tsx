"use client";
import React from 'react'
import Herosection from './sections/hero-section';
import Showcase from './sections/showcase';
import AnimatedStats from './sections/animated-stats';
import HowItWorks from './sections/howitworks';
import FAQSection from './sections/faq';
import CTASection from './sections/CTA';
import Footer from './sections/footer-section';
import { SmoothCursor } from "@/components/ui/smooth-cursor"; // Adjust the path as necessary
import SelectedProjects from './sections/SelectedProjects';
import About from './sections/About';
import SmoothScroll from '@/components/ui/SmoothScroll';


function Page() { // Capitalized for React best practices
  return (
    <div className="bg-black">
      <SmoothCursor />
      <SmoothScroll>
      <Herosection />
      <Showcase />
      <AnimatedStats />
      <HowItWorks />
      <SelectedProjects />
      <About />
      <FAQSection />
      <CTASection />
      <Footer />
      </SmoothScroll>

    </div>
  )
}

export default Page;
