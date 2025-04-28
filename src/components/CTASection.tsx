import { Phone } from "lucide-react";
import { getAssetPath } from "../utils";
import { useState, useEffect } from "react";

interface CTASectionProps {
  title: string;
  text: string;
  phoneNumber: string;
  freeQuoteText: string;
  backgroundImage?: string;
}

export default function CTASection({
  title,
  text,
  phoneNumber,
  freeQuoteText,
  backgroundImage = "/images/facade-1-propre.webp",
}: CTASectionProps) {
  // Convert the backgroundImage path
  const processedBackgroundImage = getAssetPath(backgroundImage);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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
      id="contact"
      className="bg-blue-900 text-white py-16 md:py-24"
      style={{
        backgroundImage: isImageLoaded
          ? `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('${processedBackgroundImage}')`
          : "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8))",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-shadow">
          {title}
        </h2>
        <p className="text-lg md:text-2xl mb-8 md:mb-12 text-blue-100">
          {text}
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
  );
}
