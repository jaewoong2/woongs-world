import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import MainComponent from './Layout';

const Section = styled.section`
    padding: 20px;
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    flex-direction: column;
    .text {
        padding-bottom: 10px;
        position: relative;
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
    }
    .markdown-wrapper {
        font-size: 0.875em;
        color: ${({ theme }) => theme.color.dark};
        h3,
        h1,
        h2,
        h4 {
            color: inherit;
        }
        pre {
            background-color: ${({ theme }) => theme.color.primary};
        }
    }
`;

type makrDownRemarkType = {
    html: string;
    frontmatter: { title: string };
};

type dataType = {
    data: {
        markdownRemark: makrDownRemarkType;
    };
};

const BlogPost: React.FC<dataType> = ({ data }) => {
    const post = data.markdownRemark;

    return (
        <MainComponent>
            <Section>
                <h1 className="text">{post?.frontmatter.title}</h1>
                <div className="markdown-wrapper" dangerouslySetInnerHTML={{ __html: post?.html ? post?.html : '' }} />
            </Section>
        </MainComponent>
    );
};

export default BlogPost;

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
