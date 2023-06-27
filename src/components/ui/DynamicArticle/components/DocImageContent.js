import React from 'react';
import { DocMediaImage } from "./DocMediaImage";
import { DocMediaLogo } from "./DocMediaLogo";
import { AdaptiveImage } from "./AdaptiveImage";


export const DocImageContent = ({
  image, logo, fallback, initials, alt
}) => {
  if (image) {
    return (
      <DocMediaImage
        image={image}
        fallback={fallback}
        alt={alt}
      />
    );
  }

  if (logo) {
    return (
      <DocMediaLogo
        logo={logo}
        fallback={fallback}
        initials={initials}
        alt={alt}
      />
    );
  }

  return (
    <AdaptiveImage
      src={fallback}
      fallback={fallback}
      alt={alt}
    />
  );
};
