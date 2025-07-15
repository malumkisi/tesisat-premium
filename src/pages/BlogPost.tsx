import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowLeft, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  
  const blogPosts = {
    "1": {
      id: 1,
      title: "Evde Su Kaçağı Nasıl Anlaşılır? 5 Kesin İşaret",
      date: "15 Ocak 2025",
      author: "Kocaeli Uzman Tesisatçı",
      readTime: "3 dk okuma",
      image: "/src/assets/su-kacagi-blog.jpg",
      content: `
        <div class="prose max-w-none">
          <p class="lead text-lg mb-6">Su kaçağı belirtilerini erken fark ederek büyük hasarları önleyebilirsiniz. İşte dikkat etmeniz gereken 5 önemli işaret ve bu durumlarla karşılaştığınızda ne yapmanız gerektiği hakkında detaylı bilgiler...</p>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">1. Duvar ve Tavanda Nem Lekeleri</h2>
          <p class="text-gray-700 mb-4">Su kaçağının en belirgin işaretlerinden biri duvar ve tavanlarda görülen nem lekeleridir. Bu lekeler genellikle sarımsı veya kahverengi renkte olur ve zamanla büyür.</p>
          
          <div class="bg-gray-50 p-4 rounded-lg my-6">
            <h3 class="font-semibold mb-2 text-primary">🔍 Dikkat Edilmesi Gerekenler:</h3>
            <ul class="list-disc pl-6 space-y-2">
              <li>Lekeler özellikle banyo ve mutfak duvarlarında görülür</li>
              <li>Başlangıçta küçük noktalar halinde belirler</li>
              <li>Zamanla büyüyerek büyük alanları kaplar</li>
              <li>Dokunulduğunda yumuşak ve nemli hissedilir</li>
            </ul>
          </div>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">2. Su Faturasında Anormal Artış</h2>
          <p class="text-gray-700 mb-4">Kullanım alışkanlıklarınızda değişiklik olmadığı halde su faturanızda %20'den fazla artış varsa, gizli bir su kaçağı olabilir.</p>
          <p class="text-gray-700 mb-4">Normal kullanım miktarınızı belirlemek için son 6 ayın faturalarını karşılaştırın. Mevsimsel değişiklikler dikkate alındığında bile anormal bir artış varsa, bu ciddi bir uyarı işaretidir.</p>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">3. Sürekli Su Sesi Duyma</h2>
          <p class="text-gray-700 mb-4">Evde hiç musluk açık değilken bile su akma sesi duyuyorsanız, bu durum ciddi bir su kaçağı işareti olabilir.</p>
          <p class="text-gray-700 mb-2">Bu sesler genellikle:</p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>Duvar içinden gelen hafif hışırtı sesleri</li>
            <li>Gece sessizlikte duyulan damla sesleri</li>
            <li>Sürekli akan su sesi</li>
          </ul>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">4. Zemin ve Döşemelerde Çatlaklar</h2>
          <p class="text-gray-700 mb-4">Su kaçağı zemin altında olduğunda, döşemelerde çatlaklar ve çökmeler görülebilir. Bu durum özellikle eski binalarda daha sık karşılaşılır.</p>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">5. Bahçede Anormal Yeşillik</h2>
          <p class="text-gray-700 mb-4">Bahçenizin belirli bölümlerinde anormal yeşillik varsa, bu da yeraltı su kaçağının işareti olabilir. Su kaçağı olan bölgeler daha yeşil ve canlı görünür.</p>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Ne Yapmalısınız?</h2>
          <p class="text-gray-700 mb-4">Bu belirtilerden herhangi birini fark ettiğinizde, hemen uzman bir tesisatçıdan yardım almalısınız. Erken müdahale, hem hasarı minimize eder hem de maliyeti düşürür.</p>
          
          <div class="bg-red-50 border-l-4 border-red-400 p-4 my-6">
            <p class="text-red-700 font-semibold">⚠️ Önemli Uyarı: Su kaçağını görmezden gelmek yapısal hasarlara yol açabilir!</p>
          </div>
        </div>
      `
    },
    "2": {
      id: 2,
      title: "Kırmadan Su Kaçağı Tespiti Gerçekten Mümkün mü?",
      date: "12 Ocak 2025",
      author: "Kocaeli Uzman Tesisatçı",
      readTime: "4 dk okuma",
      image: "/src/assets/tikaniklik-acma-blog.jpg",
      content: `
        <div class="prose max-w-none">
          <p class="lead text-lg mb-6">Modern teknoloji sayesinde artık evinizi kırmadan su kaçağı tespiti yapılabiliyor. Termal kamera, ses dinleme cihazları ve nem ölçüm teknolojileri ile duvar içindeki kaçakları tespit ediyoruz.</p>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Termal Kamera Teknolojisi</h2>
          <p class="text-gray-700 mb-4">Termal kameralar, duvar içindeki sıcaklık farklılıklarını tespit ederek su kaçağının yerini belirler. Su kaçağı olan bölgeler farklı sıcaklık değerleri gösterir.</p>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Ses Dinleme Cihazları</h2>
          <p class="text-gray-700 mb-4">Özel mikrofon sistemleri ile duvar içindeki su akış seslerini yakalayabiliriz. Bu cihazlar insan kulağının duyamadığı frekansları tespit eder.</p>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Nem Ölçüm Teknolojisi</h2>
          <p class="text-gray-700 mb-4">Dijital nem ölçerler ile duvar içindeki nem oranını tespit ederiz. Normal nem seviyelerinin üstündeki değerler kaçağı işaret eder.</p>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Avantajları</h2>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>%100 kırmadan tespit</li>
            <li>Hızlı sonuç (1-2 saat içinde)</li>
            <li>Minimum hasar</li>
            <li>Maliyet avantajı</li>
            <li>Kesin lokasyon tespiti</li>
          </ul>
          
          <div class="bg-green-50 border-l-4 border-green-400 p-4 my-6">
            <p class="text-green-700 font-semibold">✅ Modern teknoloji ile artık kırmadan %99 doğrulukla tespit yapabiliyoruz!</p>
          </div>
        </div>
      `
    },
    "3": {
      id: 3,
      title: "Kocaeli'de Petek Temizliği Fiyatları ve Nelere Dikkat Edilmeli?",
      date: "10 Ocak 2025",
      author: "Kocaeli Uzman Tesisatçı",
      readTime: "5 dk okuma",
      image: "/src/assets/kombi-bakimi-blog.jpg",
      content: `
        <div class="prose max-w-none">
          <p class="lead text-lg mb-6">Petek temizliği ile doğalgaz faturanızdan %30'a kadar tasarruf edebilirsiniz. İşte fiyatlar ve dikkat edilmesi gerekenler...</p>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Petek Temizliği Fiyatları 2025</h2>
          <p class="text-gray-700 mb-4">Kocaeli'de petek temizliği fiyatları şu faktörlere göre değişir:</p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>Petek sayısı (petek başına fiyatlandırma)</li>
            <li>Kirlenmişlik oranı</li>
            <li>Temizlik yöntemi (makine vs kimyasal)</li>
            <li>Ulaşım zorluğu</li>
            <li>Ek hizmetler (basınç testi vb.)</li>
          </ul>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Makine ile Temizlik vs Kimyasal Temizlik</h2>
          <p class="text-gray-700 mb-4">Her iki yöntemin de avantajları vardır:</p>
          
          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-800 mb-2">Makine ile Temizlik</h3>
              <ul class="list-disc pl-4 text-sm text-blue-700">
                <li>Hızlı ve etkili</li>
                <li>Çevre dostu</li>
                <li>Daha ekonomik</li>
              </ul>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h3 class="font-semibold text-green-800 mb-2">Kimyasal Temizlik</h3>
              <ul class="list-disc pl-4 text-sm text-green-700">
                <li>Çok kirli petekler için ideal</li>
                <li>Derinlemesine temizlik</li>
                <li>Uzun süre etkili</li>
              </ul>
            </div>
          </div>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Ne Zaman Temizletmelisiniz?</h2>
          <p class="text-gray-700 mb-4">Peteklerinizi yılda en az bir kez, tercihen ısıtma sezonundan önce temizletmelisiniz. Eylül-Ekim ayları ideal zamanlamadır.</p>
          
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <p class="text-yellow-700 font-semibold">💡 İpucu: Erken rezervasyon yaptırarak hem fiyat avantajı hem de randevu garantisi elde edebilirsiniz!</p>
          </div>
        </div>
      `
    },
    "4": {
      id: 4,
      title: "Tıkanıklık Açma: Geleneksel Yöntemler vs Robot Teknolojisi",
      date: "8 Ocak 2025",
      author: "Kocaeli Uzman Tesisatçı",
      readTime: "4 dk okuma",
      image: "/src/assets/tikaniklik-acma-blog.jpg",
      content: `
        <div class="prose max-w-none">
          <p class="lead text-lg mb-6">Tıkanıklık açma yöntemlerini karşılaştırıyoruz. Hangi durumda hangi yöntem daha etkili?</p>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Geleneksel Spiral Makineler</h2>
          <p class="text-gray-700 mb-4">Uzun yıllardır kullanılan, kanıtlanmış yöntemdir. Mekanik olarak tıkanıklığı parçalar ve temizler.</p>
          
          <div class="bg-blue-50 p-4 rounded-lg my-6">
            <h3 class="font-semibold text-blue-800 mb-2">Avantajları:</h3>
            <ul class="list-disc pl-6 text-blue-700">
              <li>Güçlü ve etkili</li>
              <li>Her türlü tıkanıklıkta kullanılabilir</li>
              <li>Ekonomik çözüm</li>
            </ul>
          </div>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Robot Teknolojisi</h2>
          <p class="text-gray-700 mb-4">Modern çözüm, kameralar ve hassas kontrollerle daha az hasar riski taşır.</p>
          
          <div class="bg-green-50 p-4 rounded-lg my-6">
            <h3 class="font-semibold text-green-800 mb-2">Avantajları:</h3>
            <ul class="list-disc pl-6 text-green-700">
              <li>Hassas kontrol</li>
              <li>Boru hasarı riski minimum</li>
              <li>Görsel kontrol imkanı</li>
              <li>Temiz çalışma</li>
            </ul>
          </div>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Hangi Durumda Hangi Yöntem?</h2>
          <p class="text-gray-700 mb-4">Tıkanıklığın türüne ve yerine göre en uygun yöntemi seçeriz:</p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Sert tıkanıklıklar:</strong> Spiral makine</li>
            <li><strong>Hassas borular:</strong> Robot teknolojisi</li>
            <li><strong>Derin tıkanıklıklar:</strong> Kombinasyon</li>
          </ul>
        </div>
      `
    },
    "5": {
      id: 5,
      title: "Kombi Bakımı Neden Önemli? Yıllık Bakım Rehberi",
      date: "5 Ocak 2025",
      author: "Kocaeli Uzman Tesisatçı",
      readTime: "6 dk okuma",
      image: "/src/assets/kombi-bakimi-blog.jpg",
      content: `
        <div class="prose max-w-none">
          <p class="lead text-lg mb-6">Düzenli kombi bakımı ile hem daha verimli ısınma sağlayabilir hem de arıza riskini minimize edebilirsiniz.</p>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Kombi Bakımında Neler Yapılır?</h2>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Yanma odası temizliği:</strong> Verimli yanma için kritik</li>
            <li><strong>Baca kontrolü:</strong> Güvenlik açısından önemli</li>
            <li><strong>Gaz bağlantı kontrolü:</strong> Kaçak tespiti</li>
            <li><strong>Su basıncı kontrolü:</strong> Sistem performansı</li>
            <li><strong>Filtre temizliği:</strong> Su kalitesi</li>
            <li><strong>Elektronik kart kontrolü:</strong> Sistem güvenilirliği</li>
          </ul>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Bakımın Faydaları</h2>
          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h3 class="font-semibold text-green-800 mb-2">💰 Ekonomik Faydalar</h3>
              <ul class="list-disc pl-4 text-sm text-green-700">
                <li>%20-30 gaz tasarrufu</li>
                <li>Arıza masraflarından korunma</li>
                <li>Uzun cihaz ömrü</li>
              </ul>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <h3 class="font-semibold text-red-800 mb-2">🛡️ Güvenlik Faydaları</h3>
              <ul class="list-disc pl-4 text-sm text-red-700">
                <li>Gaz kaçağı önleme</li>
                <li>Zehirlenme riski eliminasyonu</li>
                <li>Yangın riski azaltma</li>
              </ul>
            </div>
          </div>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Ne Zaman Yaptırmalı?</h2>
          <p class="text-gray-700 mb-4">İdeal zamanlama ısıtma sezonundan hemen öncesidir (Eylül-Ekim ayları). Bu sayede soğuk havalarda sorun yaşamazsınız.</p>
          
          <div class="bg-orange-50 border-l-4 border-orange-400 p-4 my-6">
            <p class="text-orange-700 font-semibold">⚠️ Garanti şartları gereği yıllık bakım zorunludur!</p>
          </div>
        </div>
      `
    },
    "6": {
      id: 6,
      title: "Musluk Tamiri mi Değişimi mi? Karar Verme Rehberi",
      date: "3 Ocak 2025",
      author: "Kocaeli Uzman Tesisatçı",
      readTime: "3 dk okuma",
      image: "/src/assets/musluk-tamiri-blog.jpg",
      content: `
        <div class="prose max-w-none">
          <p class="lead text-lg mb-6">Damlayan musluğunuz için tamir mi yaptırmalı yoksa yeni bir musluk mu almalısınız?</p>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Tamir Yeterli Olan Durumlar</h2>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Sadece damlatma sorunu:</strong> Conta değişimi yeterli</li>
            <li><strong>Sıkma problemi:</strong> Ayar sorunu</li>
            <li><strong>Göbek arızası:</strong> Parça değişimi</li>
            <li><strong>Musluk 5 yaşından küçük:</strong> Tamir ekonomik</li>
          </ul>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Değişim Şart Olan Durumlar</h2>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Kırık musluk gövdesi:</strong> Tamir imkansız</li>
            <li><strong>Eski tip musluklar:</strong> Yedek parça bulunamıyor</li>
            <li><strong>Sürekli sorun:</strong> 3 ayda bir tamir gerekiyor</li>
            <li><strong>10 yaşından eski:</strong> Değişim daha ekonomik</li>
          </ul>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Maliyet Analizi</h2>
          <div class="bg-gray-50 p-4 rounded-lg my-6">
            <h3 class="font-semibold mb-2">💡 Karar Verme Formülü:</h3>
            <p class="text-sm">Tamir maliyeti > Yeni musluk maliyetinin %50'si ise değişim tercih edilmeli</p>
          </div>
          
          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Önerilerimiz</h2>
          <p class="text-gray-700 mb-4">Uzun vadeli çözüm için doğru karar vermek önemlidir. Kaliteli bir musluk 15-20 yıl sorunsuz çalışır.</p>
          
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p class="text-blue-700 font-semibold">💧 Su tasarrufu açısından da modern musluklar %30 daha az su tüketir!</p>
          </div>
        </div>
      `
    }
  };

  useEffect(() => {
    if (id && blogPosts[id as keyof typeof blogPosts]) {
      setPost(blogPosts[id as keyof typeof blogPosts]);
    } else {
      setPost(null);
    }
  }, [id]);

  if (!id || !blogPosts[id as keyof typeof blogPosts]) {
    return <Navigate to="/blog" replace />;
  }

  if (!post) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <MobileHeader />
      
      <article className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog Button */}
            <Button 
              variant="outline" 
              className="mb-6 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => window.location.href = '/blog'}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Blog'a Dön
            </Button>

            {/* Blog Post Header */}
            <div className="mb-8">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-80 object-cover rounded-lg mb-6"
              />
              
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-primary-800 leading-tight">
                {post.title}
              </h1>
            </div>

            {/* Blog Post Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Call to Action */}
            <div className="mt-12 bg-primary text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Tesisat Sorunlarınız İçin Bize Ulaşın
              </h2>
              <p className="text-white/90 mb-6">
                7/24 acil tesisatçı hizmeti. Hızlı çözüm için hemen arayın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => window.open('tel:00000000000')}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Acil Arayın: 0000 000 00 00
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary animate-pulse"
                  onClick={() => window.open('https://wa.me/900000000000?text=Blog yazısından ulaşıyorum. Tesisat konusunda yardım almak istiyorum.')}
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

export default BlogPost;