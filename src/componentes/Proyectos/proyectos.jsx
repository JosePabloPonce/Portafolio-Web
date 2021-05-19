import React from 'react'
import './proyectos.scss'
import calculadora1 from './Imagenes/calculadora1.png'
import crunchyroll1 from './Imagenes/crunchyroll1.png'
import laberinto1 from './Imagenes/laberinto1.png'

const Proyectos = () => (
  <div className="ContenedorGeneralProyectos" id="proyectos">
    <div className="contenedortituloproyectos">
      <h1> Proyectos</h1>
    </div>
    <div className="contenedorproyectos">
      <div>
        <img src={calculadora1} alt=" calculadora" className="estiloimagenproyecto" />
      </div>
      <div>
        <img src={crunchyroll1} alt="crunchyroll" className="estiloimagenproyecto" />
      </div>
      <div>
        <img src={laberinto1} alt="Logo Jest" className="estiloimagenproyecto" />
      </div>
      <div>
        <img src={calculadora1} alt="Logo Jest" className="estiloimagenproyecto" />
      </div>
    </div>
  </div>
)
export default Proyectos
