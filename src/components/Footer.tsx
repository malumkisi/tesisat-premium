
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              Kocaeli Uzman Tesisat
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Kocaeli'de 7/24 acil tesisat hizmeti veren uzman ekibimizle, su kaçağı tespiti, 
              tıkanıklık açma, petek temizliği ve tüm tesisat sorunlarınıza hızlı çözüm sunuyoruz.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a href="tel:05321234567" className="font-semibold hover:text-orange-400 transition-colors">0532 123 45 67</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span>7/24 Kesintisiz Hizmet</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span>Kocaeli Geneli</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/su-kacagi-tespiti" className="hover:text-orange-400 transition-colors">• Su Kaçağı Tespiti</a></li>
              <li><a href="/tikaniklik-acma" className="hover:text-orange-400 transition-colors">• Tıkanıklık Açma</a></li>
              <li><a href="/petek-temizligi" className="hover:text-orange-400 transition-colors">• Petek Temizliği</a></li>
              <li><a href="/musluk-tamiri" className="hover:text-orange-400 transition-colors">• Musluk Tamiri</a></li>
              <li><a href="/klozet-tamiri" className="hover:text-orange-400 transition-colors">• Klozet Tamiri</a></li>
              <li><a href="/batarya-degisimi" className="hover:text-orange-400 transition-colors">• Batarya Değişimi</a></li>
              <li><a href="/kombi-servisi" className="hover:text-orange-400 transition-colors">• Kombi Servisi</a></li>
              <li><a href="/acil-mudahale" className="hover:text-orange-400 transition-colors">• Acil Müdahale</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="sm:col-span-1">
            <h4 className="text-lg font-bold mb-4 text-orange-400">Hizmet Bölgeleri</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• İzmit</li>
              <li>• Gebze</li>
              <li>• Darıca</li>
              <li>• Körfez</li>
              <li>• Gölcük</li>
              <li>• Derince</li>
              <li>• Çayırova</li>
              <li>• Kartepe</li>
              <li>• Başiskele</li>
              <li>• Karamürsel</li>
              <li>• Kandıra</li>
              <li>• Dilovası</li>
            </ul>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-12 bg-red-600 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">🚨 ACİL DURUM 🚨</h3>
          <p className="mb-4">Su baskını, büyük kaçak veya acil tıkanıklık durumlarında</p>
          <div className="text-2xl font-bold">
            <Phone className="inline mr-2 h-6 w-6" />
            0532 123 45 67
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              © {currentYear} Kocaeli Uzman Tesisat. Tüm hakları saklıdır.
            </p>
            <p className="text-gray-500 text-xs">
              Bu site tamamen kurgusaldır ve demo amaçlıdır. • AFS Web Hizmetleri tarafından geliştirilmiştir.
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-400 mt-4">
              <span>Garantili İşçilik</span>
              <span>•</span>
              <span>Makul Fiyat</span>
              <span>•</span>
              <span>Hızlı Servis</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
