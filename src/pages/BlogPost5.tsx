import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BlogPost5 = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <MobileHeader />
      
      {/* Back Button */}
      <div className="bg-white py-4 sticky top-[80px] md:top-[120px] z-40 border-b shadow-sm">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="text-primary hover:bg-primary/10 service-nav-back bg-primary text-white hover:bg-primary/90"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Bloglara Geri Dön
          </Button>
        </div>
      </div>

      {/* Article */}
      <article className="py-8 lg:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>3 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Kocaeli Uzman Tesisatçı</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>3 dk okuma</span>
              </div>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Musluk Tamiri mi Değişimi mi? Karar Verme Rehberi
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Damlayan musluğunuz için tamir mi yaptırmalı yoksa yeni bir musluk mu almalısınız? 
              Maliyet analizi ve uzun vadeli çözümler için rehber.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/c346c760-853a-4ab1-9bc7-5f3d4efccd0f.png"
              alt="Musluk tamir ve değişim"
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-4">Musluk Tamiri Hangi Durumlarda Yapılır?</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Musluğunuz sadece damlıyor ve genel durumu iyiyse, tamir işlemi genellikle yeterli olur. 
              İşte tamirin uygun olduğu durumlar:
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">✅ Tamir Edilebilir Durumlar</h3>
              <ul className="list-disc pl-6 text-green-700">
                <li>Musluğun sadece damlaması</li>
                <li>Küçük kaçaklar</li>
                <li>O-ring ve conta değişimi gereken durumlar</li>
                <li>Musluk kolu gevşemesi</li>
                <li>Aeratör tıkanıklığı</li>
                <li>Musluk yaşı 5 yıldan az</li>
                <li>Kaliteli marka ürünler</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-primary mb-3">Tamir Maliyeti</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Basit musluk tamiri genellikle 50-150 TL arasında maliyeti vardır. Bu rakam:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Değiştirilecek parçanın türü</li>
              <li>Musluk modeli</li>
              <li>İşçilik</li>
              <li>Bölgesel fiyat farklılıklarına göre değişir</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Musluk Değişimi Hangi Durumlarda Gerekir?</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Bazı durumlarda tamir yapmak ekonomik olmayabilir. Bu durumda yeni musluk almak daha mantıklıdır:
            </p>

            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">🔄 Değişim Gereken Durumlar</h3>
              <ul className="list-disc pl-6 text-red-700">
                <li>Musluk yaşı 10+ yıl</li>
                <li>Paslanma ve korozyon</li>
                <li>Kırık veya çatlak gövde</li>
                <li>Sürekli arıza yapması</li>
                <li>Eski tip teknoloji</li>
                <li>Estetik kaygılar</li>
                <li>Su basıncı problemleri</li>
                <li>Yedek parça bulunamaması</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-primary mb-3">Yeni Musluk Maliyeti</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Musluk fiyatları kalite ve özelliklerine göre geniş bir yelpazede değişir:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Ekonomik modeller:</strong> 200-500 TL</li>
              <li><strong>Orta segment:</strong> 500-1.500 TL</li>
              <li><strong>Premium modeller:</strong> 1.500-5.000+ TL</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">Karar Verme Matrisi</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border border-gray-300 p-3 text-left">Durum</th>
                    <th className="border border-gray-300 p-3 text-center">Tamir</th>
                    <th className="border border-gray-300 p-3 text-center">Değişim</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">Musluk yaşı 1-3 yıl</td>
                    <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Önerilen</td>
                    <td className="border border-gray-300 p-3 text-center bg-red-50">❌ Gereksiz</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Musluk yaşı 4-7 yıl</td>
                    <td className="border border-gray-300 p-3 text-center bg-yellow-50">⚠️ Durum bağlı</td>
                    <td className="border border-gray-300 p-3 text-center bg-yellow-50">⚠️ Durum bağlı</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Musluk yaşı 8+ yıl</td>
                    <td className="border border-gray-300 p-3 text-center bg-red-50">❌ Ekonomik değil</td>
                    <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Önerilen</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Basit damla sorunu</td>
                    <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Önerilen</td>
                    <td className="border border-gray-300 p-3 text-center bg-red-50">❌ Gereksiz</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Gövde hasarı</td>
                    <td className="border border-gray-300 p-3 text-center bg-red-50">❌ Mümkün değil</td>
                    <td className="border border-gray-300 p-3 text-center bg-green-50">✅ Zorunlu</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4">Uzman Önerisi</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Kocaeli Uzman Tesisatçı olarak, öncelikle durum tespiti yapıyoruz. Müşterimizin bütçesine 
              ve ihtiyacına göre en ekonomik çözümü öneriyoruz. Gereksiz masrafa sokmadan problemi çözüyoruz.
            </p>

            <div className="bg-blue-100 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 Uzman İpucu</h3>
              <p className="text-blue-700">
                Musluk seçerken sadece fiyata değil, su tasarrufu özelliklerine de dikkat edin. 
                Modern musluklar %30'a kadar su tasarrufu sağlayabilir. Uzun vadede bu tasarruf, 
                musluğun maliyetini amorti eder.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4">Önleyici Bakım Önerileri</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Muslukları sert kapamaktan kaçının</li>
              <li>Aeratörleri ayda bir temizleyin</li>
              <li>Kireç oluşumunu önlemek için sirke ile temizlik yapın</li>
              <li>Su basıncını çok yüksek tutmayın</li>
              <li>Küçük sızıntıları ihmal etmeyin</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-primary text-white rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Musluk Probleminiz İçin Ücretsiz Değerlendirme</h3>
            <p className="text-lg mb-6 opacity-90">
              Tamir mi yoksa değişim mi? Uzmanlarımız yerinde inceleyerek en ekonomik çözümü önerir.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-bold"
              onClick={() => window.open('tel:00000000000')}
            >
              Ücretsiz Keşif: 0000 000 00 00
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost5;