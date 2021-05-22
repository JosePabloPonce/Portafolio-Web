import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './proyectos.scss'
import Modal from 'react-modal'
import laberinto2 from './Imagenes/laberinto2.png'
import laberinto3 from './Imagenes/laberinto3.png'
import laberinto4 from './Imagenes/laberinto4.png'
import laberinto5 from './Imagenes/laberinto5.png'
import laberinto1 from './Imagenes/laberinto1.png'
import calculadora1 from './Imagenes/calculadora1.png'
import calculadora2 from './Imagenes/calculadora2.png'
import calculadora4 from './Imagenes/calculadora4.png'
import crunchyroll1 from './Imagenes/crunchyroll1.png'
import crunchyroll2 from './Imagenes/crunchyroll2.png'
import crunchyroll3 from './Imagenes/crunchyroll3.png'
import crunchyroll4 from './Imagenes/crunchyroll4.png'

Modal.setAppElement('#root')
const Proyectos = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [modalIsOpen2, setIsOpen2] = React.useState(false)
  const [modalIsOpen3, setIsOpen3] = React.useState(false)

  return (
    <div className="ContenedorGeneralProyectos" id="proyectos">
      <div className="contenedortituloproyectos">
        <h1> Proyectos Seleccionados</h1>
      </div>
      <div className="contenedorproyectos">
        <div className="contenedorgeneralfotos">
          <div className="contenedorcalculadora">
            <h2> Calculadora</h2>
            <button type="button" className="botonoculto" onClick={() => setIsOpen(true)}> Ver mas </button>
            <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
              <div className="contenedorsliders">
                <div className="contenedorunico">
                  <Carousel>
                    <Carousel.Item>
                      <img src={calculadora1} alt="calculadora" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={calculadora2} alt="calculadora" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={calculadora4} alt="calculadora" className="imagenenslider" />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div className="contenedorcontenidomodal">
                <h2>
                  Calculadora
                </h2>
                <h3> ESlint / React / Babel / Jest</h3>
                <p>
                  Proyecto en el que se creaba una calculadora con limite de numeros
                  en pantalla, asi como tambien con soporte de punto decima, divisiones,
                  etc.
                </p>
              </div>
              <div className="contenedorcerar"><button type="button" className="botoncerrar" onClick={() => setIsOpen(false)}> &#x2716; </button></div>
            </Modal>
          </div>
        </div>
        <div className="contenedorgeneralfotos">
          <div className="contenedorcrunchyroll">
            <h2> Crunchyroll</h2>
            <button type="button" className="botonoculto" onClick={() => setIsOpen2(true)}> Ver mas </button>
            <Modal className="modal" isOpen={modalIsOpen2} onRequestClose={() => setIsOpen2(false)}>
              <div className="contenedorsliders">
                <div className="contenedorunico">
                  <Carousel>
                    <Carousel.Item>
                      <img src={crunchyroll1} alt="crunchyroll" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={crunchyroll2} alt="crunchyroll" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={crunchyroll3} alt="crunchyroll" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={crunchyroll4} alt="crunchyroll" className="imagenenslider" />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div className="contenedorcontenidomodal">
                <h2>
                  Crunchyroll
                </h2>
                <h3> ESlint / React </h3>
                <p>
                  Proyecto en el que se replico la pagina de Crunchyroll Games,
                  asi como las diversas interacciones que ofrece la pagina original.
                </p>
              </div>
              <div className="contenedorcerar"><button type="button" className="botoncerrar" onClick={() => setIsOpen2(false)}> &#x2716; </button></div>
            </Modal>
          </div>
        </div>
        <div className="contenedorgeneralfotos">
          <div className="contenedorlaberinto">
            <h2> Laberinto</h2>
            <button type="button" className="botonoculto" onClick={() => setIsOpen3(true)}> Ver mas </button>
            <Modal className="modal" isOpen={modalIsOpen3} onRequestClose={() => setIsOpen3(false)}>
              <div className="contenedorsliders">
                <div className="contenedorunico">
                  <Carousel>
                    <Carousel.Item>
                      <img src={laberinto2} alt="laberinto" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={laberinto1} alt="laberinto" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={laberinto4} alt="laberinto" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={laberinto5} alt="laberinto" className="imagenenslider" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={laberinto3} alt="laberinto" className="imagenenslider" />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div className="contenedorcontenidomodal">
                <h2>
                  Laberinto
                </h2>
                <h3> ESlint / React / Babel</h3>
                <p>
                  Proyecto en el que se generaba un laberinto con dependiendo del nivel
                  seleccionado, asi mismo al momento de terminarlo el nivel se mostraba
                  la cantidad de pasos que se dieron para poder completarlo.
                </p>
              </div>
              <div className="contenedorcerar"><button type="button" className="botoncerrar" onClick={() => setIsOpen3(false)}> &#x2716; </button></div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Proyectos
