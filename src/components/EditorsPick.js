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
        width={{ base: "85%", lg: "70%" }}
        margin="0 auto"
        color="white"
      >
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap="20">
          <StaticQuery
            query={graphql`
              {
                gcms {
                  posts(where: { editorsPick: true }) {
                    slug
                    excerpt
                    title
                    publishedAt
                    tags
                    coverImage {
                      url(
                        transformation: { image: { resize: { width: 1400 } } }
                      )
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
                return <Card data={data} />
              })
            }
          />
        </Grid>
      </Box>
    </div>
  )
}

export default EditorsPick
