import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SuKacagiTespiti from "./pages/SuKacagiTespiti";
import TikaniklikAcma from "./pages/TikaniklikAcma";
import PetekTemizligi from "./pages/PetekTemizligi";
import MuslukTamiri from "./pages/MuslukTamiri";
import KlozetTamiri from "./pages/KlozetTamiri";
import BataryaDegisimi from "./pages/BataryaDegisimi";
import KombiServisi from "./pages/KombiServisi";
import AcilMudahale from "./pages/AcilMudahale";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";
import BlogPost5 from "./pages/BlogPost5";
import BlogPost6 from "./pages/BlogPost6";
import BlogPost7 from "./pages/BlogPost7";
import BlogPost8 from "./pages/BlogPost8";
import BlogPost9 from "./pages/BlogPost9";
import BlogPost10 from "./pages/BlogPost10";
import BlogPost11 from "./pages/BlogPost11";
import Blog2 from "./pages/Blog2";
import Gallery from "./pages/Gallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/su-kacagi-tespiti" element={<SuKacagiTespiti />} />
          <Route path="/tikaniklik-acma" element={<TikaniklikAcma />} />
          <Route path="/petek-temizligi" element={<PetekTemizligi />} />
          <Route path="/musluk-tamiri" element={<MuslukTamiri />} />
          <Route path="/klozet-tamiri" element={<KlozetTamiri />} />
          <Route path="/batarya-degisimi" element={<BataryaDegisimi />} />
          <Route path="/kombi-servisi" element={<KombiServisi />} />
          <Route path="/acil-mudahale" element={<AcilMudahale />} />
          <Route path="/blog" element={<Blog />} />
        <Route path="/blog/1" element={<BlogPost />} />
        <Route path="/blog/2" element={<BlogPost2 />} />
        <Route path="/blog/3" element={<BlogPost3 />} />
        <Route path="/blog/4" element={<BlogPost4 />} />
        <Route path="/blog/5" element={<BlogPost5 />} />
        <Route path="/blog/6" element={<BlogPost6 />} />
        <Route path="/blog/7" element={<BlogPost7 />} />
        <Route path="/blog/8" element={<BlogPost8 />} />
        <Route path="/blog/9" element={<BlogPost9 />} />
        <Route path="/blog/10" element={<BlogPost10 />} />
        <Route path="/blog/11" element={<BlogPost11 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/galeri" element={<Gallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
