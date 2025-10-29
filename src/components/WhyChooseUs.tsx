import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
const benefits = ['Access to exclusive airline partnerships', 'Flexible payment options available', 'Multi-city and complex itinerary specialists', 'Group booking discounts', 'Last-minute booking assistance', 'Flight change and cancellation support'];
export function WhyChooseUs({
  phoneNumber
}: {
  phoneNumber: string;
}) {
  return <div className="w-full py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Service?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              As a trusted affiliate partner of major airlines, we provide
              personalized booking services that save you time and money. Our
              experienced agents handle everything from simple one-way tickets
              to complex multi-destination itineraries.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>)}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Book Your Flight?
            </h3>
            <p className="text-gray-600 mb-6">
              Our travel experts are standing by to help you find the perfect
              flight at the best price.
            </p>
            <div className="bg-blue-600 text-white rounded-xl p-6 text-center">
              <p className="text-sm mb-2">Call us now at</p>
              <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="text-3xl font-bold block mb-4">
                {phoneNumber}
              </a>
              <p className="text-sm text-blue-100">
                Available 24 hours a day, 7 days a week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}