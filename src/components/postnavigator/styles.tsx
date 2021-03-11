import styled from 'styled-components';

export const LinkLeftWrapper = styled.div`
    width: 40%;
    height: 2em;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.linkColor};
    padding: 4px;
    .link-title {
        margin-left: 10px;
        font-size: 0.85em;
        padding: 4px;
    }

    .ban {
        text-decoration: line-through;
        color: rgba(170, 40, 50, 0.96);
    }
`;

export const LinkRightWrapper = styled.div`
    width: 40%;
    height: 2em;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.linkColor};
    padding: 4px;
    justify-content: flex-end;
    .link-title {
        margin-right: 10px;
        font-size: 0.85em;
        padding: 4px;
    }
    .ban {
        text-decoration: line-through;
        color: rgba(170, 40, 50, 0.96);
    }
`;
