/* eslint-disable no-unused-vars */
import React from 'react'
import './proyectos.scss'
import Modal from 'react-modal'

const customStyles = {
  content: {
    width: '700px',
    height: '500px',
    left: '0',
    right: '0',
    margin: 'auto',
    top: '0',
    bottom: '0',
  },
}

Modal.setAppElement('#root')
const Proyectos = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

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
            <Modal style={customStyles} classname="modal" isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)}>
              <h2> prueba</h2>
              <button type="button" onClick={() => setIsOpen(false)}> cerrar </button>
            </Modal>
          </div>
        </div>
        <div className="contenedorgeneralfotos">
          <div className="contenedorcrunchyroll">
            <h2> Crunchyroll</h2>
            <button type="button" className="botonoculto"> Ver mas </button>
          </div>
        </div>
        <div className="contenedorgeneralfotos">
          <div className="contenedorlaberinto">
            <h2> Laberinto</h2>
            <button type="button" className="botonoculto"> Ver mas </button>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Proyectos
