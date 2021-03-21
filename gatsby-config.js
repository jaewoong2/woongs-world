/* eslint-disable no-useless-escape */
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
    siteMetadata: {
        title: '@JaeWoong2',
        author: 'JaeWoong Lim',
        description: 'prepare For FE developer',
        siteUrl: 'https://jaewoong2.github.io/',
    },
    pathPrefix: '/woongs-world',
    /* Your site config here */
    plugins: [
        `gatsby-plugin-catch-links`,
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                head: true,
                anonymize: true,
                // The property ID; the tracking code won't be generated without it
                trackingId: '191572246',
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: `https://jaewoong2.github.io/`,
                sitemap: `https://jaewoong2.github.io/woongs-world/sitemap.xml`,
                poilcy: [{ userAgent: '*', allow: '/' }],
            },
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 700,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: true,
                            noInlineHighlight: false,
                        },
                    },
                ],
            },
        },
        `gatsby-plugin-typescript`,
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Roboto\:300`,
                    `Noto Sans KR\:300`,
                    `DotGothic16`,
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
