import React from "react"

import Link from "../../../link/link"

const getLinks = links => {
  const linkComponents = {
    research: (
      <Link key="research" to="/research">
        research
      </Link>
    ),
    cv: (
      <Link key="cv" to="/cv">
        cv
      </Link>
    ),
    media: (
      <Link key = "media" to="/media">
        media
      </Link>
    ),
    about: (
      <Link key = "about" to="/about">
        about
      </Link>
    ),
    home: (
      <Link key = "home" to ="/">
        home
      </Link>
    )
  }

  return <>{links.map(link => linkComponents[link])}</>
}

export default getLinks
