import React from "react"
import { Box, Image, Badge, Text, Link, Divider } from "@chakra-ui/core"

const LargeCard = () => {
  return (
    <div>
      <Box
        as="article"
        pt={12}
        pb={12}
        display="flex"
        flexDirection="column"
        width={{ base: "85%", lg: "70%" }}
        margin="0 auto"
        color="white"
      >
        <Box>
          <Image
            width="100%"
            height="450px"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1593745564927-7235bf5e0dad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
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
            Marketing
          </Badge>
          <Link
            mt={3}
            display="block"
            fontSize="4xl"
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
            10 MAR 2019 •<strong> 1 MIN READ</strong>
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

export default LargeCard
