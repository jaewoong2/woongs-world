import styled from '@emotion/styled';

export const Code = styled.code`
  font-size: 0.75em;
  font-family: 'Roboto';
  border-radius: 4px;
  padding: 4px 6px 4px 6px;
  cursor: pointer;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.tag};
  color: ${({ theme }) => theme.color.main};
  margin-right: 2px;
  margin-left: 3px;
`;
