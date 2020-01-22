module.exports = {
  siteMetadata: {
    title: `Open Source Community - Ghana`,
    description: `Description of website for Open Source Community - Ghana.`,
    canonicalUrl: 'https://eloquent-northcutt-54c6c5.netlify.com',
    author: `@oscghana`,
    organization: {
      name: 'Open Source Community - Ghana',
      url: 'https://eloquent-northcutt-54c6c5.netlify.com',
    },
    categories: [
      {
        slug: 'open-source',
        name: 'open source',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Open Source Community - Ghana`,
        short_name: `OSC - Ghana`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3DA639`,
        display: `minimal-ui`,
        icon: `src/images/logo/osi_keyhole_600X600_90ppi.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
