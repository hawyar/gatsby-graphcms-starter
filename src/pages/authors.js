import React from "react"
import Nav from "../components/Nav"
import { Heading, Box, Grid } from "@chakra-ui/core"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import AuthorCard from "../components/Cards/Author"
import SEO from "../components/SEO/SEO"
const author = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Nav />
      <SEO title="All Authors" />
      <Box bg="#191b1f" color="white">
        <Box pt={20} pb={20} width={{ base: "85%", lg: "70%" }} margin="0 auto">
          {" "}
          <Heading>Our creative team</Heading>
          <Grid
            gridTemplateColumns={{ sm: "1fr", md: "1fr 1fr" }}
            gridTemplateRows={{ sm: "1fr", base: "1fr 1fr" }}
            margin="0 auto"
            gridColumnGap="90px"
            mt={8}
            width="100%"
            gridRowGap={12}
          >
            {data.gcms.authors.map((author) => {
              return <AuthorCard data={author} key={author.name} />
            })}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </div>
  )
}

export default author

// we can do page query
export const query = graphql`
  {
    gcms {
      authors(where: { isActive: true }) {
        name
        id
        bibliography
        picture {
          url(transformation: { image: { resize: { width: 100 } } })
        }
      }
    }
  }
`

//graphql query
// query AuthorsQuery {
//     authors(where: {isActive: true}) {
//       name
//       bibliography
//       picture {
//         url(transformation: {image: {resize: {fit: clip, width: 250}}})
//       }
//     }
//   }
