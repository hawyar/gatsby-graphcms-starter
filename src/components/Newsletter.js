import React from "react"
import { Box, Heading, Input, Button, Text, Divider } from "@chakra-ui/core"
const Newsletter = () => {
  return (
    <div>
      <Box
        as="article"
        pt={20}
        pb={20}
        pl={{ sm: 6 }}
        pr={{ sm: 6 }}
        display="flex"
        flexDirection="column"
        margin="0 auto"
        color="white"
        bg="#191b1f"
        textAlign="center"
      >
        <Divider width={{ base: "85%", lg: "70%" }} margin="0 auto" mb={12} />
        <Box
          rounded="md"
          pt={20}
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
            width="70%"
            margin="0 auto"
            mt={12}
            flexDirection={{ base: "row", sm: "column" }}
          >
            <Input
              width={{ base: "100%", md: "45%" }}
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
              mt={6}
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
