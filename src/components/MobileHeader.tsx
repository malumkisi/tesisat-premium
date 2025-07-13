import { useState } from "react";
import { Phone, MapPin, Clock, Wrench, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="md:hidden bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>7/24 Acil Servis</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:05321234567" className="hover:text-accent transition-colors">
                0532 123 45 67
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Wrench className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-lg font-bold text-primary font-poppins">
              Kocaeli Uzman Tesisatçı
            </h1>
          </a>
          
          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              onClick={() => window.open('tel:05321234567')}
            >
              <Phone className="mr-1 h-4 w-4" />
              ARA
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 pb-4 border-t pt-4 animate-slide-in-right">
            <nav className="flex flex-col gap-4">
              <a 
                href="/" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </a>
              
              <div className="border-l-2 border-primary pl-4">
                <p className="text-sm font-medium text-primary mb-2">Hizmetlerimiz</p>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="/su-kacagi-tespiti" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Su Kaçağı Tespiti</a>
                  <a href="/tikaniklik-acma" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Tıkanıklık Açma</a>
                  <a href="/petek-temizligi" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Petek Temizliği</a>
                  <a href="/musluk-tamiri" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Musluk Tamiri</a>
                  <a href="/klozet-tamiri" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Klozet Tamiri</a>
                  <a href="/batarya-degisimi" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Batarya Değişimi</a>
                  <a href="/kombi-servisi" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Kombi Servisi</a>
                  <a href="/acil-mudahale" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Acil Müdahale</a>
                </div>
              </div>
              
              <a 
                href="/blog" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a 
                href="/galeri" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Galeri
              </a>
              <a 
                href="/#bolgeler" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  if (window.location.pathname === '/') {
                    document.getElementById('bolgeler')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#bolgeler';
                    setTimeout(() => {
                      document.getElementById('bolgeler')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
              >
                Hizmet Bölgeleri
              </a>
              <a 
                href="/#iletisim" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  if (window.location.pathname === '/') {
                    document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#iletisim';
                    setTimeout(() => {
                      document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
              >
                İletişim
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default MobileHeader;