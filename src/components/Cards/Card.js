import React from "react"
import { Box, Badge, Text, Link, Grid } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
import readingTime from "reading-time"
import GraphImg from "graphcms-image"

const rTime = (text) => readingTime(text)

const Card = ({ data }) => {
  const ImgShape = {
    ...data.coverImage,
  }
  return (
    <div>
      <Box>
        <Box>
          <Box width={{ sm: "100%", lg: "100%" }}>
            <GraphImg
              height="520px"
              withWebp="true"
              image={ImgShape}
              maxWidth="320"
              fit="max"
              style={{ height: "250px" }}
              alt="Featured Image"
            />
          </Box>
        </Box>
        <Box mt={3} width="100%">
          {data.tags.map((el) => {
            return (
              <Badge
                mr={3}
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="xs"
                letterSpacing="wide"
              >
                {el}
              </Badge>
            )
          })}

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
