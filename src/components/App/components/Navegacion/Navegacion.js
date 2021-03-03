import './assets/Navegacion.css'
import LogoIT from '../LogoIT/LogoIT'

export default function Navegacion() {
    return (
      <div className="nav">
        <div className="nav__logo"><LogoIT/></div>
          <div className="nav__links"> 
            <div className="nav__links__link">INICIO</div>
            <div className="nav__links__link">INFO</div>
            <div className="nav__links__link">CLIENTES</div>
            <div className="nav__links__link">CONTACTO</div>
        </div>
      </div>
    )
  }