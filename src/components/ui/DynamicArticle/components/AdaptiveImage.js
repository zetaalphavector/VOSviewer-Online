import React, { useCallback, useEffect, useRef, useState, } from 'react';
import { getPaperImgDimensions } from "../utils";
import * as styles from "../styles";

export const AdaptiveImage = ({
  src,
  fallback,
  alt,
  className,
  isIcon,
  isLoading,
  error,
  children,
}) => {
  const [link, setLink] = useState(src);

  useEffect(() => {
    setLink(src);
  }, [src]);

  const imgRef = useRef(null);
  const [imgStyles, setImgStyles] = useState({});

  const wrapperRef = useRef(null);
  const [wrapperStyles, setWrapperStyles] = useState({});

  const setStyles = () => {
    if (
      !error
      && imgRef?.current?.naturalHeight
      && imgRef?.current?.naturalWidth
      && wrapperRef.current?.getBoundingClientRect
    ) {
      const { naturalHeight, naturalWidth } = imgRef.current;

      const styles = getPaperImgDimensions(
        wrapperRef.current.getBoundingClientRect(),
        { height: naturalHeight, width: naturalWidth },
        isIcon
      );

      setWrapperStyles(styles.wrapperStyles);
      setImgStyles(styles.imgStyles);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', setStyles);
    return () => {
      window.removeEventListener('resize', setStyles);
    };
  }, [imgRef, wrapperRef, isIcon]);

  const handleError = useCallback(() => {
    if (fallback && link !== fallback) {
      setLink(fallback);
    }
  }, [link, fallback]);

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  const isFallback = fallback === link;

  return (
    <div className={styles.AdaptiveImage} ref={wrapperRef} style={wrapperStyles}>
      <img
        ref={imgRef}
        src={link}
        alt={alt ?? 'document image'}
        style={imgStyles}
        onLoad={setStyles}
        className={`${styles.Img} ${className}`}
        onError={handleError}
      />
      {!isFallback ? children : null}
    </div>
  );
};
