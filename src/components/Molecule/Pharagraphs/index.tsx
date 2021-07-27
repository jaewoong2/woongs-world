import PharaGraph from 'components/Atom/Pharagraph';
import React from 'react';
import { Wrapper } from '../Pharagraphs/Pharagraphs.styles';

const Pharagraphs: React.FC = () => {
  return (
    <Wrapper>
      <PharaGraph fontSize={'0.87em'} className="name">
        Lim Jaewoong
      </PharaGraph>
      <PharaGraph fontSize={'0.87em'} className="univ">
        SoongSil Univ.
      </PharaGraph>
      <PharaGraph fontSize={'0.87em'} className="one-line">
        Dreaming FE Devloper
      </PharaGraph>
    </Wrapper>
  );
};

export default Pharagraphs;
