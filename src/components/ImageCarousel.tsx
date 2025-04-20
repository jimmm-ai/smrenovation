import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Determine if current image is portrait or landscape
  const currentOrientation = images[currentIndex]?.orientation || "landscape";
  const isPortrait = currentOrientation === "portrait";

  return (
    <div className="overflow-hidden rounded-xl shadow-lg bg-white p-2 md:p-6">
      {/* Fixed size container for before/after images */}
      <div className="mx-auto w-full max-w-[600px] h-[350px] md:h-[400px] mb-2 relative">
        {/* Images - stacked for landscape, side by side for portrait */}
        <div
          className={`h-full w-full flex ${
            isPortrait ? "flex-row" : "flex-col"
          } gap-2`}
        >
          {/* Container for "before" image */}
          <div className="relative overflow-hidden rounded-lg flex-1">
            <img
              src={images[currentIndex]?.before}
              alt={beforeLabel}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
              {beforeLabel}
            </div>
          </div>

          {/* Container for "after" image */}
          <div className="relative overflow-hidden rounded-lg flex-1">
            <img
              src={images[currentIndex]?.after}
              alt={afterLabel}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-2 left-2 bg-blue-600/80 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
              {afterLabel}
            </div>
          </div>
        </div>
      </div>

      {/* Service type badge */}
      {images[currentIndex]?.serviceType && (
        <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full inline-block mb-2">
          {images[currentIndex].serviceType}
        </div>
      )}

      {/* Description */}
      <p className="text-center text-gray-700 my-2 italic min-h-[50px] flex items-center justify-center text-sm md:text-base">
        {images[currentIndex]?.description}
      </p>

      {/* Navigation */}
      <div className="flex justify-between p-2 rounded-b-xl">
        <button
          onClick={goToPrevious}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
          aria-label="Image précédente"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <div className="flex space-x-1 items-center">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Image ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={goToNext}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
          aria-label="Image suivante"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );
}
