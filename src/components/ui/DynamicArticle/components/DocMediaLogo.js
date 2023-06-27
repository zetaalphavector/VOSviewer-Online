import React from 'react';
import * as styles from "../styles";
import { AdaptiveImage } from "./AdaptiveImage";
import { useResource } from "../hooks/useResource";

export const DocMediaLogo = ({
  logo,
  fallback,
  initials,
}) => {
  const { data, isLoading, error } = useResource(logo);


  return (
    <AdaptiveImage
      src={data?.url ?? fallback}
      fallback={fallback}
      isLoading={isLoading}
      error={error}
    >
      {initials && (
        <div className={styles.Avatar}>{initials}</div>
      )}
    </AdaptiveImage>
  );
};
