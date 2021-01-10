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
        padding: 0;
    }
    p {
        animation: ${loadAnimation} 0.5s linear;
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
        @media screen and (max-width: 600px) {
            font-size: 13px;
        }
    }

`;

export default React.memo(GlobalStyle);
