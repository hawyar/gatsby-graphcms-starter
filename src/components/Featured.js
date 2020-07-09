import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Box, Image, Text, Link, Badge, Divider } from "@chakra-ui/core"
import readingTime from "reading-time"
import { Link as GatsbyLink } from "gatsby"

const rTime = (text) => readingTime(text)
const Featured = () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        gcms {
          posts(where: { homePageFeatured: true }) {
            slug
            publishedAt
            tags
            title
            excerpt
            coverImage {
              url(transformation: { image: { resize: { width: 1400 } } })
            }
            content {
              text
            }
            homePageFeatured
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <Box
          as="article"
          pt={12}
          pb={12}
          display={{ lg: "flex" }}
          width={{ base: "85%", lg: "70%" }}
          margin="0 auto"
          color="white"
        >
          <Box>
            <Image
              width="1400px"
              height="390px"
              objectFit="cover"
              src={data.gcms.posts[0].coverImage.url}
              alt="Protests"
            />
          </Box>
          <Box mt={{ base: 6, lg: 0 }} ml={{ base: 0, lg: 6 }}>
            <Badge
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="xs"
              letterSpacing="wide"
            >
              {data.gcms.posts[0].tags[0]}
            </Badge>

            <Link
              as={GatsbyLink}
              mt={3}
              display="block"
              fontSize="3xl"
              lineHeight="normal"
              fontWeight="semibold"
              to={`/posts/${data.gcms.posts[0].slug}`}
            >
              {data.gcms.posts[0].title}
            </Link>
            <Text color="gray.300" mt={6}>
              {data.gcms.posts[0].excerpt}
            </Text>
            <Text mt={6} fontSize="xs" fontWeight="400">
              {data.gcms.posts[0].publishedAt.split("T")[0]} •{" "}
              {Math.ceil(rTime(data.gcms.posts[0].content.text).minutes)} Minute
              read
            </Text>
          </Box>
        </Box>

        <Divider width={{ base: "85%", lg: "70%" }} margin="0 auto" />
      </div>
    )}
  />
)

export default Featured
