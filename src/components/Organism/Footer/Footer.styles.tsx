import styled from '@emotion/styled';

export const FooterPharaGraph = styled.p`
  width: 100%;
  height: 48px;
  border: 2.3px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.sub};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 30px;
  padding: 0;
`;
