import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BlogPost3 = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <MobileHeader />
      
      {/* Back Button - Responsive for all screens */}
      <div className="pt-16 md:pt-4 bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-3">
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
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop"
              alt="Tıkanıklık açma teknolojileri"
              className="w-full h-56 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>8 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Kocaeli Uzman Tesisatçı</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>4 dk okuma</span>
              </div>
            </div>
            
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-4 leading-tight">
              Tıkanıklık Açma: Geleneksel Yöntemler vs Robot Teknolojisi
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Lavabo, banyo ve mutfak tıkanıklıklarını açmak için hangi yöntem daha etkili? 
              Geleneksel spiral makineler mi yoksa modern robot teknolojisi mi?
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-4">Geleneksel Spiral Makineler</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Geleneksel spiral makineler, onlarca yıldır tıkanıklık açma işlemlerinde kullanılan güvenilir araçlardır. 
              Bu makineler, dönen spiral teli sayesinde tıkanıklığa neden olan maddeyi parçalar ve iter.
            </p>

            <h3 className="text-xl font-semibold text-primary mb-3">Avantajları:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Daha ekonomik çözüm</li>
              <li>Çoğu tıkanıklık türünde etkili</li>
              <li>Hızlı işlem süresi</li>
              <li>Geniş çap aralığında kullanılabilir</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mb-3">Dezavantajları:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Boru duvarlarına zarar verebilir</li>
              <li>Çok sert tıkanıklıklarda yetersiz kalabilir</li>
              <li>Tıkanıklığı tamamen temizleyemeyebilir</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Modern Robot Teknolojisi</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Robot teknolojisi, tıkanıklık açma sektöründe devrim yaratan yenilikçi bir yaklaşımdır. 
              Kameralar ve özel kesici başlıklar sayesinde tıkanıklığı görüntüleyerek hassas müdahale yapar.
            </p>

            <h3 className="text-xl font-semibold text-primary mb-3">Avantajları:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Tıkanıklığı görüntüleyerek hassas müdahale</li>
              <li>Boru duvarlarına minimum zarar</li>
              <li>Kökleri ve sert birikintileri etkili temizler</li>
              <li>İşlem sonrası görüntü kaydı</li>
              <li>Daha kalıcı çözüm</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mb-3">Dezavantajları:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Daha yüksek maliyet</li>
              <li>Daha uzun işlem süresi</li>
              <li>Çok dar boruları temizleyemeyebilir</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Hangi Durumda Hangi Yöntemi Tercih Etmeli?</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-primary mb-3">Geleneksel Spiral İçin Uygun Durumlar:</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Basit organik tıkanıklıklar</li>
                <li>Acil müdahale gereken durumlar</li>
                <li>Bütçe kısıtlı projeler</li>
                <li>Dar çaplı borular</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-primary mb-3">Robot Teknolojisi İçin Uygun Durumlar:</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Kronik tıkanıklık sorunları</li>
                <li>Kök infiltrasyonu</li>
                <li>Sert kireç ve mineral birikintileri</li>
                <li>Ana kanalizasyon hatları</li>
                <li>Kalıcı çözüm istenen durumlar</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Uzman Önerisi</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Kocaeli Uzman Tesisatçı olarak, her iki yöntemi de bünyemizde bulunduruyoruz. 
              Tıkanıklığın türü, konumu ve aciliyet durumuna göre en uygun yöntemi öneriyoruz. 
              Öncelikle durum tespiti yaparak size en ekonomik ve etkili çözümü sunuyoruz.
            </p>

            <div className="bg-orange-100 border-l-4 border-orange-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">💡 Önemli Not</h3>
              <p className="text-orange-700">
                Tıkanıklık açma işlemi sonrasında, sorununuzun tekrar yaşanmaması için 
                bakım önerilerimizi mutlaka uygulayın. Düzenli bakım, uzun vadede hem 
                maliyetinizi düşürür hem de tekrarlayan sorunları önler.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-primary text-white rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Tıkanıklık Sorununuz mu Var?</h3>
            <p className="text-lg mb-6 opacity-90">
              Hangi yöntemin sizin için uygun olduğunu merak ediyorsanız, uzmanlarımızla görüşün. 
              Ücretsiz keşif ve öneri hizmeti veriyoruz.
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

export default BlogPost3;