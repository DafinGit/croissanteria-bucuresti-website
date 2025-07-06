
import React from 'react';
import { Clock, Star } from 'lucide-react';

const MenuSection = () => {
  const menuItems = [
    {
      category: "Croissante Clasice",
      items: [
        {
          name: "Croissant Clasic",
          description: "Croissant tradițional francez, crocant la exterior și pufos la interior",
          price: "8 RON",
          popular: true
        },
        {
          name: "Croissant cu Ciocolată",
          description: "Croissant umplut cu ciocolată belgiană de înaltă calitate",
          price: "12 RON",
          popular: true
        },
        {
          name: "Croissant cu Migdale",
          description: "Croissant acoperit cu fulgi de migdale și glazură dulce",
          price: "14 RON",
          popular: false
        }
      ]
    },
    {
      category: "Croissante Gourmet",
      items: [
        {
          name: "Croissant cu Somon Afumat",
          description: "Croissant umplut cu somon afumat, cremă de brânză și mărar",
          price: "22 RON",
          popular: true
        },
        {
          name: "Croissant cu Șuncă și Brânză",
          description: "Croissant cald cu șuncă de Parma și brânză Gruyère",
          price: "18 RON",
          popular: false
        },
        {
          name: "Croissant Vegan",
          description: "Croissant vegan cu umplutură de legume și avocado",
          price: "16 RON",
          popular: false
        }
      ]
    },
    {
      category: "Cafea & Băuturi",
      items: [
        {
          name: "Espresso",
          description: "Cafea espresso perfect extrasă din boabe de cea mai bună calitate",
          price: "8 RON",
          popular: true
        },
        {
          name: "Cappuccino",
          description: "Espresso cu spumă de lapte și pudră de cacao",
          price: "12 RON",
          popular: true
        },
        {
          name: "Latte cu Aromă",
          description: "Cafea latte cu sirop de vanilie, caramel sau ciocolată",
          price: "15 RON",
          popular: false
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Meniul Nostru
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descoperă o selecție rafinată de croissante premium și băuturi de calitate, 
            preparate zilnic cu ingrediente de cea mai înaltă calitate
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((category, categoryIndex) => (
            <div 
              key={category.category} 
              className="bg-white rounded-2xl shadow-lg p-8 hover-lift animate-slide-in-left"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary font-playfair">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-lg text-foreground">
                          {item.name}
                        </h4>
                        {item.popular && (
                          <Star size={16} className="text-primary fill-current" />
                        )}
                      </div>
                      <span className="text-primary font-bold text-lg">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 inline-block">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Clock size={20} />
              <span className="font-semibold">Program: Luni - Duminică, 7:00 - 20:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
