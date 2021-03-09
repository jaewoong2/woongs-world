import { graphql, PageProps } from 'gatsby';
import React from 'react';
import MainComponent from '../templates/Layout';

interface IdevProps extends PageProps {
    data: {
        allMarkdownRemark: {
            totalCount: number | string;
            edges: [
                {
                    node: nodeTypes;
                },
            ];
        };
    };
}

type nodeTypes = {
    id: string;
    frontmatter: {
        title: string;
        date: string;
    };
    fields: {
        slug: string;
    };
    excerpt: string;
};

const Dev: React.VFC<IdevProps> = () => {
    return <MainComponent></MainComponent>;
};

export default Dev;

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`;
