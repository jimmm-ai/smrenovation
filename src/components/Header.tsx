import { useState } from "react";
import { Phone, Globe2, HardHat, Menu, X, ChevronDown } from "lucide-react";
import { translations } from "../translations";

export type Language = keyof typeof translations;
type TranslationType = (typeof translations)[Language];

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  phoneNumber: string;
  t: TranslationType;
  scrollToService: (id: string) => void;
}

export default function Header({
  language,
  setLanguage,
  phoneNumber,
  t,
  scrollToService,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-md z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2.5 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <HardHat className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900 tracking-tight">
                {t.companyName}
              </h1>
              <p className="text-xs text-gray-600 -mt-1">
                De père en fils depuis plus de 35 ans
              </p>
            </div>
          </div>

          {/* Navigation and Contact */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-5">
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className="font-medium text-gray-700 hover:text-blue-700 transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1 flex items-center gap-1 px-1"
                  onClick={() => {
                    toggleServicesDropdown();
                    scrollToService("renovation-toiture");
                  }}
                  onMouseEnter={() => setShowServicesDropdown(true)}
                  onMouseLeave={() => setShowServicesDropdown(false)}
                >
                  {t.servicesTitle}
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 top-full bg-white rounded-lg shadow-lg py-2 w-56 transition-all z-50 ${
                    showServicesDropdown
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                  onMouseEnter={() => setShowServicesDropdown(true)}
                  onMouseLeave={() => setShowServicesDropdown(false)}
                >
                  {t.services.map((service) => (
                    <a
                      key={service.id}
                      href={`#services`}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowServicesDropdown(false);
                        scrollToService(service.id);
                      }}
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Call Button */}
              <a
                href={`tel:${phoneNumber}`}
                className="btn-primary py-2 px-4 text-sm inline-flex items-center gap-1"
              >
                <Phone className="w-4 h-4" />
                <span>{phoneNumber}</span>
              </a>
            </nav>

            {/* Language Selector - More compact */}
            <div className="hidden sm:flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1 text-xs">
              <Globe2 className="w-3 h-3 text-gray-500" />
              {Object.entries(translations).map(([lang, content]) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang as Language)}
                  className={`px-2 py-1 rounded-full text-xs transition-colors ${
                    language === lang
                      ? "bg-blue-600 text-white shadow-sm"
                      : "hover:bg-gray-200 text-gray-600"
                  }`}
                >
                  {content.language.substr(0, 2)}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4 mb-6">
              <div className="py-2 font-semibold text-gray-800 border-b border-gray-100 mb-2">
                {t.servicesTitle}
              </div>
              {t.services.map((service) => (
                <a
                  key={service.id}
                  href="#services"
                  className="font-medium text-gray-700 hover:text-blue-700 transition-colors py-2 pl-3 border-l-4 border-transparent hover:border-blue-600"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMobileMenu();
                    scrollToService(service.id);
                  }}
                >
                  {service.title}
                </a>
              ))}

              {/* Call Button in Mobile Menu */}
              <a
                href={`tel:${phoneNumber}`}
                className="btn-primary py-2 px-4 mt-2 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>{phoneNumber}</span>
              </a>
            </nav>

            {/* Language Selector in Mobile Menu */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
              <Globe2 className="w-4 h-4 text-gray-500" />
              <div className="flex flex-wrap gap-1">
                {Object.entries(translations).map(([lang, content]) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang as Language);
                      closeMobileMenu();
                    }}
                    className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
                      language === lang
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    }`}
                  >
                    {content.language.substr(0, 2)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
