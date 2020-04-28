import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TeamPage = () => (
  <Layout>
    <SEO title="Team" />
    <h1>PÁGINA TEAM</h1>
    <p>Claro que sim! </p>
    <p>Hora de aprender <strong>Gatsby</strong></p>
    <Link to="/tags/">Temos segunda página?</Link><br/>
    
  </Layout>
)

export default TeamPage