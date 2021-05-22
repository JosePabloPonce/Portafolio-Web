import React from 'react'
import './contacto.scss'
import linkedinlogo from './Imagenes/linkedinlogo.png'
import gmaillogo from './Imagenes/gmaillogo.png'
import githublogo from './Imagenes/githublogo.jpg'

const Contacto = () => (
  <div className="contenedorgeneralcontacto" id="contacto">
    <div className="contenedortitulocontacto">
      <h1>Contacto</h1>
    </div>
    <div className="contenedoriconos">
      <a href="https://www.linkedin.com/in/jose-pablo-ponce-pivaral-424440179/" className="fa fa-facebook">
        <img src={linkedinlogo} alt="facebook" className="estilologos" />
      </a>
      <a href="mailto:jopaponcepivo@gmail.com" className="fa fa-google">
        <img src={gmaillogo} alt="gmail" className="estilologos" />
      </a>
      <a href="https://github.com/JosePabloPonce" className="fa fa-github">
        <img src={githublogo} alt="github" className="estilologogit" />
      </a>
    </div>
  </div>
)
export default Contacto
