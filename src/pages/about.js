import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const aboutPage = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>
        My name is Hailey Robertson. I'm a data analyst and researcher living in
        Atlanta. You can find my contact info <Link to="/contact">here</Link>.
      </p>
    </Layout>
  )
}

export default aboutPage
