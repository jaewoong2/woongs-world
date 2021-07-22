import styled from '@emotion/styled';

export const ImageWrapper = styled.article`
  min-width: 100px;
  min-height: 100px;
  padding: 15px;
  width: auto;
  height: auto;
  max-width: 140px;
  max-height: 140px;
  border-radius: 50%;
  @media screen and (max-width: 1050px) {
    height: auto;
    max-height: 150px;
    margin: 0;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
  }
`;
