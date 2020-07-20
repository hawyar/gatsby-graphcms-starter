import React from "react"
import { Box, Grid } from "@chakra-ui/core"
import Card from "./Card"
import { StaticQuery, graphql } from "gatsby"

const EditorsPick = () => {
  return (
    <div>
      <Box
        as="article"
        pt={12}
        display="flex"
        flexDirection="column"
        margin="0 auto"
        width={{ base: "85%", lg: "70%" }}
      >
        <Grid
          gridTemplateColumns={{ sm: "1fr", md: "1fr 1fr" }}
          gridTemplateRows={{ sm: "1fr", base: "1fr 1fr" }}
          margin="0 auto"
          gridColumnGap="90px"
        >
          <StaticQuery
            query={graphql`
              {
                gcms {
                  posts(where: { editorsPick: true }) {
                    slug
                    excerpt
                    title
                    id
                    publishedAt
                    tags
                    coverImage {
                      handle
                      height
                      width
                    }
                    content {
                      text
                    }
                  }
                }
              }
            `}
            render={(data) =>
              data.gcms.posts.map((data) => {
                return (
                  <div key={data.slug}>
                    <Card data={data} />
                  </div>
                )
              })
            }
          />
        </Grid>
      </Box>
    </div>
  )
}

export default EditorsPick
