
import { Droplets, Wrench, Thermometer, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Droplets,
      title: "Cihazla Su Kaçağı Tespiti",
      description: "İzmit, Gebze ve tüm Kocaeli'de evinizi şantiyeye çevirmeden, termal kamera ve dinleme cihazlarıyla su kaçağını noktasal olarak buluyoruz.",
      features: ["Kırmadan tespit", "Termal kamera", "Garantili sonuç"],
      link: "/su-kacagi-tespiti"
    },
    {
      icon: Settings,
      title: "Robotla Tıkanıklık Açma",
      description: "Mutfak, banyo, tuvalet ve pimaş giderlerinizi modern robot cihazlarla kırmadan, etrafa zarar vermeden açıyoruz.",
      features: ["Robot teknolojisi", "Temiz çalışma", "Hızlı çözüm"],
      link: "/tikaniklik-acma"
    },
    {
      icon: Thermometer,
      title: "Makineyle Petek Temizliği",
      description: "Doğalgaz faturanızdan tasarruf edin! Özel kimyasallar ve petek temizleme makinesi ile ısınma veriminizi %30 artırıyoruz.",
      features: ["%30 verim artışı", "Özel kimyasallar", "Makine temizliği"],
      link: "/petek-temizligi"
    },
    {
      icon: Wrench,
      title: "Musluk Tamiri",
      description: "Her marka musluk tamiri, yedek parça değişimi ve kurulum hizmetleri. Garantili yedek parçalarla profesyonel tamir.",
      features: ["Her marka", "Garantili parça", "Hızlı tamir"],
      link: "/musluk-tamiri"
    },
    {
      icon: Wrench,
      title: "Klozet Tamiri",
      description: "Klozet, rezervuar ve sifon tamiri. Her marka WC tamiri ve yedek parça değişimi. Hızlı ve garantili hizmet.",
      features: ["Sifon tamiri", "Rezervuar tamiri", "Garantili hizmet"],
      link: "/klozet-tamiri"
    },
    {
      icon: Settings,
      title: "Batarya Değişimi",
      description: "Mutfak, banyo ve lavabo bataryalarının değişimi ve tamiri. Her marka batarya montajı ve garantili hizmet.",
      features: ["Hızlı montaj", "Ürün garantisi", "Uygun fiyat"],
      link: "/batarya-degisimi"
    },
    {
      icon: Thermometer,
      title: "Kombi Servisi",
      description: "Her marka kombi bakımı, tamiri ve servisi. Vaillant, Baymak, Demirdöküm, Bosch ve tüm kombi markalarına hizmet.",
      features: ["Yıllık bakım", "Acil tamir", "7/24 servis"],
      link: "/kombi-servisi"
    },
    {
      icon: Settings,
      title: "Acil Müdahale",
      description: "7/24 acil tesisat müdahalesi. Su kaçağı, tıkanıklık, kombi arızası gibi acil durumlar için anında çözüm.",
      features: ["7/24 hizmet", "30 dk varış", "Acil çözüm"],
      link: "/acil-mudahale"
    }
  ];

  return (
    <section id="hizmetler" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-primary mb-4 flex items-center justify-center">
            <div className="w-12 h-px bg-primary mr-3"></div>
            SIHHİ TESİSAT HİZMETLERİ
            <div className="w-12 h-px bg-primary ml-3"></div>
          </div>
          <h2 className="text-4xl font-bold text-primary mb-4 font-poppins">
            Kocaeli Uzman Tesisatçı Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Kocaeli Uzman Tesisatçı hizmetlerinde tam anlamı ile müşteri odaklı çalışıyoruz. 
            Su ve Sıhhi Tesisat işlemlerinizin her anını başından sonuna kadar büyük bir titizlikle yürütüyor mağduriyetlerinizi ortadan kaldırıyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent cursor-pointer h-full">
              <CardContent className="p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <service.icon className="h-7 w-7 lg:h-8 lg:w-8 text-accent" />
                    </div>
                    <div className="mt-4 text-center">
                      <div className="text-xl lg:text-2xl font-bold text-primary">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}.
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg lg:text-xl font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm lg:text-base">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Detaylı Bilgi
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 text-center">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Su tesisatı günlük hayatı önemli derecede etkileyeceği gibi bu tesisat üstünde oluşan sorunlar da çevreye ciddi şekilde zarar verebilir. 
            <strong className="text-primary"> Bizimle hemen iletişime geçin sorunlarınızı kökten çözelim.</strong>
          </p>
        </div>

        {/* Emergency CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">ACİL DURUMDA HEMEN ARAYIN!</h3>
          <p className="text-lg lg:text-xl mb-6 text-white font-medium">7/24 Hizmet - 30 Dakika İçinde Adresinizde</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg w-full sm:w-auto"
              onClick={() => window.open('tel:00000000000')}
            >
              📞 ACİL ARAMA: 0000 000 00 00
            </Button>
            <Button 
              size="lg" 
              className="bg-green-500 text-white hover:bg-green-600 font-bold px-8 py-4 text-lg w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/905555555555')}
            >
              📱 WhatsApp Acil Mesaj
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
