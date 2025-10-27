import React from 'react';
import { PhoneIcon, ClockIcon } from 'lucide-react';
export function Hero() {
  return <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80)'
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl drop-shadow-lg">
          Your Journey Begins With One Call
        </h1>
        <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl drop-shadow-lg">
          Expert flight booking assistance available 24/7. Get the best deals on
          domestic and international flights.
        </p>
        {/* Main CTA */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl w-full">
          <div className="flex items-center justify-center gap-3 mb-4">
            <PhoneIcon className="w-8 h-8 text-blue-600" />
            <p className="text-gray-700 text-lg font-medium">
              Call Now for Instant Booking
            </p>
          </div>
          <a href="tel:8882916115" className="block text-5xl md:text-6xl font-bold text-blue-600 hover:text-blue-700 transition-colors mb-6">
            (888) 291-6115
          </a>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <ClockIcon className="w-5 h-5" />
            <span className="text-sm">
              Available 24/7 • Speak to a Travel Expert Now
            </span>
          </div>
        </div>
        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white text-sm drop-shadow-lg">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold">10,000+</p>
            <p>Happy Travelers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold">24/7</p>
            <p>Customer Support</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold">500+</p>
            <p>Airlines Partners</p>
          </div>
        </div>
      </div>
    </div>;
}