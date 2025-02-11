import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <div className="text-center mb-12">
          <div className="logo-text text-7xl md:text-8xl lg:text-9xl font-light mb-6">
            <span className="block text-[#C5A572] font-medium tracking-[0.2em]">FAKHOURI</span>
            <span className="block text-white text-4xl md:text-5xl tracking-[0.5em] mt-4">HOLDING</span>
          </div>
          <div className="h-px w-24 bg-[#C5A572] mx-auto my-8"></div>
          <p className="text-xl md:text-2xl tracking-[0.2em] font-light">LUXURY & INNOVATION</p>
        </div>
        <ChevronDown className="w-8 h-8 animate-bounce text-[#C5A572] absolute bottom-12" />
      </div>
    </div>
  );
};