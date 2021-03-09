import { graphql } from 'gatsby';
import React from 'react';
import Lists from '../components/lists';
import MainComponent from '../templates/Layout';
import { ImdProps } from '../utils/type';

const Dev: React.VFC<ImdProps> = ({ data }) => {
    return (
        <MainComponent>
            <section>
                {data.allMarkdownRemark.edges.map((edge, idx) => (
                    <Lists
                        tags={edge?.node?.frontmatter?.tags}
                        title={edge.node.frontmatter.title}
                        key={edge.node.id.slice(0, 10) + idx}
                        date={edge.node.frontmatter.date}
                        slug={edge.node.fields.slug}
                    />
                ))}
            </section>
        </MainComponent>
    );
};

export default Dev;

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { frontmatter: { folder: { eq: "dev" } } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        tags
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
