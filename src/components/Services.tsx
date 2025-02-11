import React from 'react';
import { Hotel, ShoppingBag, Building2 } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Our <span className="text-[#C5A572]">Services</span></h2>
          <div className="h-px w-24 bg-[#C5A572] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white p-10 rounded-lg transform hover:scale-105 transition-transform">
            <Hotel className="w-16 h-16 text-[#C5A572] mb-8" />
            <h3 className="text-2xl font-light mb-4">Luxury Hotels</h3>
            <p className="text-gray-600 font-light">Exclusive hotels combining elegance with innovative hospitality experiences.</p>
          </div>
          <div className="bg-white p-10 rounded-lg transform hover:scale-105 transition-transform">
            <ShoppingBag className="w-16 h-16 text-[#C5A572] mb-8" />
            <h3 className="text-2xl font-light mb-4">Retail Brands</h3>
            <p className="text-gray-600 font-light">Curated luxury retail experiences and personalized products.</p>
          </div>
          <div className="bg-white p-10 rounded-lg transform hover:scale-105 transition-transform">
            <Building2 className="w-16 h-16 text-[#C5A572] mb-8" />
            <h3 className="text-2xl font-light mb-4">Real Estate</h3>
            <p className="text-gray-600 font-light">Premium real estate development and investment opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};