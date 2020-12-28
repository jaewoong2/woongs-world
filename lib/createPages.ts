import { resolve } from 'path'
import { GatsbyCreatePages } from './types'

const createPages: GatsbyCreatePages = async ({
  graphql,
  boundActionCreators,
}) => {
  const { createPage } = boundActionCreators

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  allMarkdown.data.allMarkdownRemark.edges.forEach((edge: any) => {
    const { slug } = edge.node.fields
    if (!slug) return

    // type safe `createPage` call
    createPage({
      path: slug,
      component: resolve(__dirname, '../src/templates/blog-post.tsx'),
      context: {
        slug,
      },
    })
  })
}

export default createPages;