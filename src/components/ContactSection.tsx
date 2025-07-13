
import { Phone, MessageCircle, Clock, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Eksik Bilgi",
        description: "Lütfen tüm gerekli alanları doldurun.",
        variant: "destructive"
      });
      return;
    }

    // WhatsApp message
    const message = `Merhaba, web sitenizden ulaşıyorum.
    
Ad: ${formData.name}
Telefon: ${formData.phone}
Hizmet: ${formData.service}
Mesaj: ${formData.message || "Tesisat konusunda yardım almak istiyorum."}`;
    
    const whatsappUrl = `https://wa.me/905321234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Yönlendiriliyor",
      description: "WhatsApp'a yönlendiriliyorsunuz...",
    });
    
    setFormData({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="iletisim" className="py-16 lg:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-poppins">
            Tesisat Sorunları Beklemez! Vakit Kaybetmeyin.
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            7/24 hizmetimizle her an yanınızdayız. Hemen arayın veya mesaj gönderin!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8">
            {/* Emergency Call */}
            <Card className="bg-orange-500 border-none text-white">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl lg:text-2xl font-bold flex items-center justify-center">
                  <Phone className="mr-3 h-6 lg:h-8 w-6 lg:w-8" />
                  ACİL ARAMA HATTI
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl lg:text-3xl font-bold mb-4">0532 123 45 67</div>
                <Button 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-gray-100 font-bold w-full"
                  onClick={() => window.open('tel:05321234567')}
                >
                  <Phone className="mr-2 h-5 lg:h-6 w-5 lg:w-6" />
                  HEMEN ARA
                </Button>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="grid gap-4 lg:gap-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center gap-4">
                    <MessageCircle className="h-6 lg:h-8 w-6 lg:w-8 text-green-400 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-base lg:text-lg">WhatsApp Hızlı Mesaj</h3>
                      <p className="opacity-80 text-sm lg:text-base">Anında yanıt alın</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="mt-2 border-white text-white hover:bg-white hover:text-primary bg-white/10"
                        onClick={() => window.open('https://wa.me/905321234567')}
                      >
                        WhatsApp'ta Yaz
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 lg:h-8 w-6 lg:w-8 text-blue-400 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-base lg:text-lg">Çalışma Saatleri</h3>
                      <p className="opacity-80 text-sm lg:text-base">7/24 Kesintisiz Hizmet</p>
                      <p className="text-xs lg:text-sm opacity-70">Hafta sonu ve tatillerde de açığız</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 lg:h-8 w-6 lg:w-8 text-red-400 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-base lg:text-lg">Hizmet Bölgesi</h3>
                      <p className="opacity-80 text-sm lg:text-base">Kocaeli Geneli</p>
                      <p className="text-xs lg:text-sm opacity-70">Tüm ilçelere 30 dk içinde varış</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white text-gray-800">
            <CardHeader className="pb-4">
            <CardTitle className="text-xl lg:text-2xl font-bold text-primary text-center">
                İletişim Formu
              </CardTitle>
              <p className="text-center text-gray-600 text-sm lg:text-base">
                Acil olmayan durumlar için mesaj bırakın, en kısa sürede dönüş yapalım.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Adınız *
                  </label>
                  <Input
                    type="text"
                    placeholder="Adınızı yazın"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Hizmet Türü *
                  </label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    value={formData.service || ""}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    required
                  >
                    <option value="">Hizmet seçiniz</option>
                    <option value="su-kacagi-tespiti">Su Kaçağı Tespiti</option>
                    <option value="tikaniklik-acma">Tıkanıklık Açma</option>
                    <option value="petek-temizligi">Petek Temizliği</option>
                    <option value="musluk-tamiri">Musluk Tamiri</option>
                    <option value="klozet-tamiri">Klozet Tamiri</option>
                    <option value="batarya-degisimi">Batarya Değişimi</option>
                    <option value="kombi-servisi">Kombi Servisi</option>
                    <option value="acil-mudahale">Acil Müdahale</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Telefon Numaranız *
                  </label>
                  <Input
                    type="tel"
                    placeholder="0532 123 45 67"
                    pattern="[0-9]*"
                    value={formData.phone}
                    onChange={(e) => {
                      let value = e.target.value.replace(/[^0-9]/g, '');
                      if (value.length > 0 && !value.startsWith('5') && !value.startsWith('05')) {
                        if (value.startsWith('0')) {
                          value = '05' + value.substring(1);
                        } else {
                          value = '05' + value;
                        }
                      }
                      if (value.length > 11) value = value.substring(0, 11);
                      setFormData({...formData, phone: value});
                    }}
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mesajınız (İsteğe bağlı)
                  </label>
                  <Textarea
                    placeholder="Tesisat sorununuzu kısaca açıklayın..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full h-24"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Mesaj Gönder
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Form doldurduğunuzda WhatsApp'a yönlendirileceksiniz.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-orange-500 rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-4">
            ⚡ ACİL DURUM? HEMEN ARAYALIM! ⚡
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Su baskını, büyük kaçak, tıkanıklık - Hangi saatte olursa olsun yanınızdayız!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-12 py-4 text-xl transition-colors duration-300"
            onClick={() => window.open('tel:05321234567')}
          >
            <Phone className="mr-3 h-6 w-6" />
            0532 123 45 67
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
