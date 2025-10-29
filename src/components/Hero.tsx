import React from 'react';
import { PhoneIcon, ClockIcon } from 'lucide-react';
export function Hero({
  phoneNumber
}: {
  phoneNumber: string;
}) {
  return <div className="w-full relative bg-gradient-to-br from-blue-600 to-blue-800 text-white pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} role="img" aria-label="Airplane flying above clouds at sunset - Book cheap flights with Easy Bookings">
        {/* Lighter overlay for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-blue-800/60" />
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
            Book Your Flight with Just a Call
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100 drop-shadow-md">
            Expert assistance for the best air ticket deals worldwide
          </p>
          <div className="bg-white text-gray-900 rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <PhoneIcon className="w-8 h-8 text-blue-600" />
              <span className="text-3xl sm:text-4xl font-bold text-blue-600">
                {phoneNumber}
              </span>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Call now to speak with our travel experts
            </p>
            <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Call Now to Book
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-blue-100 drop-shadow-md">
            <ClockIcon className="w-5 h-5" />
            <span>Available 24/7 for your convenience</span> 
          </div>
        </div>
      </div>
    </div>;
}
