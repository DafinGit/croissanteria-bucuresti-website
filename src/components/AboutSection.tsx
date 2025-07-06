
import React from 'react';
import { Award, Heart, Users, Wheat } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Wheat className="w-12 h-12 text-primary" />,
      title: "Ingrediente Premium",
      description: "Folosim doar cele mai fine ingrediente: unt francez, făină organică și condimente naturale pentru un gust autentic."
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Pasiune Artizanală",
      description: "Fiecare croissant este modelat manual cu dragoste și atenție la detalii, respectând tehnicile tradiționale franceze."
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "Calitate Garantată",
      description: "Producem zilnic proaspăt, fără conservanți sau aditivi artificiali, pentru o experiență culinară autentică."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Echipă Expertă",
      description: "Brutarii noștri au fost instruiți în tehnicile clasice franceze și aduc ani de experiență în arta patiseriei."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient font-playfair">
              Povestea Croissanteria
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Croissanteria s-a născut din pasiunea noastră pentru arta patiseriei franceze și dorința de a aduce 
              Bucureștiului cel mai autentic gust al croissantelor artizanale.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              În fiecare dimineață, brutarii noștri încep lucrul înainte de răsărit pentru a pregăti aluatul perfect, 
              folosind tehnici tradiționale transmise din generație în generație. Rezultatul? Croissante cu o coajă 
              crocantă și un interior pufos, care îți vor trezi toate simțurile.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              De la croissantul clasic până la creațiile noastre gourmet, fiecare produs este o mică operă de artă 
              culinară, gândită să îți ofere o experiență memorabilă în fiecare zi.
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
                <div className="text-sm text-muted-foreground">Produse artizanale</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="animate-slide-in-right">
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-2xl bg-gradient-cream hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
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
