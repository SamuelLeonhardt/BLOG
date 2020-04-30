import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"

import {Card, CardTitle, Form, FormGroup, CardBody, Input, Button, Media} from "reactstrap"
import fiqueemcasa from "../image/stayathome.svg"
const Sidebar = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          #fique em casa
        </CardTitle>
        <a href="https://coronavirus.saude.gov.br/" className="link"><img src = {fiqueemcasa} alt="Fique em casa" style={{width: "100%"}}/></a>
      </CardBody>
    </Card>

    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Propaganda
        </CardTitle>
      </CardBody>
    </Card>

    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Newsletter
        </CardTitle>
        <Form className="text-center">
          <FormGroup><Input 
          type="email"
          name="email"
          placeholder="Seu E-mail"
          />
          </FormGroup>
          <Button className="btn btn-outline-sucess text-uppercase">Inscreva-se</Button>
        </Form>
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
    query sidebarQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
        limit:3
        ) {
            edges {
              node {
                id
                fields {
                slug
                }
                frontmatter {
                  title
                  image{
                    childImageSharp{
                      fluid(maxWidth: 300){
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
        }
    }
`

export default Sidebar