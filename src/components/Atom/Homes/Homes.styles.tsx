import styled from '@emotion/styled/';

export const Title = styled.h3`
  font-size: 1.5em;
  padding: 0;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.color.primary};
  font-weight: normal;
  margin-left: 10px;
  margin-top: 8px;
`;

export const Description = styled.p`
  font-size: 0.925em;
  margin-left: 11px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.color.sub};
`;

export const ListWrapper = styled.section`
  margin-top: 10px;
  border-top: 2px solid ${({ theme }) => theme.color.border};
`;
