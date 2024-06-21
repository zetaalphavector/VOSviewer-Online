import React, { useEffect } from 'react';
import { AdaptiveImage } from "./AdaptiveImage";
import { useResource } from "../hooks/useResource";

export const DocMediaImage = ({
  image,
  fallback,
  alt
}) => {
  const { abort, data, isLoading, error } = useResource(image);

  useEffect(() => () => abort(), []);

  const src = data ?? fallback;

  return (
    <AdaptiveImage
      src={src}
      fallback={fallback}
      isLoading={isLoading}
      error={error}
      al={alt}
    />
  );
};
