import React from "react"
import Nav from "../components/Nav"
import { Heading, Box, Grid } from "@chakra-ui/core"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import AuthorCard from "../components/AuthorCard"
const author = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Nav />
      <Box bg="#191b1f" color="white">
        <Box pt={20} pb={20} width={{ base: "85%", lg: "70%" }} margin="0 auto">
          {" "}
          <Heading>Our creative team</Heading>
          <Grid
            mt={8}
            width="100%"
            gridTemplateColumns="1fr 1fr"
            gridColumnGap="20"
            gridRowGap="16"
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
