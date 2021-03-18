import React from 'react';
import { CreatePagesArgs, graphql } from 'gatsby';
import styled, { useTheme } from 'styled-components';
import MainComponent from '../Layout';
import ReactHelmet from '../ReactHelmet';
import Utterances from '../../components/utterances';
import PostNavigator from '../../components/postnavigator';
import { Tag } from '../../components/lists/styles';

const Section = styled.section`
    padding: 20px;
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    flex-direction: column;
    .title {
        padding-bottom: 10px;
        position: relative;
        margin-bottom: 30px;
        h1 {
            margin-bottom: 3px;
        }
        code {
            font-size: 0.75em;
        }
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
        font-size: 0.825em;
        color: ${({ theme }) => theme.color.dark};
        padding: 5px;

        blockquote {
            background-color: ${({ theme }) =>
                theme.isDarkMode ? 'rgba(188, 188, 188, 0.125)' : 'rgba(20, 20, 20, 0.125)'};
            border-color: ${({ theme }) => (theme.isDarkMode ? theme.color.yellow : theme.color.purple)};
            p {
                padding: 7px;
                padding-left: 0;
            }
        }

        p {
            color: ${({ theme }) => theme.color.dark} !important;
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
        pre {
            margin-top: 30px;
            margin-bottom: 30px;
            background-color: ${({ theme }) => theme.color.primary};
        }

        @media screen and (max-width: 450px) {
            * {
                font-size: 1em;
            }
        }
    }
`;
const PostNavWrppaer = styled.div`
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

const CommentWrppaer = styled.div`
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

type makrDownRemarkType = {
    fileds: {
        slug: string;
    };
    html: string;
    frontmatter: { title: string; tags: string[]; description: string };
};

interface dataType extends CreatePagesArgs {
    pageContext: {
        next: string;
        previous: string;
        slug: string;
        nextTitle: string;
        previousTitle: string;
    };
    data: {
        markdownRemark: makrDownRemarkType;
    };
}

const BlogPost: React.FC<dataType> = ({ pageContext, data }) => {
    const post = data.markdownRemark;
    const { next, previous, nextTitle, previousTitle } = pageContext;
    const styledTheme = useTheme();
    return (
        <MainComponent>
            <ReactHelmet
                favicon={'https://jaewoong2.github.io/woongs-world/favicon.ico'}
                keywords={post?.frontmatter?.tags?.join(',')}
                title={post?.frontmatter?.title}
                description={post?.frontmatter?.description}
            />
            <Section>
                <div className="title text">
                    <h1 className="text">{post?.frontmatter.title}</h1>
                    {post?.frontmatter?.tags?.map(tag => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                </div>
                <div className="markdown-wrapper" dangerouslySetInnerHTML={{ __html: post?.html ? post?.html : '' }} />
            </Section>
            <PostNavWrppaer>
                <PostNavigator title={previousTitle} slug={previous} right={false} left={true} />
                <PostNavigator title={nextTitle} slug={next} right={true} left={false} />
            </PostNavWrppaer>
            <CommentWrppaer>
                <Utterances
                    repo={'jaewoong2/blog-comment'}
                    theme={styledTheme.isDarkMode ? 'github-dark' : 'github-light'}
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
                tags
            }
        }
    }
`;
