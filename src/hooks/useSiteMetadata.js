import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          description
          siteUrl
          title
          social {
            twitter
          }
        }
      }
    }
  `)
  return site.siteMetadata
}
