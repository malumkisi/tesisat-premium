
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
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7/24 Acil Servis</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Kocaeli Geneli Hizmet</span>
              </div>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <Phone className="h-4 w-4" />
              <a href="tel:05321234567" className="hover:text-accent transition-colors">
                0532 123 45 67
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-primary font-poppins">
              Kocaeli Uzman Tesisatçı
            </h1>
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6">
              <a 
                href="/" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Ana Sayfa
              </a>
              <div className="relative group">
                <a href="/#hizmetler" className="flex items-center text-gray-700 hover:text-primary transition-colors font-medium"
                   onClick={(e) => {
                     e.preventDefault();
                     if (window.location.pathname === '/') {
                       document.getElementById('hizmetler')?.scrollIntoView({ behavior: 'smooth' });
                     } else {
                       window.location.href = '/#hizmetler';
                     }
                   }}>
                  Hizmetlerimiz
                  <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform" />
                </a>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-2">
                    <a href="/su-kacagi-tespiti" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors">
                      Su Kaçağı Tespiti
                    </a>
                    <a href="/tikaniklik-acma" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors">
                      Tıkanıklık Açma
                    </a>
                    <a href="/petek-temizligi" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors">
                      Petek Temizliği
                    </a>
                    <a href="/musluk-tamiri" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors">
                      Musluk Tamiri
                    </a>
                    <a href="/klozet-tamiri" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors">
                      Klozet Tamiri
                    </a>
                    <a href="/batarya-degisimi" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors">
                      Batarya Değişimi
                    </a>
                    <a href="/kombi-servisi" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors">
                      Kombi Servisi
                    </a>
                    <a href="/acil-mudahale" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors">
                      Acil Müdahale
                    </a>
                  </div>
                </div>
              </div>
              <a 
                href="/blog" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Blog
              </a>
              <a 
                href="/galeri" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Galeri
              </a>
               <a 
                href="/#bolgeler" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
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
                className="text-gray-700 hover:text-primary transition-colors font-medium"
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
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 rounded-full"
              onClick={() => window.open('tel:05321234567')}
            >
              <Phone className="mr-2 h-4 w-4" />
              Hemen Ara
            </Button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
