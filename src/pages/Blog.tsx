import { useState } from "react";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts = [
    {
      id: 1,
      title: "Evde Su Kaçağı Nasıl Anlaşılır? 5 Kesin İşaret",
      excerpt: "Su kaçağı belirtilerini erken fark ederek büyük hasarları önleyebilirsiniz. Duvar nemlenmeleri, anormal su faturası artışları, musluk damlamaları gibi işaretleri gözden kaçırmayın. İşte dikkat etmeniz gereken 5 önemli işaret ve bu durumlarla karşılaştığınızda ne yapmanız gerektiği hakkında detaylı bilgiler...",
      date: "15 Ocak 2025",
      author: "Kocaeli Uzman Tesisat",
      readTime: "3 dk okuma",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      slug: "su-kacagi-belirtileri"
    },
    {
      id: 2,
      title: "Kırmadan Su Kaçağı Tespiti Gerçekten Mümkün mü?",
      excerpt: "Modern teknoloji sayesinde artık evinizi kırmadan su kaçağı tespiti yapılabiliyor. Termal kamera, ses dinleme cihazları ve nem ölçüm teknolojileri ile duvar içindeki kaçakları tespit ediyoruz. İşte kullanılan cihazlar ve yöntemler hakkında merak ettikleriniz...",
      date: "12 Ocak 2025",
      author: "Kocaeli Uzman Tesisat",
      readTime: "4 dk okuma",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop",
      slug: "kirmadan-su-kacagi-tespiti"
    },
    {
      id: 3,
      title: "Kocaeli'de Petek Temizliği Fiyatları ve Nelere Dikkat Edilmeli?",
      excerpt: "Petek temizliği ile doğalgaz faturanızdan %30'a kadar tasarruf edebilirsiniz. Petek temizliği fiyatları nasıl belirlenir, hangi faktörler etkilidir? Makineyle temizlik mi yoksa kimyasal temizlik mi daha etkili? İşte fiyatlar ve dikkat edilmesi gerekenler...",
      date: "10 Ocak 2025",
      author: "Kocaeli Uzman Tesisatçı",
      readTime: "5 dk okuma",
      image: "https://images.unsplash.com/photo-1558623143-ca2c4f95c9b6?w=400&h=250&fit=crop",
      slug: "petek-temizligi-fiyatlari"
    },
    {
      id: 4,
      title: "Tıkanıklık Açma: Geleneksel Yöntemler vs Robot Teknolojisi",
      excerpt: "Lavabo, banyo ve mutfak tıkanıklıklarını açmak için hangi yöntem daha etkili? Geleneksel spiral makineler mi yoksa modern robot teknolojisi mi? Her iki yöntemin avantaj ve dezavantajlarını karşılaştırıyoruz. Hangi durumda hangi yöntem tercih edilmeli?",
      date: "8 Ocak 2025",
      author: "Kocaeli Uzman Tesisatçı",
      readTime: "4 dk okuma",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      slug: "tikaniklik-acma-yontemleri"
    },
    {
      id: 5,
      title: "Kombi Bakımı Neden Önemli? Yıllık Bakım Rehberi",
      excerpt: "Düzenli kombi bakımı ile hem daha verimli ısınma sağlayabilir hem de arıza riskini minimize edebilirsiniz. Kombi bakımında neler yapılır? Hangi parçalar kontrol edilir? Yıllık bakım maliyeti ne kadar? İşte kombi bakımı hakkında bilmeniz gerekenler...",
      date: "5 Ocak 2025",
      author: "Kocaeli Uzman Tesisatçı",
      readTime: "6 dk okuma",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      slug: "kombi-bakimi-rehberi"
    },
    {
      id: 6,
      title: "Musluk Tamiri mi Değişimi mi? Karar Verme Rehberi",
      excerpt: "Damlayan musluğunuz için tamir mi yaptırmalı yoksa yeni bir musluk mu almalısınız? Hangi durumlarda tamir yeterli, hangi durumlarda değişim şart? Maliyet analizi ve uzun vadeli çözümler için rehber niteliğinde bilgiler...",
      date: "3 Ocak 2025",
      author: "Kocaeli Uzman Tesisatçı",
      readTime: "3 dk okuma",
      image: "https://images.unsplash.com/photo-1571049751131-7c1a50b0ebf2?w=400&h=250&fit=crop",
      slug: "musluk-tamir-degisim"
    },
    {
      id: 4,
      title: "Tıkanıklık Açma: Geleneksel Yöntemler vs Robot Teknolojisi",
      excerpt: "Lavabo, banyo ve mutfak tıkanıklıklarını açmak için hangi yöntem daha etkili? Geleneksel spiral makineler mi yoksa modern robot teknolojisi mi? Her iki yöntemin avantaj ve dezavantajlarını karşılaştırıyoruz. Hangi durumda hangi yöntem tercih edilmeli?",
      date: "8 Ocak 2025",
      author: "Kocaeli Uzman Tesisatçı",
      readTime: "4 dk okuma",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Kombi Bakımı Neden Önemli? Yıllık Bakım Rehberi",
      excerpt: "Düzenli kombi bakımı ile hem daha verimli ısınma sağlayabilir hem de arıza riskini minimize edebilirsiniz. Kombi bakımında neler yapılır? Hangi parçalar kontrol edilir? Yıllık bakım maliyeti ne kadar? İşte kombi bakımı hakkında bilmeniz gerekenler...",
      date: "5 Ocak 2025",
      author: "Kocaeli Uzman Tesisatçı",
      readTime: "6 dk okuma",
      image: "https://images.unsplash.com/photo-1558623143-ca2c4f95c9b6?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Musluk Tamiri mi Değişimi mi? Karar Verme Rehberi",
      excerpt: "Damlayan musluğunuz için tamir mi yaptırmalı yoksa yeni bir musluk mu almalısınız? Hangi durumlarda tamir yeterli, hangi durumlarda değişim şart? Maliyet analizi ve uzun vadeli çözümler için rehber niteliğinde bilgiler...",
      date: "3 Ocak 2025",
      author: "Kocaeli Uzman Tesisatçı",
      readTime: "3 dk okuma",
      image: "/lovable-uploads/c346c760-853a-4ab1-9bc7-5f3d4efccd0f.png"
    }
  ];

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <MobileHeader />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins">
              Tesisatçı Blog
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Tesisat sorunları ve çözümleri hakkında uzman ipuçları, 
              pratik bilgiler ve sık sorulan sorular.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 6).map((post) => (
              <Card 
                key={post.id} 
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = `/blog/${post.id}`;
                  link.click();
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.readTime}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-800 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                 <Button 
                  variant="outline" 
                  className="group/btn w-full border-primary text-primary hover:bg-primary hover:text-white"
                onClick={(e) => {
                    e.stopPropagation();
                    const link = document.createElement('a');
                    link.href = `/blog/${post.id}`;
                    link.click();
                  }}
                 >
                    Devamını Oku
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="text-center mt-12">
            <div className="flex justify-center items-center gap-4">
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                disabled
              >
                Önceki Sayfa
              </Button>
              <div className="flex gap-2">
                <Button 
                  size="sm"
                  className="bg-primary text-white"
                >
                  1
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => window.location.href = '/blog2'}
                >
                  2
                </Button>
              </div>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => window.location.href = '/blog2'}
              >
                Sonraki Sayfa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Blog Güncellemelerini Kaçırmayın
            </h2>
            <p className="text-gray-600 mb-8">
              Yeni blog yazılarımızdan haberdar olmak için bültenimize abone olun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="xxx@xxxxx.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 px-6 py-3">
                Abone Ol
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;