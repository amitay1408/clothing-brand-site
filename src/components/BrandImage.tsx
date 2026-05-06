"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

const gradients: Record<string, string> = {
  "hero-coastal": "linear-gradient(160deg, #1e2c42 0%, #2a3d56 45%, #4a6274 80%, #7a8a9a 100%)",
  "editorial-pier": "linear-gradient(160deg, #2a3d56 0%, #1e2c42 40%, #4a6274 75%, #d4c4a0 100%)",
  "fabric-texture": "linear-gradient(135deg, #4a6274 0%, #2a3d56 40%, #7a8a9a 80%, #ede5d4 100%)",
  "product-tee": "linear-gradient(160deg, #ede5d4 0%, #d4c4a0 50%, #c8b99a 80%, #1e2c42 100%)",
  "vintage-family": "linear-gradient(160deg, #c8b99a 0%, #8b7355 35%, #d4c4a0 70%, #f5f2ec 100%)",
};

function getGradient(src: string): string {
  const key = Object.keys(gradients).find((k) => src.includes(k));
  return key ? gradients[key] : "linear-gradient(160deg, #2a3d56 0%, #4a6274 100%)";
}

type BrandImageProps = Omit<ImageProps, "onError"> & {
  fallbackClassName?: string;
};

export default function BrandImage({ src, alt, className, fallbackClassName, ...props }: BrandImageProps) {
  const [errored, setErrored] = useState(false);
  const gradient = getGradient(String(src));

  if (errored) {
    return (
      <div
        className={`absolute inset-0 ${fallbackClassName ?? ""}`}
        style={{ background: gradient }}
        aria-label={alt}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
      {...props}
    />
  );
}
