import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const A = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;

  .active {
    color: red;
  }
`;
