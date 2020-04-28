import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}> 

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          
          <article key={node.fields.slug}>
            <div class="card mb-3" style={{ width: '40rem' }}>
              <div class="row no-gutters">
                <div class="col-md-4">
                <img src="{node.frontmatter.image.childImageSharp.fluid}" alt="ss"/>
                  
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <div><h5 class="card-title">{title}</h5></div>
                    <p class="card-text" dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}></p>
                    <p class="card-text"><small class="text-muted">{node.frontmatter.date}</small></p>
                    <a href={node.fields.slug} class="btn btn-danger">Continuar Lendo</a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )
      })}


    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image{
              childImageSharp{
                fluid(maxWidth: 600){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    avatar: file(absolutePath: { regex: "../RW.png/" }) {
        childImageSharp {
          fixed(width: 324, height: 235) {
            ...GatsbyImageSharpFixed
          src
          }
        }
      }
  }
`
