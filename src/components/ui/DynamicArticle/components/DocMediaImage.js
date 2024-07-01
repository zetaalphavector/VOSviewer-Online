import React, { useEffect } from 'react';
import { AdaptiveImage } from "./AdaptiveImage";
import { useAttachmentResource } from "../hooks/useResource";

export const DocMediaImage = ({
  image,
  fallback,
  alt
}) => {
  const { abort, src, isLoading, error } = useAttachmentResource(image);
  useEffect(() => () => abort(), []);

  return (
    <AdaptiveImage
      src={src ?? fallback}
      fallback={fallback}
      isLoading={isLoading}
      error={error}
      al={alt}
    />
  );
};
