import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from 'reactstrap'

import error from "./404.png"
import narnia from "./narnia.png"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />

      <h1>404 Página Não Encontrada</h1>
      <Row>
        <Col md="12">
          <img src = {error} alt="Página Não Encontrada"/>
        </Col>
      </Row>
      <Row>
      <Col className="text-center text-uppercase mb-3">
          <p>Devemos voltar?</p> 
        </Col> 
      </Row>
      <Row>
        <Col className="text-center text-uppercase mb-3">
          <Link to="/" ><img src = {narnia} alt="Página Não Encontrada"/></Link>
        </Col>    
      </Row>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
