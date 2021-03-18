import { createGlobalStyle } from 'styled-components';
import React from 'react';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "Roboto", "Noto Sans KR", sans-serif;
        border-color: ${({ theme }) => theme.color.border} !important;
    }

    h1,
    h2,
    h3,
    h4 {
        font-weight: 300;
        font-family: "Roboto", "Noto Sans KR", sans-serif;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.color.dark};
    }
 
    html {
        transition: background-color 0.35s linear, color 0.35s linear;
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

    /* for Dark THEME */

    .icon-svg {
        path {
            fill: ${({ theme }) => theme.isDarkMode && theme.color.yellow};
            fill-opacity: ${({ theme }) => theme.isDarkMode && 0};
        }

        &:hover {
            color: ${({ theme }) => (theme.isDarkMode ? theme.color.white : theme.color.purple)};
        }
    }

    .represent-color {
        color: ${({ theme }) => theme.color.representativeColor} !important;
    }

    .markdown-wrapper {
        color: ${({ theme }) => theme.color.dark};
    }
    
    .text {
        color: ${({ theme }) => theme.color.dark} !important;
    }


`;

export default React.memo(GlobalStyle);
