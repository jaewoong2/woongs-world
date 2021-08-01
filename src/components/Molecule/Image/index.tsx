import { Link } from 'gatsby';
import React from 'react';
import { ImageWrapper } from './Image.styles';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <ImageWrapper>
      <Link to={'/about'}>
        <img src={src} alt={alt} />
      </Link>
    </ImageWrapper>
  );
};

export default Image;
