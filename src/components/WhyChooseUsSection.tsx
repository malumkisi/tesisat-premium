
import { Clock, Shield, DollarSign, Wrench, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Clock,
      title: "İstanbul'un Her Yerine 30 Dk Servis",
      description: "Geniş servis ağımızla Fatih'ten Kadıköy'e İstanbul'un tüm ilçelerine en geç 30 dakikada ulaşıyoruz.",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Garantili İşçilik",
      description: "Yaptığımız her tamirat, firmamızın 1 yıl servis garantisi altındadır. Gönlünüz rahat olsun.",
      color: "text-green-600"
    },
    {
      icon: DollarSign,
      title: "Fiyatı Başta Konuşuruz",
      description: "Sürpriz faturalara son! Sorunu tespit ettikten sonra yapacağımız işlemi ve ücretini size bildirir, onayınızla işe başlarız.",
      color: "text-purple-600"
    },
    {
      icon: Wrench,
      title: "Son Teknoloji Ekipman",
      description: "Evinizi kırmamak için milyonlarca liralık teknolojiye yatırım yaptık. Sorunları değil, çözümleri buluruz.",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-800 mb-4 font-poppins">
            Bizi Diğerlerinden Ayıran Özellikler
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neden binlerce İstanbul sakini tesisat sorunları için bizi tercih ediyor?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500 animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors ${feature.color}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary-800 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-primary-800 text-center mb-12 font-poppins">
            Sorununuzu 3 Basit Adımda Çözüyoruz
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                1
              </div>
              <h4 className="text-xl font-bold text-primary-800 mb-3">
                Arayın & Adres Verin
              </h4>
              <p className="text-gray-600">
                Bizi arayın, sorununuzu kısaca anlatın. Size en yakın ekibimiz yola çıksın.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                2
              </div>
              <h4 className="text-xl font-bold text-primary-800 mb-3">
                Ücretsiz Tespit ve Bilgilendirme
              </h4>
              <p className="text-gray-600">
                Adresinize gelip sorunu modern cihazlarla tespit edelim. Size çözüm yolunu ve net fiyatı sunalım.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                3
              </div>
              <h4 className="text-xl font-bold text-primary-800 mb-3">
                Hızlı Onarım ve Garanti
              </h4>
              <p className="text-gray-600">
                Onayınızla birlikte sorunu hızla ve temiz bir şekilde çözelim. Mutlu müşterilerimiz arasına katılın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
