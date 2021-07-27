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
  onClickToggle: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({
  headerItems,
  onClickToggle,
  isDarkMode,
}) => {
  return (
    <Wrapper>
      <div className="wrapper">
        <Anchor key="home" to={'/'}>
          <PharaGraph className="home" fontSize={'1.4em'}>
            HOME
          </PharaGraph>
        </Anchor>
        <ButtonWrapper>
          <HeaderItems headerItems={headerItems} />
          <Button>
            {isDarkMode ? (
              <IoMoonOutline className="icon-svg" onClick={onClickToggle} />
            ) : (
              <RiSunLine className="icon-svg" onClick={onClickToggle} />
            )}
          </Button>
        </ButtonWrapper>
      </div>
    </Wrapper>
  );
};

export default Header;
