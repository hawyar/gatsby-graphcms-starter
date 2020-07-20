import React from "react"
import { Heading, Box, Text, Badge } from "@chakra-ui/core"
import { graphql } from "gatsby"
import Nav from "../components/Nav"
import readingTime from "reading-time"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import GraphImg from "graphcms-image"

const rTime = (text) => readingTime(text)

const BlogPost = ({
  data: {
    gcms: { post },
  },
}) => {
  const ImgShape = {
    ...post.coverImage,
  }

  const AuthorImgShape = {
    ...post.author.picture,
  }
  console.log(AuthorImgShape)
  return (
    <div>
      {console.log(post.content.html)}
      <SEO
        title={post.title}
        description={post.excerpt || post.content.text.substring(0, 25)}
      />
      <Nav />
      <Box width={{ base: "85%", lg: "70%" }} margin="0 auto" mt={12} mb={12}>
        {post.tags.map((tag) => (
          <Badge
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="xs"
            letterSpacing="wide"
            mr={3}
          >
            {tag}
          </Badge>
        ))}
        <Heading fontSize="5xl" color="ea9a96" mt={3}>
          {post.title}
        </Heading>
        <Text mt="4">
          {post.date} • {Math.ceil(rTime(post.content.text).minutes)} Minute
          read
        </Text>{" "}
        <Box mt={6} borderRadius="30px" display="flex" mb={6}>
          {" "}
          <GraphImg
            style={{
              borderRadius: "50%",
              width: "55px",
              backgroundPosition: "center",
            }}
            withWebp="true"
            image={AuthorImgShape}
            maxWidth="55"
            fit="scale"
            alt="Featured Image"
          />
          <Text alignSelf="center" ml={6} fontSize="md">
            {post.author.name}
          </Text>
        </Box>
        <Box mt={12} height={{ sm: "250px", md: "490px" }} width="100%">
          <GraphImg
            withWebp="true"
            image={ImgShape}
            maxWidth="1400"
            fit="scale"
            alt="Featured Image"
          />
          {/* <Image
            width="100%"
            height="100%"
            src={post.coverImage.url}
            objectFit="cover"
          /> */}
        </Box>
        <Box mt={48}>
          <div></div>
          <div dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
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
          handle
          height
          width
        }
        author {
          name
          picture {
            handle
            height
            width
          }
        }
      }
    }
  }
`
