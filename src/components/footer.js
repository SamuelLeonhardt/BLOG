import React from "react"


const Footer = () => (
  <div className="site-footer">
    <p className="text-center">Nos siga nas redes sociais</p>
    <div className="footer-social-links">
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
      © {new Date().getFullYear()}, Desenvolvido por
          {` `}
          <a href="https://samuelleonhardt.com">Samuel Leonhardt</a>
    </div>
    
  </div>
)
export default Footer
