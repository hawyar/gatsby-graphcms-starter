import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
export const Custom404 = () => {
  return (
    <div>
      <ErrorMsg>
        404 Error
        <p>
          Go back to the <Link to="/">home page</Link>
        </p>
      </ErrorMsg>
    </div>
  )
}

const ErrorMsg = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: grey;
  text-align: center;
  font-size: 2rem;

  p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: center;
    font-weight: 400;
    font-size: 1rem;
  }
`
