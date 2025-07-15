
import { Phone, MapPin, Clock, Wrench, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="hidden md:block bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-2 text-sm">
            <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-4">
              <div className="flex items-center gap-1 lg:gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-xs lg:text-sm">7/24 Acil Servis</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-xs lg:text-sm">Kocaeli Geneli Hizmet</span>
              </div>
              <div className="flex md:hidden lg:hidden items-center gap-2 font-medium">
                <Phone className="h-4 w-4" />
                <a href="tel:00000000000" className="hover:text-accent transition-colors text-xs lg:text-sm">
                  0000 000 00 00
                </a>
              </div>
            </div>
            <div className="hidden md:flex lg:flex items-center gap-2 font-medium">
              <Phone className="h-4 w-4" />
              <a href="tel:00000000000" className="hover:text-accent transition-colors text-xs lg:text-sm">
                0000 000 00 00
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-2 md:px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 lg:gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center">
              <Wrench className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
            </div>
            <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-primary font-poppins">
              Kocaeli Uzman Tesisatçı
            </h1>
          </a>
          
          <div className="hidden md:flex items-center gap-2 lg:gap-6">
            <nav className="flex gap-2 lg:gap-6">
              <a 
                href="/" 
                className={`text-gray-700 hover:text-primary transition-colors font-medium text-sm lg:text-base relative ${
                  window.location.pathname === '/' ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full' : ''
                }`}
              >
                Ana Sayfa
              </a>
              <div className="relative group">
                <button 
                  className={`flex items-center text-gray-700 hover:text-primary transition-colors font-medium text-sm lg:text-base relative ${
                    window.location.pathname.includes('/su-kacagi') || window.location.pathname.includes('/tikaniklik') || 
                    window.location.pathname.includes('/petek') || window.location.pathname.includes('/musluk') || 
                    window.location.pathname.includes('/klozet') || window.location.pathname.includes('/batarya') || 
                    window.location.pathname.includes('/kombi') || window.location.pathname.includes('/acil') 
                    ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname === '/') {
                      document.getElementById('hizmetler')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#hizmetler';
                    }
                  }}
                >
                  Hizmetlerimiz
                  <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 lg:w-64 bg-white shadow-lg border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-2">
                    <a href="/su-kacagi-tespiti" className="flex items-center px-3 lg:px-4 py-2 lg:py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors text-sm">
                      Su Kaçağı Tespiti
                    </a>
                    <a href="/tikaniklik-acma" className="flex items-center px-3 lg:px-4 py-2 lg:py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors text-sm">
                      Tıkanıklık Açma
                    </a>
                    <a href="/petek-temizligi" className="flex items-center px-3 lg:px-4 py-2 lg:py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors text-sm">
                      Petek Temizliği
                    </a>
                    <a href="/musluk-tamiri" className="flex items-center px-3 lg:px-4 py-2 lg:py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors text-sm">
                      Musluk Tamiri
                    </a>
                    <a href="/klozet-tamiri" className="flex items-center px-3 lg:px-4 py-2 lg:py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors text-sm">
                      Klozet Tamiri
                    </a>
                    <a href="/batarya-degisimi" className="flex items-center px-3 lg:px-4 py-2 lg:py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors text-sm">
                      Batarya Değişimi
                    </a>
                    <a href="/kombi-servisi" className="flex items-center px-3 lg:px-4 py-2 lg:py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors text-sm">
                      Kombi Servisi
                    </a>
                    <a href="/acil-mudahale" className="flex items-center px-3 lg:px-4 py-2 lg:py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors text-sm">
                      Acil Müdahale
                    </a>
                  </div>
                </div>
              </div>
              <a 
                href="/blog" 
                className={`text-gray-700 hover:text-primary transition-colors font-medium text-sm lg:text-base relative ${
                  window.location.pathname === '/blog' || window.location.pathname.includes('/blog') ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full' : ''
                }`}
              >
                Blog
              </a>
              <a 
                href="/galeri" 
                className={`text-gray-700 hover:text-primary transition-colors font-medium text-sm lg:text-base relative ${
                  window.location.pathname === '/galeri' ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full' : ''
                }`}
              >
                Galeri
              </a>
               <a 
                href="/#bolgeler" 
                className="text-gray-700 hover:text-primary transition-colors font-medium text-sm lg:text-base"
                onClick={(e) => {
                  e.preventDefault();
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
                className="text-gray-700 hover:text-primary transition-colors font-medium text-sm lg:text-base"
                onClick={(e) => {
                  e.preventDefault();
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
            
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base"
              onClick={() => window.open('tel:00000000000')}
            >
              <Phone className="mr-1 lg:mr-2 h-4 w-4" />
              <span className="hidden lg:inline">Hemen</span> Ara
            </Button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
