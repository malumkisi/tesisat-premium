import { useParams } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";

const BlogPost2 = () => {
  const { id } = useParams();

  const blogPosts = {
    "4": {
      title: "Tıkanıklık Açma: Geleneksel Yöntemler vs Robot Teknolojisi",
      date: "8 Ocak 2025",
      author: "Kocaeli Uzman Tesisatçı",
      readTime: "4 dk okuma",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop",
      content: `
        <div class="prose max-w-none">
          <p class="text-lg text-gray-600 mb-6">Lavabo, banyo ve mutfak tıkanıklıklarını açmak için hangi yöntem daha etkili? Geleneksel spiral makineler mi yoksa modern robot teknolojisi mi? Her iki yöntemin avantaj ve dezavantajlarını karşılaştırıyoruz.</p>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Geleneksel Spiral Makineler</h2>
          <p class="mb-4">Yıllardır kullanılan geleneksel spiral makineler, mekanik güçle tıkanıklıkları açmaya odaklanır. Bu yöntem özellikle büyük atıklar için etkilidir.</p>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">Avantajları:</h3>
          <ul class="list-disc pl-6 mb-4">
            <li>Güçlü mekanik etki</li>
            <li>Hemen hemen her türlü tıkanıklığa etkili</li>
            <li>Düşük maliyet</li>
            <li>Yaygın erişilebilirlik</li>
          </ul>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">Dezavantajları:</h3>
          <ul class="list-disc pl-6 mb-6">
            <li>Boru hasarı riski</li>
            <li>Gürültülü çalışma</li>
            <li>Fiziksel güç gerektirmesi</li>
          </ul>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Robot Teknolojisi</h2>
          <p class="mb-4">Modern robot sistemler, kameralar ve hassas sensörlerle tıkanıklık noktasını tespit ederek minimal hasarla temizlik yapar.</p>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">Avantajları:</h3>
          <ul class="list-disc pl-6 mb-4">
            <li>Hassas ve güvenli temizlik</li>
            <li>Görüntülü inceleme imkanı</li>
            <li>Boru hasarı riski minimum</li>
            <li>Sessiz çalışma</li>
          </ul>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">Dezavantajları:</h3>
          <ul class="list-disc pl-6 mb-6">
            <li>Yüksek maliyet</li>
            <li>Tüm tıkanıklık türlerine uygun değil</li>
            <li>Özel eğitim gerektirmesi</li>
          </ul>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Hangi Durumda Hangi Yöntem?</h2>
          
          <div class="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 class="text-lg font-semibold text-blue-800 mb-3">Geleneksel Yöntem Tercih Edilmeli:</h3>
            <ul class="list-disc pl-6 text-blue-700">
              <li>Büyük ve sert atıklar için</li>
              <li>Acil durumlar için</li>
              <li>Bütçe sınırlı durumlarda</li>
            </ul>
          </div>
          
          <div class="bg-green-50 p-6 rounded-lg mb-6">
            <h3 class="text-lg font-semibold text-green-800 mb-3">Robot Teknolojisi Tercih Edilmeli:</h3>
            <ul class="list-disc pl-6 text-green-700">
              <li>Hassas borularda</li>
              <li>Tanı gerektiren durumlarda</li>
              <li>Periyodik bakım için</li>
            </ul>
          </div>
          
          <div class="bg-yellow-50 p-6 rounded-lg mt-8">
            <h3 class="text-lg font-semibold text-yellow-800 mb-3">🚨 Profesyonel Destek İçin</h3>
            <p class="text-yellow-700 mb-3">Tıkanıklık sorununuzun doğru yöntemle çözülmesi için uzman tesisatçı desteği alın.</p>
             <a href="tel:00000000000" class="inline-flex items-center bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
               📞 0000 000 00 00 - Hemen Arayın
            </a>
          </div>
        </div>
      `
    },
    "5": {
      title: "Kombi Bakımı Neden Önemli? Yıllık Bakım Rehberi",
      date: "5 Ocak 2025",
      author: "Kocaeli Uzman Tesisatçı",
      readTime: "6 dk okuma",
      image: "https://images.unsplash.com/photo-1558623143-ca2c4f95c9b6?w=800&h=400&fit=crop",
      content: `
        <div class="prose max-w-none">
          <p class="text-lg text-gray-600 mb-6">Düzenli kombi bakımı ile hem daha verimli ısınma sağlayabilir hem de arıza riskini minimize edebilirsiniz. Kombi bakımında neler yapılır? Hangi parçalar kontrol edilir? Yıllık bakım maliyeti ne kadar?</p>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Kombi Bakımının Önemi</h2>
          <p class="mb-4">Kombiler, evinizdeki en kritik sistemlerden biridir. Düzenli bakım yapmadığınızda hem verimlilik düşer hem de büyük arızalarla karşılaşabilirsiniz.</p>
          
          <div class="bg-red-50 p-6 rounded-lg mb-6">
            <h3 class="text-lg font-semibold text-red-800 mb-3">⚠️ Bakımsız Kombilerde Görülen Sorunlar</h3>
            <ul class="list-disc pl-6 text-red-700">
              <li>%30'a kadar verimlilik kaybı</li>
              <li>Beklenmedik arızalar</li>
              <li>Yüksek doğalgaz faturası</li>
              <li>Güvenlik riskleri</li>
            </ul>
          </div>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Yıllık Bakımda Yapılan İşlemler</h2>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">1. Temizlik İşlemleri</h3>
          <ul class="list-disc pl-6 mb-4">
            <li><strong>Yanma odası temizliği:</strong> Karbon birikintilerinin temizlenmesi</li>
            <li><strong>Baca kontrolü:</strong> Duman tahliyesinin kontrol edilmesi</li>
            <li><strong>Filtre temizliği:</strong> Su ve hava filtrelerinin temizlenmesi</li>
          </ul>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">2. Parça Kontrolleri</h3>
          <ul class="list-disc pl-6 mb-4">
            <li><strong>Gaz valfi:</strong> Güvenlik ve işlev kontrolü</li>
            <li><strong>Pompa sistemi:</strong> Su sirkülasyonu kontrol</li>
            <li><strong>Genleşme tankı:</strong> Basınç ayarı kontrolü</li>
            <li><strong>Elektriksel bağlantılar:</strong> Güvenlik kontrolü</li>
          </ul>
          
          <h3 class="text-xl font-semibold text-primary mt-6 mb-3">3. Performans Testleri</h3>
          <ul class="list-disc pl-6 mb-6">
            <li><strong>Yanma analizi:</strong> Verimlilik ölçümü</li>
            <li><strong>Basınç testi:</strong> Sistem sızdırmazlığı</li>
            <li><strong>Sıcaklık kontrolü:</strong> Optimum çalışma sıcaklığı</li>
          </ul>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Bakım Maliyetleri (2025)</h2>
          
          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-blue-50 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-blue-800 mb-3">Standart Bakım</h3>
              <p class="text-2xl font-bold text-blue-600 mb-2">350-500 TL</p>
              <ul class="text-sm text-blue-700">
                <li>• Temel temizlik</li>
                <li>• Filtre değişimi</li>
                <li>• Genel kontrol</li>
              </ul>
            </div>
            <div class="bg-green-50 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-green-800 mb-3">Detaylı Bakım</h3>
              <p class="text-2xl font-bold text-green-600 mb-2">600-850 TL</p>
              <ul class="text-sm text-green-700">
                <li>• Komple temizlik</li>
                <li>• Parça kontrolleri</li>
                <li>• Performans testleri</li>
              </ul>
            </div>
          </div>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Ne Zaman Bakım Yaptırmalı?</h2>
          
          <div class="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">🗓️ İdeal Bakım Zamanları</h3>
            <p class="text-gray-700 mb-3"><strong>Eylül-Ekim:</strong> Kış öncesi hazırlık</p>
            <p class="text-gray-700 mb-3"><strong>Mart-Nisan:</strong> Kış sonu kontrol</p>
            <p class="text-gray-700"><strong>Arıza durumunda:</strong> Anında müdahale</p>
          </div>
          
          <div class="bg-orange-50 p-6 rounded-lg mt-8">
            <h3 class="text-lg font-semibold text-orange-800 mb-3">🔧 Profesyonel Kombi Bakımı</h3>
            <p class="text-orange-700 mb-3">Kombinizin uzun ömürlü ve verimli çalışması için düzenli bakım yaptırın.</p>
             <a href="tel:00000000000" class="inline-flex items-center bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
               📞 0000 000 00 00 - Randevu Alın
            </a>
          </div>
        </div>
      `
    },
    "6": {
      title: "Musluk Tamiri mi Değişimi mi? Karar Verme Rehberi",
      date: "3 Ocak 2025",
      author: "Kocaeli Uzman Tesisatçı",
      readTime: "3 dk okuma",
      image: "/lovable-uploads/c346c760-853a-4ab1-9bc7-5f3d4efccd0f.png",
      content: `
        <div class="prose max-w-none">
          <p class="text-lg text-gray-600 mb-6">Damlayan musluğunuz için tamir mi yaptırmalı yoksa yeni bir musluk mu almalısınız? Hangi durumlarda tamir yeterli, hangi durumlarda değişim şart? Maliyet analizi ve uzun vadeli çözümler için rehber niteliğinde bilgiler.</p>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Musluk Sorunları ve Çözümleri</h2>
          <p class="mb-4">Musluk sorunları genellikle küçük başlar ama ihmal edildiğinde büyük problemlere yol açabilir. Doğru karar vermek için önce sorunu analiz etmek gerekir.</p>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Ne Zaman Tamir Yeterli?</h2>
          
          <div class="bg-green-50 p-6 rounded-lg mb-6">
            <h3 class="text-lg font-semibold text-green-800 mb-3">✅ Tamir Edilebilir Durumlar</h3>
            <ul class="list-disc pl-6 text-green-700">
              <li><strong>Hafif damla:</strong> Conta değişimi ile çözülebilir</li>
              <li><strong>Gevşek saplar:</strong> Sıkıştırma ile düzeltilir</li>
              <li><strong>Düşük su basıncı:</strong> Filtre temizliği yeterli</li>
              <li><strong>Küçük çizikler:</strong> Cila ile giderilebilir</li>
            </ul>
            <p class="text-green-800 font-semibold mt-4">💰 Tamir Maliyeti: 100-300 TL</p>
          </div>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Ne Zaman Değişim Şart?</h2>
          
          <div class="bg-red-50 p-6 rounded-lg mb-6">
            <h3 class="text-lg font-semibold text-red-800 mb-3">❌ Değişim Gereken Durumlar</h3>
            <ul class="list-disc pl-6 text-red-700">
              <li><strong>Sürekli arıza:</strong> Sık sık bozuluyorsa</li>
              <li><strong>Pas ve korozyon:</strong> Metal yorgunluğu</li>
              <li><strong>Gövde çatlağı:</strong> Onarılamaz hasar</li>
              <li><strong>10+ yaş:</strong> Eskimiş teknoloji</li>
              <li><strong>Yedek parça bulunamıyor:</strong> Üretim dışı modeller</li>
            </ul>
            <p class="text-red-800 font-semibold mt-4">💰 Değişim Maliyeti: 500-2000 TL</p>
          </div>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Maliyet Karşılaştırması</h2>
          
          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-blue-50 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-blue-800 mb-3">Tamir Seçeneği</h3>
              <ul class="text-sm text-blue-700 mb-4">
                <li>• Düşük ilk maliyet</li>
                <li>• Hızlı çözüm</li>
                <li>• Geçici rahatlama</li>
                <li>• Tekrar sorun riski</li>
              </ul>
              <p class="text-blue-600 font-bold">Kısa vadeli çözüm</p>
            </div>
            <div class="bg-green-50 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-green-800 mb-3">Değişim Seçeneği</h3>
              <ul class="text-sm text-green-700 mb-4">
                <li>• Yüksek ilk maliyet</li>
                <li>• Uzun montaj süresi</li>
                <li>• Kalıcı çözüm</li>
                <li>• Modern özellikler</li>
              </ul>
              <p class="text-green-600 font-bold">Uzun vadeli yatırım</p>
            </div>
          </div>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Karar Verme Matrisi</h2>
          
          <div class="bg-gray-50 p-6 rounded-lg mb-6">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b">
                  <th class="text-left py-2">Durum</th>
                  <th class="text-center py-2">Yaş</th>
                  <th class="text-center py-2">Sorun Sıklığı</th>
                  <th class="text-center py-2">Öneri</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="py-2">Hafif damla</td>
                  <td class="text-center py-2">0-5 yıl</td>
                  <td class="text-center py-2">İlk kez</td>
                  <td class="text-center py-2 text-green-600 font-semibold">TAMİR</td>
                </tr>
                <tr class="border-b">
                  <td class="py-2">Sık arıza</td>
                  <td class="text-center py-2">5-10 yıl</td>
                  <td class="text-center py-2">Ayda 1+</td>
                  <td class="text-center py-2 text-yellow-600 font-semibold">DEĞERLENDİR</td>
                </tr>
                <tr>
                  <td class="py-2">Büyük hasar</td>
                  <td class="text-center py-2">10+ yıl</td>
                  <td class="text-center py-2">Sürekli</td>
                  <td class="text-center py-2 text-red-600 font-semibold">DEĞİŞİM</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Modern Musluk Özellikleri</h2>
          <p class="mb-4">Yeni musluk alırken dikkat edilmesi gereken özellikler:</p>
          
          <ul class="list-disc pl-6 mb-6">
            <li><strong>Su tasarrufu:</strong> Aeretor sistemi ile %30 tasarruf</li>
            <li><strong>Antibakteriyel yüzey:</strong> Hijyen avantajı</li>
            <li><strong>Kolay temizlik:</strong> Kireç birikmez özellik</li>
            <li><strong>Uzun garanti:</strong> 5-10 yıl garanti</li>
          </ul>
          
          <div class="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 class="text-lg font-semibold text-blue-800 mb-3">🔧 Profesyonel Değerlendirme</h3>
            <p class="text-blue-700 mb-3">Musluğunuzun tamire değer olup olmadığını öğrenmek için uzman görüşü alın.</p>
             <a href="tel:00000000000" class="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
               📞 0000 000 00 00 - Ücretsiz Keşif
            </a>
          </div>
        </div>
      `
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return <div>Blog yazısı bulunamadı</div>;
  }

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
            Geri Dön
          </Button>
        </div>
      </div>

      <div className="py-6 lg:py-8">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            <div className="mb-6">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg mb-6"
              />
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-6 leading-tight">
                {post.title}
              </h1>
            </div>

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost2;