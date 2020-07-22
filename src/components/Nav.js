import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link, Box, Button } from "@chakra-ui/core"
import Headroom from "react-headroom"

const activeStyles = {
  bg: "red.500",
  color: "red",
}
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
            <Link
              mr={6}
              as={GatsbyLink}
              color="white"
              fontSize="sm"
              to="/"
              activeStyles={activeStyles}
            >
              Home
            </Link>
            <Link mr={6} as={GatsbyLink} color="white" fontSize="sm" to="/blog">
              Blog
            </Link>
            <Link
              mr={6}
              as={GatsbyLink}
              color="white"
              fontSize="sm"
              to="/authors"
            >
              Authors
            </Link>
            <Link
              mr={6}
              as={GatsbyLink}
              color="white"
              fontSize="sm"
              to="/about"
            >
              About
            </Link>
          </Box>

          <div>
            <Button
              as="a"
              href="https://github.com/hawyar/gatsby-graphcms-starter"
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
