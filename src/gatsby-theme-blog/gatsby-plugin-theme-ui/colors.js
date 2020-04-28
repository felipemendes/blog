import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

const blue = `#051627`
const white = `#fff`
const darkBackground = `#222`

export default merge(defaultThemeColors, {
  text: darkBackground,
  primary: blue,
  heading: darkBackground,
  modes: {
    dark: {
      background: darkBackground,
      primary: white,
      highlight: white,
    },
  },
})
