import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Destinations } from './components/Destinations';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';

export function App() {
  // Easily customize the phone number here
  const phoneNumber = '+1-888-291-6115';
  return (
    <>
      <SEO />
      <div className="w-full min-h-screen bg-white">
        <Header phoneNumber={phoneNumber} />
        <Hero phoneNumber={phoneNumber} />
        <div id="features">
          <Features />
        </div>
        <HowItWorks phoneNumber={phoneNumber} />
        <div id="destinations">
          <Destinations />
        </div>
        
        <WhyChooseUs phoneNumber={phoneNumber} />
        <Footer phoneNumber={phoneNumber} />
      </div>
    </>
  );
}
