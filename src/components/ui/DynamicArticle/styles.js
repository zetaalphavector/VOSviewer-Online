import { css } from 'emotion';

export const DynamicArticle = css`
  display: flex;
`;

export const ImageDynamicArticle = css`
  width: 120px;
  display: block;
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
  width: 24px;
  height: 24px;
  margin-left: auto;
  margin-right: 0;
  top: -1rem;
  background-color: #1976d2;
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
