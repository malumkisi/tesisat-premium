import { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Lazy load components for better performance
const Index = lazy(() => import("./pages/Index"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Blog = lazy(() => import("./pages/Blog"));
const Blog2 = lazy(() => import("./pages/Blog2"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const SuKacagiTespiti = lazy(() => import("./pages/SuKacagiTespiti"));
const TikaniklikAcma = lazy(() => import("./pages/TikaniklikAcma"));
const PetekTemizligi = lazy(() => import("./pages/PetekTemizligi"));
const MuslukTamiri = lazy(() => import("./pages/MuslukTamiri"));
const KlozetTamiri = lazy(() => import("./pages/KlozetTamiri"));
const BataryaDegisimi = lazy(() => import("./pages/BataryaDegisimi"));
const KombiServisi = lazy(() => import("./pages/KombiServisi"));
const AcilMudahale = lazy(() => import("./pages/AcilMudahale"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-gray-600">Sayfa yükleniyor...</p>
    </div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog2" element={<Blog2 />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/su-kacagi-tespiti" element={<SuKacagiTespiti />} />
            <Route path="/tikaniklik-acma" element={<TikaniklikAcma />} />
            <Route path="/petek-temizligi" element={<PetekTemizligi />} />
            <Route path="/musluk-tamiri" element={<MuslukTamiri />} />
            <Route path="/klozet-tamiri" element={<KlozetTamiri />} />
            <Route path="/batarya-degisimi" element={<BataryaDegisimi />} />
            <Route path="/kombi-servisi" element={<KombiServisi />} />
            <Route path="/acil-mudahale" element={<AcilMudahale />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
