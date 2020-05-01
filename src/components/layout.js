/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import '../styles/index.scss'
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
    `}
    render = {data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className = "container" id= "content">
          {children}
        </div>  
        <Footer/>
      </>
    )}
  />
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
