module.exports = {
  siteMetadata: {
    title: `Willma's Here`,
    description:
      "Hi! I'm Willma. I'm a junior at The Webb Schools in California, " +
      "and I'm based in Hong Kong. Over the years, I have learned a lot about multiple areas, " +
      "from game development to web development. I am currently learning React and Gatsby, as well as Node JS.",
    author: `Willma`,
    siteUrl: "https://willma.me/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Willmas Here`,
        short_name: `Willmas Here`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-css-modules",
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/src/locales`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localJsonSourceName: `locale`,
        languages: [`en`, `zh`],
        defaultLanguage: `en`,
        siteUrl: `https://willma.me`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
        },
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },

    // projects static files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "assets",
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },

    // images
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    `gatsby-plugin-netlify-cms`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
