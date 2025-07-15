import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";

const BlogPost11 = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <MobileHeader />
      
      {/* Back Button */}
      <div className="pt-4 bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-2">
          <Button
            variant="outline"
            className="text-primary border-primary hover:bg-primary hover:text-white"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Bloglara Geri Dön
          </Button>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative mb-8">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop"
                alt="Kış aylarında boru donması önleme"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl"
              />
            </div>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  18 Aralık 2024
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Kocaeli Uzman Tesisatçı
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  5 dk okuma
                </div>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Kış Aylarında Boru Donması Nasıl Önlenir?
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Soğuk kış günlerinde su borularının donması ciddi hasarlara neden olabilir. 
                Donma nasıl önlenir, donmuş boru nasıl çözülür ve alınacak önlemler nelerdir?
              </p>
            </header>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Boru Donmasının Sebepleri</h2>
              
              <p className="mb-6">
                Su 0°C'de donar ve donduğunda %9 oranında genişler. Bu genişme borularda çatlak ve patlamalara neden olur.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">❄️ Risk Faktörleri:</h3>
                <ul className="text-blue-700">
                  <li>• Dış duvarlardaki borular</li>
                  <li>• Isıtılmayan alanlardaki tesisatlar</li>
                  <li>• İzolasyonsuz borular</li>
                  <li>• Uzun süre kullanılmayan hatlar</li>
                  <li>• Rüzgara maruz kalan borular</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Önleyici Tedbirler</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">İzolasyon Önlemleri</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Boru izolasyon malzemeleri</li>
                    <li>• Strafor veya köpük kaplama</li>
                    <li>• Isı kablosu sarma</li>
                    <li>• Cam yünü ile sarma</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-bold text-orange-800 mb-2">Kullanım Önlemleri</h3>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Sürekli damlama bırakma</li>
                    <li>• Dolap kapılarını açık tutma</li>
                    <li>• Boruları havalandırma</li>
                    <li>• Düzenli kontrol yapma</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Donmuş Boru Nasıl Çözülür?</h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <h3 className="font-bold text-red-800 mb-2">⚠️ Güvenlik Uyarısı</h3>
                <p className="text-red-700">
                  Donmuş boruları açık alev ile ısıtmayın! Yangın riski vardır. 
                  Sadece güvenli yöntemler kullanın.
                </p>
              </div>

              <h3 className="text-xl font-bold text-primary mb-4">Güvenli Çözüm Yöntemleri:</h3>
              
              <ol className="mb-6 space-y-3">
                <li><strong>1. Sıcak Su Yöntemi:</strong> Sıcak su dökerek yavaşça çözün</li>
                <li><strong>2. Saç Kurutma Makinesi:</strong> Düşük ısıda boruyu ısıtın</li>
                <li><strong>3. Sıcak Havlu:</strong> Sıcak havlu ile boruyu sarın</li>
                <li><strong>4. Elektrikli Isıtıcı:</strong> Güvenli mesafeden ısıtın</li>
                <li><strong>5. Ortam Isısını Artırma:</strong> Kalorifer açın, havalandırın</li>
              </ol>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Ev Tipi Korunma Yöntemleri</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-bold text-purple-800">Muslukları Akıtma</h3>
                  <p className="text-gray-700">Gece boyunca muslukları hafifçe akıtın. Hareket halindeki su donmaz.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-bold text-purple-800">Dolap Kapılarını Açma</h3>
                  <p className="text-gray-700">Lavabo altındaki dolap kapılarını açık tutarak sıcak hava sirkülasyonu sağlayın.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-bold text-purple-800">Termostat Ayarı</h3>
                  <p className="text-gray-700">Evi terk ederken termostati 10°C altına düşürmeyin.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Profesyonel Çözümler</h2>
              
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-3">Uzun Vadeli Çözümler:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Isı Kablosu Sistemi:</strong> Elektrikli ısıtma kablosu montajı</li>
                  <li>• <strong>Boru Yenileme:</strong> Donmaya hassas boruları değiştirme</li>
                  <li>• <strong>İzolasyon Iyileştirme:</strong> Profesyonel izolasyon malzemeleri</li>
                  <li>• <strong>Sistem Yeniden Tasarımı:</strong> Boruların güvenli yerlerden geçirilmesi</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Acil Durum Protokolü</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                <h3 className="font-bold text-yellow-800 mb-2">🚨 Boru Patladığında:</h3>
                <ol className="text-yellow-700 space-y-2">
                  <li>1. Ana su vanasını hemen kapatın</li>
                  <li>2. Elektrik panosunu kontrol edin</li>
                  <li>3. Mobilyaları suydan koruyun</li>
                  <li>4. Acil tesisatçı arayın</li>
                  <li>5. Sigorta şirketinizi bilgilendirin</li>
                </ol>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-primary text-white rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Kış Donması Korunması İçin Profesyonel Yardım mı İstiyorsunuz?</h3>
              <p className="mb-6">
                Uzman ekibimiz evinizi kış şartlarına hazırlar, gerekli önlemleri alır. 7/24 acil müdahale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => window.open('tel:00000000000')}
                >
                  Acil Donma Müdahalesi: 0000 000 00 00
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open('https://wa.me/900000000000?text=Kış donması korunması için yardım istiyorum.')}
                >
                  WhatsApp Destek
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost11;