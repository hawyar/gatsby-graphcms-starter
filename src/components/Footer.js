import React from "react"
import { Link, Box, Text } from "@chakra-ui/core"

const Footer = () => {
  return (
    <div>
      <Box width="100%" bg="#07070b" pb={12} pt={3}>
        <Box
          justifyContent="space-between"
          width={{ base: "85%", lg: "70%" }}
          margin="0 auto"
          alignItems="center"
          display={{ sm: "flex" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box display="flex">
            <Link mr={6} color="white" fontSize="sm" to="/">
              GitHub
            </Link>
            <Link mr={6} color="white" fontSize="sm" to="/">
              Company
            </Link>
            <Link mr={6} color="white" fontSize="sm" to="/">
              Twitter
            </Link>
          </Box>

          <Text
            fontSize="sm"
            color="white"
            textAlign={{ sm: "center" }}
            pt={{ base: 2 }}
          >
            {" "}
            Footer notice © 2020 | Powered by Graph<strong>cms</strong>
          </Text>
        </Box>
      </Box>
    </div>
  )
}

export default Footer
