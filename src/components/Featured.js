import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Text, Link, Badge, Divider, Flex, Avatar } from "@chakra-ui/core"
import GraphImg from "graphcms-image"
import readingTime from "reading-time"
import { Link as GatsbyLink } from "gatsby"

const rTime = (text) => readingTime(text)

const Featured = () => {
  const data = useStaticQuery(graphql`
    {
      gcms {
        posts(where: { homePageFeatured: true }) {
          slug
          publishedAt
          tags
          title
          excerpt
          coverImage {
            handle
            height
            width
          }
          content {
            text
          }
          homePageFeatured
          author {
            picture {
              url(transformation: { image: { resize: { width: 120 } } })
            }
            name
            bibliography
          }
        }
      }
    }
  `)

  const ImgShape = {
    ...data.gcms.posts[0].coverImage,
  }

  return (
    <Fragment>
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
            <Box width="690px" height={{ sm: "250px", md: "390px" }}>
              <GraphImg
                withWebp="true"
                image={ImgShape}
                maxWidth="1400"
                fit="scale"
                alt="Featured Image"
              />
            </Box>
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
            <Flex mt={8}>
              <Avatar size="md" src={data.gcms.posts[0].author.picture.url} />
              <Box ml="3">
                <Text fontWeight="bold">{data.gcms.posts[0].author.name}</Text>
                <Text fontSize="sm">
                  {data.gcms.posts[0].author.bibliography}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Divider width={{ base: "85%", lg: "70%" }} margin="0 auto" />
      </div>
    </Fragment>
  )
}

export default Featured
