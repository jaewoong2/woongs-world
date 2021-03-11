import React, { useEffect } from 'react';
import { CreatePagesArgs, graphql } from 'gatsby';
import styled, { useTheme } from 'styled-components';
import MainComponent from './Layout';
import ReactHelmet from './ReactHelmet';
import Utterances from '../components/utterances';
import PostNavigator from '../components/postnavigator';

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
            color: ${({ theme }) => theme.color.dark} !important;
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
const PostNavWrppaer = styled.div`
    width: 100%;
    padding: 20px;
    padding-left: 45px;
    padding-right: 45px;
    position: relative;
    justify-content: space-between;
    display: flex;
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
    /* background-color: ${({ theme }) => (theme.isDarkMode ? theme.color.whiteDarker : theme.color.white)}; */
    /* * {
        color: ${({ theme }) => theme.color.black} !important;
    } */
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
        next: false | string;
        previous: false | string;
        slug: string;
        nextTitle: boolean | string;
        previousTitle: boolean | string;
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
                keywords={post?.frontmatter?.description}
                title={post?.frontmatter?.title}
                description={post?.frontmatter?.description}
            />
            <Section>
                <h1 className="text">{post?.frontmatter.title}</h1>
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
            }
        }
    }
`;
