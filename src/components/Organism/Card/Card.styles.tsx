import styled from '@emotion/styled';

export const Wrapper = styled.section`
  width: 90%;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  .container-wrapper {
    margin-left: 8px;
    margin-right: 12px;
    width: 80%;
    height: 97%;
    max-width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2.2px solid ${({ theme }) => theme.color.border};
    border-radius: 7px;
  }

  @media screen and (max-width: 1050px) and (min-width: 450px) {
    .container-wrapper {
      flex-direction: row;
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 150px;
      margin: 0;
      padding: 0;
    }
    width: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 1050px) {
    width: 100%;
    flex-direction: column;
  }
`;
