import styled from 'styled-components';

export const Form = styled.form`
    position: absolute;
    display: flex;
    right: 0;
    justify-content: flex-end;
    padding: 15px;
    padding-bottom: 0px;
`;

export const Input = styled.input`
    padding: 0px 0px 3px 7px;
    margin: 0;
    background-color: inherit;
    font-size: 0.75em;
    border-radius: 0px 10px 0 0;
    color: ${({ theme }) => theme.color.dark};
    outline: none;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.color.representativeColor} !important;
    transition: border-color 0.5s;
    &:active,
    &:focus,
    &:hover {
        border-bottom: 2px solid ${({ theme }) => (theme.isDarkMode ? theme.color.purple : theme.color.yellow)} !important;
        transition: border-color 0.5s;
    }
`;
