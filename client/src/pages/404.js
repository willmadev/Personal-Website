import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="404: Page Not Found">
    <SEO title="404: Not found" />
    <h2>This Page Could Not Be Found :(</h2>
    <p>Here are some links that may be helpful:</p>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </Layout>
)

export default NotFoundPage
