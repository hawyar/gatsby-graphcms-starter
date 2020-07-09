import React from "react"
import { Box, Image, Badge, Text, Link } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"
import readingTime from "reading-time"

const rTime = (text) => readingTime(text)

const Card = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Box>
        <Box>
          <Image
            width={{ base: "430px", xs: "100%" }}
            height="240px"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1525770041010-2a1233dd8152?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            alt="Protests"
          />
        </Box>
        <Box mt={3} width="430px">
          <Badge
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="xs"
            letterSpacing="wide"
          >
            {data.tags[0]}
          </Badge>
          <Link
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
          {/* <Flex mt={8}>
            <Avatar size="md" src="https://bit.ly/sage-adebayo" />
            <Box ml="3">
              <Text fontWeight="bold">Segun Adebayo</Text>
              <Text fontSize="sm">UI Engineer</Text>
            </Box>
          </Flex> */}
        </Box>
      </Box>
    </div>
  )
}

export default Card
