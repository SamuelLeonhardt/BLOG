import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from '../components/Post'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hora de aprender novas ferramentas?</h1>
    <p>Claro que sim! </p>
    <p>Hora de aprender <strong>Gatsby</strong></p>
    <Link to="/page-2/">Temos segunda página?</Link><br/>
    <StaticQuery 
      query={indexQuery}
      render = {data => {
        return(
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post title={node.frontmatter.title}
            author={node.frontmatter.author}
            path={node.frontmatter.path}
            date={node.frontmatter.date}
            body={node.excerpt}
          />
        ))}
      </div>
      )
    }}/>
  </Layout>
)

const indexQuery = graphql` 
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              author
            }
          }
        }
      }
  }
`
export default IndexPage
