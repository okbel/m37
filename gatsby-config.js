module.exports = {
  siteMetadata: {
    siteTitle: `m37pod.com`,
    siteTitleShort: `m37`,
    pathPrefix: null,
    siteKeywords: `m37`,
    social: {
      twitter: `m37`,
      fbAppId: `m37`,
      youtube: `m37`,
      instagram: `m37`,
      reddit: `m37`,
    },
    siteTitleAlt: 'm37', // This allows an alternative site title for SEO schema.
    publisher: 'm37', // Organization name used for SEO schema
    siteDescription: 'm37',
    siteUrl: 'https://www.m37pod.com', // Site domain. Do not include a trailing slash! If you wish to use a path prefix you can read more about that here: https://www.gatsbyjs.org/docs/path-prefix/
    postsPerHomePage: 10, // Number of posts shown on the 1st page of of the index.js template (home page)
    postsPerPage: 5, // Number of posts shown on paginated pages
    author: 'm37', // Author for RSS author segment and SEO schema
    authorUrl: 'https://m37pod.com/about/', // URL used for author and publisher schema, can be a social profile or other personal site
    userTwitter: '@m37', // Change for Twitter Cards
    shortTitle: 'm37', // Used for App manifest e.g. Mobile Home Screen
    shareImage: '/logos/share.jpg', // Open Graph Default Share Image. 1200x1200 is recommended
    shareImageWidth: 900, // Change to the width of your default share image
    shareImageHeight: 600, // Change to the height of your default share image
    siteLogo: '/logos/logo-512.png', // Logo used for SEO, RSS, and App manifest
    backgroundColor: '#131320', // Used for Offline Manifest
    themeColor: '#131320', // Used for Offline Manifest
    copyright: 'Copyright © 2018 m37pod.com', // Copyright string for the RSS feed
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `copy`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'm37',
        short_name: 'm37',
        start_url: '/',
        background_color: 'black',
        theme_color: 'black',
        display: 'minimal-ui',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.m37pod.com`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
