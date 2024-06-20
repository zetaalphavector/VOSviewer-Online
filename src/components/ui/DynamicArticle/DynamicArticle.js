import React, { useMemo } from 'react';
import HTMLRenderer from "react-html-renderer";
import * as styles from './styles';
import { DocImageContent } from "./components/DocImageContent";
import { getInitialsFromName, getPaperImgBySource } from "./utils";
import { AdaptiveImage } from "./components/AdaptiveImage";

export const DynamicArticle = ({ item }) => {
  const {
    img_url: imgUrl, heading, uri, authors, title, abstract, image_url: image, logo_url: logo, source
  } = item;

  let imageContentUrl = null;
  if (image && image.includes("document-assets") && !image.includes("/content")) {
    imageContentUrl = image.includes('?') ? image.replace('?', '/content?') : `${image}/content`;
  }
  let logoUrl = null;
  if (logo && logo.includes("document-assets") && !image.includes("/content")) {
    logoUrl = logo.includes('?') ? logo.replace('?', '/content?') : `${logo}/content`;
  }

  const initials = useMemo(
    () => getInitialsFromName(authors?.[0]?.fullName),
    [authors]
  );

  const fallback = useMemo(() => getPaperImgBySource(source), [source]);

  const isShowPureImage = !imageContentUrl && !logoUrl && !!imgUrl;

  return (
    <div className={styles.DynamicArticle}>
      <div className={styles.ImageDynamicArticle}>
        {isShowPureImage
          ? <AdaptiveImage src={imgUrl} fallback={fallback} alt={title} />
          : <DocImageContent alt={title} initials={initials} image={imageContentUrl} logo={logoUrl} fallback={fallback} />}
      </div>
      <div className={styles.DescriptionDynamicArticle}>
        <div className="description_heading">{heading}</div>
        <div className="description_title">
          <a
            className="description_url"
            href={uri}
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </a>
        </div>
        <div className={styles.AuthorDynamicArticle}>{authors}</div>
        <div className="description_abstract">
          <HTMLRenderer html={abstract} />
        </div>
      </div>
    </div>
  );
};
