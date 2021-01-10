/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
    siteMetadata: {
        title: '@JaeWoong2',
    },
    pathPrefix: '/woongs-world',
    /* Your site config here */
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-typescript`,
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            },
        },
        `gatsby-plugin-fontawesome-css`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `limelight`,
                    `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
                ],
                display: 'swap',
            },
        },
        {
            resolve: `gatsby-transformer-sharp`,
            options: {
                // The option defaults to true
                checkSupportedExtensions: false,
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {},
        },
        `gatsby-plugin-image`,
    ],
};
