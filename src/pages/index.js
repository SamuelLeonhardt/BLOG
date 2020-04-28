import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Media from 'react-bootstrap/Media'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hora de aprender novas ferramentas?</h1>
    <p>Claro que sim! </p>
    <p>Hora de aprender <strong>Gatsby</strong></p>
    <Link to="/page-2/">Temos segunda página?</Link><br/>
    <Media>
    <img
    width={64}
    height={64}
    className="mr-3"
    src="holder.js/64x64"
    alt="Generic placeholder"
    />  
    </Media>
  </Layout>
)

export default IndexPage