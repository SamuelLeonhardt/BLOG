import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TagsPage = () => (
  <Layout>
    <SEO title="Tags" />
    <h1>PÁGINA TAGS</h1>
    <p>Claro que sim! </p>
    <p>Hora de aprender <strong>Gatsby</strong></p>
    <Link to="/page-2/">Temos segunda página?</Link><br/>
    
  </Layout>
)

export default TagsPage