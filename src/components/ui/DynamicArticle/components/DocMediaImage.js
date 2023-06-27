import React from 'react';
import * as styles from "../styles";
import { AdaptiveImage } from "./AdaptiveImage";
import { useResource } from "../hooks/useResource";

export const DocMediaImage = ({
  image,
  fallback,
}) => {
  const { data, isLoading, error } = useResource(image);

  return (
    <AdaptiveImage
      src={data?.url ?? fallback}
      fallback={fallback}
      isLoading={isLoading}
      error={error}
      className={error ? styles.FallBackImage : undefined}
    />
  );
};
