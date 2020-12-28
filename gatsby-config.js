/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: "Pandas Eating Lots",
  },
  /* Your site config here */
  plugins: [
    'gatsby-plugin-emotion',
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography"
      }
    }
  ],
}
