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
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
      content: `
        <div class="prose max-w-none">
          <p class="lead">Su kaçağı belirtilerini erken fark ederek büyük hasarları önleyebilirsiniz. İşte dikkat etmeniz gereken 5 önemli işaret ve bu durumlarla karşılaştığınızda ne yapmanız gerektiği hakkında detaylı bilgiler...</p>
          
          <h2>1. Duvar ve Tavanda Nem Lekeler</h2>
          <p>Su kaçağının en belirgin işaretlerinden biri duvar ve tavanlarda görülen nem lekeleridir. Bu lekeler genellikle sarımsı veya kahverengi renkte olur ve zamanla büyür.</p>
          
          <h2>2. Su Faturasında Anormal Artış</h2>
          <p>Kullanım alışkanlıklarınızda değişiklik olmadığı halde su faturanızda %20'den fazla artış varsa, gizli bir su kaçağı olabilir.</p>
          
          <h2>3. Sürekli Su Sesi Duyma</h2>
          <p>Evde hiç musluk açık değilken bile su akma sesi duyuyorsanız, bu durum ciddi bir su kaçağı işareti olabilir.</p>
          
          <h2>4. Zemin ve Duvarlarda Çatlaklar</h2>
          <p>Su kaçağı nedeniyle zemin ve duvarlarda oluşan çatlaklar, sorunun ilerlemiş aşamada olduğunu gösterir.</p>
          
          <h2>5. Kötü Koku ve Küf Oluşumu</h2>
          <p>Sürekli nem nedeniyle oluşan küf ve kötü kokular da su kaçağının belirtileri arasındadır.</p>
          
          <h2>Ne Yapmalısınız?</h2>
          <p>Bu belirtilerden herhangi birini fark ettiğinizde hemen profesyonel yardım almalısınız. Kocaeli Uzman Tesisatçı olarak, kırmadan su kaçağı tespiti hizmeti sunuyoruz.</p>
          
          <div class="bg-blue-50 p-6 rounded-lg my-8">
            <h3 class="text-lg font-bold text-blue-900 mb-3">💡 Uzman Tavsiyesi</h3>
            <p class="text-blue-800">Su kaçağı şüphesi durumunda kesinlikle beklemyin. Erken müdahale hem maliyeti düşürür hem de büyük hasarları önler.</p>
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
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop",
      content: `
        <div class="prose max-w-none">
          <p class="lead">Modern teknoloji sayesinde artık evinizi kırmadan su kaçağı tespiti yapılabiliyor. Termal kamera, ses dinleme cihazları ve nem ölçüm teknolojileri ile duvar içindeki kaçakları tespit ediyoruz.</p>
          
          <h2>Termal Kamera Teknolojisi</h2>
          <p>Termal kameralar, duvar içindeki sıcaklık farklılıklarını tespit ederek su kaçağının yerini gösterir. Bu yöntem %90 doğruluk oranına sahiptir.</p>
          
          <h2>Ses Dinleme Cihazları</h2>
          <p>Özel mikrofonlar ile duvar içinden gelen su sızıntısı sesleri yakalanır ve kaçağın tam yeri belirlenir.</p>
          
          <h2>Nem Ölçüm Teknolojisi</h2>
          <p>Elektronik nem ölçerler ile duvar içindeki nem oranı ölçülür ve anormal değerler tespit edilir.</p>
          
          <h2>Avantajları</h2>
          <ul>
            <li>Ev tahrip olmaz</li>
            <li>Temiz çalışma</li>
            <li>Hızlı tespit</li>
            <li>Düşük maliyet</li>
            <li>Garantili sonuç</li>
          </ul>
          
          <div class="bg-green-50 p-6 rounded-lg my-8">
            <h3 class="text-lg font-bold text-green-900 mb-3">✅ Kesin Sonuç Garantisi</h3>
            <p class="text-green-800">Modern cihazlarımızla %90 doğruluk oranında su kaçağı tespiti yapıyoruz. Bulamazsak ücret almıyoruz!</p>
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
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      content: `
        <div class="prose max-w-none">
          <p class="lead">Petek temizliği ile doğalgaz faturanızdan %30'a kadar tasarruf edebilirsiniz. Petek temizliği fiyatları nasıl belirlenir, hangi faktörler etkilidir?</p>
          
          <h2>Kocaeli Petek Temizliği Fiyatları (2025)</h2>
          <ul>
            <li><strong>Tek daire (2-3 petek):</strong> 800-1200 TL</li>
            <li><strong>Orta daire (4-6 petek):</strong> 1200-1800 TL</li>
            <li><strong>Büyük daire (7+ petek):</strong> 1800-2500 TL</li>
          </ul>
          
          <h2>Fiyatı Etkileyen Faktörler</h2>
          <h3>1. Petek Sayısı</h3>
          <p>Evinizdeki petek sayısı fiyatın temel belirleyicisidir.</p>
          
          <h3>2. Kirlilik Derecesi</h3> 
          <p>Çok kirli petekler daha fazla emek ve kimyasal gerektirir.</p>
          
          <h3>3. Petek Tipi</h3>
          <p>Panel petekler daha kolay, döküm petekler daha zordur.</p>
          
          <h2>Kimyasal vs Makine Temizliği</h2>
          <h3>Kimyasal Temizlik</h3>
          <ul>
            <li>Daha ucuz</li>
            <li>Orta etkili</li>
            <li>Çevre dostu değil</li>
          </ul>
          
          <h3>Makine Temizliği</h3>
          <ul>
            <li>Daha pahalı</li>
            <li>Çok etkili</li>
            <li>Çevre dostu</li>
            <li>Uzun ömürlü</li>
          </ul>
          
          <h2>Ne Zaman Yaptırmalı?</h2>
          <ul>
            <li>Yılda bir kez mutlaka</li>
            <li>Eski binalar için 6 ayda bir</li>
            <li>Isınma veriminde düşüş varsa hemen</li>
          </ul>
          
          <div class="bg-orange-50 p-6 rounded-lg my-8">
            <h3 class="text-lg font-bold text-orange-900 mb-3">💰 Tasarruf Hesabı</h3>
            <p class="text-orange-800">Ortalama 1500 TL petek temizliği masrafı, aylık 200 TL doğalgaz tasarrufu sağlar. 8 ayda kendini amorti eder!</p>
          </div>
        </div>
      `
    }
  };

  useEffect(() => {
    if (id && blogPosts[id as keyof typeof blogPosts]) {
      setPost(blogPosts[id as keyof typeof blogPosts]);
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
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <Button
            variant="outline"
            className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary mb-6 backdrop-blur-sm"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Geri Dön
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 text-white/80 mb-6">
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
            
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="mb-8 rounded-2xl overflow-hidden">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-64 lg:h-96 object-cover"
              />
            </div>
            
            {/* Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Call to Action */}
            <div className="mt-12 bg-primary text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Profesyonel Yardım mı Gerekiyor?</h3>
              <p className="text-lg mb-6 opacity-90">
                Tesisat sorunlarınız için uzman desteği alın
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => window.open('tel:05321234567')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Hemen Ara: 0532 123 45 67
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open('https://wa.me/905321234567')}
                >
                  WhatsApp ile Yaz
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