import React, { useMemo } from 'react';
import { getPaperImgBySource } from "../utils";
import { DocMediaImage } from "./DocMediaImage";
import { DocMediaLogo } from "./DocMediaLogo";
import { AdaptiveImage } from "./AdaptiveImage";


export const DocImageContent = ({
  image, logo, source, initials
}) => {
  const fallback = useMemo(() => getPaperImgBySource(source), [source]);

  if (image) {
    return (
      <DocMediaImage
        image={image}
        fallback={fallback}
      />
    );
  }

  if (logo) {
    return (
      <DocMediaLogo
        logo={logo}
        fallback={fallback}
        initials={initials}
      />
    );
  }

  return (
    <AdaptiveImage
      src={fallback}
      fallback={fallback}
    />
  );
};
