import { createGlobalStyle, keyframes } from 'styled-components';
import React from 'react';
export const loadAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const graphAnimation = keyframes`
  from {
    width: 0;
  }
`;

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        font-family: "Roboto", "Noto Sans KR", sans-serif;
        padding: 0;
    }
    h1,
    h2,
    h3,
    h4 {
        font-family: "Roboto", "Noto Sans KR";
        font-weight: 300;
    }
    p {
        /* animation: ${loadAnimation} 0.5s linear; */
    }

    .text {
        color: ${({ theme }) => theme.color.dark};
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.color.dark};
    }
 
    html {
        transition: background-color 0.5s linear, color 0.5s linear;
        background-color: ${({ theme }) => theme.color.primary};
        @media screen and (max-width: 450px) {
            font-size: 13px;
        }
    }

    body {
        text-shadow: 0 0 0.1px rgba(0, 0, 0, 0.3);
        -webkit-text-size-adjust: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        text-rendering: optimizelegibility;
    }

`;

export default React.memo(GlobalStyle);
