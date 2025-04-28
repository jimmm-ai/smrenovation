import { useState } from "react";
import { translations } from "./translations";
import Header, { Language } from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import FloatingCallButton from "./components/FloatingCallButton";

function App() {
  const [language, setLanguage] = useState<Language>("fr");
  const t = translations[language];
  const phoneNumber = t.phoneNumber;

  // Scroll to service section
  const scrollToService = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        language={language}
        setLanguage={setLanguage}
        phoneNumber={phoneNumber}
        t={t}
        scrollToService={scrollToService}
      />

      <HeroSection
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        phoneNumber={phoneNumber}
        freeQuoteText={t.freeQuote}
        backgroundImage="/images/avantapresmaison.webp"
        language={language}
      />

      <ServicesSection t={t} phoneNumber={phoneNumber} />

      <CTASection
        title={t.ctaTitle}
        text={t.ctaText}
        phoneNumber={phoneNumber}
        freeQuoteText={t.freeQuote}
      />

      <Footer
        t={t}
        phoneNumber={phoneNumber}
        scrollToService={scrollToService}
      />

      <FloatingCallButton phoneNumber={phoneNumber} />
    </div>
  );
}

export default App;
