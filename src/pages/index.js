import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

// create react component for page as standalone variable
const indexPage = () => {
  return (
    <Layout>
      <h2>Hello.</h2>
      <p>
        I'm <Link to="/about">Hailey Robertson</Link>, a researcher and data
        analyst living in Atlanta.
      </p>
      <p>
        Need something? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default indexPage
