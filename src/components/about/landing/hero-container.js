import React from "react"
import { getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import Hero from "./hero"

const HeroContainer = props => {
  return <Hero />
}

export default HeroContainer
