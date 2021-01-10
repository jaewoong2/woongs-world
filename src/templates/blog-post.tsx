import React, { useEffect, useState } from 'react';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';

const Section = styled.section`
    .markdown-wrapper {
        * {
            color: inherit;
        }
        code {
            background-color: rgba(220, 220, 220, 0.9);
            padding: 2px;
            color: black;
            border-radius: 5px;
        }
        pre {
            background-color: ${({ theme }) =>
                theme.isDarkMode === true ? 'rgba(220, 220, 220, 0.56)' : 'rgba(0, 0, 0, 0.84)'};
            color: ${({ theme }) => theme.color.primary};
            padding: 10px;
            overflow: auto;
            code {
                background-color: unset;
                color: inherit;
            }
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
        <Layout>
            <Section>
                <h1 className="text">{post?.frontmatter.title}</h1>
                <div
                    className="text markdown-wrapper"
                    dangerouslySetInnerHTML={{ __html: post?.html ? post?.html : '' }}
                />
            </Section>
        </Layout>
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
