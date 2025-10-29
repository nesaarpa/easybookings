import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
export function Footer({
  phoneNumber
}: {
  phoneNumber: string;
}) {
  return <footer className="w-full bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
          <img 
            src="/favicon.svg" 
            alt="Easy Bookings Logo" 
            className="w-12 h-12"
          />
          <span className="text-2xl font-bold">Easy Bookings</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-blue-400" />
                <a href={`tel:+${phoneNumber.replace(/\D/g, '')}`} className="hover:text-blue-400 transition-colors">
                  {phoneNumber}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-blue-400" />
                <a href="mailto:contact@easybookings.us" className="hover:text-blue-400 transition-colors">
                  contact@easybookings.us
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Travel Street, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Why Call
                </a>
              </li>
              <li>
                <a href="#destinations" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="text-gray-300 space-y-2">
              <p className="font-semibold text-white">24/7 Phone Support</p>
              <p>Monday - Sunday</p>
              <p>All day, every day</p>
              <p className="text-sm text-blue-400 mt-4">
                Emergency bookings available anytime
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Easy Bookings. All rights reserved.</p>
          <p className="text-sm mt-2">
            Professional flight booking service - Available 24/7
          </p>
        </div>
      </div>
    </footer>;
}
