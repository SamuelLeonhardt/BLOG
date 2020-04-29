import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

import {Card, CardTitle, CardText, CardSubtitle, CardBody} from "reactstrap"

const Post = ({title, author, fluid, date, body, slug}) => {
  return(
    <Card>
      <Img className="card-image-left" fluid={fluid}/>
      <CardBody>
        <CardTitle>
         <Link to={slug}>{title}</Link>
        </CardTitle>
      <CardSubtitle>
        <span className="text-info">{date}</span> por {' '}
        <span className="text-info">{author}</span>
      </CardSubtitle>
      <CardText>{body}</CardText>
      <Link to={slug} className="btn btn-outline-primary float-right">Continue Lendo</Link>
      </CardBody>
    </Card>
  )
}

export default Post