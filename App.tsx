import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Footer } from "./components/Footer";
import { GoogleAdsScript } from "./components/GoogleAdsScript";
import { AdUnit } from "./components/AdUnit";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <GoogleAdsScript />
      <Header />
      <main>
        <Hero />
        
        {/* Ad Unit 1 - After Hero Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdUnit slot="1234567890" format="horizontal" />
        </div>
        
        <Skills />
        
        {/* Ad Unit 2 - Between Skills and Certifications */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdUnit slot="0987654321" format="rectangle" />
        </div>
        
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}