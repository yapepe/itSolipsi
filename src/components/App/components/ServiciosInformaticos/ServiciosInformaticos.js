import './assets/ServiciosInformaticos.css'
import Navegacion from './components/Navegacion/Navegacion'
import Inicio from './components/Inicio/Inicio'
import Info from './components/Info/Info'
import Encabezado from './components/Encabezado/Encabezado'
import Clientes from './components/Clientes/Clientes'
import Footer from './components/Footer/Footer'
import Textos from './components/Textos/Textos'
import Contacto from './components/Contacto/Contacto'




export default function ServiciosInformaticos() {
  return (
    <div className="serviciosInformaticos">
      <Encabezado/>
      <Navegacion/>
      <Inicio/>
      <Info/>
      <Clientes/>
      <Textos/>
      <Contacto/>
      <Footer/>
    </div>
  )
}
