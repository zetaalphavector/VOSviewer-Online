import React from 'react';
import { AdaptiveImage } from "./AdaptiveImage";

export const DocMediaImage = ({
  image,
  fallback,
  alt
}) => {
  const src = image ?? fallback;

  return (
    <AdaptiveImage
      src={src}
      fallback={fallback}
      al={alt}
    />
  );
};
