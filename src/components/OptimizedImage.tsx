import { useState, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  onLoad,
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Réinitialiser les états quand la source change
    setLoaded(false);
    setError(false);

    const img = new Image();

    img.onload = () => {
      setLoaded(true);
      if (onLoad) onLoad();
    };

    img.onerror = () => {
      setError(true);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, onLoad]);

  return (
    <>
      {!loaded && !error && (
        <div
          className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}
        >
          <span className="sr-only">Chargement...</span>
        </div>
      )}

      {error && (
        <div
          className={`${className} bg-gray-100 flex items-center justify-center`}
        >
          <span className="text-gray-400 text-sm">Erreur de chargement</span>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`${className} ${!loaded ? "hidden" : ""}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </>
  );
}
