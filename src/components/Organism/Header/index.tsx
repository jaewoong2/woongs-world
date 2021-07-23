import Anchor from 'components/Atom/Anchor';
import PharaGraph from 'components/Atom/Pharagraph';
import Button from 'components/Molecule/Button';
import HeaderItems from 'components/Molecule/HeaderItems';
import React from 'react';
import { IoMoonOutline } from '@react-icons/all-files/io5/IoMoonOutline';
import { RiSunLine } from '@react-icons/all-files/ri/RiSunLine';
import { ButtonWrapper, Wrapper } from './Header.styles';

interface HeaderProps {
  headerItems: string[];
}

const Header: React.FC<HeaderProps> = ({ headerItems }) => {
  return (
    <Wrapper>
      <Anchor to={'/'}>
        <PharaGraph fontSize={'1.4em'}>HOME</PharaGraph>
      </Anchor>
      <ButtonWrapper>
        <HeaderItems headerItems={headerItems} />
        <Button>
          {false ? (
            <IoMoonOutline
              className="icon-svg"
              // onClick={() => setIsDarkMode(!isDarkMode)}
            />
          ) : (
            <RiSunLine
              className="icon-svg"
              // onClick={() => setIsDarkMode(!isDarkMode)}
            />
          )}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Header;
