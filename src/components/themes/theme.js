import { theme } from "@chakra-ui/core"

const breakpoints = ["360px", "768px", "1024px", "1440px"]
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      600: "#e5e5e5",
      700: "#f8b24f",
      800: "#ea9a96",
      900: "#303960",
    },
  },
  breakpoints,
  fonts: {
    body: "Inter, sans-serif",
    heading: "Source sans",
    mono: "Menlo, monospace",
  },
}

export default customTheme
