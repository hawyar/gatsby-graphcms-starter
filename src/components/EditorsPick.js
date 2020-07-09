import React from "react"
import { Box, Divider, Grid } from "@chakra-ui/core"
import Card from "./Card"
import { StaticQuery, graphql } from "gatsby"

const EditorsPick = () => {
  return (
    <div>
      {/* <StaticQuery query={graphql``} /> */}
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
          <Card />
          <Card />
        </Grid>
      </Box>
    </div>
  )
}

export default EditorsPick
