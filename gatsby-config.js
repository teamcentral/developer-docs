module.exports = {
  siteMetadata: {
    siteTitle: `Team Central Docs`,
    defaultTitle: `Team Central Docs`,
    siteTitleShort: `Team Central Docs`,
    siteDescription: `Documentation for TeamCentral.io`,
    siteUrl: `https://docs.teamcentral.io`,
    siteAuthor: `@teamcentral.io`,
    siteImage: `static/banner.jpg`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/teamcentral/developer-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Team Central Docs`,
        short_name: `TC Docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
        cache_busting_mode: `query`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
       resolve: `gatsby-plugin-google-analytics`,
       options: {
         trackingId: `G-5GGVLW9ED1`,
       },
     },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://docs.teamcentral.io`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
