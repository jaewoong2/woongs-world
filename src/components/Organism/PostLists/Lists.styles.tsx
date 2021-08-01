import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 10px;
  margin-left: 10px;

  .list-wrapper {
    display: flex;
    flex-direction: column;
  }

  .link-posts {
    width: fit-content;
    text-decoration: none;
    color: inherit;
  }

  .post-title {
    display: initial;
    margin-bottom: 11px;
    color: ${({ theme }) => theme.color.sub};
    font-size: 1.35824rem;

    &:hover {
      opacity: 0.65;
      transition: opacity 0.25s;
    }
    transition: opacity 0.25s;

    .index {
      font-size: 1.2em;
      margin-right: 3px;
    }
  }

  .post-date {
    display: initial;
    color: #555;
    font-size: 0.75em;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.color.sub};
    margin-left: 15px;
    margin-bottom: 5px;
  }
`;

export const Title = styled.h1`
  display: inline-block;
  border-bottom: 1px solid;
  margin: 0;
`;
