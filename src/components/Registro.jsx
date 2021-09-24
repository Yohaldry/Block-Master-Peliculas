
import {  useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { isEmpty } from 'lodash'
import React from 'react'
import shortid from 'shortid'
import { useForm } from '../hook/useForm'
import '../Styles/main.css'


import {TablaCompleta, Fondo, BotonE, Table} from '../Styles/Rejistro_Styled';




const Registro = ({stateTaks,guardarRecargarProductos}) => {


  const urlData = 'https://class-components2895.herokuapp.com/usuario'
  const [errorForm, setErrorForm] = useState(false)



  const [formValue, handleInputChange] = useForm({
      nombre: '',
      apellido: '',
      username: '',
      password: '',
  })

  const { nombre, apellido, username, password } = formValue

  const handleSubmit = async (e) => {
      e.preventDefault()
      
 
      const newTask = {
          id: shortid.generate(),
          nombre,
          apellido,
          username,
          password
      }

      if (isEmpty(nombre) || isEmpty(apellido) || isEmpty(username) || isEmpty(password)) {
          setErrorForm(true);
          return
      }

      setErrorForm(false);
      alert('Usuario Guardado')

      try {
          const resultado = await axios.post(urlData, newTask)
          guardarRecargarProductos(true)
          
      } catch (error) {
          console.log(error);
      }
  
  }
    return ( 
        <Fondo>
        <TablaCompleta>

        <h1>Registro</h1>

        {
                        errorForm &&
                        <div className="alert alert-danger" role="alert">
                            Falta información para el envío
                        </div>

                    }

        <form  onSubmit={handleSubmit}>
                         <input
                            type="text"
                            className="form-control text-success  bg-dark"
                            placeholder="Nombre"
                            name="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                        />
                        
                        <input
                            type="text"
                            className="form-control text-success  bg-dark mt-2"
                            name="apellido"
                            autoComplete="off"
                            placeholder="apellido"
                            value={apellido}
                            onChange={handleInputChange}
                        />

                        <input
                            type="email"
                            name="username"
                            className="form-control text-success  bg-dark mt-2"
                            autoComplete="off"
                            placeholder="Correo"
                            value={username}
                            onChange={handleInputChange}
                        />

                        <input
                            name="password"
                            type="password"
                            className="form-control text-success  bg-dark mt-2"
                            autoComplete="off"
                            placeholder="Password"
                            value={password}
                            onChange={handleInputChange}
                            />
                        
         
          <BotonE otype="submit">Registrarme</BotonE>    <Link className="BotonIniciar" to="./IniciarSesion">Iniciar Sesion</Link>
       
        </form>
        
    </TablaCompleta>
    </Fondo>
     );
}
 
export default Registro;