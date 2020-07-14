import React from "react"
import { Link } from "gatsby"
import SEO from "../components/SEO"
const NotFoundPage = () => {
  return (
    <div>
      <SEO title="404: Not Found" />
      <p>Four'0 Four</p>
      <Link to="/">Back home</Link>
    </div>
  )
}

export default NotFoundPage
