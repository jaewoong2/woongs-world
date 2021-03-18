import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;

    .container-wrapper {
        margin-left: 8px;
        margin-right: 12px;
        width: 100%;
        max-width: 230px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2.2px solid ${({ theme }) => theme.color.border};
        border-radius: 7px;

        @media screen and (max-width: 1050px) and (min-width: 450px) {
            flex-direction: row;
            max-width: 100%;
            max-height: 150px;
            margin: 0;
            padding: 0;
        }

        .info-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            @media screen and (max-width: 1050px) {
                width: 40%;
                font-size: 0.85em;
                margin: 0;
                padding: 0;
            }

            p {
                font-size: 0.87em;
                margin-left: 10px;
                margin: 0;
                margin-left: 20%;
                padding: 0 0 8px 0;
                @media screen and (max-width: 1050px) {
                    margin: 0;
                    padding-bottom: 5px;
                }
                @media screen and (max-width: 450px) {
                    font-size: 1.125em;
                }
            }
        }

        .image-container {
            min-width: 100px;
            min-height: 100px;
            padding: 15px;
            width: auto;
            height: auto;
            max-width: 140px;
            max-height: 140px;
            border-radius: 50%;

            @media screen and (max-width: 1050px) {
                height: auto;
                max-height: 150px;
                margin: 0;
            }

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                cursor: pointer;
            }
        }
    }
`;

export const Contact = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    margin-left: 10px;

    @media screen and (max-width: 1050px) and (min-width: 450px) {
        font-size: 0.85em;
        flex-direction: column;
    }

    .contact-icon {
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        text-decoration: none;
        color: ${({ theme }) => theme.color.dark};

        .icon-pharagraph {
            margin: 0;
            padding: 0;
            display: none;
        }

        @media screen and (max-width: 1050px) and (min-width: 450px) {
            font-size: 0.85em;
            justify-content: center;
            flex-direction: row;
            .icon-wrapper {
                display: flex;
            }
            .icon-pharagraph {
                display: block;
            }
        }

        svg {
            color: ${({ theme }) => theme.color.dark} !important;
            min-width: 15px;
            min-height: 15px;
            max-width: 20px;
            max-height: 20px;
            @media screen and (max-width: 1050px) {
                margin-right: 5px;
            }
        }
    }
`;
