import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from '../components/Post'

import { Row, Col } from 'reactstrap'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hora de aprender novas ferramentas?</h1>
    <p>Claro que sim! </p>
    <p>Hora de aprender <strong>Gatsby</strong></p>
    <Link to="/page-2/">Temos segunda página?</Link><br/>
    
    <Row>
      <Col md="8">
        <StaticQuery 
        query={indexQuery}
        render = {data => {
          return(
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post title={node.frontmatter.title} //busca o titulo do post
                author={node.frontmatter.author} //busca o autor do post
                path={node.frontmatter.path} //busca o nome do post
                date={node.frontmatter.date} //busca a data do post
                body={node.excerpt} //busca a descrição do post
                slug={node.fields.slug} //busca o nome da post
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags}
                rate={node.frontmatter.ibr}
                />
              ))}
            </div>
          )
        }}
        />
      </Col>

      <Col md="4">
        <div style={{width: "100%", height: "100%", backgroundColor: "orange"}}></div>
      </Col>
    </Row>
  </Layout>
)

const indexQuery = graphql` 
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            excerpt
            fields {
            slug
          }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              author
              image{
                childImageSharp{
                  fluid(maxWidth: 600){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              tags
            }
          }
        }
      }
  }
`
export default IndexPage
