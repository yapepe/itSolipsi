import './assets/Contacto.css'
import {Form, Button , Col} from 'react-bootstrap'
import { useState } from 'react'

export default function Contacto() {
    const [ nombre, setNombre ] = useState(' ')
    const [ email, setEmail ] = useState(' ')
    const [ telefono, setTelefono ] = useState(' ')
    const [ mensaje, setMensaje ] = useState(' ')
    const asunto = 'CONTACTO IT'
    const url = 'https://solipsi-landing-server.herokuapp.com/contacto'
  
    const enviarMail = () => {
      if(nombre === ' ' || email === ' ' || telefono === ' '){
        return
      }
      const datos = {   
        nombre:nombre,
        email:email ,
        telefono:telefono,
        mensaje:mensaje,
        asunto:asunto
      } 
      const res = fetch(url, {
        method: 'POST', 
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(datos)
      })
      .then(() => {
        alert('e-mail enviado con éxito')
        console.log(res)
      })
      .catch(err => console.log(err))
    }
  
    return (
      <div className="contacto">
          <div className="contacto__contenido">
            <h1>FFFFF</h1>
            <h2>FFFFF</h2>
            <p>LOREMA liquip ullamco mollit dolor aliquip ea ex tempor. 
               Deserunt consequat cillum minim elit minim proident sunt culpa. 
               Cupidatat laboris dolore officia eu eiusmod pariatur incididunt 
               irure amet est in.</p>
              <div className="contacto-web">
                <Form>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="text" placeholder="Nombre" className="contacto-web__formulario--chico" 
                        onChange = { (event) => setNombre(event.target.value) }
                        />
                        <Form.Control type="email" placeholder="Email" className="contacto-web__formulario--chico" 
                        onChange = { (event) =>  setEmail(event.target.value)   }
                        />
                        <Form.Control type="text" placeholder="Telefono" className="contacto-web__formulario--chico" 
                        onChange = { (event) =>  setTelefono(event.target.value)  }
                        //meter REQUERIDO
                        />
                        <Form.Control as="textarea"  placeholder="Mensaje" className="contacto-web__formulario--grande" 
                        onChange = { (event) => setMensaje(event.target.value) }
                        />
                    </Form.Group>
                    </Form.Row>
                    <br />
                    <Button variant="dark" onClick={ () => enviarMail() } >
                    Submit
                    </Button>
                </Form>
              </div>
            </div>
      </div>
    )
  }

/* 
      
    )
  } */