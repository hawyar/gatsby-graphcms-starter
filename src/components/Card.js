import React from "react"
import { Box, Image, Badge, Text, Link } from "@chakra-ui/core"
const Card = () => {
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
            Marketing
          </Badge>
          <Link
            mt={3}
            display="block"
            fontSize="3xl"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            Finding customers for your new business
          </Link>
          <Text color="gray.300" mt={6}>
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </Text>
          <Text mt={6} fontSize="xs">
            10 MAR 2019 • 1 Minute read{" "}
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
