import React from "react"
import { Heading, Image, Box, Text, Badge } from "@chakra-ui/core"
import { graphql } from "gatsby"
import Nav from "../components/Nav"
import readingTime from "reading-time"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
const rTime = (text) => readingTime(text)

const BlogPost = ({
  data: {
    gcms: { post },
  },
}) => {
  return (
    <div>
      <SEO
        title={post.title}
        description={post.excerpt || post.content.text.substring(0, 25)}
      />
      <Nav />
      <Box width={{ base: "85%", lg: "70%" }} margin="0 auto" mt={12} mb={12}>
        {post.tags.map((el) => (
          <Badge
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="xs"
            letterSpacing="wide"
            mr={3}
          >
            {el}
          </Badge>
        ))}
        <Heading fontSize="5xl" color="ea9a96" mt={3}>
          {post.title}
        </Heading>
        <Text mt="4">
          {post.date} • {Math.ceil(rTime(post.content.text).minutes)} Minute
          read
        </Text>{" "}
        <Box
          mt={12}
          width={{
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
          }}
          height="490px"
        >
          <Image
            width={{
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "100%",
            }}
            height="100%"
            src={post.coverImage.url}
            objectFit="cover"
          />
        </Box>
        <Box mt={12}>
          {" "}
          <div
            dangerouslySetInnerHTML={{ __html: `${post.content.html}` }}
          ></div>
        </Box>
      </Box>
      <Footer />
    </div>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query PostPageQuery($id: ID!) {
    gcms {
      post(where: { id: $id }) {
        date
        slug
        title
        tags
        content {
          html
          text
        }
        coverImage {
          url(transformation: { image: { resize: { width: 1200 } } })
        }
      }
    }
  }
`
