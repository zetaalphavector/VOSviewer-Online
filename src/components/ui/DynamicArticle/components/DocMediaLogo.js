import React, { useEffect } from 'react';
import * as styles from "../styles";
import { AdaptiveImage } from "./AdaptiveImage";
import { useResource } from "../hooks/useResource";

export const DocMediaLogo = ({
  logo,
  fallback,
  initials,
  alt
}) => {
  const { abort, data, isLoading, error } = useResource(logo);

  useEffect(() => () => abort(), []);

  const src = data?.download_url ?? fallback;

  return (
    <AdaptiveImage
      src={src}
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
