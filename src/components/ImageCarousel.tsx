import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

type ImageOrientation = "portrait" | "landscape";

export type ImageProject = {
  before: string;
  after: string;
  description?: string;
  orientation?: ImageOrientation;
  serviceType?: string;
};

interface ImageCarouselProps {
  images: ImageProject[];
  beforeLabel: string;
  afterLabel: string;
}

export default function ImageCarousel({
  images,
  beforeLabel,
  afterLabel,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const autoPlayInterval = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const loadedImages = useRef<Set<string>>(new Set());

  // Précharger les images actuelles et les prochaines
  useEffect(() => {
    // Précharger l'image actuelle et les 2 suivantes
    const imagesToPreload = [];
    const currentImg = images[currentIndex];

    if (currentImg) {
      imagesToPreload.push(currentImg.before, currentImg.after);
    }

    // Précharger les deux prochaines images
    for (let i = 1; i <= 2; i++) {
      const nextIndex = (currentIndex + i) % images.length;
      const nextImg = images[nextIndex];
      if (nextImg) {
        imagesToPreload.push(nextImg.before, nextImg.after);
      }
    }

    // Précharger chaque image
    imagesToPreload.forEach((src) => {
      if (!loadedImages.current.has(src)) {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedImages.current.add(src);
        };
      }
    });
  }, [currentIndex, images]);

  // Fonction pour passer à l'image suivante avec animation
  const goToNext = useCallback(() => {
    if (isFading) return; // Éviter les changements pendant l'animation

    setIsFading(true);

    // Attendre que l'animation soit terminée avant de changer d'image
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );

      // Réinitialiser l'état de transition après un court délai
      setTimeout(() => {
        setIsFading(false);
      }, 50);
    }, 300); // Durée de l'animation de fade-out
  }, [isFading, images.length]);

  // Fonction pour revenir à l'image précédente avec animation
  const goToPrevious = useCallback(() => {
    if (isFading) return; // Éviter les changements pendant l'animation

    setIsFading(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );

      setTimeout(() => {
        setIsFading(false);
      }, 50);
    }, 300);
  }, [isFading, images.length]);

  // Fonction pour changer directement à un index donné avec animation
  const goToIndex = useCallback(
    (index: number) => {
      if (isFading || index === currentIndex) return;

      setIsFading(true);

      setTimeout(() => {
        setCurrentIndex(index);

        setTimeout(() => {
          setIsFading(false);
        }, 50);
      }, 300);
    },
    [isFading, currentIndex]
  );

  // Démarrer ou redémarrer le défilement automatique
  const startAutoPlay = useCallback(() => {
    // Ne démarrer que si le carousel est visible
    if (!isVisible) return;

    // Nettoyer l'intervalle existant s'il existe
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
    }

    // Créer un nouvel intervalle
    autoPlayInterval.current = window.setInterval(() => {
      if (isVisible && !isFading) {
        goToNext();
      }
    }, 4000); // Change l'image toutes les 4 secondes
  }, [isVisible, isFading, goToNext]);

  // Arrêter le défilement automatique
  const stopAutoPlay = useCallback(() => {
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
      autoPlayInterval.current = null;
    }
  }, []);

  // Configuration de l'Intersection Observer pour détecter quand le carousel est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 } // Le carousel est considéré visible quand 30% est dans le viewport
    );

    const currentRef = carouselRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Démarrer/arrêter le défilement automatique en fonction de la visibilité
  useEffect(() => {
    if (isVisible) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => {
      stopAutoPlay();
    };
  }, [isVisible, startAutoPlay, stopAutoPlay]);

  // Redémarrer le défilement automatique lorsque l'index change manuellement
  useEffect(() => {
    if (isVisible) {
      startAutoPlay();
    }
  }, [currentIndex, isVisible, startAutoPlay]);

  // Determine if current image is portrait or landscape
  const currentOrientation = images[currentIndex]?.orientation || "landscape";
  const isPortrait = currentOrientation === "portrait";

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden rounded-xl shadow-lg bg-white p-2 md:p-6"
    >
      {/* Fixed size container for before/after images */}
      <div className="mx-auto w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px] h-[350px] md:h-[450px] lg:h-[500px] mb-4 relative">
        {/* Images - stacked for landscape, side by side for portrait */}
        <div
          className={`h-full w-full flex ${
            isPortrait ? "flex-row" : "flex-col"
          } gap-2 transition-opacity duration-300 ${
            isFading ? "opacity-40" : "opacity-100"
          }`}
        >
          {/* Container for "before" image */}
          <div className="relative overflow-hidden rounded-lg flex-1">
            <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 rounded-full text-sm font-medium shadow-md z-20 border border-white">
              {beforeLabel}
            </div>
            <OptimizedImage
              src={images[currentIndex]?.before}
              alt={beforeLabel}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>

          {/* Container for "after" image */}
          <div className="relative overflow-hidden rounded-lg flex-1">
            <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md z-20 border border-white">
              {afterLabel}
            </div>
            <OptimizedImage
              src={images[currentIndex]?.after}
              alt={afterLabel}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between p-2 rounded-b-xl">
        <button
          onClick={() => {
            if (!isFading) goToPrevious();
          }}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
          aria-label="Image précédente"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <div className="flex space-x-1 items-center">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isFading) goToIndex(index);
              }}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Image ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => {
            if (!isFading) goToNext();
          }}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
          aria-label="Image suivante"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );
}
