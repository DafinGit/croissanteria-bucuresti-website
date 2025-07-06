
import React, { useState } from 'react';
import { Send, MessageCircle, Star } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Mesajul a fost trimis cu succes! Vă vom contacta în curând.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const testimonials = [
    {
      name: "Maria Popescu",
      rating: 5,
      comment: "Cei mai buni croissante din București! Vin aici în fiecare dimineață pentru cafeaua și croissantul cu ciocolată."
    },
    {
      name: "Alexandru Ionescu",
      rating: 5,
      comment: "Calitate excepțională și personal foarte amabil. Croissantele sunt proaspete și delicioase în fiecare zi."
    },
    {
      name: "Ana Dumitru",
      rating: 5,
      comment: "Atmosferă foarte plăcută și produse artizanale de top. Recomand cu încredere!"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Contactează-ne
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ai o întrebare sau vrei să faci o comandă specială? Suntem aici să te ajutăm!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="bg-gradient-cream rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-primary font-playfair">
                  Trimite-ne un Mesaj
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Nume Complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Numele tău"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="+40 721 234 567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="email@exemplu.ro"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Scrie-ne mesajul tău aici..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover-lift flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Trimite Mesajul
                </button>
              </form>
            </div>
          </div>

          {/* Testimonials */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-8 text-primary font-playfair">
              Ce Spun Clienții Noștri
            </h3>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="flex text-primary">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">
                      {testimonial.rating}/5
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  
                  <div className="font-semibold text-foreground">
                    - {testimonial.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary/10 rounded-2xl p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-2 font-playfair">
                Comandă prin Telefon
              </h4>
              <p className="text-muted-foreground mb-4">
                Pentru comenzi urgente sau evenimente speciale
              </p>
              <a
                href="tel:+40721234567"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                <MessageCircle size={20} />
                +40 721 234 567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
