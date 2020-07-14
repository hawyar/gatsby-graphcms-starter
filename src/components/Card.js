import React from "react"
import { Box, Image, Badge, Text, Link } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
import readingTime from "reading-time"

const rTime = (text) => readingTime(text)

const Card = ({ data }) => {
  return (
    <div>
      <Box>
        <Box>
          <Image
            height="auto"
            width="100%"
            objectFit="cover"
            src={data.coverImage.url}
            alt="Protests"
          />
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
