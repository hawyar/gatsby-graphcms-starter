import React from "react"
import { Box, Badge, Text, Link } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
import readingTime from "reading-time"
import GraphImg from "graphcms-image"

const rTime = (text) => readingTime(text)

const Card = ({ data }) => {
  const ImgShape = {
    ...data.coverImage,
  }
  console.log(ImgShape)
  return (
    <div>
      <Box>
        <Box>
          <Box width="450px" height="250px">
            <GraphImg
              withWebp="true"
              image={ImgShape}
              maxWidth="320"
              fit="scale"
              alt="Featured Image"
            />
          </Box>
        </Box>
        <Box mt={3} width="100%">
          <Badge
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="xs"
            letterSpacing="wide"
          >
            {data.tags}
          </Badge>
          <Link
            color="white"
            as={GatsbyLink}
            mt={3}
            display="block"
            fontSize="3xl"
            lineHeight="normal"
            fontWeight="semibold"
            to={`/posts/${data.slug}`}
          >
            {data.title}
          </Link>
          <Text color="gray.300" mt={6}>
            {data.excerpt}
          </Text>
          <Text mt={6} fontSize="xs" fontWeight="400">
            {data.publishedAt.split("T")[0]} •{" "}
            {Math.ceil(rTime(data.content.text).minutes)} Minute read
          </Text>
        </Box>
      </Box>
    </div>
  )
}

export default Card
