
import React from 'react';
import { Award, Heart, Users, Wheat } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref: leftContentRef, isVisible: isLeftVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
  const { ref: rightContentRef, isVisible: isRightVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  const features = [
    {
      icon: <Wheat className="w-12 h-12 text-primary" />,
      title: "Ingrediente Premium",
      description: "Selectăm doar cele mai fine ingrediente pentru a vă oferi produse de cea mai înaltă calitate și gust exceptional."
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Pasiune pentru Calitate",
      description: "Ne dedicăm să vă oferim cele mai bune produse, proaspete zilnic, pentru o experiență culinară de neuitat."
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "Calitate Garantată",
      description: "Produse proaspete zilnic, fără conservanți sau aditivi artificiali, pentru o experiență culinară autentică."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Echipă Dedicată",
      description: "Echipa noastră este dedicată să vă ofere cea mai bună experiență și să vă servească cu produse de înaltă calitate."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            ref={leftContentRef}
            className={`opacity-0 ${isLeftVisible ? 'animate-slide-in-left' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient font-playfair">
              Povestea Croissanteria
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Croissanteria s-a născut din pasiunea noastră pentru gusturile rafinate și dorința de a aduce 
              Bucureștiului cel mai autentic gust al croissantelor premium.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              În fiecare zi ne asigurăm că primim produse proaspete de cea mai înaltă calitate, 
              selectate cu grijă pentru a vă oferi o experiență culinară memorabilă. 
              Fiecare produs este ales cu atenție pentru gustul și prospețimea sa excepțională.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              De la croissantul clasic până la creațiile noastre gourmet, fiecare produs este selectat 
              cu grijă pentru a vă oferi o experiență delicioasă în fiecare zi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-primary/10 px-6 py-4 rounded-lg">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Ani de experiență</div>
              </div>
              <div className="bg-primary/10 px-6 py-4 rounded-lg">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Clienți mulțumiți</div>
              </div>
              <div className="bg-primary/10 px-6 py-4 rounded-lg">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Produse premium</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div
            ref={rightContentRef}
            className={`opacity-0 ${isRightVisible ? 'animate-slide-in-right' : ''}`}
          >
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`text-center p-6 rounded-2xl bg-gradient-cream hover-lift opacity-0 ${isRightVisible ? 'animate-fade-in' : ''}`}
                  style={{ animationDelay: isRightVisible ? `${index * 0.1}s` : '0s' }}
                >
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground font-playfair">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
