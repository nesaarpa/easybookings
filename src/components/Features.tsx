import React from 'react';
import { HeadphonesIcon, DollarSignIcon, ShieldCheckIcon, ClockIcon } from 'lucide-react';
const features = [{
  icon: HeadphonesIcon,
  title: 'Expert Assistance',
  description: 'Speak directly with experienced travel agents who understand your needs'
}, {
  icon: DollarSignIcon,
  title: 'Best Prices',
  description: 'Access to exclusive deals and competitive rates on all major airlines'
}, {
  icon: ShieldCheckIcon,
  title: 'Secure Booking',
  description: 'Safe and secure payment processing with full booking protection'
}, {
  icon: ClockIcon,
  title: '24/7 Support',
  description: 'Round-the-clock customer service for all your travel emergencies'
}];
export function Features() {
  return <div className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Book Over the Phone?
          </h2>
          <p className="text-xl text-gray-600">
            Personalized service that makes your travel planning effortless
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </div>;
}