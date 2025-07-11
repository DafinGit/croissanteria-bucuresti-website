
import React from 'react';
import { ArrowDown } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { ref: heroContentRef, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div
          ref={heroContentRef}
          className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
            Croissanteria
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
            Descoperă gustul autentic al croissantelor premium în inima Bucureștiului
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Produse de cea mai înaltă calitate, proaspete zilnic, pentru o experiență culinară de neuitat
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToMenu}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover-lift active:scale-95"
            >
              Vezi Meniul Nostru
            </button>
            <a
              href="tel:+40721234567"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-foreground transition-all duration-300 active:scale-95"
            >
              Comandă Acum
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
