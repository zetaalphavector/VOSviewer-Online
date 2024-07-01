import React, { useEffect } from 'react';
import * as styles from "../styles";
import { AdaptiveImage } from "./AdaptiveImage";
import { useAttachmentResource } from "../hooks/useResource";

export const DocMediaLogo = ({
  logo,
  fallback,
  initials,
  alt
}) => {
  const { abort, src, isLoading, error } = useAttachmentResource(logo);

  useEffect(() => () => abort(), []);

  return (
    <AdaptiveImage
      src={src ?? fallback}
      fallback={fallback}
      isLoading={isLoading}
      error={error}
      alt={alt}
    >
      {initials && (
        <div className={styles.Avatar}>
          {initials}
        </div>
      )}
    </AdaptiveImage>
  );
};
