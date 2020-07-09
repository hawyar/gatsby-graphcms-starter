import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link, Box, Button } from "@chakra-ui/core"
import Headroom from "react-headroom"
const MenuItems = ({ children, to }) => (
  <Link mr={6} as={GatsbyLink} color="white" fontSize="sm" href={to}>
    {children}
  </Link>
)
const Nav = () => {
  return (
    <div>
      <Headroom
        style={{ background: "#07070b" }}
        onPin={() => console.log("pinned")}
        onUnpin={() => console.log("unpinned")}
      >
        <Box
          display="flex"
          flexDirection="row"
          pt={4}
          pb={4}
          justifyContent="space-between"
          width={{ base: "85%", lg: "70%" }}
          margin="0 auto"
          alignItems="center"
        >
          <Box display="flex">
            <MenuItems to="/">Home</MenuItems>
            <MenuItems to="/">Blog</MenuItems>
            <MenuItems to="/">About </MenuItems>
          </Box>

          <div>
            <Button
              fontSize="xs"
              size="sm"
              variant="outline"
              color="white"
              opacity=".8"
              _hover={{ opacity: "1" }}
            >
              Contribute
            </Button>
          </div>
        </Box>
      </Headroom>
    </div>
  )
}

export default Nav
