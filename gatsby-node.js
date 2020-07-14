exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      gcms: { posts },
    },
  } = await graphql(`
    {
      gcms {
        posts(stage: PUBLISHED) {
          id
          slug
          title
        }
      }
    }
  `)

  if (!posts) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
  }

  posts.forEach(({ id, slug }) => {
    createPage({
      path: `/posts/${slug}`,
      component: require.resolve(`./src/templates/BlogPost`),

      context: {
        id,
      },
    })
  })
}
