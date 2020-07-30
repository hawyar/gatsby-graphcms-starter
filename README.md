# Gatsby + GraphCMS Blog Starter 📖

## [![Netlify Status](https://api.netlify.com/api/v1/badges/9290ce86-d12c-45db-adb8-7a5ffbcf750a/deploy-status)](https://app.netlify.com/sites/zealous-beaver-db067f/deploys)

Live Demo: https://gatsby-graphcms.netlify.app

## Features

- Blazing fast performance - Run PageSpeed test [here](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fgatsby-graphcms.netlify.app%2F&tab=desktop)
- Easy deploy to Netlify
- Styled with [Chakra-ui](https://chakra-ui.com/)'s base theme and components
- Tag-separted blog posts
- Automatic Deploys - with GraphCMS Webhooks
- Easily add, edit, delete posts with GraphCMS's easy-to-use UI
- Featured posts section
- Editor's choice section
- Google Analytics
- RSS feed
- Blazing fast build time (faster subsequent build)

## Pre-requisites

- [Node](https://nodejs.org/en/)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- GraphCMS account - Select the **blog starter** to follow to follow)

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

2. Log in to your GraphCMS account and get your API Access Key. (**Settings** > **API Access** > **Endpoints**)
3. Copy the url and paste it in the .env file

The `.env` file should look like this

```js
GRAPH_CMS_KEY = PLACE_KEY_HERE
```

## Set API permissions

1. Go to **Settings** > **API Access** > **Public API permissions**
2. Check the **Content from stage Published** box.

**Note**: GraphCMS allows us to fetch DRAFT and PUBSLISHED posts. For production only check the PUBSLISHED box.

## Additional Configuration

To have sections such as Featured and Editor's choice we have to make some changes to GraphCMS.

1. Log in to GraphCMS and select your project.
2.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Changes

**Note**: This starter uses [Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/) features.
