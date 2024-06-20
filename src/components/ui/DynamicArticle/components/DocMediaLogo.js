import React from 'react';
import * as styles from "../styles";
import { AdaptiveImage } from "./AdaptiveImage";

export const DocMediaLogo = ({
  logo,
  fallback,
  initials,
  alt
}) => {
  const src = logo ?? fallback;

  return (
    <AdaptiveImage
      src={src}
      fallback={fallback}
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
