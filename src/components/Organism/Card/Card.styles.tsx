import styled from '@emotion/styled';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  .container-wrapper {
    margin: 10px 12px 0 8px;
    width: 100%;
    max-width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2.2px solid ${({ theme }) => theme.color.border};
    border-radius: 7px;
    @media screen and (max-width: 1050px) and (min-width: 450px) {
      flex-direction: row;
      max-width: 100%;
      max-height: 150px;
      margin: 0;
      padding: 0;
    }
  }
`;
