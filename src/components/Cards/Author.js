import React from "react"
import { Box, Image, Badge, Text, Heading } from "@chakra-ui/core"

const AuthorCard = ({ data }) => {
  return (
    <div>
      <Box mt={3}>
        <Box>
          <Image
            width="100px"
            height="100%"
            objectFit="cover"
            src={data.picture.url}
            alt="Protests"
            borderRadius="50%"
          />
        </Box>
        <Box width="430px">
          <Badge
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="xs"
            letterSpacing="wide"
          >
            {data.tags}
          </Badge>
          <Heading fontSize="3xl" lineHeight="normal" fontWeight="semibold">
            {data.name}
          </Heading>
          <Text color="gray.300" mt={3}>
            {data.bibliography}
          </Text>
        </Box>
      </Box>
    </div>
  )
}

export default AuthorCard
