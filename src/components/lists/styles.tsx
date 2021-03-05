import styled from 'styled-components';
import { rhythm } from '../../utils/typography';

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
        margin-bottom: ${rhythm(1 / 9)};
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
        margin-left: 15px;
        margin-bottom: 10px;
    }
`;

export const Title = styled.h1`
    display: inline-block;
    border-bottom: 1px solid;
`;

export const Tag = styled.span`
    font-size: 0.85em;
    width: 100%;
    border-radius: 6px;
    padding: 4px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.color.tagColor};
    margin-right: 2px;
    color: ${({ theme }) => theme.color.primary};
    margin-left: 3px;
`;
