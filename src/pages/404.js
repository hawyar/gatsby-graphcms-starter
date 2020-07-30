import React from "react"
import { Link } from "gatsby"
import { Box } from "@chakra-ui/core"
import SEO from "../components/SEO/SEO"
const NotFoundPage = () => {
  return (
    <div>
      <SEO title="404: Not Found" />
      <Box>
        <Link to="/">Back home</Link>
      </Box>
    </div>
  )
}

export default NotFoundPage
