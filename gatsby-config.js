if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const { buildSchema, buildClientSchema } = require("graphql")

const path = require("path")

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://gatsby-graphcms.netlify.app",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `Gatsby + GraphCMS Blog`,
    description: `Gatsby + GraphCMS Blog Starter`,
    author: `@Hawyar`,
    siteUrl,
    keywords: [
      "Blog",
      "GraphCMS",
      "minute",
      "relations",
      "seo",
      "union types",
      "relations with graphcms	",
    ],
    social: {
      twitter: `https://twitter.com/HawyarFarooq`,
    },
    image: path.resolve(`./src/metImage.png`),
  },

  plugins: [
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // GA makes multiple request per user during a single session. It might affect your site's performance
    //     // make sure GOOGLE_ANALYTICS exists in your local .env
    //     // trackingId: process.env.GOOGLE_ANALYTICS,
    //   },
    // },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GCMS",
        fieldName: "gcms",
        batch: true,
        dataLoaderOptions: {
          maxBatchSize: 10,
        },
        url: process.env.GRAPH_CMS_KEY,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700`, // specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        isResettingCSS: true,
        // dark mode works but only after a page refresh. Feel free to make a PR
        isUsingColorMode: false,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/src/pages/`,
    //   },
    // },
  ],
}
