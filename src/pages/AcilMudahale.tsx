import { Phone, Clock, CheckCircle, Shield, Wrench, AlertTriangle, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const AcilMudahale = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <MobileHeader />
      
      {/* Back Button */}
      <div className="pt-4 bg-red-600">
        <div className="container mx-auto px-4">
          <Link to="/#hizmetler">
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-white shadow-sm hover:shadow-md border-gray-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Hizmetlerimize Geri Dön
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins">
              Kocaeli Acil Tesisatçı
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              7/24 acil tesisat müdahalesi. Su kaçağı, tıkanıklık, kombi arızası gibi 
              acil durumlar için anında çözüm. 30 dakika içinde adresinizde!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg px-6 sm:px-8 py-4 rounded-full w-full sm:w-auto"
                onClick={() => window.open('tel:00000000000')}
              >
                <Phone className="mr-2 h-5 w-5" />
                <span className="text-center">ACİL ARAMA: 0000 000 00 00</span>
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg px-6 sm:px-8 py-4 rounded-full w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/900000000000')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Acil Mesaj
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Acil Müdahale Hizmetlerimiz
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Tesisat acil durumlarında 7/24 hizmet veriyoruz. Profesyonel ekibimizle 
              30 dakika içinde adresinizde olup sorununuzu çözüyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold text-primary mb-3">Su Kaçağı Acil</h3>
                <p className="text-gray-600 text-sm">
                  Duvar içi su kaçakları, boru patlaması, musluk kaçağı gibi acil durumlar
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold text-primary mb-3">Tıkanıklık Acil</h3>
                <p className="text-gray-600 text-sm">
                  Tuvalet, lavabo, mutfak gideri tıkanıklıkları için acil çözüm
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold text-primary mb-3">Kombi Arızası</h3>
                <p className="text-gray-600 text-sm">
                  Soğuk kış gecelerinde kombi arızalarına acil müdahale
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold text-primary mb-3">Su Kesimi</h3>
                <p className="text-gray-600 text-sm">
                  Ani su kesimi durumlarında hızlı çözüm ve onarım
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold text-primary mb-3">Sıhhi Tesisat Acil</h3>
                <p className="text-gray-600 text-sm">
                  Her türlü sıhhi tesisat acil durumu için 7/24 müdahale
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold text-primary mb-3">7/24 Destek</h3>
                <p className="text-gray-600 text-sm">
                  Gece gündüz, hafta sonu tatil demeden hizmet
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Process */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">
              Acil Müdahale Sürecimiz
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Arama</h4>
                <p className="text-gray-600 text-sm">0000 000 00 00 numarasını arayın</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Bilgi</h4>
                <p className="text-gray-600 text-sm">Sorunu ve adresinizi bildirin</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Yola Çıkış</h4>
                <p className="text-gray-600 text-sm">Ekibimiz hemen yola çıkar</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Çözüm</h4>
                <p className="text-gray-600 text-sm">30 dk içinde çözüm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">ACİL DURUMDA HEMEN ARAYIN!</h3>
          <p className="text-xl text-white/90 mb-8">
            7/24 Hizmet - 30 Dakika İçinde Adresinizde
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold text-xl px-12 py-6 rounded-full"
              onClick={() => window.open('tel:00000000000')}
            >
              <Phone className="mr-2 h-6 w-6" />
              0000 000 00 00
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold text-xl px-12 py-6 rounded-full"
              onClick={() => window.open('https://wa.me/900000000000')}
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcilMudahale;