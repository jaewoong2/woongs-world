/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: <https://www.gatsbyjs.com/docs/node-apis/>
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        template: path.resolve(__dirname, 'src/template'),
        provider: path.resolve(__dirname, 'src/provider'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
      },
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages/markdown` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
            next {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
            previous {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `).then(({ data: data }) => {
      data.allMarkdownRemark.edges.map(({ node, next, previous }, idx) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`src/template/markdown/index.tsx`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
            next:
              idx === data.allMarkdownRemark.edges.length - 1
                ? ''
                : next.fields.slug,
            nextTitle:
              idx === data.allMarkdownRemark.edges.length - 1
                ? ''
                : next.frontmatter.title,
            previous: idx === 0 ? '' : previous.fields.slug,
            previousTitle: idx === 0 ? '' : previous.frontmatter.title,
          },
        });
      });
      resolve();
    });
  });
};
