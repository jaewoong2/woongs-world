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
                        <img src={imageSrc} />
                    </Link>
                </article>
                <div className="info-container">
                    <p className="name text">Lim Jaewoong</p>
                    <p className="univ text">SoongSil Univ.</p>
                    <p className="one-line text">Dreaming FE Devloper</p>
                </div>
                <Contact>
                    <a
                        rel="noreferrer"
                        className="contact-icon text"
                        href="https://github.com/jaewoong2"
                        target="_blank"
                    >
                        <FiGithub className="icon" size="36px" />
                        <p className="icon-pharagraph">https://github.com/jaewoong2</p>
                    </a>
                    <a
                        rel="noreferrer"
                        className="contact-icon text"
                        href="https://velog.io/@jwisgenius"
                        target="_blank"
                    >
                        <BsFilePost className="icon" size="36px" />
                        <p className="icon-pharagraph">https://velog.io/@jwisgenius</p>
                    </a>
                </Contact>
            </div>
        </Container>
    );
};

export default Introduce;
