import styled from '@emotion/styled';

export const Wrapper = styled.div`
  .link {
    text-decoration: none;
    color: ${({ theme }) => theme.color.sub};
    cursor: pointer;
  }
  .active {
    color: ${({ theme }) => theme.color.primary};
  }
`;
