import PharaGraph from 'components/Atom/Pharagraph';
import React from 'react';
import { Wrapper } from '../Pharagraphs/Pharagraphs.styles';

const Pharagraphs: React.FC = () => {
  return (
    <Wrapper>
      <PharaGraph fontSize={'0.87em'} className="name text">
        Lim Jaewoong
      </PharaGraph>
      <PharaGraph fontSize={'0.87em'} className="univ text">
        SoongSil Univ.
      </PharaGraph>
      <PharaGraph fontSize={'0.87em'} className="one-line represent-color">
        Dreaming FE Devloper
      </PharaGraph>
    </Wrapper>
  );
};

export default Pharagraphs;
