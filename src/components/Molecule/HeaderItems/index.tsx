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
        <Anchor
          activeClassName="active"
          key={item + `${idx}`}
          to={'/' + item + '/'}
        >
          <PharaGraph className={'header-pharagraph'} fontSize={'1.4em'}>
            {item.toUpperCase()}
          </PharaGraph>
        </Anchor>
      ))}
    </Wrapper>
  );
};

export default HeaderItems;
