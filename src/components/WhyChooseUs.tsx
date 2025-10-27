import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
export function WhyChooseUs() {
  const benefits = ['Access to exclusive airline deals and discounts', 'Personalized travel recommendations from experts', 'Flexible booking options for changes and cancellations', 'Group booking discounts for families and businesses', 'Multi-city and complex itinerary specialists', 'Last-minute flight booking assistance'];
  return <div className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80" alt="Travel agent helping customer" className="w-full h-full object-cover" />
          </div>
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our dedicated team of travel professionals is committed to making
              your journey seamless from start to finish.
            </p>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>)}
            </div>
            <a href="tel:8882916115" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold px-8 py-4 rounded-lg transition-colors">
              Call (888) 291-6115 Now
            </a>
          </div>
        </div>
      </div>
    </div>;
}