import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Evde Su Kaçağı Nasıl Anlaşılır? 5 Kesin İşaret",
      excerpt: "Su kaçağı belirtilerini erken fark ederek büyük hasarları önleyebilirsiniz. İşte dikkat etmeniz gereken 5 önemli işaret...",
      date: "15 Ocak 2025",
      author: "Kocaeli Uzman Tesisat",
      readTime: "3 dk okuma",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Kırmadan Su Kaçağı Tespiti Gerçekten Mümkün mü?",
      excerpt: "Modern teknoloji sayesinde artık evinizi kırmadan su kaçağı tespiti yapılabiliyor. İşte kullanılan cihazlar ve yöntemler...",
      date: "12 Ocak 2025",
      author: "Kocaeli Uzman Tesisat",
      readTime: "4 dk okuma",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Kocaeli'de Petek Temizliği Fiyatları ve Nelere Dikkat Edilmeli?",
      excerpt: "Petek temizliği ile doğalgaz faturanızdan %30'a kadar tasarruf edebilirsiniz. İşte fiyatlar ve dikkat edilmesi gerekenler...",
      date: "10 Ocak 2025",
      author: "Kocaeli Uzman Tesisat",
      readTime: "5 dk okuma",
      image: "https://images.unsplash.com/photo-1558623143-ca2c4f95c9b6?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-primary mb-4 flex items-center justify-center">
            <div className="w-12 h-px bg-primary mr-3"></div>
            UZMAN İPUÇLARI
            <div className="w-12 h-px bg-primary ml-3"></div>
          </div>
          <h2 className="text-4xl font-bold text-primary mb-4 font-poppins">
            Tesisatçı Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tesisat sorunları ve çözümleri hakkında uzman ipuçları, pratik bilgiler ve sık sorulan sorular.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => window.location.href = `/blog/${post.id}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                
                <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
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
                    window.location.href = `/blog/${post.id}`;
                  }}
                >
                  Devamını Oku
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
            onClick={() => {
              window.location.href = '/blog';
            }}
          >
            Tüm Blog Yazılarını Gör
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;