import { Phone, Settings, CheckCircle, Clock, Shield, Wrench, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";

const KombiServisi = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <MobileHeader />
      
      {/* Back Button */}
      <div className="pt-4 bg-primary">
        <div className="container mx-auto px-4">
          <Button
            variant="outline"
            onClick={() => window.location.href = '/#hizmetler'}
            className="flex items-center gap-2 bg-white shadow-sm hover:shadow-md border-gray-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Hizmetlerimize Geri Dön
          </Button>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="h-10 w-10 text-accent-foreground" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins">
              Kocaeli Kombi Servisi
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Her marka kombi bakımı, tamiri ve servisi. Vaillant, Baymak, Demirdöküm, 
              Bosch ve tüm kombi markalarına hizmet.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-6 sm:px-8 py-4 rounded-full w-full sm:w-auto"
              onClick={() => window.open('tel:00000000000')}
            >
              <Phone className="mr-2 h-5 w-5" />
              <span className="text-center">Hemen Arayın: 0000 000 00 00</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Profesyonel Kombi Servisi
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Kombilerinizin düzenli bakımı, arıza tamiri ve yedek parça değişimi. 
                Yetkili servis kalitesinde hizmet, uygun fiyatlarla.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Her Marka Kombi</h4>
                    <p className="text-gray-600">Vaillant, Baymak, Demirdöküm, Bosch, Ariston ve diğerleri.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Yıllık Bakım</h4>
                    <p className="text-gray-600">Düzenli bakım ile kombi ömrünü uzatın.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Acil Tamir</h4>
                    <p className="text-gray-600">Kombi arızalarında 7/24 acil servis.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                alt="Kombi servisi"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">
              Kombi Servis Hizmetlerimiz
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Kombi Bakımı</h4>
                <p className="text-gray-600 text-sm">Yıllık periyodik bakım</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Arıza Tamiri</h4>
                <p className="text-gray-600 text-sm">Her türlü kombi arızası</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Yedek Parça</h4>
                <p className="text-gray-600 text-sm">Orijinal yedek parça değişimi</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Kombi Montajı</h4>
                <p className="text-gray-600 text-sm">Yeni kombi kurulumu</p>
              </div>
            </div>
          </div>

          {/* Advantages */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-accent mb-4" />
                <h4 className="font-bold text-primary mb-3">Garantili Hizmet</h4>
                <p className="text-gray-600">Tüm servis ve yedek parçalar garantili</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-accent mb-4" />
                <h4 className="font-bold text-primary mb-3">7/24 Acil Servis</h4>
                <p className="text-gray-600">Kombi arızalarında anında müdahale</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <Wrench className="h-12 w-12 text-accent mb-4" />
                <h4 className="font-bold text-primary mb-3">Uzman Teknisyenler</h4>
                <p className="text-gray-600">Sertifikalı kombi teknisyenleri</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Kombi Sorununuz mu Var?</h3>
          <p className="text-xl text-white/90 mb-8">
            Uzman teknisyenlerimiz hemen yardımcı olacak!
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-4 rounded-full"
            onClick={() => window.open('tel:00000000000')}
          >
            <Phone className="mr-2 h-5 w-5" />
            0000 000 00 00
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KombiServisi;