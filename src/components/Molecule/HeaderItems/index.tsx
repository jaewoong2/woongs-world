import Anchor from 'components/Atom/Anchor';
import PharaGraph from 'components/Atom/Pharagraph';
import { Wrapper } from 'components/Molecule/HeaderItems/HeaderItems.styles';
import React from 'react';

interface HeaderItemsProps {
  headerItems: string[];
}

const HeaderItems: React.FC<HeaderItemsProps> = ({ headerItems }) => {
  return (
    <Wrapper>
      {headerItems.map((item, idx) => (
        <Anchor key={item + `${idx}`} to={'/' + item + '/'}>
          <PharaGraph className={'header-pharagraph'} fontSize={'1.4em'}>
            {item[0].toUpperCase() + item.slice(1)}
          </PharaGraph>
        </Anchor>
      ))}
    </Wrapper>
  );
};

export default HeaderItems;
