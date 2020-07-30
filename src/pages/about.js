import React from "react"
import Nav from "../components/sections/Nav"
import { Box, Heading, Text } from "@chakra-ui/core"
import Footer from "../components/sections/Footer"
const about = () => {
  return (
    <div>
      <Nav />
      <Box bg="#191b1f" color="white">
        <Box pt={20} pb={20} width={{ base: "85%", lg: "70%" }} margin="0 auto">
          {" "}
          <Heading>About Us</Heading>
          <Box mt={12}>
            <Text>
              Since the very beginning, GraphCMS has boasted a GraphQL Mutations
              API alongside the traditional Query Content API, and it's free!
              One of the biggest benefits of working on the Jamstack is that you
              get to pick the best of breed APIs. Whether you're building a
              static website, eCommerce store.
            </Text>
            <Text mt={12}>
              Content Hub, or Mobile App, GraphCMS powered GraphQL Mutations
              will bring your project to life. For each model you create in your
              project, GraphCMS automatically generates a mutation to create,
              update, delete, publish, and unpublish your content entries
              (records). These mutations are also backed up by a flexible, and
              secure permissions API. Imagine we have a list of products, and we
              want to allow users to "upvote" products. The UI could look
              something like this:
            </Text>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  )
}

export default about
