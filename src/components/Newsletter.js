import React from "react"
import { Box, Heading, Input, Button, Text } from "@chakra-ui/core"
const Newsletter = () => {
  return (
    <div>
      <Box
        as="article"
        pt={20}
        pb={20}
        display="flex"
        flexDirection="column"
        margin="0 auto"
        color="white"
        bg="#191b1f"
        textAlign="center"
      >
        <Box
          rounded="md"
          pt={24}
          pb={24}
          bg="#07070b"
          width={{ base: "85%", lg: "70%" }}
          margin="0 auto"
        >
          <Heading fontFamily="Inter" fontSize="3xl" fontWeight="600">
            {" "}
            Expand your knowldge every week
          </Heading>
          <Text mt={2}>No spam. Recieve curated collections.</Text>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="45%"
            margin="0 auto"
            mt={12}
          >
            <Input
              width={{ base: "100%", lg: "70%" }}
              variant="outline"
              placeholder="Email Address"
              rounded="sm"
            />
            <Button
              fontSize="sm"
              size="md"
              color="gray.700"
              rounded="sm"
              width="auto"
            >
              Sign me up
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Newsletter
