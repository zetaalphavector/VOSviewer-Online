import React from 'react';
import * as styles from './styles';

export const DynamicArticle = ({ item }) => {
  const {
    img_url: imgUrl, heading, uri, authors, title, abstract
  } = item;
  console.log('item ->', {
    imgUrl, heading, uri, authors, title, abstract
  });

  return (
    <div className={styles.DynamicArticle}>
      <div>
        <img alt="document img" src={imgUrl} className={styles.ImageDynamicArticle} />
      </div>
      <div className={styles.DescriptionDynamicArticle}>
        <div className="description_heading">{heading}</div>
        <div className="description_title"><a className="description_url" href={uri} target="_blank" rel="noreferrer">{title}</a></div>
        <div className={styles.AuthorDynamicArticle}>{authors}</div>
        <div className="description_abstract">{abstract}</div>
      </div>
    </div>
  );
};
