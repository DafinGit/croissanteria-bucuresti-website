
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-playfair text-primary">
              Croissanteria
            </h3>
            <p className="text-background/80 mb-4 leading-relaxed">
              Brutăria artizanală care aduce gustul autentic al Franței în inima Bucureștiului. 
              Croissante proaspete în fiecare zi.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-primary/20 hover:bg-primary p-2 rounded-full transition-all duration-300"
              >
                <Instagram size={20} className="text-primary hover:text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="bg-primary/20 hover:bg-primary p-2 rounded-full transition-all duration-300"
              >
                <Facebook size={20} className="text-primary hover:text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  Strada Amzei nr. 15<br />Sector 1, București
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a 
                  href="tel:+40721234567" 
                  className="text-background/80 text-sm hover:text-primary transition-colors"
                >
                  +40 721 234 567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a 
                  href="mailto:hello@croissanteria.ro" 
                  className="text-background/80 text-sm hover:text-primary transition-colors"
                >
                  hello@croissanteria.ro
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Program</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-primary flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  <div>Luni - Vineri: 7:00 - 20:00</div>
                  <div>Sâmbătă: 8:00 - 21:00</div>
                  <div>Duminică: 8:00 - 19:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Navigare</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/80 text-sm hover:text-primary hover:underline decoration-primary underline-offset-4 transition-colors"
              >
                Acasă
              </button>
              <button 
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/80 text-sm hover:text-primary hover:underline decoration-primary underline-offset-4 transition-colors"
              >
                Meniu
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/80 text-sm hover:text-primary hover:underline decoration-primary underline-offset-4 transition-colors"
              >
                Despre Noi
              </button>
              <button 
                onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/80 text-sm hover:text-primary hover:underline decoration-primary underline-offset-4 transition-colors"
              >
                Locație
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/80 text-sm hover:text-primary hover:underline decoration-primary underline-offset-4 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/80 text-sm">
              © 2024 Croissanteria. Toate drepturile rezervate.
            </p>
            <div className="flex items-center gap-1 text-sm text-background/80">
              <span>Creat cu</span>
              <Heart size={16} className="text-primary fill-current" />
              <span>în București</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
