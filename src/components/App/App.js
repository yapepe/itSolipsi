import './assets/App.css'
import Navegacion from './components/Navegacion/Navegacion'
import Inicio from './components/Inicio/Inicio'
import Info from './components/Info/Info'



export default function App() {
  return (
    <div className="App">
      <Navegacion/>
      <Inicio/>
      <Info/>
    </div>
  )
}
