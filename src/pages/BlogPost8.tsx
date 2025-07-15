import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";

const BlogPost8 = () => {
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
                alt="Doğalgaz güvenlik kontrolleri"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl"
              />
            </div>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  25 Aralık 2024
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
                Doğalgaz Tesisat Güvenlik Kontrolleri
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Doğalgaz tesisatında güvenlik her şeyden önemlidir. Hangi kontroller yapılmalı, 
                gaz kaçağı nasıl anlaşılır ve acil durumlarda ne yapılmalı?
              </p>
            </header>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <h3 className="font-bold text-red-800 mb-2">🚨 Önemli Uyarı</h3>
                <p className="text-red-700">
                  Doğalgaz ile ilgili tüm işlemler mutlaka yetkili personel tarafından yapılmalıdır. 
                  Bu makale sadece bilgilendirme amaçlıdır.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Doğalgaz Güvenliğinin Önemi</h2>
              
              <p className="mb-6">
                Doğalgaz, doğru kullanıldığında güvenli bir enerji kaynağıdır. Ancak yanlış kullanım 
                veya bakımsızlık ciddi kazalara neden olabilir. Düzenli kontroller hayat kurtarır.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Günlük Güvenlik Kontrolleri</h2>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <h3 className="font-bold text-green-800 mb-2">✅ Her Gün Kontrol Edilmesi Gerekenler:</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Gaz kokusu olup olmadığını kontrol edin</li>
                  <li>• Kombi ve ocak çevresinde havalandırma olduğundan emin olun</li>
                  <li>• Gaz vanalarının sızdırmazlığını kontrol edin</li>
                  <li>• Baca çekişini kontrol edin (kağıt testi)</li>
                  <li>• Kombi basıncını kontrol edin</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Gaz Kaçağı Nasıl Anlaşılır?</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-800 mb-2">Koku ile Tespit</h3>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Çürük yumurta kokusu</li>
                    <li>• Kükürt kokusu</li>
                    <li>• Keskin, rahatsız edici koku</li>
                    <li>• Sürekli olan koku</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">Sabunlu Su Testi</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Sabunlu su hazırlayın</li>
                    <li>• Bağlantı noktalarına sürün</li>
                    <li>• Kabarcık oluşumunu gözlemleyin</li>
                    <li>• Kaçak varsa köpürür</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Aylık Güvenlik Kontrolleri</h2>
              
              <ol className="mb-6 space-y-3">
                <li><strong>1. Baca Kontrolü:</strong> Baca içinde tıkanıklık, kuş yuvası veya yabancı madde var mı?</li>
                <li><strong>2. Havalandırma:</strong> Havalandırma ızgaraları temiz ve açık mı?</li>
                <li><strong>3. Gaz Vanası:</strong> Ana gaz vanası kolayca açılıp kapanıyor mu?</li>
                <li><strong>4. Tesisst Görünümü:</strong> Borularda pas, deformasyon veya hasar var mı?</li>
                <li><strong>5. Kombi Kontrolü:</strong> Kombi normal çalışıyor mu, hata kodu veriyor mu?</li>
              </ol>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Acil Durum Protokolü</h2>
              
              <div className="bg-red-100 border-2 border-red-500 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-red-800 mb-4 text-xl">🚨 Gaz Kaçağı Durumunda Yapılacaklar:</h3>
                <ol className="text-red-700 space-y-2 font-medium">
                  <li><strong>1. SAKİN KALUN</strong> - Panik yapmayın</li>
                  <li><strong>2. ATEŞ YAKMAYIN</strong> - Sigara, çakmak, kibrit kullanmayın</li>
                  <li><strong>3. ELEKTRİK DÜĞMESINE DOKUNMAYIN</strong> - Işık açıp kapamayın</li>
                  <li><strong>4. GAZ VANASINI KAPATIN</strong> - Ana gaz vanasını kapatın</li>
                  <li><strong>5. PENCERELERİ AÇIN</strong> - Havalandırma sağlayın</li>
                  <li><strong>6. BİNAYI BOŞALTIN</strong> - Güvenli mesafeye çıkın</li>
                  <li><strong>7. GAZ ŞİRKETİNİ ARAYIN</strong> - 187'yi arayın</li>
                </ol>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Yıllık Profesyonel Kontroller</h2>
              
              <p className="mb-4">
                Yılda en az bir kez profesyonel kontrol yaptırılması zorunludur:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-blue-800 mb-3">Profesyonel Kontrol Kapsamı:</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Tüm gaz tesisatının sızdırmazlık kontrolü</li>
                  <li>• Baca ve havalandırma sistemleri kontrolü</li>
                  <li>• Kombi ve ocak emniyet sistemleri kontrolü</li>
                  <li>• Basınç test ölçümleri</li>
                  <li>• Güvenlik belgesi düzenlenmesi</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Güvenlik Ekipmanları</h2>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-bold text-primary mb-2">Gaz Dedektörü</h4>
                  <p className="text-sm text-gray-600">Gaz kaçağını otomatik algılar</p>
                </div>
                
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-bold text-primary mb-2">Otomatik Vana</h4>
                  <p className="text-sm text-gray-600">Kaçak durumunda gazı keser</p>
                </div>
                
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-bold text-primary mb-2">Yangın Söndürücü</h4>
                  <p className="text-sm text-gray-600">Acil durum için gerekli</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Yasaklanan Davranışlar</h2>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-bold text-red-800 mb-3">❌ Asla Yapılmaması Gerekenler:</h3>
                <ul className="text-red-700 space-y-2">
                  <li>• Gaz tesisatında kendiniz değişiklik yapmak</li>
                  <li>• Yetkisiz kişilerden servis aldırmak</li>
                  <li>• Bacayı kapatmak veya daraltmak</li>
                  <li>• Havalandırma deliklerini kapatmak</li>
                  <li>• Kombi odasını depo olarak kullanmak</li>
                  <li>• Gaz borusuna herhangi bir şey asmak</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-primary text-white rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Doğalgaz Güvenlik Kontrolü Yaptırmak İstiyor musunuz?</h3>
              <p className="mb-6">
                Uzman ekibimiz doğalgaz tesisatınızın güvenlik kontrolünü yapar, gerekli belgeleri düzenler.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => window.open('tel:00000000000')}
                >
                  Güvenlik Kontrolü: 0000 000 00 00
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open('https://wa.me/900000000000?text=Doğalgaz güvenlik kontrolü yaptırmak istiyorum.')}
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

export default BlogPost8;