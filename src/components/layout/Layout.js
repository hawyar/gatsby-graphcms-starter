import React from "react"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import theme from "../themes/theme"
const Layout = (props) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CSSReset />
        {props.children}
      </ThemeProvider>
    </div>
  )
}

export default Layout
