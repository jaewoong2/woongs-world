import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { defaultTheme } from 'type';

export const A = styled(Link)<defaultTheme>`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;

  .active {
    color: ${({ theme }) => theme.color.representativeColor};
  }
`;
