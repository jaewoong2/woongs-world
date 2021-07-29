import styled from '@emotion/styled';

export const LinkLeftWrapper = styled.div`
  width: 40%;
  height: 3em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.link};
  padding: 4px;

  .link-title {
    margin-left: 10px;
    font-size: 0.85em;
    padding: 4px;
  }

  @media screen and (max-width: 450px) {
    width: 60%;
  }
`;

export const PlaceHolder = styled.span`
  opacity: 78%;
  text-decoration: underline;
  font-size: 0.85em;
  margin-left: 10px;
`;

export const Null = styled.a`
  text-decoration: line-through;
  color: rgba(170, 40, 50, 0.96);
`;

export const LinkRightWrapper = styled.div`
  width: 40%;
  height: 3em;
  display: flex;
  justify-content: center;
  flex-direction: column;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.link};
  padding: 4px;
  align-items: flex-end;

  .link-title {
    margin-right: 10px;
    font-size: 0.85em;
    padding: 4px;
  }

  @media screen and (max-width: 450px) {
    width: 60%;
    margin-top: 20px;
    margin-left: 40%;
  }
`;
