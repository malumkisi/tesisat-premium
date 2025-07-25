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
              <a href="tel:00000000000" className="hover:text-accent transition-colors">
                0000 000 00 00
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
              AFS Web Hizmetleri
            </h1>
          </a>
          
          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              onClick={() => window.open('tel:00000000000')}
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
                className={`text-gray-700 hover:text-primary transition-colors font-medium relative ${
                  window.location.pathname === '/' ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </a>
              
              <div className="border-l-2 border-primary pl-4">
                <p className="text-sm font-medium text-primary mb-2">Hizmetlerimiz</p>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="/su-kacagi-tespiti" className={`transition-colors relative ${
                    window.location.pathname === '/su-kacagi-tespiti' 
                      ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-6 after:h-0.5 after:bg-primary after:rounded-full' 
                      : 'text-gray-600 hover:text-primary'
                  }`} onClick={() => setIsMenuOpen(false)}>Su Kaçağı Tespiti</a>
                  <a href="/tikaniklik-acma" className={`transition-colors relative ${
                    window.location.pathname === '/tikaniklik-acma' 
                      ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-6 after:h-0.5 after:bg-primary after:rounded-full' 
                      : 'text-gray-600 hover:text-primary'
                  }`} onClick={() => setIsMenuOpen(false)}>Tıkanıklık Açma</a>
                  <a href="/petek-temizligi" className={`transition-colors relative ${
                    window.location.pathname === '/petek-temizligi' 
                      ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-6 after:h-0.5 after:bg-primary after:rounded-full' 
                      : 'text-gray-600 hover:text-primary'
                  }`} onClick={() => setIsMenuOpen(false)}>Petek Temizliği</a>
                  <a href="/musluk-tamiri" className={`transition-colors relative ${
                    window.location.pathname === '/musluk-tamiri' 
                      ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-6 after:h-0.5 after:bg-primary after:rounded-full' 
                      : 'text-gray-600 hover:text-primary'
                  }`} onClick={() => setIsMenuOpen(false)}>Musluk Tamiri</a>
                  <a href="/klozet-tamiri" className={`transition-colors relative ${
                    window.location.pathname === '/klozet-tamiri' 
                      ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-6 after:h-0.5 after:bg-primary after:rounded-full' 
                      : 'text-gray-600 hover:text-primary'
                  }`} onClick={() => setIsMenuOpen(false)}>Klozet Tamiri</a>
                  <a href="/batarya-degisimi" className={`transition-colors relative ${
                    window.location.pathname === '/batarya-degisimi' 
                      ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-6 after:h-0.5 after:bg-primary after:rounded-full' 
                      : 'text-gray-600 hover:text-primary'
                  }`} onClick={() => setIsMenuOpen(false)}>Batarya Değişimi</a>
                  <a href="/kombi-servisi" className={`transition-colors relative ${
                    window.location.pathname === '/kombi-servisi' 
                      ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-6 after:h-0.5 after:bg-primary after:rounded-full' 
                      : 'text-gray-600 hover:text-primary'
                  }`} onClick={() => setIsMenuOpen(false)}>Kombi Servisi</a>
                  <a href="/acil-mudahale" className={`transition-colors relative ${
                    window.location.pathname === '/acil-mudahale' 
                      ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-6 after:h-0.5 after:bg-primary after:rounded-full' 
                      : 'text-gray-600 hover:text-primary'
                  }`} onClick={() => setIsMenuOpen(false)}>Acil Müdahale</a>
                </div>
              </div>
              
              <a 
                href="/blog" 
                className={`text-gray-700 hover:text-primary transition-colors font-medium relative ${
                  window.location.pathname === '/blog' || window.location.pathname.includes('/blog') ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a 
                href="/galeri" 
                className={`text-gray-700 hover:text-primary transition-colors font-medium relative ${
                  window.location.pathname === '/galeri' ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full' : ''
                }`}
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