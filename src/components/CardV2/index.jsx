import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import narnia from "./narnia.png"
import BlogIndex from '../components/CardV2/' 


const ThirdPage = ({data}) => {
  return(
  <Layout>
    <SEO title="Page Hello" />
    <h1>Claro que sim!</h1>
    <p>Hora do Show</p> 
    <Link to="/">Home?</Link>

    <div class="card mb-3" style={{ width: '40rem' }}>
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src={narnia} class="card-img" alt=" 404 error"/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <div><h5 class="card-title">{data.site.siteMetadata.title}</h5></div>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <a href="samuelleonhardt.com" class="btn btn-danger">Continuar Lendo</a>
          </div>
        </div>
      </div>
    </div>
    <BlogIndex />
  </Layout>
  )
}

export default ThirdPage

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
          }
        }
      }
    }
  }`