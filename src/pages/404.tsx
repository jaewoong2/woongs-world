import React from 'react';
import styled from 'styled-components';
import { Title } from '../components/lists/styles';
import MainComponent from '../templates/Layout';

const ErrorSection = styled.section`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title,
    .back {
        color: ${({ theme }) => theme.color.dark};
        text-decoration: none;
        border-bottom: none;
    }

    .back {
        cursor: pointer;
        color: ${({ theme }) => (theme.isDarkMode ? theme.color.yellow : theme.color.purple)};
        &:hover {
            opacity: 70%;
            transition: opacity 0.35s;
        }
        transition: opacity 0.35s;
    }
`;

const Back = styled.a``;

const ErrorPage: React.VFC = () => {
    return (
        <MainComponent>
            <ErrorSection>
                <Title className="title">Page Not Found</Title>
                <a className="back" onClick={() => typeof history !== 'undefined' && history.go(-1)}>
                    Go Back?
                </a>
            </ErrorSection>
        </MainComponent>
    );
};

export default ErrorPage;
