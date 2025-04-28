import { Phone } from "lucide-react";
import { getAssetPath } from "../utils";
import { useState, useEffect } from "react";
import { Language } from "./Header";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  phoneNumber: string;
  freeQuoteText: string;
  backgroundImage: string;
  language?: Language;
}

export default function HeroSection({
  title,
  phoneNumber,
  freeQuoteText,
  backgroundImage = "/images/Toit-2-propre.webp",
  language = "fr",
}: HeroSectionProps) {
  // Convert the backgroundImage path to handle both dev and production environments
  const processedBackgroundImage = getAssetPath(backgroundImage);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if language is German to apply special styling
  const isGerman = language === "de";

  // Détecter les appareils mobiles
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Vérifier au chargement
    checkIfMobile();

    // Mettre à jour lors du redimensionnement
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Précharger l'image d'arrière-plan
  useEffect(() => {
    const img = new Image();
    img.src = processedBackgroundImage;
    img.onload = () => {
      setIsImageLoaded(true);
    };
    return () => {
      img.onload = null;
    };
  }, [processedBackgroundImage]);

  return (
    <div
      className="relative text-white min-h-[95vh] flex items-center pt-24"
      style={{
        backgroundImage: isImageLoaded
          ? `url('${processedBackgroundImage}')`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: isImageLoaded
          ? isMobile
            ? "scroll"
            : "fixed"
          : "scroll",
      }}
    >
      <div className="max-w-6xl md:max-w-7xl lg:max-w-[1400px] mx-auto px-4 sm:px-6 py-8 relative z-10 w-full">
        {/* Hero Content with background */}
        <div
          className={`text-left py-8 px-6 md:px-8 max-w-xl md:max-w-2xl mx-0 animate-fade-in w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-blue-900/80 backdrop-blur-md rounded-xl shadow-xl break-words ${
            isGerman ? "german-text" : ""
          }`}
          style={{
            boxShadow:
              "0 15px 30px -5px rgba(0, 0, 0, 0.3), 0 10px 15px -5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl ${
              isGerman ? "lg:text-4xl" : "lg:text-5xl"
            } font-bold mb-6 text-shadow hyphens-none word-break-normal ${
              isGerman ? "german-text" : ""
            }`}
            style={{ wordSpacing: "0.05em" }}
          >
            {title.split(",").map((part, index) => (
              <span
                key={index}
                className="whitespace-nowrap sm:whitespace-normal"
              >
                {part}
                {index < title.split(",").length - 1 ? "," : ""}
                {index < title.split(",").length - 1 && (
                  <br className="sm:hidden" />
                )}
              </span>
            ))}
          </h1>
          <div
            className={`text-lg ${
              isGerman ? "text-base md:text-lg" : "md:text-xl"
            } mb-8 md:mb-8 text-white max-w-3xl mx-0 leading-relaxed break-words hyphens-auto ${
              isGerman ? "german-text" : ""
            }`}
          >
            <p className="mb-2">
              Plus de 35 ans d'expertise en nettoyage et peinture de toiture,
              ravalement de façade, rénovation de murs, dallages et boiseries.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <a
              href={`tel:${phoneNumber}`}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              <span>{phoneNumber}</span>
            </a>
            <div
              className={`text-white/90 font-medium mt-2 bg-black/20 backdrop-blur-sm py-2 px-4 rounded-lg ${
                isGerman ? "german-text text-sm" : ""
              }`}
            >
              {freeQuoteText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
