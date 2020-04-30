import React from "react"
import {Card, CardTitle, Form, FormGroup, CardBody, Input, Button} from "reactstrap"

const Sidebar = () => (

  <div>
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
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Propaganda
        </CardTitle>
      </CardBody>
    </Card>
  </div>
)

export default Sidebar