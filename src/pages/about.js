import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Sobre" />
    <h1>PÁGINA SOBRE</h1>
    <p>Claro que sim! </p>
    <p>Hora de aprender <strong>Gatsby</strong></p>
    <Link to="/page-2/">Temos segunda página?</Link><br/>
    
  </Layout>
)

export default AboutPage