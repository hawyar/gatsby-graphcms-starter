import React from "react"
import { Box } from "@chakra-ui/core"
import Featured from "../components/Featured"
import EditorsPick from "../components/EditorsPick"
import LargeCard from "../components/LargeCard"
const Content = () => {
  return (
    <div>
      <Box maxWidth="100vw" height="auto" background="#191b1f">
        <Featured />
        <EditorsPick />
        <LargeCard />
      </Box>
    </div>
  )
}

export default Content
