import React from 'react';
import { StarIcon } from 'lucide-react';
export function Testimonials() {
  const testimonials = [{
    name: 'Sarah Johnson',
    location: 'New York, NY',
    text: 'The agent I spoke with was incredibly helpful and found me a flight $200 cheaper than what I found online. Highly recommend calling them!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80'
  }, {
    name: 'Michael Chen',
    location: 'Los Angeles, CA',
    text: 'Booked a last-minute international flight and they made it so easy. The customer service was outstanding and they handled everything professionally.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80'
  }, {
    name: 'Emily Rodriguez',
    location: 'Miami, FL',
    text: 'I have been using their service for years. They always find the best deals and the 24/7 support is a lifesaver when travel plans change.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80'
  }];
  return <div className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied travelers who trust us with their
            journeys
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}