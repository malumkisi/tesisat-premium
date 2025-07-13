import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: gallery1,
      title: "Su Kaçağı Tespiti",
      description: "Modern cihazlarla profesyonel su kaçağı tespiti"
    },
    {
      src: gallery2,
      title: "Tesisatçı Araçları",
      description: "Kaliteli ve modern tesisatçı araç gereçleri"
    },
    {
      src: gallery3,
      title: "Banyo Renovasyonu",
      description: "Profesyonel banyo yenileme hizmetleri"
    },
    {
      src: gallery4,
      title: "Kombi Servisi",
      description: "Her marka kombi bakım ve onarım hizmetleri"
    },
    {
      src: gallery5,
      title: "Boru Döşemesi",
      description: "Kaliteli malzemelerle boru döşeme işleri"
    },
    {
      src: gallery6,
      title: "7/24 Acil Servis",
      description: "Günün her saati acil tesisat müdahalesi"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <>
      <section id="galeri" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-primary mb-4 flex items-center justify-center">
              <div className="w-12 h-px bg-primary mr-3"></div>
              ÇALIŞMALARIMIZ
              <div className="w-12 h-px bg-primary ml-3"></div>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4 font-poppins">
              Kaliteli İşçiliğimizin Fotoğrafları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gerçekleştirdiğimiz projeler ve profesyonel ekipmanlarımızla sunduğumuz kaliteli hizmet örnekleri.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
              onClick={() => {
                window.location.href = '/galeri';
              }}
            >
              Daha Fazlası İçin
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
            >
              <X className="h-6 w-6" />
            </Button>
            
            <div className="relative">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <Button
                variant="ghost"
                size="sm"
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
            
            <div className="text-center mt-4 text-white">
              <h3 className="text-xl font-semibold mb-2">{images[selectedImage].title}</h3>
              <p className="text-gray-300">{images[selectedImage].description}</p>
              <p className="text-sm text-gray-400 mt-2">
                {selectedImage + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;