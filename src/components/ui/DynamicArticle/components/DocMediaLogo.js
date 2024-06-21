import React, { useEffect } from 'react';
import * as styles from "../styles";
import { AdaptiveImage } from "./AdaptiveImage";
import { useAttachmentResource } from "../hooks/useResource";
import { toBase64 } from "../utils";

export const DocMediaLogo = ({
  logo,
  fallback,
  initials,
  alt
}) => {
  const { abort, data, isLoading, error } = useAttachmentResource(logo);

  useEffect(() => () => abort(), []);

  let src;
  if (data) {
    const base64Content = toBase64(data.content);
    src = `data:${data.contentType};base64,${base64Content}` ?? fallback;
  }

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
