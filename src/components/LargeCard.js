import React from "react"
import { Box, Image, Badge, Text, Link } from "@chakra-ui/core"
import { graphql, StaticQuery } from "gatsby"
import { Link as GatsbyLink } from "gatsby"
import readingTime from "reading-time"

const rTime = (text) => readingTime(text)
const LargeCard = () => {
  return (
    <div>
      <StaticQuery
        query={graphql`
          query MyQuery {
            gcms {
              posts(where: { largeCardPost: true }) {
                slug
                excerpt
                publishedAt
                tags
                title
                coverImage {
                  url(transformation: { image: { resize: { width: 1400 } } })
                }
                content {
                  text
                }
              }
            }
          }
        `}
        render={(data) => (
          <div>
            <Box
              as="article"
              pt={12}
              // pb={12}
              display="flex"
              flexDirection="column"
              width={{ base: "85%", lg: "70%" }}
              margin="0 auto"
              color="white"
            >
              <Box>
                <Image
                  width="100%"
                  height={{ sm: "250px", md: "390px" }}
                  objectFit="cover"
                  src={data.gcms.posts[0].coverImage.url}
                  alt="Protests"
                  backgroundPosition="center"
                />
              </Box>
              <Box mt={3}>
                <Badge
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="xs"
                  letterSpacing="wide"
                >
                  {data.gcms.posts[0].tags[0]}
                </Badge>
                <Link
                  mt={3}
                  as={GatsbyLink}
                  display="block"
                  fontSize="4xl"
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
                  {Math.ceil(rTime(data.gcms.posts[0].content.text).minutes)}{" "}
                  Minute
                </Text>
              </Box>
            </Box>
          </div>
        )}
      />
    </div>
  )
}

export default LargeCard
