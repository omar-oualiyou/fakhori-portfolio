import React from 'react';
import { Target, Users, Award } from 'lucide-react';

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Our <span className="text-[#C5A572]">Vision</span></h2>
          <div className="h-px w-24 bg-[#C5A572] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg leading-relaxed mb-12 font-light">
              Fakhouri Holding aspires to become a major player in the world of luxury and innovation,
              while establishing privileged relationships with prestigious partners, including the royal family.
            </p>
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <Target className="w-12 h-12 text-[#C5A572] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-light mb-4">Strategic Growth</h3>
                  <p className="text-gray-600 font-light">Expanding our presence in key luxury markets globally.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <Users className="w-12 h-12 text-[#C5A572] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-light mb-4">Partnership Network</h3>
                  <p className="text-gray-600 font-light">Building strong relationships with industry leaders.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <Award className="w-12 h-12 text-[#C5A572] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-light mb-4">Excellence Standard</h3>
                  <p className="text-gray-600 font-light">Setting new benchmarks in luxury and service.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
              alt="Luxury Hotel"
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?auto=format&fit=crop&q=80"
              alt="Luxury Interior"
              className="rounded-lg shadow-lg mt-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};