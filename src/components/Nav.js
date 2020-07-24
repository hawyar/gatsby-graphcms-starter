import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link, Box, Button } from "@chakra-ui/core"
import Headroom from "react-headroom"

const activeStyles = {
  color: "#D4493F",
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
          <Box display="flex" color="white">
            {/* activeStles does not work here */}
            <Link mr={6} as={GatsbyLink} fontSize="sm" to="/">
              Home
            </Link>
            <Link mr={6} as={GatsbyLink} fontSize="sm" to="/blog">
              Blog
            </Link>
            <Link mr={6} as={GatsbyLink} fontSize="sm" to="/authors">
              Authors
            </Link>
            <Link mr={6} as={GatsbyLink} fontSize="sm" to="/about">
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
