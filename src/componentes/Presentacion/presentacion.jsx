import React from 'react'
import './presentacion.scss'

const Presentacion = () => (
  <div className="contenedorgeneral" id="presentacion">
    <div className="contenedor">
      <div className="contenedorestrellas">
        <div className="estrella" />
        <div className="estrella2" />
        <div className="estrella3" />
      </div>
      <div className="contenedorcontenido">
        <h1 className="titulo">
          <span className="nuevogradiante"> Hola, soy </span>
          <span className="remarcado">  Jose Pablo Ponce </span>
          <br />
          <span className="nuevogradiante">  Full-Stack Web Developer </span>
          <br />
        </h1>
        <a href="#acercademi" className="boton">
          Explorar Trabajo &nbsp;
          <span className="flecha" />
        </a>
      </div>
    </div>
  </div>
)

export default Presentacion
