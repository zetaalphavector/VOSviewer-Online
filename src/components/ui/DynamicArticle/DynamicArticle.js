import React, { useMemo } from 'react';
import * as styles from './styles';
import { DocImageContent } from "./components/DocImageContent";
import { getInitialsFromName, getPaperImgBySource } from "./utils";
import { AdaptiveImage } from "./components/AdaptiveImage";

export const DynamicArticle = ({ item }) => {
  const {
    img_url: imgUrl, heading, uri, authors, title, abstract, image_url: image, logo_url: logo, source
  } = item;

  const initials = useMemo(
    () => getInitialsFromName(authors[0]?.fullName),
    [authors]
  );

  const fallback = useMemo(() => getPaperImgBySource(source), [source]);

  const isShowPureImage = !image && !logo && !!imgUrl;

  return (
    <div className={styles.DynamicArticle}>
      <div className={styles.ImageDynamicArticle}>
        {isShowPureImage
          ? <AdaptiveImage src={imgUrl} fallback={fallback} alt={title} />
          : <DocImageContent alt={title} initials={initials} image={image} logo={logo} fallback={fallback} />}
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
        <div className="description_abstract">{abstract}</div>
      </div>
    </div>
  );
};
