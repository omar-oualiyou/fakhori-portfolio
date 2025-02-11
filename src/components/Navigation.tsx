import React from 'react';
import { Menu, X, Instagram, Linkedin, Facebook } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, toggleMenu, closeMenu }) => {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-[#C5A572]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="logo-text text-2xl font-light tracking-[0.2em] italic">
            <span className="text-[#C5A572] font-medium">FAKHOURI</span>
          </div>
          <div className="hidden md:flex space-x-12">
            <a href="#about" className="text-white hover:text-[#C5A572] transition-colors text-sm tracking-wider">ABOUT</a>
            <a href="#services" className="text-white hover:text-[#C5A572] transition-colors text-sm tracking-wider">SERVICES</a>
            <a href="#vision" className="text-white hover:text-[#C5A572] transition-colors text-sm tracking-wider">VISION</a>
            <a href="#contact" className="text-white hover:text-[#C5A572] transition-colors text-sm tracking-wider">CONTACT</a>
          </div>
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-[#C5A572] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-y-0 right-0 w-full bg-black transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
        style={{ top: '96px' }}
      >
        <div className="px-4 py-6 space-y-8 h-full flex flex-col">
          <a 
            href="#about" 
            onClick={closeMenu}
            className="text-white hover:text-[#C5A572] transition-colors text-2xl tracking-wider font-light border-b border-[#C5A572]/20 pb-4"
          >
            ABOUT
          </a>
          <a 
            href="#services" 
            onClick={closeMenu}
            className="text-white hover:text-[#C5A572] transition-colors text-2xl tracking-wider font-light border-b border-[#C5A572]/20 pb-4"
          >
            SERVICES
          </a>
          <a 
            href="#vision" 
            onClick={closeMenu}
            className="text-white hover:text-[#C5A572] transition-colors text-2xl tracking-wider font-light border-b border-[#C5A572]/20 pb-4"
          >
            VISION
          </a>
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="text-white hover:text-[#C5A572] transition-colors text-2xl tracking-wider font-light border-b border-[#C5A572]/20 pb-4"
          >
            CONTACT
          </a>
          
          <div className="mt-auto pb-8">
            <h3 className="text-[#C5A572] text-lg mb-4 font-light tracking-wider">FOLLOW US</h3>
            <div className="flex space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C5A572] transition-colors">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C5A572] transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C5A572] transition-colors">
                <Facebook className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};