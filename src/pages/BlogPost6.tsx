import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";

const BlogPost6 = () => {
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
                src="/src/assets/musluk-tamiri-blog.jpg"
                alt="Musluk tamiri mi değişimi mi"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl"
              />
            </div>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  3 Ocak 2025
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Kocaeli Uzman Tesisatçı
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  3 dk okuma
                </div>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Musluk Tamiri mi Değişimi mi? Karar Verme Rehberi
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Damlayan musluğunuz için tamir mi yaptırmalı yoksa yeni bir musluk mu almalısınız? 
                Hangi durumlarda tamir yeterli, hangi durumlarda değişim şart? Maliyet analizi ve 
                uzun vadeli çözümler için rehber niteliğinde bilgiler...
              </p>
            </header>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Musluk Sorunları ve Belirtileri</h2>
              
              <p className="mb-6">
                Evlerimizdeki musluklar zamanla çeşitli sorunlar yaşayabilir. Bu sorunların erken teşhisi, 
                doğru çözüm yöntemini belirlememize yardımcı olur:
              </p>

              <ul className="mb-6 space-y-2">
                <li><strong>Damla damla su akması:</strong> Genellikle conta değişimi ile çözülür</li>
                <li><strong>Aşırı sıkı veya gevşek kol hareketi:</strong> İç mekanizma sorunu</li>
                <li><strong>Su basıncında düşüş:</strong> Filtratör tıkanıklığı veya iç kireçlenme</li>
                <li><strong>Sıcak-soğuk su karışım problemi:</strong> Kartuş sorunu</li>
                <li><strong>Gövdeden su sızıntısı:</strong> Ciddi hasar işareti</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Tamir Edilebilir Durumlar</h2>
              
              <p className="mb-6">
                Aşağıdaki durumlarda musluk tamiri yeterli olabilir:
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <h3 className="font-bold text-green-800 mb-2">Tamir Önerilir:</h3>
                <ul className="text-green-700">
                  <li>• Musluk yeni (5 yaş altı) ve kaliteli marka</li>
                  <li>• Sadece conta, O-ring veya kartuş değişimi gerekiyor</li>
                  <li>• Gövde ve bağlantılar sağlam</li>
                  <li>• Tamir maliyeti yeni musluk fiyatının %30'undan az</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Değişim Gerekli Durumlar</h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <h3 className="font-bold text-red-800 mb-2">Değişim Şart:</h3>
                <ul className="text-red-700">
                  <li>• Musluk 10 yaşından büyük</li>
                  <li>• Gövdede çatlak veya delik var</li>
                  <li>• Kaplama bozulmuş, pas oluşmuş</li>
                  <li>• Yedek parça bulunamıyor</li>
                  <li>• Sık sık arıza veriyor</li>
                  <li>• Tamir maliyeti yeni musluk fiyatının %50'sini geçiyor</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Maliyet Analizi</h2>
              
              <p className="mb-4">
                Karar verirken sadece anlık maliyeti değil, uzun vadeli harcamaları da göz önünde bulundurun:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">Tamir Maliyetleri</h3>
                  <ul className="text-blue-700 text-sm">
                    <li>• Conta değişimi: 50-100 TL</li>
                    <li>• Kartuş değişimi: 100-200 TL</li>
                    <li>• Filtratör temizliği: 75-150 TL</li>
                    <li>• Genel bakım: 100-200 TL</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-800 mb-2">Yeni Musluk + Montaj</h3>
                  <ul className="text-yellow-700 text-sm">
                    <li>• Ekonomik model: 200-500 TL</li>
                    <li>• Orta segment: 500-1000 TL</li>
                    <li>• Premium model: 1000+ TL</li>
                    <li>• Montaj ücreti: 100-200 TL</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Uzun Vadeli Çözüm İçin Öneriler</h2>
              
              <p className="mb-6">
                En doğru kararı verebilmek için şu faktörleri değerlendirin:
              </p>

              <ol className="mb-6 space-y-3">
                <li><strong>1. Musluğun yaşı ve markası:</strong> Kaliteli markaların eski modelleri bile uzun süre dayanabilir.</li>
                <li><strong>2. Sorunun kapsamı:</strong> Tek bir parça değişimi mi, yoksa genel bir yenileme mi gerekiyor?</li>
                <li><strong>3. Estetik beklentiler:</strong> Banyo/mutfak yenileme planlarınız var mı?</li>
                <li><strong>4. Su kalitesi:</strong> Kireçli su bölgelerinde musluklar daha çabuk eskir.</li>
                <li><strong>5. Kullanım sıklığı:</strong> Yoğun kullanılan musluklar için yeni almak daha mantıklı olabilir.</li>
              </ol>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-3">💡 Uzman Tavsiyesi</h3>
                <p className="text-gray-700">
                  5 yaşından eski musluklar için genellikle değişim öneriyoruz. Modern musluklar daha az su 
                  tüketir, daha hijyenik ve uzun ömürlüdür. Kaliteli bir musluk 15-20 yıl sorunsuz kullanılabilir.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-primary text-white rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Musluk Tamiri veya Değişimi İhtiyacınız mı Var?</h3>
              <p className="mb-6">
                Uzman ekibimiz size en uygun çözümü önerir. Ücretsiz keşif ve danışmanlık hizmeti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => window.open('tel:00000000000')}
                >
                  Hemen Arayın: 0000 000 00 00
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open('https://wa.me/900000000000?text=Musluk tamiri/değişimi hakkında bilgi almak istiyorum.')}
                >
                  WhatsApp'tan Yazın
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

export default BlogPost6;