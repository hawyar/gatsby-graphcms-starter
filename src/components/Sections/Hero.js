import React from "react"
import { Box, Heading } from "@chakra-ui/core"
import Nav from "./Nav"

const Hero = () => {
  return (
    <div>
      <Nav />
      <Box
        background="#07070b"
        width="100%"
        height={{ base: "340px", lg: "35vh" }}
      >
        <Box
          display="flex"
          justifyContent="center"
          pt="24"
          flexDirection="column"
          alignItems="center"
        >
          <Heading
            fontFamily="Inter"
            color="white"
            fontSize="lg"
            mb="4"
            fontWeight="400"
          >
            Graph<strong>cms</strong> x Gatsby
          </Heading>
          <Heading
            color="white"
            fontFamily="Inter"
            fontSize="lg"
            fontWeight="500"
            textAlign="center"
            width="85%"
          >
            Unleash the power of Gatsby with GraphCMS
          </Heading>
        </Box>
      </Box>
    </div>
  )
}

export default Hero
