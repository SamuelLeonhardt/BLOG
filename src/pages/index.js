import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from '../components/Post'

import HeaderCarousel from '../components/carousel'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />   
      <HeaderCarousel/><br/>
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
