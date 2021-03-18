import styled from 'styled-components';

export const MainContainer = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    padding: 3px;

    .main-container {
        margin-top: 10px;
        width: 67%;
        @media screen and (max-width: 1050px) {
            width: 100%;
        }
    }

    .section-container {
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: space-evenly;
        @media screen and (max-width: 1050px) {
            width: 100%;
            flex-direction: column;
        }
    }
`;

export const MainSection = styled.section`
    width: 100%;
    border: 2.3px solid ${({ theme }) => theme.color.border};
    border-radius: 8px;
    min-height: 300px;
`;

export const SideSection = styled.section`
    width: 16%;
    left: 0;
    top: 0;
    position: absolute;
    @media screen and (max-width: 1050px) {
        position: relative;
        width: 100%;
        margin: 0;
        margin-bottom: 5px;
    }
`;
