
import { Phone, Clock, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section id="anasayfa" className="bg-primary text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="text-sm font-medium text-accent mb-4 flex items-center">
              <div className="w-12 h-px bg-accent mr-3"></div>
              Profesyonel Tesisat Hizmetleri
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-poppins leading-tight">
              Kocaeli Uzman Tesisatçı
              <br />
              <span className="text-accent">Profesyonel Hizmet</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
              Kocaeli Uzman Tesisatçı olarak, uzman ekibimizle su tesisatı sorunlarınıza çözüm sunuyoruz. 
              Teknolojik donanımımız ve deneyimimizle her zaman yanınızdayız. 
              <strong className="text-accent"> Hızlı, Güvenilir ve Profesyonel</strong> Su Tesisatı Hizmetleri için Doğru Adrestesiniz!
            </p>

            {/* CTA Button */}
            <div className="mb-8 lg:mb-12">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-4 rounded-full w-full sm:w-auto"
                onClick={() => {
                  document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Bilgi Alın
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=700&fit=crop&crop=faces"
                alt="Kocaeli Uzman Tesisat profesyonel teknisyen"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            
            {/* Info Cards - Hidden on mobile and tablet */}
            <div className="hidden xl:block absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-2">
                    Kocaeli Uzman Tesisatçı
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Kocaeli Uzman Tesisatçı olarak hizmette sınır tanımıyor küçük ya da büyük iş gözetmiyor 
                    tamamen müşteri çıkarlarını gözeterek en uygun koşullarla hizmet sunuyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden xl:block absolute top-8 right-8 bg-accent rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <p className="font-bold text-accent-foreground">
                  İşinin ehli bir firmadan<br />
                  profesyonel destek<br />
                  almak sizin de hakkınız.
                </p>
                <Button 
                  size="sm"
                  className="mt-4 bg-primary hover:bg-primary/90 text-white rounded-full"
                  onClick={() => {
                    document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Detaylı Bilgi Alın
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
