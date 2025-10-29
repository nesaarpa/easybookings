import React, { useEffect, useState } from 'react';
import { PhoneIcon } from 'lucide-react';
export function Header({
  phoneNumber
}: {
  phoneNumber: string;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/favicon.svg" 
              alt="Easy Bookings Logo" 
              className="w-10 h-10"
            />
            <span className={`font-bold text-xl ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              Easy Bookings
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
              Why Call
            </a>
            <a href="#how-it-works" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
              How It Works
            </a>
             <a href="#destinations" className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
              Destinations
            </a>
          </nav>
          <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-blue-50'}`}>
            <PhoneIcon className="w-4 h-4" />
            <span className="font-medium">Call Now</span>
          </a>
        </div>
      </div>
    </header>;
}