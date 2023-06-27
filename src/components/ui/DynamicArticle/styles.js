import { css } from 'emotion';

export const DynamicArticle = css`
  display: flex;
`;

export const ImageDynamicArticle = css`
  width: 120px;
  display: block;
  position: relative;
`;

export const DescriptionDynamicArticle = css`
  padding-left: 16px;
`;

export const AuthorDynamicArticle = css`
  margin: 4px 0;
  font-weight: 500;
  color: #757575;
`;

export const FallBackImage = css`
  filter: grayscale(1);
  opacity: 0.2;
`;

export const Avatar = css`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: 0;
  bottom: 2px;
  right: 2px;
  background-color: #1976d2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14pt;
  position: absolute;
`;

export const AdaptiveImage = css`
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  width: 100%;
`;

export const Img = css`
  display: block;
  width: 100%;
`;
