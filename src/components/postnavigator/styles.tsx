import styled from 'styled-components';

export const LinkLeftWrapper = styled.div`
    width: 40%;
    height: 3em;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* align-items: center; */
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.linkColor};
    padding: 4px;

    .placeholder {
        opacity: 78%;
        text-decoration: underline;
        font-size: 0.85em;
        margin-left: 10px;
    }
    .link-title {
        margin-left: 10px;
        font-size: 0.85em;
        padding: 4px;
    }

    .ban {
        text-decoration: line-through;
        color: rgba(170, 40, 50, 0.96);
    }
    @media screen and (max-width: 365px) {
        width: 60%;
    }
`;

export const LinkRightWrapper = styled.div`
    width: 40%;
    height: 3em;

    display: flex;
    justify-content: center;
    flex-direction: column;
    /* align-items: center; */
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.linkColor};
    padding: 4px;
    align-items: flex-end;

    .placeholder {
        opacity: 78%;
        text-decoration: underline;
        font-size: 0.85em;
        margin-right: 10px;
    }
    .link-title {
        margin-right: 10px;
        font-size: 0.85em;
        padding: 4px;
    }
    .ban {
        text-decoration: line-through;
        color: rgba(170, 40, 50, 0.96);
    }
    @media screen and (max-width: 365px) {
        width: 60%;
        margin-top: 20px;
        margin-left: 40%;
    }
`;
