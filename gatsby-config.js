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
        siteUrl: 'https://jaewoong2.github.io/woongs-world/',
    },
    pathPrefix: '/woongs-world',
    /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                head: true,
                anonymize: true,
                // The property ID; the tracking code won't be generated without it
                trackingId: `${process.env.GA_TRACKING_ID}`,
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: `https://jaewoong2.github.io/woongs-world/`,
                sitemap: `https://jaewoong2.github.io/woongs-world/sitemap.xml`,
                poilcy: [{ userAgent: '*', allow: '/' }],
            },
        },
        {
            resolve: `gatsby-plugin-disqus`,
            options: {
                shortname: `woongs-world`,
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
        `gatsby-plugin-fontawesome-css`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `limelight`,
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
