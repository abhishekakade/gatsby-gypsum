module.exports = {
  siteMetadata: {
    title: `Sai India Gypsum`,
    description: `Sai India Gypsum. Supplier of gypsum for constructions.`,
    author: `Abhishek K`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Sai India Gypsum`,
        short_name: `Sai India Gypsum`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  // plugins: [
  //   `gatsby-transformer-sharp`,
  //   `gatsby-plugin-sharp`,
  //   {
  //     resolve: `gatsby-source-filesystem`,
  //     options: { path: `./src/images/` },
  //   },
  // ],
}
