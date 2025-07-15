import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";

const BlogPost9 = () => {
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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
                alt="Banyo tadilatında tesisat planlaması"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl"
              />
            </div>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  22 Aralık 2024
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Kocaeli Uzman Tesisatçı
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  6 dk okuma
                </div>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Banyo Tadilatında Tesisat Planlaması
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Banyo tadilat projelerinde tesisat planlaması kritik önemde. Su ve kanalizasyon hatlarının 
                doğru planlanması ile hem estetik hem fonksiyonel çözümler elde edebilirsiniz.
              </p>
            </header>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Banyo Tadilatı Öncesi Tesisat Planlaması</h2>
              
              <p className="mb-6">
                Banyo tadilatı yapmadan önce tesisat planlaması yapmak, hem maliyeti düşürür hem de 
                gelecekteki sorunları önler. İyi bir planlama ile mükemmel sonuçlar elde edebilirsiniz.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">✅ Planlama Aşamaları:</h3>
                <ol className="text-blue-700 space-y-2">
                  <li>1. Mevcut tesisat durumunun analizi</li>
                  <li>2. Yeni banyo tasarımının tesisat gereksinimleri</li>
                  <li>3. Su ve kanalizasyon hatlarının güzergah planlaması</li>
                  <li>4. Elektrik ve tesisat koordinasyonu</li>
                  <li>5. Malzeme ve maliyet hesaplaması</li>
                </ol>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Su Tesisatı Planlaması</h2>
              
              <p className="mb-4">
                Banyo su tesisatı planlamasında dikkat edilmesi gereken ana noktalar:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">Soğuk Su Hattı</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Ana şebeke bağlantısı kontrolü</li>
                    <li>• Basınç ve debi ölçümü</li>
                    <li>• Boru çapı hesaplaması</li>
                    <li>• Dağıtım noktalarının belirlenmesi</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-bold text-orange-800 mb-2">Sıcak Su Hattı</h3>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Kombi/şofben kapasitesi kontrolü</li>
                    <li>• Sıcak su debi hesaplaması</li>
                    <li>• İzolasyon planlaması</li>
                    <li>• Genleşme tankı konumu</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Kanalizasyon Sistemı Planlaması</h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <h3 className="font-bold text-red-800 mb-2">⚠️ Kritik Noktalar:</h3>
                <ul className="text-red-700">
                  <li>• Eğim hesaplamaları (minimum %2)</li>
                  <li>• Ana kanalizasyon hattına bağlantı noktası</li>
                  <li>• Havalandırma borusu planlaması</li>
                  <li>• Sifonlu bağlantılar</li>
                  <li>• Temizlik göz kapakları</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Banyo Elemanlarının Tesisat Gereksinimleri</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-bold text-blue-800">Lavabo</h3>
                  <p className="text-gray-700">Soğuk/sıcak su girişi (1/2"), kanalizasyon çıkışı (32mm), duvar mesafesi 20-30cm</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-bold text-blue-800">Klozet</h3>
                  <p className="text-gray-700">Kanalizasyon bağlantısı (110mm), temiz su girişi (3/8"), duvardan 35-40cm mesafe</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-bold text-blue-800">Duş/Küvet</h3>
                  <p className="text-gray-700">Soğuk/sıcak su (1/2"), kanalizasyon (50mm), sifon derinliği min. 5cm</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Malzeme Seçimi ve Öneriler</h2>
              
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-3">Önerilen Malzemeler:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-primary">Su Boruları</h4>
                    <ul className="text-sm text-gray-600">
                      <li>• PPR boru (sıcak/soğuk)</li>
                      <li>• PEX boru (esnek)</li>
                      <li>• Bakır boru (premium)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Kanalizasyon</h4>
                    <ul className="text-sm text-gray-600">
                      <li>• PVC boru</li>
                      <li>• PP-HT boru</li>
                      <li>• Cast iron (sessiz)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Bağlantı Elemanları</h4>
                    <ul className="text-sm text-gray-600">
                      <li>• Kaliteli vanalar</li>
                      <li>• Brass fittings</li>
                      <li>• İzolasyon malzemeleri</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Uygulama Aşamaları</h2>
              
              <ol className="mb-6 space-y-3">
                <li><strong>1. Eski Tesisatın Sökümü:</strong> Dikkatli söküm, hasar kontrolü</li>
                <li><strong>2. Alt Yapı Hazırlığı:</strong> Duvar ve zemin kanalları</li>
                <li><strong>3. Ana Hat Döşeme:</strong> Su ve kanalizasyon ana hatları</li>
                <li><strong>4. Dağıtım Hatları:</strong> Her nokta için özel hatlar</li>
                <li><strong>5. Test ve Kontrol:</strong> Basınç testi, kaçak kontrolü</li>
                <li><strong>6. İzolasyon:</strong> Ses ve ısı yalıtımı</li>
                <li><strong>7. Kaplama Hazırlığı:</strong> Duvar ve zemin hazırlama</li>
              </ol>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Sık Yapılan Hatalar</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                <h3 className="font-bold text-yellow-800 mb-2">❌ Kaçınılması Gereken Hatalar:</h3>
                <ul className="text-yellow-700">
                  <li>• Yetersiz eğim vermek (kanalizasyon)</li>
                  <li>• Boru çaplarını küçük seçmek</li>
                  <li>• Havalandırma borusunu unutmak</li>
                  <li>• Test etmeden kaplamaya geçmek</li>
                  <li>• Kalitesiz malzeme kullanmak</li>
                  <li>• İzolasyon yapmayı ihmal etmek</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Maliyet ve Süre Planlaması</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">Ortalama Süreler</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Planlama: 1-2 gün</li>
                    <li>• Söküm: 1 gün</li>
                    <li>• Tesisat döşeme: 2-3 gün</li>
                    <li>• Test ve kontrol: 1 gün</li>
                    <li>• Toplam: 5-7 gün</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">Maliyet Faktörleri</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Banyo büyüklüğü</li>
                    <li>• Malzeme kalitesi</li>
                    <li>• İşçilik becerisi</li>
                    <li>• Bölgesel fiyat farkları</li>
                    <li>• Ek hizmetler</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-primary text-white rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Banyo Tadilatı İçin Tesisat Planlaması mı İstiyorsunuz?</h3>
              <p className="mb-6">
                Uzman ekibimiz banyo tadilat projeleriniz için detaylı tesisat planlaması yapar. 
                Ücretsiz keşif ve proje danışmanlığı.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => window.open('tel:00000000000')}
                >
                  Proje Danışmanlığı: 0000 000 00 00
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary animate-pulse"
                  onClick={() => window.open('https://wa.me/900000000000?text=Banyo tadilatı için tesisat planlaması yaptırmak istiyorum.')}
                >
                  <span className="text-white">WhatsApp'ta Yaz</span>
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

export default BlogPost9;