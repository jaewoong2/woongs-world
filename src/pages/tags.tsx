import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { StringParam, useQueryParam } from 'use-query-params';
import Lists from '../components/lists';
import MainComponent from '../templates/Layout';
import { ImdProps } from '../utils/type';

const Section = styled.section`
    position: relative;
`;

const Tags: React.VFC<ImdProps> = ({ data }) => {
    const [tag] = useQueryParam('tag', StringParam);
    console.log(tag);
    return (
        <MainComponent>
            <Section>
                {data.allMarkdownRemark.edges.map((edge, idx) => {
                    return (
                        edge?.node?.frontmatter?.tags?.find(tags => tags === tag) && (
                            <Lists
                                tags={edge?.node?.frontmatter?.tags}
                                title={edge.node.frontmatter.title}
                                key={edge.node.id.slice(0, 10) + idx}
                                date={edge.node.frontmatter.date}
                                slug={edge.node.fields.slug}
                            />
                        )
                    );
                })}
            </Section>
        </MainComponent>
    );
};

export default Tags;

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
