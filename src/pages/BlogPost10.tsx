import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";

const BlogPost10 = () => {
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
                src="https://images.unsplash.com/photo-1571049751131-7c1a50b0ebf2?w=800&h=400&fit=crop"
                alt="Apartman su deposu temizliği"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl"
              />
            </div>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  20 Aralık 2024
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
                Apartman Su Deposu Temizliği ve Bakımı
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Apartman su depolarının düzenli temizlik ve bakımı halk sağlığı için hayati önem taşır. 
                Temizlik sıklığı, kullanılan kimyasallar ve dikkat edilecek noktalar.
              </p>
            </header>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Su Deposu Temizliğinin Önemi</h2>
              
              <p className="mb-6">
                Apartman su depoları, içme suyunun depolandığı kritik alanlardır. Düzenli temlik yapılmazsa 
                bakteriler, algler ve diğer mikroorganizmalar ürer, halk sağlığını tehdit eder.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <h3 className="font-bold text-red-800 mb-2">🚨 Temizlik Yapılmazsa Ne Olur?</h3>
                <ul className="text-red-700">
                  <li>• Bakteriyel enfeksiyonlar</li>
                  <li>• Su kaynaklı hastalıklar</li>
                  <li>• Kötü tat ve koku</li>
                  <li>• Sağlık Bakanlığı cezaları</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Temizlik Sıklığı</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">Zorunlu Temizlik</h3>
                  <ul className="text-blue-700 text-sm">
                    <li>• Yılda 2 kez (6 ayda bir)</li>
                    <li>• Sağlık Bakanlığı zorunluluğu</li>
                    <li>• Yetkili firma tarafından</li>
                    <li>• Belgelendirilmeli</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">Önerilen Ek Temizlik</h3>
                  <ul className="text-green-700 text-sm">
                    <li>• 3 ayda bir kontrol</li>
                    <li>• Yaz aylarında daha sık</li>
                    <li>• Kirlilik durumunda acil</li>
                    <li>• Hastalık sonrası</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Temizlik Süreci</h2>
              
              <ol className="mb-6 space-y-3">
                <li><strong>1. Hazırlık:</strong> Su kesilir, depo boşaltılır</li>
                <li><strong>2. Kaba Temizlik:</strong> Tortular ve kalıntılar temizlenir</li>
                <li><strong>3. Dezenfeksiyon:</strong> Klor bazlı kimyasallarla yıkanır</li>
                <li><strong>4. Durulama:</strong> Kimyasal kalıntıları temizlenir</li>
                <li><strong>5. Final Dezenfeksiyon:</strong> Son dezenfeksiyon yapılır</li>
                <li><strong>6. Dolum:</strong> Temiz su ile doldurulur</li>
                <li><strong>7. Test:</strong> Su kalitesi test edilir</li>
              </ol>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Kullanılan Kimyasallar</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                <h3 className="font-bold text-yellow-800 mb-2">⚠️ Onaylı Kimyasallar</h3>
                <ul className="text-yellow-700">
                  <li>• Sodyum hipoklorit (%5-12)</li>
                  <li>• Kalsiyum hipoklorit</li>
                  <li>• Klor dioksit</li>
                  <li>• Sadece gıda onaylı ürünler</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Gerekli Belgeler</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-bold text-purple-800">Temizlik Belgesi</h3>
                  <p className="text-gray-700">Yetkili firma tarafından verilen resmi temizlik belgesi</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-bold text-purple-800">Su Analiz Raporu</h3>
                  <p className="text-gray-700">Temizlik sonrası su kalitesi analiz raporu</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-bold text-purple-800">Fotoğraflı Rapor</h3>
                  <p className="text-gray-700">Temizlik öncesi ve sonrası fotoğraflar</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-primary text-white rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Apartman Su Deposu Temizliği Yaptırmak İstiyor musunuz?</h3>
              <p className="mb-6">
                Yetkili ekibimiz apartman su deposu temizliğini yapar, gerekli belgeleri düzenler.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => window.open('tel:00000000000')}
                >
                  Su Deposu Temizliği: 0000 000 00 00
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open('https://wa.me/900000000000?text=Apartman su deposu temizliği yaptırmak istiyorum.')}
                >
                  WhatsApp'ta Yaz
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

export default BlogPost10;