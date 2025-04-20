import { Phone } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  phoneNumber: string;
  freeQuoteText: string;
  backgroundImage: string;
}

export default function HeroSection({
  title,
  subtitle,
  phoneNumber,
  freeQuoteText,
  backgroundImage = "/images/Toit-2-propre.webp",
}: HeroSectionProps) {
  return (
    <div
      className="relative bg-blue-900 text-white min-h-[85vh] flex items-center pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(30, 58, 138, 0.75)), url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Decorative overlay element */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent opacity-80"></div>

      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10 w-full">
        {/* Hero Content */}
        <div className="text-center py-16 max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
            {title}
          </h1>
          <p className="text-lg md:text-2xl mb-8 md:mb-12 text-white">
            {subtitle}
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <a
              href={`tel:${phoneNumber}`}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              <span>{phoneNumber}</span>
            </a>
            <div className="text-white/90 font-medium mt-2 bg-black/20 backdrop-blur-sm py-2 px-4 rounded-lg">
              {freeQuoteText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
