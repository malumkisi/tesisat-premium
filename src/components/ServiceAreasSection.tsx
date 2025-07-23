
import { MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServiceAreasSection = () => {
  const serviceAreas = [
    { name: "Fatih", time: "15-25 dk" },
    { name: "Beyoğlu", time: "20-30 dk" },
    { name: "Beşiktaş", time: "25-35 dk" },
    { name: "Şişli", time: "20-30 dk" },
    { name: "Kadıköy", time: "25-35 dk" },
    { name: "Üsküdar", time: "15-25 dk" },
    { name: "Bakırköy", time: "25-35 dk" },
    { name: "Zeytinburnu", time: "30-40 dk" },
    { name: "Pendik", time: "20-30 dk" },
    { name: "Maltepe", time: "35-45 dk" },
    { name: "Ataşehir", time: "45-60 dk" },
    { name: "Bahçelievler", time: "25-35 dk" },
    { name: "Avcılar", time: "30-40 dk" },
    { name: "Küçükçekmece", time: "35-45 dk" },
    { name: "Büyükçekmece", time: "40-50 dk" },
    { name: "Beylikdüzü", time: "35-45 dk" },
    { name: "Esenyurt", time: "40-50 dk" },
    { name: "Sarıyer", time: "30-40 dk" },
    { name: "Eyüpsultan", time: "25-35 dk" },
    { name: "Kağıthane", time: "20-30 dk" }
  ];

  return (
    <section id="bolgeler" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-800 mb-4 font-poppins">
            İstanbul'da Tüm Semtlere Hizmetimiz Vardır
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Geniş servis ağımızla İstanbul'un her köşesine hızla ulaşıyor, 7/24 kesintisiz hizmet veriyoruz.
          </p>
        </div>

        {/* Map Illustration */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mb-6">
            <MapPin className="h-16 w-16 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-primary-800 mb-4">
            İstanbul Geneli Hızlı Ulaşım
          </h3>
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {serviceAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-orange-200 animate-fade-in">
              <CardContent className="p-4 text-center">
                <div className="mb-3">
                  <MapPin className="h-6 w-6 text-orange-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-primary-800 text-lg">
                    {area.name}
                  </h4>
                </div>
                <div className="text-sm text-gray-600 bg-gray-50 rounded-full px-3 py-1">
                  Varış: {area.time}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Service Banner */}
        <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            🚨 ACİL DURUM SERVİSİ 🚨
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Su baskını, büyük kaçak veya acil tıkanıklık durumlarında
            <strong> EN KISA SÜREDE </strong>yanınızdayız!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3 animate-bounce-gentle"
              onClick={() => window.open('tel:00000000000')}
            >
              <Phone className="mr-2 h-5 w-5" />
              ACİL ARAMA: 0000 000 00 00
            </Button>
            
            <div className="text-sm opacity-75">
              * 7/24 kesintisiz hizmet * Anında müdahale
            </div>
          </div>
        </div>

        {/* Coverage Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-orange-500 mb-2">20</div>
            <div className="text-gray-600">İlçe Kapsamı</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-orange-500 mb-2">30dk</div>
            <div className="text-gray-600">Ortalama Varış</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-orange-500 mb-2">7/24</div>
            <div className="text-gray-600">Kesintisiz Hizmet</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
