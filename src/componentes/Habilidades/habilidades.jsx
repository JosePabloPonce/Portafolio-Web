import React from 'react'
import './habilidades.scss'
import java from './Imagenes/java.png'
import c from './Imagenes/c.png'
import cplusplus from './Imagenes/c++.png'
import python from './Imagenes/python.png'
import html5 from './Imagenes/html5.png'
import css3 from './Imagenes/css3.png'
import flutter from './Imagenes/flutter.png'
import sass from './Imagenes/sass.png'
import javascriptlogo from './Imagenes/javascript.png'
import reactlogo from './Imagenes/react.png'
import nodejs from './Imagenes/nodejs.png'
import babellogo from './Imagenes/babel.png'
import eslint from './Imagenes/eslint.png'
import jest from './Imagenes/jest.png'
import webpack from './Imagenes/webpack.png'
import postgres from './Imagenes/postgresql.png'
import mongodb from './Imagenes/mongodb.png'

const NavigationBar = () => (
  <div className="contenedorHabilidadesGeneral" id="habilidades">
    <div className="contenedorhabilidadestitulo">
      <h1>Habilidades</h1>
    </div>
    <div className="contenedordehabilidades">
      <h2>Lenguajes</h2>
      <div className="contenedorespecificohabilidades">
        <div className="contenedorhabilidad">
          <img src={java} alt="Logo Java" className="estiloLogosJava" />
          <h3>Java</h3>
        </div>
        <div className="contenedorhabilidad">
          <img src={c} alt="Logo C" className="estiloLogosJava" />
          <h3>C</h3>
        </div>
        <div className="contenedorhabilidad">
          <img src={cplusplus} alt="Logo C++" className="estiloLogosJava" />
          <h3>C++</h3>
        </div>
        <div className="contenedorhabilidad">
          <img src={python} alt="Logo python" className="estiloLogosJava" />
          <h3>Python</h3>
        </div>
        <div className="contenedorhabilidad">
          <img src={flutter} alt="Logo Flutter" className="estiloLogosJava" />
          <h3>Flutter</h3>
        </div>
      </div>
    </div>

    <div className="contenedordehabilidades">
      <h2>HTML</h2>
      <div className="contenedorespecificohabilidades">
        <div className="contenedorhabilidad">
          <img src={html5} alt="Logo HTML5" className="estiloLogosJava" />
          <h3>HTML5</h3>
        </div>
      </div>
    </div>

    <div className="contenedordehabilidades">
      <h2>CSS</h2>
      <div className="contenedorespecificohabilidades">
        <div className="contenedorhabilidad">
          <img src={css3} alt="Logo CSS3" className="estiloLogosJava" />
          <h3>CSS3</h3>
        </div>
        <div className="contenedorhabilidad">
          <img src={sass} alt="Logo SASS" className="estiloLogosJava" />
          <h3>SASS</h3>
        </div>
      </div>
    </div>

    <div className="contenedordehabilidades">
      <h2>JavaScript</h2>
      <div className="contenedorespecificohabilidades">
        <div className="contenedorhabilidad">
          <img src={javascriptlogo} alt="Logo JavaScript" className="estiloLogosJava" />
          <h3>JavaScript</h3>
        </div>
        <div className="contenedorhabilidad">
          <img src={reactlogo} alt="Logo React" className="estiloLogosJava" />
          <h3>React</h3>
        </div>
        <div className="contenedorhabilidad">
          <img src={nodejs} alt="Logo NodeJs" className="estiloLogosJava" />
          <h3>NodeJS</h3>
        </div>
        <div className="contenedorhabilidad">
          <img src={babellogo} alt="Logo Babel" className="estiloLogosJava" />
          <h3>Babel</h3>
        </div>
        <div className="contenedorhabilidad">
          <img src={eslint} alt="Logo Eslint" className="estiloLogosJava" />
          <h3>ESLint</h3>
        </div>
        <div className="contenedorhabilidad">
          <img src={jest} alt="Logo Jest" className="estiloLogosJava" />
          <h3>Jest</h3>
        </div>
      </div>
    </div>

    <div className="contenedordehabilidades">
      <h2>Build Tools</h2>
      <div className="contenedorespecificohabilidades">
        <div className="contenedorhabilidad">
          <img src={webpack} alt="Logo Webpack" className="estiloLogosJava" />
          <h3>Webpack</h3>
        </div>
      </div>
    </div>

    <div className="contenedordehabilidades">
      <h2>
        Base de
        <br />
        Datos
      </h2>
      <div className="contenedorespecificohabilidades">
        <div className="contenedorhabilidad">
          <img src={postgres} alt="Logo Postgresql" className="estiloLogosJava" />
          <h3>PostgreSQL</h3>
        </div>
        <div className="contenedorhabilidad">
          <img src={mongodb} alt="Logo MongoDB" className="estiloLogosJava" />
          <h3>MongoDB</h3>
        </div>
      </div>
    </div>
  </div>
)
export default NavigationBar
