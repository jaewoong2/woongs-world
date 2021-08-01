import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1050px) {
    width: 40%;
    font-size: 0.85em;
    margin: 0;
    padding: 0;
  }

  .one-line {
    color: ${({ theme }) => theme.color.primary};
  }

  p {
    color: ${({ theme }) => theme.color.sub};
    font-size: 0.95em;
    margin: 0px 0px 0px 20%;
    padding: 0px 0px 9px 0;

    @media screen and (max-width: 1050px) {
      margin: 0;
      padding-bottom: 5px;
    }

    @media screen and (max-width: 450px) {
      font-size: 1.125em;
    }
  }
`;
