export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Evde Su Kaçağı Nasıl Anlaşılır? 5 Kesin İşaret",
    excerpt: "Su kaçağı belirtilerini erken fark ederek büyük hasarları önleyebilirsiniz. Duvar nemlenmeleri, anormal su faturası artışları, musluk damlamaları gibi işaretleri gözden kaçırmayın. İşte dikkat etmeniz gereken 5 önemli işaret ve bu durumlarla karşılaştığınızda ne yapmanız gerektiği hakkında detaylı bilgiler...",
    date: "15 Ocak 2025",
    author: "Kocaeli Uzman Tesisat",
    readTime: "3 dk okuma",
    image: "/src/assets/su-kacagi-blog.jpg",
    content: `
      <div class="prose max-w-none">
        <p class="lead text-lg mb-6">Su kaçağı belirtilerini erken fark ederek büyük hasarları önleyebilirsiniz. İşte dikkat etmeniz gereken 5 önemli işaret ve bu durumlarla karşılaştığınızda ne yapmanız gerektiği hakkında detaylı bilgiler...</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">1. Duvar ve Tavanda Nem Lekeleri</h2>
        <p class="text-gray-700 mb-4">Su kaçağının en belirgin işaretlerinden biri duvar ve tavanlarda görülen nem lekeleridir. Bu lekeler genellikle sarımsı veya kahverengi renkte olur ve zamanla büyür.</p>
        
        <div class="bg-gray-50 p-4 rounded-lg my-6">
          <h3 class="font-semibold mb-2 text-primary">🔍 Dikkat Edilmesi Gerekenler:</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Lekeler özellikle banyo ve mutfak duvarlarında görülür</li>
            <li>Başlangıçta küçük noktalar halinde belirler</li>
            <li>Zamanla büyüyerek büyük alanları kaplar</li>
            <li>Dokunulduğunda yumuşak ve nemli hissedilir</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">2. Su Faturasında Anormal Artış</h2>
        <p class="text-gray-700 mb-4">Kullanım alışkanlıklarınızda değişiklik olmadığı halde su faturanızda %20'den fazla artış varsa, gizli bir su kaçağı olabilir.</p>
        <p class="text-gray-700 mb-4">Normal kullanım miktarınızı belirlemek için son 6 ayın faturalarını karşılaştırın. Mevsimsel değişiklikler dikkate alındığında bile anormal bir artış varsa, bu ciddi bir uyarı işaretidir.</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">3. Sürekli Su Sesi Duyma</h2>
        <p class="text-gray-700 mb-4">Evde hiç musluk açık değilken bile su akma sesi duyuyorsanız, bu durum ciddi bir su kaçağı işareti olabilir.</p>
        <p class="text-gray-700 mb-2">Bu sesler genellikle:</p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Duvar içinden gelen hafif hışırtı sesleri</li>
          <li>Gece sessizlikte duyulan damla sesleri</li>
          <li>Sürekli akan su sesi</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">4. Zemin ve Döşemelerde Çatlaklar</h2>
        <p class="text-gray-700 mb-4">Su kaçağı zemin altında olduğunda, döşemelerde çatlaklar ve çökmeler görülebilir. Bu durum özellikle eski binalarda daha sık karşılaşılır.</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">5. Bahçede Anormal Yeşillik</h2>
        <p class="text-gray-700 mb-4">Bahçenizin belirli bölümlerinde anormal yeşillik varsa, bu da yeraltı su kaçağının işareti olabilir. Su kaçağı olan bölgeler daha yeşil ve canlı görünür.</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Ne Yapmalısınız?</h2>
        <p class="text-gray-700 mb-4">Bu belirtilerden herhangi birini fark ettiğinizde, hemen uzman bir tesisatçıdan yardım almalısınız. Erken müdahale, hem hasarı minimize eder hem de maliyeti düşürür.</p>
        
        <div class="bg-red-50 border-l-4 border-red-400 p-4 my-6">
          <p class="text-red-700 font-semibold">⚠️ Önemli Uyarı: Su kaçağını görmezden gelmek yapısal hasarlara yol açabilir!</p>
        </div>
      </div>
    `
  },
  {
    id: 2,
    title: "Kırmadan Su Kaçağı Tespiti Gerçekten Mümkün mü?",
    excerpt: "Modern teknoloji sayesinde artık evinizi kırmadan su kaçağı tespiti yapılabiliyor. Termal kamera, ses dinleme cihazları ve nem ölçüm teknolojileri ile duvar içindeki kaçakları tespit ediyoruz. İşte kullanılan cihazlar ve yöntemler hakkında merak ettikleriniz...",
    date: "12 Ocak 2025",
    author: "Kocaeli Uzman Tesisat",
    readTime: "4 dk okuma",
    image: "/src/assets/tikaniklik-acma-blog.jpg",
    content: `
      <div class="prose max-w-none">
        <p class="lead text-lg mb-6">Modern teknoloji sayesinde artık evinizi kırmadan su kaçağı tespiti yapılabiliyor. Termal kamera, ses dinleme cihazları ve nem ölçüm teknolojileri ile duvar içindeki kaçakları tespit ediyoruz.</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Termal Kamera Teknolojisi</h2>
        <p class="text-gray-700 mb-4">Termal kameralar, duvar içindeki sıcaklık farklılıklarını tespit ederek su kaçağının yerini belirler. Su kaçağı olan bölgeler farklı sıcaklık değerleri gösterir.</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Ses Dinleme Cihazları</h2>
        <p class="text-gray-700 mb-4">Özel mikrofon sistemleri ile duvar içindeki su akış seslerini yakalayabiliriz. Bu cihazlar insan kulağının duyamadığı frekansları tespit eder.</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Nem Ölçüm Teknolojisi</h2>
        <p class="text-gray-700 mb-4">Dijital nem ölçerler ile duvar içindeki nem oranını tespit ederiz. Normal nem seviyelerinin üstündeki değerler kaçağı işaret eder.</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Avantajları</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>%100 kırmadan tespit</li>
          <li>Hızlı sonuç (1-2 saat içinde)</li>
          <li>Minimum hasar</li>
          <li>Maliyet avantajı</li>
          <li>Kesin lokasyon tespiti</li>
        </ul>
        
        <div class="bg-green-50 border-l-4 border-green-400 p-4 my-6">
          <p class="text-green-700 font-semibold">✅ Modern teknoloji ile artık kırmadan %99 doğrulukla tespit yapabiliyoruz!</p>
        </div>
      </div>
    `
  },
  {
    id: 3,
    title: "Kocaeli'de Petek Temizliği Fiyatları ve Nelere Dikkat Edilmeli?",
    excerpt: "Petek temizliği ile doğalgaz faturanızdan %30'a kadar tasarruf edebilirsiniz. Petek temizliği fiyatları nasıl belirlenir, hangi faktörler etkilidir? Makineyle temizlik mi yoksa kimyasal temizlik mi daha etkili? İşte fiyatlar ve dikkat edilmesi gerekenler...",
    date: "10 Ocak 2025",
    author: "Kocaeli Uzman Tesisatçı",
    readTime: "5 dk okuma",
    image: "/src/assets/kombi-bakimi-blog.jpg",
    content: `
      <div class="prose max-w-none">
        <p class="lead text-lg mb-6">Petek temizliği ile doğalgaz faturanızdan %30'a kadar tasarruf edebilirsiniz. İşte fiyatlar ve dikkat edilmesi gerekenler...</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Petek Temizliği Fiyatları 2025</h2>
        <p class="text-gray-700 mb-4">Kocaeli'de petek temizliği fiyatları şu faktörlere göre değişir:</p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Petek sayısı (petek başına fiyatlandırma)</li>
          <li>Kirlenmişlik oranı</li>
          <li>Temizlik yöntemi (makine vs kimyasal)</li>
          <li>Ulaşım zorluğu</li>
          <li>Ek hizmetler (basınç testi vb.)</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Makine ile Temizlik vs Kimyasal Temizlik</h2>
        <p class="text-gray-700 mb-4">Her iki yöntemin de avantajları vardır:</p>
        
        <div class="grid md:grid-cols-2 gap-6 my-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h3 class="font-semibold text-blue-800 mb-2">Makine ile Temizlik</h3>
            <ul class="list-disc pl-4 text-sm text-blue-700">
              <li>Hızlı ve etkili</li>
              <li>Çevre dostu</li>
              <li>Daha ekonomik</li>
            </ul>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-semibold text-green-800 mb-2">Kimyasal Temizlik</h3>
            <ul class="list-disc pl-4 text-sm text-green-700">
              <li>Çok kirli petekler için ideal</li>
              <li>Derinlemesine temizlik</li>
              <li>Uzun süre etkili</li>
            </ul>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Ne Zaman Temizletmelisiniz?</h2>
        <p class="text-gray-700 mb-4">Peteklerinizi yılda en az bir kez, tercihen ısıtma sezonundan önce temizletmelisiniz. Eylül-Ekim ayları ideal zamanlamadır.</p>
        
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p class="text-yellow-700 font-semibold">💡 İpucu: Erken rezervasyon yaptırarak hem fiyat avantajı hem de randevu garantisi elde edebilirsiniz!</p>
        </div>
      </div>
    `
  },
  {
    id: 4,
    title: "Tıkanıklık Açma: Geleneksel Yöntemler vs Robot Teknolojisi",
    excerpt: "Lavabo, banyo ve mutfak tıkanıklıklarını açmak için hangi yöntem daha etkili? Geleneksel spiral makineler mi yoksa modern robot teknolojisi mi? Her iki yöntemin avantaj ve dezavantajlarını karşılaştırıyoruz. Hangi durumda hangi yöntem tercih edilmeli?",
    date: "8 Ocak 2025",
    author: "Kocaeli Uzman Tesisatçı",
    readTime: "4 dk okuma",
    image: "/src/assets/tikaniklik-acma-blog.jpg",
    content: `
      <div class="prose max-w-none">
        <p class="lead text-lg mb-6">Tıkanıklık açma yöntemlerini karşılaştırıyoruz. Hangi durumda hangi yöntem daha etkili?</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Geleneksel Spiral Makineler</h2>
        <p class="text-gray-700 mb-4">Uzun yıllardır kullanılan, kanıtlanmış yöntemdir. Mekanik olarak tıkanıklığı parçalar ve temizler.</p>
        
        <div class="bg-blue-50 p-4 rounded-lg my-6">
          <h3 class="font-semibold text-blue-800 mb-2">Avantajları:</h3>
          <ul class="list-disc pl-6 text-blue-700">
            <li>Güçlü ve etkili</li>
            <li>Her türlü tıkanıklıkta kullanılabilir</li>
            <li>Ekonomik çözüm</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Robot Teknolojisi</h2>
        <p class="text-gray-700 mb-4">Modern çözüm, kameralar ve hassas kontrollerle daha az hasar riski taşır.</p>
        
        <div class="bg-green-50 p-4 rounded-lg my-6">
          <h3 class="font-semibold text-green-800 mb-2">Avantajları:</h3>
          <ul class="list-disc pl-6 text-green-700">
            <li>Hassas kontrol</li>
            <li>Boru hasarı riski minimum</li>
            <li>Görsel kontrol imkanı</li>
            <li>Temiz çalışma</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Hangi Durumda Hangi Yöntem?</h2>
        <p class="text-gray-700 mb-4">Tıkanıklığın türüne ve yerine göre en uygun yöntemi seçeriz:</p>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Sert tıkanıklıklar:</strong> Spiral makine</li>
          <li><strong>Hassas borular:</strong> Robot teknolojisi</li>
          <li><strong>Derin tıkanıklıklar:</strong> Kombinasyon</li>
        </ul>
      </div>
    `
  },
  {
    id: 5,
    title: "Kombi Bakımı Neden Önemli? Yıllık Bakım Rehberi",
    excerpt: "Düzenli kombi bakımı ile hem daha verimli ısınma sağlayabilir hem de arıza riskini minimize edebilirsiniz. Kombi bakımında neler yapılır? Hangi parçalar kontrol edilir? Yıllık bakım maliyeti ne kadar? İşte kombi bakımı hakkında bilmeniz gerekenler...",
    date: "5 Ocak 2025",
    author: "Kocaeli Uzman Tesisatçı",
    readTime: "6 dk okuma",
    image: "/src/assets/kombi-bakimi-blog.jpg",
    content: `
      <div class="prose max-w-none">
        <p class="lead text-lg mb-6">Düzenli kombi bakımı ile hem daha verimli ısınma sağlayabilir hem de arıza riskini minimize edebilirsiniz.</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Kombi Bakımında Neler Yapılır?</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Yanma odası temizliği:</strong> Verimli yanma için kritik</li>
          <li><strong>Baca kontrolü:</strong> Güvenlik açısından önemli</li>
          <li><strong>Gaz bağlantı kontrolü:</strong> Kaçak tespiti</li>
          <li><strong>Su basıncı kontrolü:</strong> Sistem performansı</li>
          <li><strong>Filtre temizliği:</strong> Su kalitesi</li>
          <li><strong>Elektronik kart kontrolü:</strong> Sistem güvenilirliği</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Bakımın Faydaları</h2>
        <div class="grid md:grid-cols-2 gap-6 my-6">
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-semibold text-green-800 mb-2">💰 Ekonomik Faydalar</h3>
            <ul class="list-disc pl-4 text-sm text-green-700">
              <li>%20-30 gaz tasarrufu</li>
              <li>Arıza masraflarından korunma</li>
              <li>Uzun cihaz ömrü</li>
            </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg">
            <h3 class="font-semibold text-red-800 mb-2">🛡️ Güvenlik Faydaları</h3>
            <ul class="list-disc pl-4 text-sm text-red-700">
              <li>Gaz kaçağı önleme</li>
              <li>Zehirlenme riski eliminasyonu</li>
              <li>Yangın riski azaltma</li>
            </ul>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Ne Zaman Yaptırmalı?</h2>
        <p class="text-gray-700 mb-4">İdeal zamanlama ısıtma sezonundan hemen öncesidir (Eylül-Ekim ayları). Bu sayede soğuk havalarda sorun yaşamazsınız.</p>
        
        <div class="bg-orange-50 border-l-4 border-orange-400 p-4 my-6">
          <p class="text-orange-700 font-semibold">⚠️ Garanti şartları gereği yıllık bakım zorunludur!</p>
        </div>
      </div>
    `
  },
  {
    id: 6,
    title: "Musluk Tamiri mi Değişimi mi? Karar Verme Rehberi",
    excerpt: "Damlayan musluğunuz için tamir mi yaptırmalı yoksa yeni bir musluk mu almalısınız? Hangi durumlarda tamir yeterli, hangi durumlarda değişim şart? Maliyet analizi ve uzun vadeli çözümler için rehber niteliğinde bilgiler...",
    date: "3 Ocak 2025",
    author: "Kocaeli Uzman Tesisatçı",
    readTime: "3 dk okuma",
    image: "/src/assets/musluk-tamiri-blog.jpg",
    content: `
      <div class="prose max-w-none">
        <p class="lead text-lg mb-6">Damlayan musluğunuz için tamir mi yaptırmalı yoksa yeni bir musluk mu almalısınız?</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Tamir Yeterli Olan Durumlar</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Sadece damlatma sorunu:</strong> Conta değişimi yeterli</li>
          <li><strong>Sıkma problemi:</strong> Ayar sorunu</li>
          <li><strong>Göbek arızası:</strong> Parça değişimi</li>
          <li><strong>Musluk 5 yaşından küçük:</strong> Tamir ekonomik</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Değişim Şart Olan Durumlar</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Kırık musluk gövdesi:</strong> Tamir imkansız</li>
          <li><strong>Eski tip musluklar:</strong> Yedek parça bulunamıyor</li>
          <li><strong>Sürekli sorun:</strong> 3 ayda bir tamir gerekiyor</li>
          <li><strong>10 yaşından eski:</strong> Değişim daha ekonomik</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Maliyet Analizi</h2>
        <div class="bg-gray-50 p-4 rounded-lg my-6">
          <h3 class="font-semibold mb-2">💡 Karar Verme Formülü:</h3>
          <p class="text-sm">Tamir maliyeti > Yeni musluk maliyetinin %50'si ise değişim tercih edilmeli</p>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Önerilerimiz</h2>
        <p class="text-gray-700 mb-4">Uzun vadeli çözüm için doğru karar vermek önemlidir. Kaliteli bir musluk 15-20 yıl sorunsuz çalışır.</p>
        
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
          <p class="text-blue-700 font-semibold">💧 Su tasarrufu açısından da modern musluklar %30 daha az su tüketir!</p>
        </div>
      </div>
    `
  },
  {
    id: 7,
    title: "Petek Temizliği Sonrası Dikkat Edilmesi Gerekenler",
    excerpt: "Petek temizliği sonrasında sistemin düzgün çalışması için dikkat edilmesi gereken önemli noktalar. Hava tahliyesi, basınç kontrolü ve ilk çalıştırma işlemleri nasıl yapılır?",
    date: "28 Aralık 2024",
    author: "Kocaeli Uzman Tesisatçı",
    readTime: "4 dk okuma",
    image: "/src/assets/gallery-1.jpg",
    content: `
      <div class="prose max-w-none">
        <p class="lead text-lg mb-6">Petek temizliği sonrasında sistemin düzgün çalışması için dikkat edilmesi gereken önemli noktalar.</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">1. Hava Tahliyesi İşlemi</h2>
        <p class="text-gray-700 mb-4">Temizlik sonrası sistemde hava kabarcıkları oluşabilir. Her peteğin havasını tek tek almalısınız.</p>
        
        <div class="bg-blue-50 p-4 rounded-lg my-6">
          <h3 class="font-semibold text-blue-800 mb-2">Hava Alma Adımları:</h3>
          <ul class="list-disc pl-6 text-blue-700">
            <li>En üst kattaki peteklerden başlayın</li>
            <li>Hava tahliye vanasını yavaşça açın</li>
            <li>Su gelene kadar bekleyin</li>
            <li>Vanayı kapatın ve bir sonraki peteğe geçin</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">2. Sistem Basıncı Kontrolü</h2>
        <p class="text-gray-700 mb-4">Kombinin manometresi 1.5-2 bar arasında olmalı. Düşük basınç sistemin verimini azaltır.</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">3. İlk Çalıştırma</h2>
        <p class="text-gray-700 mb-4">Sistemi ilk kez çalıştırırken dikkatli olun. Anormal sesler duyarsanız hemen kapatın.</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">4. Su Kaçağı Kontrolü</h2>
        <p class="text-gray-700 mb-4">Tüm bağlantı noktalarını ve petek altlarını kontrol edin. En ufak bir damla bile önemlidir.</p>
        
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p class="text-yellow-700 font-semibold">⚠️ Herhangi bir anormallik fark ederseniz sistemi durdurun ve uzman yardımı alın!</p>
        </div>
      </div>
    `
  },
  {
    id: 8,
    title: "Doğalgaz Tesisat Güvenlik Kontrolleri",
    excerpt: "Doğalgaz tesisatında güvenlik her şeyden önemlidir. Hangi kontroller yapılmalı, gaz kaçağı nasıl anlaşılır ve acil durumlarda ne yapılmalı?",
    date: "25 Aralık 2024",
    author: "Kocaeli Uzman Tesisatçı",
    readTime: "5 dk okuma",
    image: "/src/assets/gallery-2.jpg",
    content: `
      <div class="prose max-w-none">
        <p class="lead text-lg mb-6">Doğalgaz tesisatında güvenlik her şeyden önemlidir. Hangi kontroller yapılmalı, gaz kaçağı nasıl anlaşılır ve acil durumlarda ne yapılmalı?</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Gaz Kaçağı Belirtileri</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Koku:</strong> Doğalgaza eklenen özel koku (mercaptan)</li>
          <li><strong>Ses:</strong> Borulardan gelen tıslama sesi</li>
          <li><strong>Görsel:</strong> Boru çevresinde toprak kabarması</li>
          <li><strong>Bitki öldürücü etki:</strong> Gaz çıkışı yakınında bitkiler solar</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Düzenli Kontroller</h2>
        <div class="bg-blue-50 p-4 rounded-lg my-6">
          <h3 class="font-semibold text-blue-800 mb-2">Ayda Bir Yapılması Gerekenler:</h3>
          <ul class="list-disc pl-6 text-blue-700">
            <li>Esnek hortum kontrolü</li>
            <li>Bağlantı nokta kontrolü</li>
            <li>Kombi duman yolu kontrolü</li>
            <li>Doğalgaz detektör testi</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Acil Durum Prosedürü</h2>
        <p class="text-gray-700 mb-2">Gaz kaçağı şüphesinde:</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Elektrikli cihazlara dokunmayın</li>
          <li>Işık açıp/kapatmayın</li>
          <li>Ana vanayı kapatın</li>
          <li>Pencere ve kapıları açın</li>
          <li>Binayı terk edin</li>
          <li>Dışarıdan 187'yi arayın</li>
        </ol>
        
        <div class="bg-red-50 border-l-4 border-red-400 p-4 my-6">
          <p class="text-red-700 font-semibold">🚨 Gaz kaçağı şüphesinde asla ateş yakmayın, sigara içmeyin!</p>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Profesyonel Kontrol</h2>
        <p class="text-gray-700 mb-4">Yılda en az bir kez uzman kontrolü yaptırın. Bu hem güvenliğiniz hem de sigorta şartları açısından önemlidir.</p>
      </div>
    `
  },
  {
    id: 9,
    title: "Banyo Tadilatında Tesisat Planlaması",
    excerpt: "Banyo tadilat projelerinde tesisat planlaması kritik önemde. Su ve kanalizasyon hatlarının doğru planlanması ile hem estetik hem fonksiyonel çözümler.",
    date: "22 Aralık 2024",
    author: "Kocaeli Uzman Tesisatçı",
    readTime: "6 dk okuma",
    image: "/src/assets/gallery-3.jpg",
    content: `
      <div class="prose max-w-none">
        <p class="lead text-lg mb-6">Banyo tadilat projelerinde tesisat planlaması kritik önemde. Su ve kanalizasyon hatlarının doğru planlanması ile hem estetik hem fonksiyonel çözümler elde edilir.</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Planlama Aşaması</h2>
        <p class="text-gray-700 mb-4">Banyo tadilatında tesisat planlaması, tadilatın en kritik aşamalarından biridir. Yanlış planlama sonradan çok büyük sorunlara yol açabilir.</p>
        
        <div class="bg-blue-50 p-4 rounded-lg my-6">
          <h3 class="font-semibold text-blue-800 mb-2">🎯 Planlama Adımları:</h3>
          <ul class="list-disc pl-6 text-blue-700">
            <li>Mevcut tesisat durumunun analizi</li>
            <li>Yeni yerleşim planına göre hat çizimi</li>
            <li>Su basıncı hesaplamaları</li>
            <li>Kanalizasyon eğim hesaplamaları</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Su Hattı Planlaması</h2>
        <p class="text-gray-700 mb-4">Soğuk ve sıcak su hatlarının doğru planlanması, hem konforlu kullanım hem de enerji tasarrufu sağlar.</p>
        
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Hat güzergahı:</strong> En kısa ve verimli rotalar</li>
          <li><strong>Boru çapları:</strong> Debi hesaplarına göre belirleme</li>
          <li><strong>İzolasyon:</strong> Sıcak su hatlarında ısı kaybını önleme</li>
          <li><strong>Vana yerleşimi:</strong> Bakım ve onarım kolaylığı</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Kanalizasyon Sistemi</h2>
        <p class="text-gray-700 mb-4">Atık su tahliyesi için doğru eğim ve boru çapı hesaplamaları hayati önemdedir.</p>
        
        <div class="grid md:grid-cols-2 gap-6 my-6">
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-semibold text-green-800 mb-2">Eğim Değerleri</h3>
            <ul class="list-disc pl-4 text-sm text-green-700">
              <li>Lavabo: %2-4 eğim</li>
              <li>Duş: %2-3 eğim</li>
              <li>Klozet: %1-2 eğim</li>
            </ul>
          </div>
          <div class="bg-orange-50 p-4 rounded-lg">
            <h3 class="font-semibold text-orange-800 mb-2">Boru Çapları</h3>
            <ul class="list-disc pl-4 text-sm text-orange-700">
              <li>Lavabo: 40mm</li>
              <li>Duş: 50mm</li>
              <li>Klozet: 110mm</li>
            </ul>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Elektrik Tesisatı Koordinasyonu</h2>
        <p class="text-gray-700 mb-4">Su tesisatı ile elektrik tesisatının koordineli çalışması gerekir. Özellikle prizler ve aydınlatma planlaması.</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Malzeme Seçimi</h2>
        <p class="text-gray-700 mb-4">Banyo gibi nemli ortamlarda kullanılacak malzemelerin korozyona dayanıklı olması şarttır.</p>
        
        <div class="bg-purple-50 border-l-4 border-purple-400 p-4 my-6">
          <p class="text-purple-700 font-semibold">💎 Kaliteli malzeme seçimi, uzun vadede tamir masraflarından tasarruf sağlar!</p>
        </div>
      </div>
    `
  },
  {
    id: 10,
    title: "Apartman Su Deposu Temizliği ve Bakımı",
    excerpt: "Apartman su depolarının düzenli temizlik ve bakımı halk sağlığı için hayati önem taşır. Temizlik sıklığı, kullanılan kimyasallar ve dikkat edilecek noktalar.",
    date: "20 Aralık 2024",
    author: "Kocaeli Uzman Tesisatçı",
    readTime: "4 dk okuma",
    image: "/src/assets/gallery-4.jpg",
    content: `
      <div class="prose max-w-none">
        <p class="lead text-lg mb-6">Apartman su depolarının düzenli temizlik ve bakımı halk sağlığı için hayati önem taşır. İşte dikkat edilmesi gereken noktalar...</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Ne Sıklıkla Temizlenmeli?</h2>
        <p class="text-gray-700 mb-4">Yasal düzenlemelere göre apartman su depoları yılda en az 2 kez temizlenmelidir. Ancak ideal olan 3-4 ayda bir temizliktir.</p>
        
        <div class="bg-blue-50 p-4 rounded-lg my-6">
          <h3 class="font-semibold text-blue-800 mb-2">📅 Temizlik Takvimi:</h3>
          <ul class="list-disc pl-6 text-blue-700">
            <li><strong>İlkbahar:</strong> Mart-Nisan (kış sonrası)</li>
            <li><strong>Yaz:</strong> Haziran-Temmuz (sıcak öncesi)</li>
            <li><strong>Sonbahar:</strong> Eylül-Ekim (ideal dönem)</li>
            <li><strong>Kış:</strong> Gerekirse Aralık-Ocak</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Temizlik İşlem Basamakları</h2>
        <ol class="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Su kesimi:</strong> Ana vanaları kapatarak depoyu boşaltın</li>
          <li><strong>İlk temizlik:</strong> Kaba kirleri temizleyin</li>
          <li><strong>Dezenfektan uygulama:</strong> Klor bazlı ürünler kullanın</li>
          <li><strong>Fırçalama:</strong> Duvar ve tabanı iyice fırçalayın</li>
          <li><strong>Durulama:</strong> Bol suyla durulayın</li>
          <li><strong>Son dezenfeksiyon:</strong> %0.5 klor çözeltisi kullanın</li>
        </ol>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Kullanılan Kimyasallar</h2>
        <div class="bg-green-50 p-4 rounded-lg my-6">
          <h3 class="font-semibold text-green-800 mb-2">✅ Güvenli Kimyasallar:</h3>
          <ul class="list-disc pl-6 text-green-700">
            <li>Sodyum hipoklorit (%5)</li>
            <li>Kalsiyum hipoklorit</li>
            <li>Dezenfeksiyon tabletleri</li>
            <li>pH ayarlayıcı kimyasallar</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Sağlık Kontrolü</h2>
        <p class="text-gray-700 mb-4">Temizlik sonrası mutlaka su numunesi alın ve sağlık bakanlığı onaylı laboratuvarda analiz ettirin.</p>
        
        <div class="bg-yellow-50 p-4 rounded-lg my-6">
          <h3 class="font-semibold text-yellow-800 mb-2">🔬 Test Edilmesi Gerekenler:</h3>
          <ul class="list-disc pl-6 text-yellow-700">
            <li>Bakteri sayısı</li>
            <li>Koliform varlığı</li>
            <li>pH değeri</li>
            <li>Klor miktarı</li>
            <li>Bulanıklık</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Dikkat Edilecek Noktalar</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li>Depo kapağının sızdırmazlığı</li>
          <li>Havalandırma bacalarının temizliği</li>
          <li>Su seviye sensörlerinin kontrolü</li>
          <li>Pompa sisteminin bakımı</li>
        </ul>
        
        <div class="bg-red-50 border-l-4 border-red-400 p-4 my-6">
          <p class="text-red-700 font-semibold">⚠️ Temizlik işlemlerini mutlaka uzman ekipler yaptırın!</p>
        </div>
      </div>
    `
  },
  {
    id: 11,
    title: "Kış Aylarında Boru Donması Nasıl Önlenir?",
    excerpt: "Soğuk kış günlerinde su borularının donması ciddi hasarlara neden olabilir. Donma nasıl önlenir, donmuş boru nasıl çözülür ve alınacak önlemler nelerdir?",
    date: "18 Aralık 2024",
    author: "Kocaeli Uzman Tesisatçı",
    readTime: "5 dk okuma",
    image: "/src/assets/gallery-5.jpg",
    content: `
      <div class="prose max-w-none">
        <p class="lead text-lg mb-6">Soğuk kış günlerinde su borularının donması ciddi hasarlara neden olabilir. İşte alınması gereken önlemler ve çözüm yöntemleri...</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Donma Önleme Yöntemleri</h2>
        <p class="text-gray-700 mb-4">Boru donmasını önlemek, sonradan tamir masraflarından çok daha ekonomiktir.</p>
        
        <div class="bg-blue-50 p-4 rounded-lg my-6">
          <h3 class="font-semibold text-blue-800 mb-2">🛡️ Koruyucu Önlemler:</h3>
          <ul class="list-disc pl-6 text-blue-700">
            <li><strong>İzolasyon:</strong> Borulara yalıtım malzemesi sarın</li>
            <li><strong>Isıtma:</strong> Kritik bölgelerde ısıtıcı kullanın</li>
            <li><strong>Su akışı:</strong> Gece musluğu hafif açık bırakın</li>
            <li><strong>Hava giriş noktaları:</strong> Bodrum ve bahçe vanalarını kapatın</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Hangi Borular Risk Altında?</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Dış duvar üzerindeki borular:</strong> En riskli grup</li>
          <li><strong>Bodrum geçişleri:</strong> Toprak seviyesi altı</li>
          <li><strong>Çatı arası borular:</strong> İzolasyonsuz alanlar</li>
          <li><strong>Bahçe sulama hatları:</strong> Açık hava tesisatı</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Donmuş Boru Nasıl Çözülür?</h2>
        <p class="text-gray-700 mb-4">Donmuş boruyu çözerken sabırlı olun. Ani ısıtma boru patlamasına neden olabilir.</p>
        
        <div class="grid md:grid-cols-2 gap-6 my-6">
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-semibold text-green-800 mb-2">✅ Doğru Yöntemler</h3>
            <ul class="list-disc pl-4 text-sm text-green-700">
              <li>Saç kurutma makinesi</li>
              <li>Sıcak havlu sarma</li>
              <li>Elektrikli ısıtıcı</li>
              <li>Kademeli ısıtma</li>
            </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg">
            <h3 class="font-semibold text-red-800 mb-2">❌ Tehlikeli Yöntemler</h3>
            <ul class="list-disc pl-4 text-sm text-red-700">
              <li>Çakmak/mum kullanımı</li>
              <li>Kaynar su dökme</li>
              <li>Elektrikli ısıtıcıyı çok yaklaştırma</li>
              <li>Metal aletle vurma</li>
            </ul>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Acil Durum Planı</h2>
        <p class="text-gray-700 mb-2">Boru patladığında:</p>
        <ol class="list-decimal pl-6 space-y-2 mb-6">
          <li>Hemen ana su vanasını kapatın</li>
          <li>Elektrik panelinden elektriği kesin</li>
          <li>Ev içindeki değerli eşyaları kurtarın</li>
          <li>Acil tesisatçı arayın</li>
          <li>Sigorta şirketini bilgilendirin</li>
        </ol>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Önleyici Bakım</h2>
        <p class="text-gray-700 mb-4">Kış başlamadan önce sistem kontrolü yaptırın. Bu hem güvenliğinizi sağlar hem de ani masraflardan korur.</p>
        
        <div class="bg-orange-50 border-l-4 border-orange-400 p-4 my-6">
          <p class="text-orange-700 font-semibold">🌡️ Hava sıcaklığı 0°C'nin altına düştüğünde ekstra önlem alın!</p>
        </div>
      </div>
    `
  },
  {
    id: 12,
    title: "Mutfak Tezgah Altı Su Arıtma Sistemleri",
    excerpt: "Tezgah altı su arıtma sistemlerinin avantajları, kurulum süreçleri ve bakım gereksinimleri. Hangi sistem eviniz için uygun? Uzman önerileri ve karşılaştırmalar.",
    date: "15 Aralık 2024",
    author: "Kocaeli Uzman Tesisatçı", 
    readTime: "4 dk okuma",
    image: "/src/assets/gallery-6.jpg",
    content: `
      <div class="prose max-w-none">
        <p class="lead text-lg mb-6">Tezgah altı su arıtma sistemlerinin avantajları, kurulum süreçleri ve bakım gereksinimleri hakkında kapsamlı rehber.</p>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Su Arıtma Sistemi Türleri</h2>
        <p class="text-gray-700 mb-4">Farklı ihtiyaçlara göre çeşitli su arıtma sistemleri mevcuttur. Her birinin kendine özgü avantajları vardır.</p>
        
        <div class="grid md:grid-cols-3 gap-6 my-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h3 class="font-semibold text-blue-800 mb-2">Karbon Filtreli</h3>
            <ul class="list-disc pl-4 text-sm text-blue-700">
              <li>Klorin giderimi</li>
              <li>Koku ve tat iyileştirme</li>
              <li>Ekonomik çözüm</li>
            </ul>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-semibold text-green-800 mb-2">Ters Osmoz</h3>
            <ul class="list-disc pl-4 text-sm text-green-700">
              <li>%99 arıtma verimi</li>
              <li>Tüm zararlı maddeleri giderir</li>
              <li>Premium kalite</li>
            </ul>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h3 class="font-semibold text-purple-800 mb-2">UV Sterilizasyon</h3>
            <ul class="list-disc pl-4 text-sm text-purple-700">
              <li>Bakteri ve virüs öldürür</li>
              <li>Kimyasal kullanmaz</li>
              <li>Çevre dostu</li>
            </ul>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Kurulum Süreci</h2>
        <p class="text-gray-700 mb-4">Profesyonel kurulum, sistemin verimli çalışması için şarttır.</p>
        
        <ol class="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Su analizi:</strong> Mevcut su kalitesini belirleyin</li>
          <li><strong>Sistem seçimi:</strong> İhtiyaca uygun model seçin</li>
          <li><strong>Montaj yerinin belirlenmesi:</strong> Tezgah altı uygun alan</li>
          <li><strong>Su hattına bağlantı:</strong> Profesyonel bağlantı işlemi</li>
          <li><strong>Test ve ayar:</strong> Sistem performans testi</li>
        </ol>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Bakım Gereksinimleri</h2>
        <div class="bg-yellow-50 p-4 rounded-lg my-6">
          <h3 class="font-semibold text-yellow-800 mb-2">📅 Bakım Takvimi:</h3>
          <ul class="list-disc pl-6 text-yellow-700">
            <li><strong>6 ayda bir:</strong> Karbon filtre değişimi</li>
            <li><strong>Yılda bir:</strong> Sediment filtre değişimi</li>
            <li><strong>2 yılda bir:</strong> Membran değişimi (RO)</li>
            <li><strong>3 yılda bir:</strong> UV lamba değişimi</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Maliyet Analizi</h2>
        <p class="text-gray-700 mb-4">İlk yatırım maliyeti yüksek görünse de uzun vadede pet su alımından tasarruf sağlarsınız.</p>
        
        <div class="bg-green-50 p-4 rounded-lg my-6">
          <h3 class="font-semibold text-green-800 mb-2">💰 5 Yıllık Maliyet Karşılaştırması:</h3>
          <ul class="list-disc pl-6 text-green-700">
            <li><strong>Pet su:</strong> ~15.000 TL</li>
            <li><strong>Su arıtma sistemi:</strong> ~8.000 TL</li>
            <li><strong>Tasarruf:</strong> ~7.000 TL</li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Hangi Sistemi Seçmelisiniz?</h2>
        <ul class="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Şehir suyu kullanıyorsanız:</strong> Karbon filtreli sistem yeterli</li>
          <li><strong>Kuyu suyu kullanıyorsanız:</strong> Ters osmoz sistemi gerekli</li>
          <li><strong>Bakteri sorunu varsa:</strong> UV sterilizasyon ekleyin</li>
          <li><strong>Premium kalite istiyorsanız:</strong> Kombi sistem tercih edin</li>
        </ul>
        
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
          <p class="text-blue-700 font-semibold">💧 Sağlıklı içme suyu, ailenizin sağlığına yapacağınız en iyi yatırımdır!</p>
        </div>
      </div>
    `
  }
];

export const getBlogPost = (id: number): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getBlogPostsByPage = (page: number, postsPerPage: number = 6): BlogPost[] => {
  const startIndex = (page - 1) * postsPerPage;
  return blogPosts.slice(startIndex, startIndex + postsPerPage);
};