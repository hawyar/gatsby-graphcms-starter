if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, gcms } }) => {
              return gcms.posts.map((post) => {
                return Object.assign(
                  {},
                  {
                    title: post.title,
                    description: post.excerpt,
                    date: post.publishedt,
                    url: site.siteMetadata.siteUrl + post.slug,
                    guid: site.siteMetadata.siteUrl + post.slug,
                    custom_elements: [{ "content:encoded": post.content.html }],
                  }
                )
              })
            },
            query: `
            {
              gcms {
            posts(stage: PUBLISHED, orderBy: publishedAt_DESC) {
              title
              excerpt
              slug
              content {
                html
              }
              author {
              name
              }
              publishedAt
            }
          }

            }
            
            `,
            output: "/rss.xml",
            match: "^/blog/",
            title: "Gatsby + GraphCMS's Blog - RSS Feed",
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // GA makes multiple request per user per session. It might affect performance
    //     // make sure GOOGLE_ANALYTICS exists in your local .env
    //     // trackingId: process.env.GOOGLE_ANALYTICS,
    //   },
    // },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        analyzerPort: 3000,
        production: true,
      },
    },
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
        url: process.env.GRAPH_CMS_KEY,
      },
    },
    `gatsby-plugin-react-helmet`,

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
