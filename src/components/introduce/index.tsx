import { Link } from 'gatsby';
import React from 'react';
import { BsFilePost } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { Contact, Container } from './styles';

const Introduce: React.VFC<{ imageSrc: string }> = ({ imageSrc }) => {
    return (
        <Container>
            <div className="container-wrapper">
                <article className="image-container">
                    <Link to="/about">
                        <img src={imageSrc} alt="my-image" />
                    </Link>
                </article>
                <div className="info-container">
                    <p className="name text">Lim Jaewoong</p>
                    <p className="univ text">SoongSil Univ.</p>
                    <p className="one-line represent-color">Dreaming FE Devloper</p>
                </div>
                <Contact>
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
                </Contact>
            </div>
        </Container>
    );
};

export default React.memo(Introduce);
