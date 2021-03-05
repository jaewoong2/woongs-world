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

        @media screen and (max-width: 1050px) {
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
            margin-left: 10px;
            @media screen and (max-width: 1050px) {
                width: 40%;
                font-size: 0.85em;
                margin: 0;
                padding: 0;
            }
            p {
                font-size: 0.87em;
                margin: 0;
                padding: 0 0 8px 0;
                @media screen and (max-width: 1050px) {
                    margin: 0;
                    padding-bottom: 5px;
                }
            }
        }

        .image-container {
            min-width: 100px;
            min-height: 100px;
            padding: 15px;
            width: auto;
            height: auto;
            max-width: 150px;
            max-height: 150px;
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
    margin-top: 15px;
    margin-left: 10px;
    @media screen and (max-width: 1050px) {
        font-size: 0.85em;
        flex-direction: column;
    }

    .contact-icon {
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${({ theme }) => theme.color.dark};
        font-size: 0px;
        @media screen and (max-width: 1050px) {
            font-size: 0.85em;
            justify-content: center;
            flex-direction: row;
        }

        svg {
            color: ${({ theme }) => theme.color.icon};
            min-width: 15px;
            min-height: 15px;
            max-width: 20px;
            max-height: 20px;
            margin-right: 7px;
        }
    }
`;
