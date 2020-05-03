import React from "react"

import {Card, CardTitle, CardBody} from "reactstrap"
import fiqueemcasa from "../image/stayathome.svg"
const Sidebar = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          #fique em casa
        </CardTitle>
        <a href="https://coronavirus.saude.gov.br/" target="_blank" rel="noopener noreferrer" className="link"><img src = {fiqueemcasa} alt="Fique em casa" style={{width: "100%"}}/></a>
      </CardBody>
    </Card>

    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Propaganda
        </CardTitle>
      </CardBody>
    </Card>

    {/* ---------------------------------------------------- */ }
    {/* ---------------- Redes Sociais --------------------- */ }
    {/* ---------------------------------------------------- */ }

    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Redes Sociais
        </CardTitle>
        <ul className="social-link-list">
          <li>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="facebook"
            >
              <img className="facebook" src="https://image.flaticon.com/icons/svg/2111/2111393.svg" alt="Imagem do Facebook"></img>
            </a>

            <a 
              href="https://www.twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="twitter"
            >
              <img className="twitter" src="https://image.flaticon.com/icons/svg/733/733579.svg" alt="Imagem do Twitter"></img>
            </a>

            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="instagram"
            >
              <img className="instagram" src="https://image.flaticon.com/icons/svg/733/733558.svg" alt="Imagem do Instagram"></img>
            </a>

            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="youtube"
            >
              <img className="youtube" src="https://image.flaticon.com/icons/svg/1384/1384060.svg" alt="Imagem do Youtube"></img>
            </a>
          </li>
      </ul>
      </CardBody>
    </Card>
    {/* ---------------------------------------------------- */ }
    {/* ---------------- Redes Sociais --------------------- */ }
    {/* ---------------------------------------------------- */ }
  </div>
)

export default Sidebar