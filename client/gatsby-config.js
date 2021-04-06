module.exports = {
  siteMetadata: {
    title: `Willma's Here`,
    description: "Hi! I'm Willma. I'm a junior at The Webb Schools in California, " + 
      "and I'm based in Hong Kong. Over the years, I have learned a lot about multiple areas, " + 
      "from game development to web development. I am currently learning React and Gatsby, as well as Node JS.",
    author: `Willma`,
    siteUrl: "https://willma.me/",
    
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-css-modules'
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
            escapeValue: false
          },
        },
        pages: [
          // add excluded pages here
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
