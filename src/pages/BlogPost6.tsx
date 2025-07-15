import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BlogPost6 = () => {
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
              src="/lovable-uploads/10329904-ecbc-45fb-a018-b86ee13b22a4.png"
              alt="Musluk tamiri ve değişimi rehberi"
              className="w-full h-56 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>3 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Kocaeli Uzman Tesisatçı</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>3 dk okuma</span>
              </div>
            </div>
            
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-4 leading-tight">
              Musluk Tamiri mi Değişimi mi? Karar Verme Rehberi
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Damlayan musluğunuz için tamir mi yaptırmalı yoksa yeni bir musluk mu almalısınız? 
              Hangi durumlarda tamir yeterli, hangi durumlarda değişim şart?
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-4">Tamir mi Değişim mi? Karar Kriterleri</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Musluk sorunu yaşadığınızda ilk sorduğunuz soru muhtemelen "tamir ettirmeli mi yoksa yeni almalı mı?" 
              Bu kararı verirken birkaç önemli faktörü göz önünde bulundurmanız gerekiyor.
            </p>

            <h3 className="text-xl font-semibold text-primary mb-3">Musluğun Yaşı ve Genel Durumu</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>5 yaşından küçük musluklar genellikle tamir edilmeye değer</li>
              <li>10 yaşından büyük musluklar için değişim daha ekonomik olabilir</li>
              <li>Kaliteli markaların ürünleri daha uzun ömürlü olur</li>
              <li>Çok sık arıza yapan musluklar değiştirilmeli</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mb-3">Arıza Türü ve Şiddeti</h3>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-primary mb-3">✅ Tamir Edilebilir Arızalar:</h4>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Hafif damlama (conta değişimi)</li>
                <li>Sap gevşekliği</li>
                <li>Cartridge arızası</li>
                <li>Aeratör tıkanıklığı</li>
                <li>Basit conta ve conta değişimleri</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-primary mb-3">❌ Değişim Gerektiren Durumlar:</h4>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Gövde çatlağı veya kırığı</li>
                <li>İç mekanizma tamamen bozuk</li>
                <li>Kronik su kaçağı sorunu</li>
                <li>Paslanma ve korozyon</li>
                <li>Yedek parça bulunamayan eski modeller</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Maliyet Analizi</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Tamir vs değişim kararında en önemli faktörlerden biri maliyet analizi yapılmasıdır. 
              Kısa vadeli ve uzun vadeli maliyetleri karşılaştırmalısınız.
            </p>

            <h3 className="text-xl font-semibold text-primary mb-3">Tamir Maliyetleri</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Conta değişimi: 50-150 TL</li>
              <li>Cartridge değişimi: 150-400 TL</li>
              <li>İşçilik: 100-200 TL</li>
              <li>Basit tamirler genellikle 200-500 TL arası</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mb-3">Değişim Maliyetleri</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Orta kalite musluk: 300-800 TL</li>
              <li>Kaliteli musluk: 800-2000 TL</li>
              <li>Montaj işçiliği: 150-300 TL</li>
              <li>Toplam: 450-2300 TL arası</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Uzman Tavsiyesi</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Kocaeli Uzman Tesisatçı olarak, her durumu ayrı ayrı değerlendiriyoruz. 
              Musluk sorununuz için önce detaylı bir inceleme yapıyor, size en ekonomik çözümü öneriyoruz.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-primary mb-3">💡 Pratik Karar Kuralı</h3>
              <p className="text-gray-700">
                <strong>Tamir maliyeti, yeni musluğun %50'sinden fazlaysa değişim düşünün.</strong><br/>
                Örneğin: 600 TL'lik bir musluk için tamir maliyeti 300 TL'yi geçiyorsa, 
                yeni almak daha mantıklı olabilir.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Kaliteli Musluk Seçimi</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Yeni musluk alacağınız durumda, kaliteli ve uzun ömürlü bir ürün seçmek 
              uzun vadede tasarruf sağlar. İşte dikkat etmeniz gerekenler:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Seramik cartridge sistemli modelleri tercih edin</li>
              <li>Sızdırmazlık garantisi olan markaları seçin</li>
              <li>Kaliteli malzemeden üretilmiş (pirinç, paslanmaz çelik)</li>
              <li>Yedek parça temin kolaylığı olan markalar</li>
              <li>Minimum 5 yıl garanti süresi</li>
            </ul>

            <div className="bg-orange-100 border-l-4 border-orange-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">⚠️ Önemli Uyarı</h3>
              <p className="text-orange-700">
                Musluk değişiminde mutlaka su tesisatının uygunluğunu kontrol ettirin. 
                Eski boru sistemleri yeni musluk türleriyle uyumlu olmayabilir.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-primary text-white rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Musluk Sorununuz mu Var?</h3>
            <p className="text-lg mb-6 opacity-90">
              Tamir mi değişim mi konusunda kararsız mısınız? Uzmanlarımızdan ücretsiz 
              değerlendirme ve en uygun çözüm önerisi alın.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-bold"
              onClick={() => window.open('tel:00000000000')}
            >
              Hemen Ara: 0000 000 00 00
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost6;