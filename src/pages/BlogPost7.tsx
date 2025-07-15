import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";

const BlogPost7 = () => {
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop"
                alt="Petek temizliği sonrası dikkat edilecekler"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl"
              />
            </div>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  28 Aralık 2024
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Kocaeli Uzman Tesisatçı
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  4 dk okuma
                </div>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Petek Temizliği Sonrası Dikkat Edilmesi Gerekenler
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Petek temizliği sonrasında sistemin düzgün çalışması için dikkat edilmesi gereken önemli noktalar. 
                Hava tahliyesi, basınç kontrolü ve ilk çalıştırma işlemleri nasıl yapılır?
              </p>
            </header>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Petek Temizliği Nedir?</h2>
              
              <p className="mb-6">
                Petek temizliği, kalorifer sistemindeki kir, pas ve tortunun özel kimyasallar veya makine ile 
                temizlenmesi işlemidir. Bu işlem kombi verimliliğini artırır ve enerji tasarrufu sağlar.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Temizlik Sonrası İlk Adımlar</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h3 className="font-bold text-blue-800 mb-2">✅ Hemen Yapılması Gerekenler:</h3>
                <ol className="text-blue-700 space-y-2">
                  <li>1. Sistem basıncını kontrol edin (1,5-2 bar arası olmalı)</li>
                  <li>2. Tüm peteklerden hava tahliyesi yapın</li>
                  <li>3. Kombiyi yavaş yavaş çalıştırın</li>
                  <li>4. Su sıcaklığını kademeli olarak artırın</li>
                </ol>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Hava Tahliyesi Nasıl Yapılır?</h2>
              
              <p className="mb-4">
                Petek temizliği sonrası sistemde hava kalması normaldir. Hava tahliyesi şu şekilde yapılır:
              </p>

              <ol className="mb-6 space-y-3">
                <li><strong>1. Kombiyi kapatın:</strong> Sistemdeki basıncın dengede olmasını sağlayın.</li>
                <li><strong>2. En uzak petekten başlayın:</strong> Kombiden en uzak petekten başlayarak tüm petekeleri dolaşın.</li>
                <li><strong>3. Hava tahliye vanasını açın:</strong> İnce bir tornavida ile vanayı yavaşça açın.</li>
                <li><strong>4. Su çıkana kadar bekleyin:</strong> Önce hava çıkar, ardından düzenli su akmaya başlar.</li>
                <li><strong>5. Vanayı kapatın:</strong> Su düzenli aktığında vanayı tekrar kapatın.</li>
              </ol>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                <h3 className="font-bold text-yellow-800 mb-2">⚠️ Dikkat Edilecek Noktalar:</h3>
                <ul className="text-yellow-700">
                  <li>• Hava tahliyesi sırasında altına kap koyun</li>
                  <li>• Vanayı çok hızlı açmayın</li>
                  <li>• Su çıktıktan sonra hemen kapatın</li>
                  <li>• İşlem sonrası sistem basıncını kontrol edin</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Basınç Kontrolü ve Ayarları</h2>
              
              <p className="mb-6">
                Temizlik sonrası sistem basıncı kritik önem taşır:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">Doğru Basınç Değerleri</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Soğuk sistem: 1,2-1,5 bar</li>
                    <li>• Çalışan sistem: 1,5-2,5 bar</li>
                    <li>• Maksimum güvenlik: 3 bar</li>
                    <li>• Minimum çalışma: 0,8 bar</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-bold text-red-800 mb-2">Basınç Problemleri</h3>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Düşük basınç: Sistem çalışmaz</li>
                    <li>• Yüksek basınç: Güvenlik vanası açılır</li>
                    <li>• Dalgalı basınç: Hava var demektir</li>
                    <li>• Sürekli düşen basınç: Kaçak vardır</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">İlk Çalıştırma Süreci</h2>
              
              <p className="mb-4">
                Temizlik sonrası kombiyi ilk kez çalıştırırken şu adımları izleyin:
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-3">Adım Adım Çalıştırma:</h3>
                <ol className="text-gray-700 space-y-2">
                  <li><strong>1. Saat:</strong> Kombi saatini ayarlayın</li>
                  <li><strong>2. Sıcaklık:</strong> İlk 30°C'de başlayın</li>
                  <li><strong>3. Çalıştırma:</strong> Kombiyi çalıştırın</li>
                  <li><strong>4. Gözlem:</strong> 10-15 dakika çalışmasını izleyin</li>
                  <li><strong>5. Artırma:</strong> Sıcaklığı kademeli olarak artırın</li>
                  <li><strong>6. Kontrol:</strong> Tüm petekelerin ısındığını kontrol edin</li>
                </ol>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">İlk Hafta Kontrolleri</h2>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
                <h3 className="font-bold text-purple-800 mb-2">Günlük Kontrol Listesi:</h3>
                <ul className="text-purple-700">
                  <li>✓ Sistem basıncını kontrol edin</li>
                  <li>✓ Tüm petekelerin eşit ısındığını kontrol edin</li>
                  <li>✓ Anormal ses olup olmadığını dinleyin</li>
                  <li>✓ Su kaçağı var mı kontrol edin</li>
                  <li>✓ Kombi hata kodu verip vermediğine bakın</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Olası Sorunlar ve Çözümleri</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-bold text-orange-800">Petek Isınmıyor</h3>
                  <p className="text-gray-700">Hava tahliyesi tekrar yapın, termostatik vanayı kontrol edin.</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-bold text-orange-800">Sistem Gürültülü</h3>
                  <p className="text-gray-700">Pompa devrini düşürün, hava tahliyesini tekrarlayın.</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-bold text-orange-800">Basınç Düşüyor</h3>
                  <p className="text-gray-700">Kaçak kontrolü yapın, gerekirse teknik servis çağırın.</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-primary text-white rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Petek Temizliği Sonrası Sorun mu Yaşıyorsunuz?</h3>
              <p className="mb-6">
                Uzman ekibimiz petek temizliği sonrası ortaya çıkan tüm sorunları çözer. 7/24 destek hizmeti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => window.open('tel:00000000000')}
                >
                  Acil Arayın: 0000 000 00 00
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open('https://wa.me/900000000000?text=Petek temizliği sonrası sorun yaşıyorum. Yardım alabilir miyim?')}
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

export default BlogPost7;