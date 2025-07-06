
import React, { useState } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-gradient font-playfair">
              Croissanteria
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Acasă
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Meniu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Despre Noi
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Locație
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-all duration-200 active:scale-95"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 active:scale-95"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } overflow-y-auto`}
        >
          <div className="p-6 pt-20"> {/* Add padding top to be below the fixed header */}
            <nav className="flex flex-col space-y-6">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-lg text-foreground hover:text-primary transition-colors duration-200 active:scale-95"
              >
                Acasă
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-left text-lg text-foreground hover:text-primary transition-colors duration-200 active:scale-95"
              >
                Meniu
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-lg text-foreground hover:text-primary transition-colors duration-200 active:scale-95"
              >
                Despre Noi
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-left text-lg text-foreground hover:text-primary transition-colors duration-200 active:scale-95"
              >
                Locație
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-200 w-fit active:scale-95 text-lg"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
        {/* Overlay for when menu is open */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/30 z-30"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
