import React from 'react';
import { Wrapper } from './Icons.styles';
import { BsFilePost } from '@react-icons/all-files/bs/BsFilePost';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
const Icons = () => {
  return (
    <Wrapper>
      <span className="contact-icon text">
        <a
          className="icon-wrapper"
          rel="noreferrer"
          href="https://github.com/jaewoong2"
          target="_blank"
        >
          <FiGithub className="icon" size="36px" />
          <p className="icon-pharagraph">https://github.com/jaewoong2</p>
        </a>
      </span>
      <span className="contact-icon text">
        <a
          className="icon-wrapper"
          rel="noreferrer"
          href="https://velog.io/@jwisgenius"
          target="_blank"
        >
          <BsFilePost className="icon" size="36px" />
          <p className="icon-pharagraph">https://velog.io/@jwisgenius</p>
        </a>
      </span>
    </Wrapper>
  );
};

export default Icons;
