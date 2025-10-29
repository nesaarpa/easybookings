import React from 'react';
import { PhoneCallIcon, CalendarCheckIcon, PlaneIcon } from 'lucide-react';
const steps = [{
  icon: PhoneCallIcon,
  title: 'Call Us',
  description: 'Speak directly with our travel experts who will understand your travel needs and preferences.'
}, {
  icon: CalendarCheckIcon,
  title: 'Get Options',
  description: "We'll search across multiple airlines to find the best flight options and prices for your journey."
}, {
  icon: PlaneIcon,
  title: 'Book & Fly',
  description: 'Confirm your booking over the phone and receive all details instantly via email or text.'
}];
export function HowItWorks({
  phoneNumber
}: {
  phoneNumber: string;
}) {
  return <div id="how-it-works" className="w-full py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Booking your flight with us is quick and easy. Our process is
            designed to save you time and find you the best deals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-colors">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-blue-100">{step.description}</p>
              {index === 0 && <a href={`tel:+${phoneNumber.replace(/\D/g, '')}`} className="mt-6 inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Start Here
                </a>}
            </div>)}
        </div>
        <div className="text-center">
          <p className="text-xl mb-6">
            Ready to book your next flight? Our travel experts are waiting for
            your call.
          </p>
          <a href={`tel:+${phoneNumber.replace(/\D/g, '')}`} className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
            Call {phoneNumber} Now
          </a>
        </div>
      </div>
    </div>;
}
