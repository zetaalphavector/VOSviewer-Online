import tds from 'assets/images/tds-logo.png';
import iclr from 'assets/images/iclr-logo.png';
import arxiv from 'assets/images/arxiv-logo.png';
import neurips from 'assets/images/neurips-logo.png';
import citation from 'assets/images/citation-source.png';
import noImg from 'assets/images/no-img-source.png';

export const getPaperImgDimensions = (
  { width: wrapperWidth },
  { height: imgHeight, width: imgWidth },
  isIcon
) => {
  const styles = {
    wrapperStyles: {},
    imgStyles: !isIcon ? { width: '100%' } : {},
  };
  const MAX_DELTA = 1.4; // OR 1

  const delta = imgHeight / imgWidth;

  return delta < MAX_DELTA
    ? styles
    : {
      ...styles,
      wrapperStyles: { height: Math.ceil(wrapperWidth * MAX_DELTA) },
    };
};

export const getInitialsFromName = (name) => {
  const names = `${name}`.trim().split(' ');
  let initials = names[0].substring(0, 1);

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1);
  }
  return initials.toUpperCase();
};

export const ImagesMap = {
  'Towards Data Science': tds,
  ICLR: iclr,
  arXiv: arxiv,
  'Advances in Neural Information Processing Systems': neurips,
  Unknown: citation,
  Default: noImg,
};

export const DEFAULT_IMAGE = ImagesMap.Default;

export const getPaperImgBySource = (source) => ImagesMap[source] ?? DEFAULT_IMAGE;
