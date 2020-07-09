// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config()
// }

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Gatsby + GraphCMS Blog`,
    description: `Gatsby + GraphCMS Blog Starter`,
    author: `@Hawyar`,
  },

  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // GA makes multiple request per user during a single session. It might affect your site's performance
    //     // make sure GOOGLE_ANALYTICS exists in your local .env
    //     // trackingId: process.env.GOOGLE_ANALYTICS,
    //   },
    // },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GCMS",

        fieldName: "gcms",

        url: process.env.GRAPH_CMS_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        isResettingCSS: true,
        isUsingColorMode: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
}
