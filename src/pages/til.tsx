import { graphql } from 'gatsby';
import React from 'react';
import Lists from '../components/lists';
import SearchBar from '../components/SearchBar';
import useInput from '../hooks/useInput';
import MainComponent from '../templates/Layout';
import { ImdProps } from '../utils/type';

const Til: React.VFC<ImdProps> = ({ data }) => {
    const [tagName, , onChangeTagName] = useInput('');

    return (
        <MainComponent>
            <section>
                <SearchBar tagName={tagName} onChangeTagName={onChangeTagName} />
                {data.allMarkdownRemark.edges.map((edge, idx) => {
                    if (tagName) {
                        return edge?.node?.frontmatter?.tags?.find(
                            tags => tags.toLocaleLowerCase() === tagName.toLocaleLowerCase(),
                        ) ? (
                            <Lists
                                tags={edge?.node?.frontmatter?.tags}
                                title={edge.node.frontmatter.title}
                                key={edge.node.id.slice(0, 10) + idx}
                                date={edge.node.frontmatter.date}
                                slug={edge.node.fields.slug}
                            />
                        ) : (
                            <></>
                        );
                    }
                    return (
                        <Lists
                            tags={edge?.node?.frontmatter?.tags}
                            title={edge.node.frontmatter.title}
                            key={edge.node.id.slice(0, 10) + idx}
                            date={edge.node.frontmatter.date}
                            slug={edge.node.fields.slug}
                        />
                    );
                })}
            </section>
        </MainComponent>
    );
};

export default Til;

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { frontmatter: { folder: { eq: "til" } } }
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
