import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const QuickMessage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

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
    
    const whatsappUrl = `https://wa.me/900000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: "", phone: "", message: "" });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-xl animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <div className="w-80 max-w-[calc(100vw-3rem)]">
          <div className="bg-white rounded-lg shadow-xl border">
            {/* Header */}
            <div className="bg-blue-600 text-white p-3 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium text-sm">Hızlı Mesaj</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-700 p-1"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Form */}
            <div className="p-4">
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="text"
                  placeholder="Adınız"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full"
                  required
                />
                
                <Input
                  type="tel"
                  placeholder="Telefon (05XX XXX XX XX)"
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
                
                <Textarea
                  placeholder="Mesajınız (isteğe bağlı)"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full h-16 resize-none"
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  WhatsApp'ta Gönder
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickMessage;