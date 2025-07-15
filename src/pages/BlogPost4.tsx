import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BlogPost4 = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <MobileHeader />
      
      {/* Back Button - Responsive for all screens */}
      <div className="bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-3 pt-20 md:pt-4">
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

      {/* Article */}
      <article className="py-6 lg:py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Featured Image */}
          <div className="mb-6">
            <img 
              src="https://images.unsplash.com/photo-1558623143-ca2c4f95c9b6?w=800&h=400&fit=crop"
              alt="Kombi bakımı"
              className="w-full h-56 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>5 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Kocaeli Uzman Tesisatçı</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>6 dk okuma</span>
              </div>
            </div>
            
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-4 leading-tight">
              Kombi Bakımı Neden Önemli? Yıllık Bakım Rehberi
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Düzenli kombi bakımı ile hem daha verimli ısınma sağlayabilir hem de arıza riskini minimize edebilirsiniz.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-4">Kombi Bakımının Önemi</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Kombi bakımı, evinizin ısıtma sisteminin uzun ömürlü ve verimli çalışması için kritik öneme sahiptir. 
              Düzenli bakım sayesinde hem enerji tasarrufu sağlar hem de beklenmedik arızaları önlersiniz.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">Yıllık Kombi Bakımında Neler Yapılır?</h2>
            
            <h3 className="text-xl font-semibold text-primary mb-3">1. Genel Temizlik ve Kontrol</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Kombi iç ve dış temizliği</li>
              <li>Hava filtresi temizliği veya değişimi</li>
              <li>Baca kontrolü ve temizliği</li>
              <li>Elektrik bağlantılarının kontrolü</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mb-3">2. Yanma Sistemi Kontrolü</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Brülör temizliği ve ayarı</li>
              <li>Yanma odasının kontrolü</li>
              <li>Gaz basıncının ölçülmesi</li>
              <li>Emniyet vanalarının testi</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mb-3">3. Su Sistemi Bakımı</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Su basıncının kontrolü</li>
              <li>Genleşme tankının kontrolü</li>
              <li>Sirkülasyon pompasının testi</li>
              <li>Su kalitesinin kontrolü</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mb-3">4. Güvenlik Sistemleri</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Termostat kalibrasyonu</li>
              <li>Güvenlik vanalarının testi</li>
              <li>Gaz kaçağı kontrolü</li>
              <li>Aşırı basınç güvenlik sistemi</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Kombi Bakımının Faydaları</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">💰 Enerji Tasarrufu</h3>
                <p className="text-green-700">
                  Düzenli bakım sayesinde kombi %15-25 daha verimli çalışır. 
                  Bu da doğalgaz faturanızda önemli tasarruf sağlar.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">🔧 Arıza Önleme</h3>
                <p className="text-blue-700">
                  Küçük sorunları erken tespit ederek büyük arızaları ve 
                  maliyetli onarımları önler.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">⏱️ Uzun Ömür</h3>
                <p className="text-purple-700">
                  Bakımlı kombiler 15-20 yıl güvenle çalışır. 
                  Bakımsız kombilerin ömrü 8-10 yıla düşer.
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-3">🛡️ Güvenlik</h3>
                <p className="text-red-700">
                  Gaz kaçağı, zehirlenme ve yangın risklerini minimize eder. 
                  Ailenizin güvenliği için kritik önemde.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4">Bakım Zamanlaması</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Kombi bakımı idealde yılda bir kez, ısıtma sezonundan önce (Ekim-Kasım aylarında) yapılmalıdır. 
              Bu sayede kış aylarında sorun yaşama riskinizi minimuma indirirsiniz.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Acil Bakım Gerektiren Durumlar</h3>
              <ul className="list-disc pl-6 text-yellow-700">
                <li>Kombiden anormal sesler geliyorsa</li>
                <li>Su basıncı sürekli düşüyorsa</li>
                <li>Radyatörler eşit ısınmıyorsa</li>
                <li>Gaz kokusu alıyorsanız</li>
                <li>Sıcak su düzensiz geliyorsa</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4">Kombi Bakım Maliyeti</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Kocaeli'de kombi bakım maliyeti 150-300 TL arasında değişir. Bu maliyet:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Kombi marka ve modeline</li>
              <li>Kombi yaşına</li>
              <li>Son bakım tarihine</li>
              <li>Gerekli parça değişimlerine</li>
              <li>Hizmet kalitesine göre değişir</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">Kendi Bakımınızı Yapabilir misiniz?</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Basit temizlik işlemlerini kendiniz yapabilirsiniz ancak teknik bakım ve ayarlar 
              mutlaka uzman teknisyen tarafından yapılmalıdır. Yanlış müdahale ciddi hasarlara neden olabilir.
            </p>

            <div className="bg-red-100 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-800 mb-2">🚫 Sakın Kendiniz Yapmayın</h3>
              <ul className="list-disc pl-6 text-red-700">
                <li>Gaz bağlantısı işlemleri</li>
                <li>Elektronik kart müdahaleleri</li>
                <li>Yanma ayarları</li>
                <li>Emniyet sistemi testleri</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-primary text-white rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Kombiniz Bakıma mı Geldi?</h3>
            <p className="text-lg mb-6 opacity-90">
              Profesyonel kombi bakımı için hemen arayın. Ücretsiz ön inceleme yapıyoruz.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-bold"
              onClick={() => window.open('tel:00000000000')}
            >
              Randevu Al: 0000 000 00 00
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost4;