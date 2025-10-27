import React from 'react';
import { PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
export function Footer() {
  return <footer className="w-full bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-blue-400" />
                <a href="tel:+18882916115" className="text-lg hover:text-blue-400 transition-colors">
                  (888) 291-6115
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-blue-400" />
                <a href="mailto:support@easybookings.us" className="hover:text-blue-400 transition-colors">
                  support@easybookings.us
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon className="w-5 h-5 text-blue-400" />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Special Offers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Travel Insurance
                </a>
              </li>
            </ul>
          </div>
          {/* CTA */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Ready to Fly?</h3>
            <p className="text-gray-300 mb-6">
              Call us now and let our travel experts help you find the perfect
              flight at the best price.
            </p>
            <a href="tel:+18882916115" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors">
              Call (888) 291-6115
            </a>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2024 EasyBookings. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}
