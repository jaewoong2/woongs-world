import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-left: 10px;

  @media screen and (max-width: 1050px) and (min-width: 450px) {
    font-size: 0.85em;
    flex-direction: column;
  }

  .contact-icon {
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;
    color: ${({ theme }) => theme.color.icon};

    .icon-pharagraph {
      margin: 0;
      padding: 0;
      display: none;
      color: ${({ theme }) => theme.color.sub};
    }

    @media screen and (max-width: 1050px) and (min-width: 450px) {
      font-size: 0.85em;
      justify-content: center;
      flex-direction: row;
      .icon-wrapper {
        display: flex;
      }
      .icon-pharagraph {
        display: block;
      }
    }

    svg {
      color: ${({ theme }) => theme.color.sub} !important;
      min-width: 15px;
      min-height: 15px;
      max-width: 20px;
      max-height: 20px;
      @media screen and (max-width: 1050px) {
        margin-right: 5px;
      }
    }
  }
`;
