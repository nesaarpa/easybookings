import React from 'react';
import { PlaneIcon, DollarSignIcon, HeadphonesIcon, ShieldCheckIcon } from 'lucide-react';
export function Features() {
  const features = [{
    icon: PlaneIcon,
    title: 'Instant Flight Booking',
    description: 'Book your flight in minutes with our expert travel agents ready to assist you.'
  }, {
    icon: DollarSignIcon,
    title: 'Best Price Guarantee',
    description: 'We compare hundreds of airlines to find you the most competitive rates available.'
  }, {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Our dedicated team is available around the clock to help with any travel needs.'
  }, {
    icon: ShieldCheckIcon,
    title: 'Secure & Trusted',
    description: 'Your personal information and payment details are always protected and secure.'
  }];
  return <div className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Book With Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience hassle-free travel booking with personalized service and
            unbeatable deals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </div>;
}