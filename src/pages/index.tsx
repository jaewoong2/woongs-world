import Layout from '../template/Layout';
import React, { Fragment } from 'react';
import { graphql, PageProps } from 'gatsby';
import { MarkDownData } from 'type';
import { MainInfos } from '../repo';
import {
  Description,
  ListWrapper,
  Title,
} from 'components/Atom/Homes/Homes.styles';
import PostLists from 'components/Organism/PostLists';

interface IndexProps extends PageProps {
  data: MarkDownData;
}

const Index: React.FC<IndexProps> = ({ data }) => {
  return (
    <Layout>
      <section>
        {MainInfos.map((info, idx) => (
          <Fragment key={info.title + idx}>
            <Title>{info?.title}</Title>
            {info?.description && (
              <Description>- {info?.description}</Description>
            )}
            {info?.descriptions &&
              info.descriptions.map(description => (
                <Description key={description.slice(0, 25)}>
                  - {description}
                </Description>
              ))}
          </Fragment>
        ))}
      </section>
      <ListWrapper>
        <Title>Posts</Title>
        {data?.allMarkdownRemark?.edges.map((edge, idx) => (
          <PostLists
            tags={edge?.node?.frontmatter?.tags}
            title={edge.node.frontmatter.title}
            key={edge.node.id.slice(0, 10) + idx}
            date={edge.node.frontmatter.date}
            slug={edge.node.fields.slug}
          />
        ))}
      </ListWrapper>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
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
