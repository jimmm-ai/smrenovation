import { useState, useEffect } from "react";

interface ImageLoaderProps {
  imagePath: string;
}

export default function ImageLoader({ imagePath }: ImageLoaderProps) {
  const [status, setStatus] = useState<string>("Loading...");

  useEffect(() => {
    const testImage = new Image();

    testImage.onload = () => {
      setStatus(`✅ Image loaded successfully: ${imagePath}`);
    };

    testImage.onerror = () => {
      setStatus(`❌ Failed to load image: ${imagePath}`);
    };

    testImage.src = imagePath;

    return () => {
      testImage.onload = null;
      testImage.onerror = null;
    };
  }, [imagePath]);

  return (
    <div className="p-2 border rounded mb-2">
      <div>{status}</div>
      <div className="text-xs mt-1">Path: {imagePath}</div>
    </div>
  );
}
