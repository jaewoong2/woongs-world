import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
  color: inherit;
  .icon-svg {
    cursor: pointer;
    color: ${({ theme }) => theme.color.sub};
    /* moon position */
    transform: rotate(270deg);
    width: 1.45em;
    height: 1.45em;
    transition: color 0.5s;
    path {
      fill: ${({ theme }) => theme.isDarkMode && theme.origin.color.yellow};
      fill-opacity: ${({ theme }) => theme.isDarkMode && 0};
      transition: fill-opacity 0.6s, color 0.9s;
    }
    &:hover {
      path {
        fill-opacity: 1;
        transition: fill-opacity 0.6s;
      }
      transition: color 0.5s;
    }
  }
`;
