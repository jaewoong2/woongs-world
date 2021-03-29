import React from 'react';
import { CreatePagesArgs, graphql, Link } from 'gatsby';
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

        code[class*='language-text'] {
            position: relative;
            font-size: 0.85em;
            z-index: 3;
            font-family: 'Noto Sans KR';
            background: transparent;
            color: ${({ theme }) => (theme.isDarkMode ? theme.color.white : '#657b83')};
            &::before {
                content: '';
                transform: rotate(-2deg);
                position: absolute;
                bottom: 0.3em;
                left: 0;
                width: 100%;
                height: 0.7em;
                border-radius: 5px;
                background-color: ${({ theme }) => (theme.isDarkMode ? theme.color.purple : '#fdf6e3')};
                z-index: -1;
            }
        }

        hr {
            background: ${({ theme }) => theme.color.dark};
            height: 1px;
            opacity: 0.5;
        }

        pre {
            margin-top: 30px;
            margin-bottom: 30px;
            background-color: ${({ theme }) => theme.color.primary};
        }

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
                        <Link key={tag} to={`/tags?tag=${tag}`}>
                            <Tag>{tag}</Tag>
                        </Link>
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
                    theme={styledTheme?.isDarkMode ? 'github-dark' : 'github-light'}
                />
            </CommentWrppaer>
        </MainComponent>
    );
};

export default React.memo(BlogPost);

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
