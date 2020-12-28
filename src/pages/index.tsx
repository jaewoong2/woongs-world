import React from "react"
import { css } from "@emotion/react"
import { Link, graphql, PageProps } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout";
import styled from "styled-components";

interface indexPageProps extends PageProps {
  data: {
    allMarkdownRemark: {
      totalCount: number | string
      edges: [{
        node: nodeTypes
      }]
    }
  }
}

type nodeTypes = {
    id: string
    frontmatter: {
      title: string
      date: string
    }
    fields: {
      slug: string
    }
    excerpt: string
};

const Container = styled.div`

  .link-posts {
    text-decoration: none;
    color: inherit;
  }

  .post-title {
    margin-bottom: ${rhythm(1 / 4)};
  }

  .post-date {
    color: #555;
  }

`

const Title = styled.h1`
  display: inline-block;
  border-bottom: 1px solid;
`


export default function Home({ data } : indexPageProps) {
  return (
    <Layout>
      <Container>
        <Title>
          Amazing Pandas Eating Things
        </Title>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }: { node : nodeTypes}) => (
          <div key={node.id}>
            <Link
              className="link-posts"
              to={node.fields.slug}
            >
              <h3 className="post-title">
                {node.frontmatter.title}{" "}
                <span className="post-date">
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </Container>
    </Layout>
  )
}

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
`