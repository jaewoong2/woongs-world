import React from 'react';
import { ImageWrapper } from './Image.styles';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <ImageWrapper>
      <img src={src} alt={alt} />
    </ImageWrapper>
  );
};

export default Image;
