import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const Title = styled.div`
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.color.sub};
  &::before {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    top: 100%;
    margin-bottom: 20px;
    height: 2px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.border};
  }
`;

export const H1 = styled.h1`
  font-size: 2.15rem;
  margin-bottom: 3px;
`;

export const Code = styled.code`
  font-size: 0.7em;
`;

export const MarkDownWrapper = styled.div`
  font-size: 0.825em;
  color: ${({ theme }) => theme.color.sub};
  padding: 5px;
  code[class*='language-text'] {
    position: relative;
    font-size: 0.85em;
    z-index: 3;
    font-family: 'Noto Sans KR';
    background: transparent;
    color: ${({ theme }) =>
      theme.isDarkMode ? theme.origin.color.white : '#657b83'};
    &::before {
      content: '';
      transform: rotate(-2deg);
      position: absolute;
      bottom: 0.3em;
      left: 0;
      width: 100%;
      height: 0.7em;
      border-radius: 5px;
      background-color: ${({ theme }) =>
        theme.isDarkMode ? theme.origin.color.purple : '#fdf6e3'};
      z-index: -1;
    }
  }
  hr {
    background: ${({ theme }) => theme.color.sub};
    height: 1px;
    opacity: 0.5;
  }
  pre {
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: ${({ theme }) => theme.color.main};

    * {
      font-size: 0.9em;
    }
  }
  blockquote {
    background-color: ${({ theme }) =>
      theme.isDarkMode
        ? 'rgba(188, 188, 188, 0.125)'
        : 'rgba(20, 20, 20, 0.125)'};
    border-color: ${({ theme }) =>
      theme.isDarkMode ? theme.origin.color.yellow : theme.origin.color.purple};
    p {
      padding: 7px;
      padding-left: 0;
    }
  }
  p {
    color: ${({ theme }) => theme.color.sub} !important;
    padding-left: 5px;
  }
  h1,
  h2,
  h3,
  h4 {
    padding: 0;
    padding-top: 3px;
    color: inherit;
  }
  @media screen and (max-width: 450px) {
    * {
      font-size: 1em;
    }
  }
`;

export const PostNavWrppaer = styled.div`
  width: 100%;
  padding: 20px;
  padding-left: 45px;
  padding-right: 45px;
  position: relative;
  justify-content: space-between;
  display: flex;
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CommentWrppaer = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;
  &::before {
    content: '';
    width: 92%;
    height: 2px;
    background-color: ${({ theme }) => theme.color.border};
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 4%;
  }
`;
