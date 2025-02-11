import React from 'react';
import { Mail, Globe, Instagram, Linkedin, Facebook, Briefcase } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Get in <span className="text-[#C5A572]">Touch</span></h2>
          <div className="h-px w-24 bg-[#C5A572] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-light mb-12">Contact Information</h3>
            <div className="space-y-8">
              <a href="mailto:contact@fakhoriholding.com" className="flex items-center gap-6 hover:text-[#C5A572] transition-colors">
                <Mail className="w-8 h-8" />
                <span className="font-light tracking-wider">contact@fakhoriholding.com</span>
              </a>
              <a href="https://fakhoriholding.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 hover:text-[#C5A572] transition-colors">
                <Globe className="w-8 h-8" />
                <span className="font-light tracking-wider">fakhoriholding.com</span>
              </a>
            </div>
            
            <h3 className="text-2xl font-light mt-16 mb-12">Follow Us</h3>
            <div className="flex space-x-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C5A572] transition-colors">
                <Instagram className="w-10 h-10" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C5A572] transition-colors">
                <Linkedin className="w-10 h-10" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C5A572] transition-colors">
                <Facebook className="w-10 h-10" />
              </a>
            </div>
          </div>
          <div className="bg-white/10 p-12 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-light mb-8">Business Inquiries</h3>
            <p className="text-lg mb-8 font-light leading-relaxed">
              For partnership opportunities and business inquiries, please reach out to our team.
              We're always looking to connect with visionary individuals and organizations.
            </p>
            <div className="flex items-center gap-4 text-[#C5A572]">
              <Briefcase className="w-8 h-8" />
              <span className="font-light tracking-wider">Partnerships & Collaborations Welcome</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/20 text-center">
        <p className="text-sm text-gray-400 tracking-wider font-light">
          © 2024 FAKHOURI HOLDING. ALL RIGHTS RESERVED by omar oualiyouddine .
        </p>
      </div>
    </section>
  );
};