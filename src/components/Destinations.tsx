import React from 'react';
import { PlaneIcon } from 'lucide-react';
const destinations = [{
  city: 'New York',
  country: 'USA',
  image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80'
}, {
  city: 'London',
  country: 'UK',
  image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80'
}, {
  city: 'Tokyo',
  country: 'Japan',
  image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80'
}, {
  city: 'Paris',
  country: 'France',
  image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80'
}];
export function Destinations() {
  return <div className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600">
            Call us to book flights to these amazing destinations and more
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <img src={destination.image} alt={`Book cheap flights to ${destination.city}, ${destination.country} - ${destination.city} skyline and landmarks`} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {destination.city}
                </h3>
                <p className="text-white/90 mb-2">{destination.country}</p>
               
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}