
import React from 'react';
import { MapPin, Clock, Phone, Mail, Car, Train } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Vino să Ne Vizitezi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Te așteptăm în inima Bucureștiului pentru cea mai bună experiență cu croissante artizanale
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location Info */}
          <div className="animate-slide-in-left">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary font-playfair">
                Informații de Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Adresa</h4>
                    <p className="text-muted-foreground">
                      Strada Amzei nr. 15<br />
                      Sector 1, București 010452<br />
                      România
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Program</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Luni - Vineri: 7:00 - 20:00</p>
                      <p>Sâmbătă: 8:00 - 21:00</p>
                      <p>Duminică: 8:00 - 19:00</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                    <a 
                      href="tel:+40721234567" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      +40 721 234 567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a 
                      href="mailto:hello@croissanteria.ro" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      hello@croissanteria.ro
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-foreground mb-4">Cum să ajungi la noi</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Train className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground text-sm">
                      Metrou: Stația Piața Amzei (linia M2) - 2 minute pe jos
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground text-sm">
                      Parcare disponibilă în zona Amzei
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-2xl shadow-lg p-4 h-full">
              <div className="w-full h-96 lg:h-full min-h-[400px] bg-gray-200 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.0625425859614!2d26.094647!3d44.4443915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff6c0c7bd895%3A0x9e2d1b7a8b9b0c4e!2sStrada%20Amzei%2015%2C%20Bucure%C8%99ti%2C%20Romania!5e0!3m2!1sen!2sro!4v1647950000000!5m2!1sen!2sro"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locația Croissanteria"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
