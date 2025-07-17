import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowLeft, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogPost, BlogPost as BlogPostType } from "@/data/blogData";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const postData = getBlogPost(parseInt(id));
      setPost(postData || null);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Yükleniyor...</div>;
  }

  if (!id || !post) {
    return <Navigate to="/blog" replace />;
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
                  className="bg-white text-primary hover:bg-gray-100 border-white font-bold"
                  onClick={() => window.open('https://wa.me/900000000000?text=Blog yazısından ulaşıyorum. Tesisat konusunda yardım almak istiyorum.')}
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

export default BlogPost;