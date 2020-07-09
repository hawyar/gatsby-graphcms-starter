import React from "react"
import { Box, Divider, Flex } from "@chakra-ui/core"
import Card from "./Card"
import { StaticQuery, graphql } from "gatsby"

const EditorsPick = () => {
  return (
    <div>
      {/* <StaticQuery query={graphql``} /> */}
      <Box
        as="article"
        pt={12}
        pb={12}
        display="flex"
        flexDirection="column"
        width={{ base: "85%", lg: "70%" }}
        margin="0 auto"
        color="white"
      >
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          justify="space-between"
        >
          <Card />
          <Card />
        </Flex>
      </Box>
    </div>
  )
}

export default EditorsPick
