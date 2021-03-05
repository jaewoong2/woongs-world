import { graphql, PageProps } from 'gatsby';
import React from 'react';
import MainComponent from '../templates/Layout';
import { ImdProps } from '../utils/type';

const Dev: React.VFC<ImdProps> = ({ data }) => {
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
