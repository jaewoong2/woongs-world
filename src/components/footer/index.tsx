import React from 'react';
import styled from 'styled-components';

const FooterComponent = styled.footer`
    .pharagraph {
        width: 100%;
        height: 50px;
        border: 2.3px solid ${({ theme }) => theme.color.border};
        color: ${({ theme }) => theme.color.dark};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        margin-top: 30px;
    }
`;

const Footer: React.VFC = () => {
    return (
        <FooterComponent>
            <p className="pharagraph">{new Date().getFullYear()}- designed by @jaewoong2</p>
        </FooterComponent>
    );
};

export default Footer;
