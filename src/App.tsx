import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-white">
      <Hero />
      <Features />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>;
}