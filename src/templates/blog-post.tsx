import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import MainComponent from './Layout';
import ReactHelmet from './ReactHelmet';
import CommentTemplate from '../components/disqus';

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
        padding: 5px;
        p {
            padding-left: 5px;
        }
        h3,
        h1,
        h2,
        h4 {
            padding: 0;
            padding-top: 3px;
            color: inherit;
        }
        pre {
            background-color: ${({ theme }) => theme.color.primary};
        }
    }
`;

const CommentWrppaer = styled.div`
    margin-left: 5%;
    width: 90%;
    padding: 20px;
    border-radius: 8px 8px 0 0;
    background-color: ${({ theme }) => (theme.isDarkMode ? theme.color.whiteDarker : theme.color.white)};
    * {
        color: ${({ theme }) => theme.color.black} !important;
    }
`;

type makrDownRemarkType = {
    fileds: {
        slug: string;
    };
    html: string;
    frontmatter: { title: string; tags: string[]; description: string };
};

type dataType = {
    data: {
        markdownRemark: makrDownRemarkType;
    };
};

const BlogPost: React.FC<dataType> = ({ data }) => {
    const post = data.markdownRemark;
    console.log(post);

    return (
        <MainComponent>
            <ReactHelmet
                favicon={'https://jaewoong2.github.io/woongs-world/favicon.ico'}
                keywords={post?.frontmatter?.description}
                title={post?.frontmatter?.title}
                description={post?.frontmatter?.description}
            />
            <Section>
                <h1 className="text">{post?.frontmatter.title}</h1>
                <div className="markdown-wrapper" dangerouslySetInnerHTML={{ __html: post?.html ? post?.html : '' }} />
            </Section>
            <CommentWrppaer>
                <CommentTemplate
                    page_url={'https://jaewoong2.github.io/woongs-world' + post?.fileds?.slug}
                    identifier={post?.frontmatter?.title}
                    page_title={post?.frontmatter?.title}
                />
            </CommentWrppaer>
        </MainComponent>
    );
};

export default BlogPost;

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            fields {
                slug
            }
            html
            frontmatter {
                title
            }
        }
    }
`;
