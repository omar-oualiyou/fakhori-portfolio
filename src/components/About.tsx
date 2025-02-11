import React from 'react';
import { Target, Users, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6">About <span className="text-[#C5A572]">Mohammed Fakhouri</span></h2>
          <div className="h-px w-24 bg-[#C5A572] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-8">
              At just 16 years old, Mohammed Fakhouri stands as a testament to young entrepreneurial spirit
              and visionary leadership. As the founder of Fakhouri Holding, he has already made significant
              strides in the luxury hospitality and retail sectors.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="p-8 bg-black text-white rounded-lg">
                <h3 className="text-[#C5A572] text-xl mb-4 font-light">Vision</h3>
                <p className="font-light">Transforming industries through innovation and luxury</p>
              </div>
              <div className="p-8 bg-black text-white rounded-lg">
                <h3 className="text-[#C5A572] text-xl mb-4 font-light">Mission</h3>
                <p className="font-light">Creating exceptional experiences across all ventures</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
              alt="Mohammed Fakhouri"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-[#C5A572] p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-black">16</h3>
              <p className="text-black font-light tracking-wider">YEARS OLD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};