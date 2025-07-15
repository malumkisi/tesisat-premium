import { useState } from "react";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight, Clock, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getBlogPostsByPage } from "@/data/blogData";

const Blog = () => {
  const currentPosts = getBlogPostsByPage(1, 6);

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
            {currentPosts.map((post) => (
              <Card 
                key={post.id} 
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => window.location.href = `/blog/${post.id}`}
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

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Tesisat Sorunlarınız İçin Bize Ulaşın
            </h2>
            <p className="text-gray-600 mb-8">
              7/24 acil tesisatçı hizmeti. Hızlı çözüm için WhatsApp'tan yazın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary hover:bg-primary/90 px-8 py-3"
                onClick={() => window.open('tel:00000000000')}
              >
                <Phone className="mr-2 h-4 w-4" />
                Hemen Arayın
              </Button>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
                onClick={() => window.open('https://wa.me/900000000000?text=Blog sayfasından ulaşıyorum. Tesisat konusunda bilgi almak istiyorum.')}
              >
                WhatsApp'tan Yazın
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