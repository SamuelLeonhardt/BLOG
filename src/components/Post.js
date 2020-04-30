import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'
import {slugify} from '../utils/utilityfunction'

import {Card, CardTitle, CardText, CardSubtitle, CardBody, Badge} from "reactstrap"

const Post = ({title, author, fluid, date, body, slug, ibr, tags}) => {
  return(
    <Card>
      <Link to={slug}><Img className="card-image-left" fluid={fluid}/></Link>
      <CardBody>
        <CardTitle>
         <Link to={slug}>{title}</Link>
        </CardTitle>
      <CardSubtitle>
        <span className="text-info">{date}</span> por {' '}
        <span className="text-info">{author}</span>
      </CardSubtitle>
      <CardText>{body}</CardText>
      <ul className="post-tags">
        {tags.map( tag => (
          <li>
            <Link to={`/tag/${slugify(tag)}`}> 
            <Badge color="primary">{tag}</Badge>
            </Link>
          </li>
        ))}
      </ul>
      <Link to={slug} className="btn btn-outline-primary float-right">Continue Lendo</Link>
      </CardBody>
    </Card>
  )
}

export default Post