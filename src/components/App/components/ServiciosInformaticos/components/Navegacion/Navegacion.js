import './assets/Navegacion.css'
import LogoIT from '../LogoIT/LogoIT'
import { List } from 'react-bootstrap-icons'
import { useRef, useEffect } from 'react'

export default function Navegacion() {

  const refDesplegable = useRef(null)
  const refCerrado = useRef(null)

  useEffect( () => {

    window.onresize = () => {

      if(refDesplegable.current.classList.contains('nav__links--desplegable')
      && window.innerWidth > 760 ){
        refDesplegable.current.classList.remove('nav__links--desplegable')
        refCerrado.current.classList.remove('nav__cerrar--despues')
      }
    }
  }, [] )

  const abrirDesplegable = () => {
    refCerrado.current.classList.add('nav__cerrar--despues')
    refDesplegable.current.classList.toggle('nav__links--desplegable')
    
  }

  const cerrarDesplegable = () => {
    refCerrado.current.classList.remove('nav__cerrar--despues')
    refDesplegable.current.classList.remove('nav__links--desplegable')
    refDesplegable.current.classList.remove('nav__links--desplegable--despues')
  }

    return (
      <div className="nav">
        <div className="nav__logo"><LogoIT/></div>
        <div><List className="nav__icono" onClick={ () => abrirDesplegable() } /></div>
        <div className="nav__cerrar" onClick={ () => cerrarDesplegable() } ref={refCerrado} ></div>
          <div className="nav__links" ref={refDesplegable} > 
          <a><div className="nav__links__link"> INICIO </div></a>
            <a><div className="nav__links__link">INFO</div></a>
            <a><div className="nav__links__link">CLIENTES</div></a>
            <a><div className="nav__links__link">CONTACTO</div></a>
        </div>
      </div>
    )
  }