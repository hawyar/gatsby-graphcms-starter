import React from "react"
import Nav from "../components/Nav"
import { Heading, Box, Grid } from "@chakra-ui/core"
import Card from "../components/Card"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
const blog = ({ data }) => {
  return (
    <div>
      <Nav />
      <SEO title="All Posts" />
      <Box bg="#191b1f" color="white">
        <Box pt={20} pb={20} width={{ base: "85%", lg: "70%" }} margin="0 auto">
          {" "}
          <Heading>The Collections</Heading>
          <Grid
            mt={8}
            width="100%"
            gridTemplateColumns="1fr 1fr"
            gridColumnGap="20"
            gridRowGap="16"
          >
            {data.gcms.posts.map((data) => {
              return <Card data={data} />
            })}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </div>
  )
}

export default blog

// we can do page query
export const query = graphql`
  {
    gcms {
      posts(stage: PUBLISHED) {
        slug
        excerpt
        title
        publishedAt
        tags
        coverImage {
          url(transformation: { image: { resize: { width: 1400 } } })
        }
        content {
          text
        }
      }
    }
  }
`
