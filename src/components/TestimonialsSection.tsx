
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ahmet Y.",
      location: "İzmit",
      rating: 5,
      comment: "İzmit'teki evimin banyosundaki su kaçağını yarım saatte bulup tamir ettiler. Hiçbir fayans kırılmadı. Kocaeli Uzman Tesisat ekibine teşekkürler.",
      service: "Su Kaçağı Tespiti"
    },
    {
      name: "Fatma S.",
      location: "Gebze",
      rating: 5,
      comment: "Gebze'deki dükkanımın mutfak gideri tıkanmıştı. Aradıktan 25 dakika sonra gelip robotla açtılar. Çok temiz ve profesyonel çalıştılar.",
      service: "Tıkanıklık Açma"
    },
    {
      name: "Mehmet K.",
      location: "Darıca",
      rating: 5,
      comment: "Petek temizliği için geldi ekip. Gerçekten %30 daha az doğalgaz harcadığımı fark ettim. Hem temiz çalıştılar hem de çok bilgiliydi.",
      service: "Petek Temizliği"
    },
    {
      name: "Ayşe D.",
      location: "Körfez",
      rating: 5,
      comment: "Gece yarısı musluk patladı, 20 dakikada geldiler. Hem hızlılar hem de çok makul fiyat verdiler. Kesinlikle tavsiye ederim.",
      service: "Acil Müdahale"
    },
    {
      name: "Ali R.",
      location: "Gölcük",
      rating: 5,
      comment: "Klozet arızası için çağırdık. Yedek parçaları yanlarında getirmişler, hemen değiştirip hallettiler. Çok memnun kaldık.",
      service: "Klozet Tamiri"
    },
    {
      name: "Zeynep T.",
      location: "Derince",
      rating: 5,
      comment: "Kombi servisi için aramıştım. Hem uygun fiyat hem de garantili iş yaptılar. Artık kış boyunca rahat rahat ısınıyoruz.",
      service: "Kombi Servisi"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-800 mb-4 font-poppins">
            Kocaeli'deki Müşterilerimiz Bizim İçin Ne Dedi?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Binlerce mutlu müşterimizin deneyimlerini okuyun ve güvenle tercih edin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-orange-500 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-bold text-primary-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-orange-600 font-medium bg-orange-50 px-2 py-1 rounded">
                        {testimonial.service}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">1000+</div>
              <div className="text-gray-600">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">5⭐</div>
              <div className="text-gray-600">Ortalama Puan</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">%98</div>
              <div className="text-gray-600">Memnuniyet Oranı</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">3 Yıl</div>
              <div className="text-gray-600">Deneyim</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
