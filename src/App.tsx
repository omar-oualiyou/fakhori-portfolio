import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Vision } from './components/Vision';
import { Contact } from './components/Contact';
import { useMenu } from './hooks/useMenu';

function App() {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();

  return (
    <div className="min-h-screen bg-black">
      <Navigation 
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />
      <Hero />
      <About />
      <Services />
      <Vision />
      <Contact />
    </div>
  );
}

export default App;