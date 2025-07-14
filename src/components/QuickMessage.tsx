import { useState, useEffect } from "react";
import { MessageCircle, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const QuickMessage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  // Remove auto-open functionality

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      return;
    }

    // WhatsApp message
    const message = `Merhaba, web sitenizden hızlı mesaj gönderiyorum.
    
Ad: ${formData.name}
Telefon: ${formData.phone}
Mesaj: ${formData.message || "Tesisat konusunda bilgi almak istiyorum."}`;
    
    const whatsappUrl = `https://wa.me/905321234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: "", phone: "", message: "" });
    setIsOpen(false);
    setIsMinimized(true);
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50 md:right-4 md:bottom-4">
        <div className="relative">
          <Button
            onClick={() => setIsMinimized(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg animate-bounce-gentle"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
          <div className="absolute -top-12 -right-2 md:-left-8 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap max-w-[180px] md:max-w-none">
            Bir sorunuz mu var?
            <div className="absolute top-full right-4 md:left-1/2 md:right-auto transform md:-translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-[calc(100vw-2rem)] md:max-w-none">
      <div className="bg-white rounded-lg shadow-2xl border w-80 max-w-full animate-slide-in-right">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm">Bir sorunuz mu var?</h3>
              <p className="text-xs opacity-90 break-words">Aşağıdaki formu doldurun, temsilcimiz hemen dönüş yapsın.</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(true)}
            className="text-white hover:bg-blue-700 p-1 flex-shrink-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Form */}
        <div className="p-4">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <Input
                type="text"
                placeholder="Adınız"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full"
                required
              />
            </div>
            
            <div>
              <Input
                type="tel"
                placeholder="Telefon"
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
              <Textarea
                placeholder="Mesajınız"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full h-20"
              />
            </div>
            
            <div className="text-xs text-gray-500 mb-3">
              Bu formu göndererek SMS veya e-posta almayı kabul ediyorum. Veri kullanımı uygulanabilir.
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              Gönder
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickMessage;