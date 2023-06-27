import React, { useMemo } from 'react';
import * as styles from './styles';
import { DocImageContent } from "./components/DocImageContent";
import { getInitialsFromName } from "./utils";

export const DynamicArticle = ({ item }) => {
  const {
    img_url: imgUrl, heading, uri, authors, title, abstract, image_url: image, logo_url: logo, source
  } = item;
  console.log('item ->', { image, logo, source });

  const initials = useMemo(
    () => getInitialsFromName(authors[0]?.fullName),
    [authors]
  );

  return (
    <div className={styles.DynamicArticle}>
      <div className={styles.ImageDynamicArticle}>
        {imgUrl
          ? <img alt="document img" src={imgUrl} className={styles.ImageDynamicArticle} />
          : <DocImageContent initials={initials} image={image} logo={logo} source={source} />}
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
