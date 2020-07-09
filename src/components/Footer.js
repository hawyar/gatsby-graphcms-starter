import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link, Box, Text } from "@chakra-ui/core"
const MenuItems = ({ children, to }) => (
  <Link mr={6} as={GatsbyLink} color="white" fontSize="sm" href={to}>
    {children}
  </Link>
)
const Footer = () => {
  return (
    <div>
      <Box width="100%" bg="#07070b" pb={12} pt={3}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width={{ base: "85%", lg: "70%" }}
          margin="0 auto"
          alignItems="center"
        >
          <Box display="flex">
            <MenuItems to="/">Twitter</MenuItems>
            <MenuItems to="/">Website</MenuItems>
            <MenuItems to="/">About</MenuItems>
          </Box>

          <Text fontSize="sm" color="white">
            {" "}
            Footer notice © 2020 | Powered by Graph<strong>cms</strong>
          </Text>
        </Box>
      </Box>
    </div>
  )
}

export default Footer
