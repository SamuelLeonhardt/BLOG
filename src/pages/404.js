import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import error from "./404.png"
import narnia from "./narnia.png"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />

      <h1>404 Página Não Encontrada</h1>
      <img src = {error} alt="Página Não Encontrada"/>
      <img src = {narnia} alt="Página Não Encontrada"/>
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
