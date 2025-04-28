import { Phone, Mail } from "lucide-react";
import { translations } from "../translations";
import { Language } from "./Header";
import { getAssetPath } from "../utils";

type TranslationType = (typeof translations)[Language];

interface FooterProps {
  t: TranslationType;
  phoneNumber: string;
  scrollToService: (id: string) => void;
}

export default function Footer({
  t,
  phoneNumber,
  scrollToService,
}: FooterProps) {
  const logoPath = getAssetPath("logo/Logo_SMrenovation.svg");

  return (
    <footer className="bg-gray-900 text-gray-400 py-10 md:py-12">
      <div className="max-w-6xl md:max-w-7xl lg:max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="bg-white rounded-md p-1.5 h-14 w-14">
                <img
                  src={logoPath}
                  alt={t.companyName}
                  className="h-full w-full"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {t.companyName}
                </h2>
                <p className="text-xs text-gray-400 text-left">
                  {t.companyTagline}
                </p>
              </div>
            </div>
            <p className="text-base md:text-lg mb-3 mt-4">{t.contactUs}</p>
            <a
              href={`tel:${phoneNumber}`}
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 justify-center md:justify-start"
            >
              <Phone className="w-4 h-4" />
              <span>{phoneNumber}</span>
            </a>
            <a
              href="mailto:renovalonso@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 justify-center md:justify-start mt-2"
            >
              <Mail className="w-4 h-4" />
              <span>renovalonso@gmail.com</span>
            </a>
            <div className="mt-4 text-blue-200 font-medium">{t.freeQuote}</div>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold text-white mb-4">
              Navigation
            </h3>
            <nav className="flex flex-col md:items-end gap-2">
              {t.services.map((service) => (
                <a
                  key={service.id}
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToService(service.id);
                  }}
                >
                  {service.title}
                </a>
              ))}
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t.contactUs}
              </a>
            </nav>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} {t.companyName}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
