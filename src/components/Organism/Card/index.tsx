import Icons from 'components/Molecule/Icons';
import Image from 'components/Molecule/Image';
import Pharagraphs from 'components/Molecule/Pharagraphs';
import React from 'react';
import { Wrapper, Container } from './Card.styles';

const Card = () => {
  return (
    <Container>
      <Wrapper>
        <div className="container-wrapper">
          <Image
            src={
              // temp src
              'https://jaewoong2.github.io/woongs-world/static/0f27bd278475e86faa5444f7d2c9c9da/14b42/myimage.jpg'
            }
            alt={'myimage'}
          />
          <Pharagraphs />
          <Icons />
        </div>
      </Wrapper>
    </Container>
  );
};

export default Card;
