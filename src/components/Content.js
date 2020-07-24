import React from "react"
import { Box } from "@chakra-ui/core"
import Featured from "./Sections/Featured"
import EditorsPick from "../components/Sections/EditorsPick"
import LargeCard from "./Sections/LargeCard"
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
