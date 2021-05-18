import React from 'react'
import './acercademi.scss'
import foto from './Imagenes/foto2.png'

const AcercaDeMi = () => (
  <div className="contenedorAcercaDeMi" id="acercademi">
    <div className="contenedortituloacercademi">
      <h1>Acerca de Mi</h1>
    </div>
    <div className="contenedorinformacion">
      <img src={foto} alt="Imagen de perfil" className="estiloimagenperfil" />
      <p className="acercademitexto">
        Soy Ingeniero en Ciencias de la Computacion y Tecnologias de la Informacion
        con especializacion en seguridad informatica, me gusta darle vida los sitios web
        para que no sean estaticos, asi como para que sean responsive en cualquier
        dispositivo.
      </p>
    </div>
  </div>
)
export default AcercaDeMi
