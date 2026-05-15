import { useStaticQuery, graphql } from "gatsby"

const useLinks = () => {
  const query = useStaticQuery(
    graphql`
      query {
        publications(list: { elemMatch: { title: { regex: "/.*/" } } }) {
          list {
            title
          }
        }
      }
    `
  )

  const links = []

  if (query.publications) {
   links.push("home"), links.push("about"), links.push("cv"), links.push("research"), links.push("media")
  }

  return links
}

export default useLinks
