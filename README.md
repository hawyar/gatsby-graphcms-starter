# Gatsby + GraphCMS Starter 📖 (In progress)

## [![Netlify Status](https://api.netlify.com/api/v1/badges/9290ce86-d12c-45db-adb8-7a5ffbcf750a/deploy-status)](https://app.netlify.com/sites/zealous-beaver-db067f/deploys)

> A Gatsby blog starter using GraphCMS as a headless cms

**Note:** This starter uses [Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/) features.

## Features

- Responsive layout
- Modif
- Blog posts created with GraphCMS's easy-to-use UI
- Tag-separted blog posts
- Supports Multiple Authors
- Select Featured Posts
- Editor's Pick Cards
- Customizable theme
- Styled with [Chakra-ui](https://chakra-ui.com/) theme and components
- Blazing fast build time
- Deployed to Netlify with caching configuration

#### Coming soon:

- Dark Mode
- Mailchimp support
- Modify pages directly from GraphCMS

## Prerequisites

- [Node](https://nodejs.org/en/)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [GraphCMS account](https://graphcms.com/) (FREE)

## Setup

Clone this repository and then cd into the set directory.

```bash
git clone https://github.com/hawyar/hawyar.com.git
cd hawyar.com
```

## Installation

A few motivating and useful examples of how your product can be used. Spice this up with code blocks and potentially more screenshots.

Install the dependencies

```bash
yarn install
// npm install
```

Start the development environment

```bash
gatsby develop
```

Open http://localhost:8000 to see the site in development

Open http://localhost:8000/___graphql for GraphiQL

## Replace GraphCMS KEY

1. Rename `.env.Example` to `.env` and make sure it is ignored in your `.gitignore` file.

2. Log in to your GraphCMS account and get your API Access Key.
   > Go to **Settings** > **API Access** > **Endpoints**
3. Copy the url and paste it in the .env file

The `.env` should look like this

```js
GRAPH_CMS_KEY = PLACE_KEY_HERE
```

## Set API permissions

1. Go to **Settings** > **API Access** > **Public API permissions**
2. Check the **Content from stage Published** box.

**Note**: GraphCMS allows us to fetch DRAFT and PUBSLISHED posts. For production only check the PUBSLISHED box.

---

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
