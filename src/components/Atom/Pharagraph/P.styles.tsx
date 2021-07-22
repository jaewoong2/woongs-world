import styled from '@emotion/styled';

type pharaGraphType = {
  fontSize: string;
};

export const P = styled.p<pharaGraphType>`
  font-size: ${({ fontSize }) => fontSize};
`;
