import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import HowToUse from "./pages/HowToUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import TermsOfService from '@/pages/TermsOfService';
import CookiePolicy from '@/pages/CookiePolicy';
import GDPR from '@/pages/GDPR';
import BlogPost from "./pages/BlogPost";
import { HelmetProvider, Helmet } from 'react-helmet-async';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/gdpr" element={<GDPR />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Helmet>
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "FLICK2SPLIT",
                "url": "https://flick2split.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://flick2split.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            `}
          </script>
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "FLICK2SPLIT",
                "url": "https://flick2split.com",
                "logo": "https://flick2split.com/logo.png",
                "sameAs": [
                  "https://twitter.com/flick2split",
                  "https://facebook.com/flick2split",
                  "https://instagram.com/flick2split"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "contact@flick2split.com",
                  "contactType": "customer service"
                }
              }
            `}
          </script>
        </Helmet>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
