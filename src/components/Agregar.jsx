import axios from 'axios'
import { isEmpty } from 'lodash'
import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import shortid from 'shortid'
import { useForm } from '../hook/useForm'


const Agregar = ({guardarRecargarProductos}) => {

const urlData = 'https://peliculas2021.herokuapp.com/peliculas'




    const [errorForm, setErrorForm] = useState(false)

    const [formValue, handleInputChange] = useForm({
        name: '',
        poster: '',
        puntos: '',
        descripcion: '',
        trailer: ''
    })

    const { name, poster, puntos, descripcion, trailer } = formValue

    const handleSubmit = async (e) => {
        e.preventDefault()
   
        const newTask = {
            id: shortid.generate(),
            name,
            poster,
            puntos,
            descripcion,
            trailer,
        }

        if (isEmpty(name) || isEmpty(poster) || isEmpty(puntos) || isEmpty(descripcion) || isEmpty(trailer)) {
            setErrorForm(true);
            return
        }

        setErrorForm(false);
       

        try {
            const resultado = await axios.post(urlData, newTask)
            guardarRecargarProductos(true)
        } catch (error) {
            console.log(error);
        }
    
    }

    return ( 

        <div className="col-4">
                    <h3 className="text-primary text-center"> Agregar Peliculas </h3>
                    {
                        errorForm &&
                        <div className="alert alert-danger" role="alert">
                            Falta información para el envío
                        </div>

                    }
                    <form className="form-group" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-control text-success  bg-dark"
                            placeholder="Poster Url"
                            name="poster"
                            value={poster}
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            className="form-control text-success  bg-dark mt-2"
                            name="name"
                            autoComplete="off"
                            placeholder="Nombre"
                            value={name}
                            onChange={handleInputChange}
                        />

                        <input
                            name="puntos"
                            className="form-control text-success  bg-dark mt-2"
                            autoComplete="off"
                            placeholder="Puntos"
                            value={puntos}
                            onChange={handleInputChange}
                        >
                        </input>

                        <input
                            name="trailer"
                            type="text"
                            className="form-control text-success  bg-dark mt-2"
                            autoComplete="off"
                            placeholder="Trailer Url"
                            value={trailer}
                            onChange={handleInputChange}
                        >
                        </input>

                        <textarea
                            name="descripcion"
                            className="form-control text-success  bg-dark mt-2"
                            autoComplete="off"
                            placeholder="Descripcion"
                            value={descripcion}
                            onChange={handleInputChange}
                        >
                        </textarea>

                        <div className="d-grid gap-2 mx-auto mt-2">
                            <button
                                type="submit"
                                className="btn btn-primary">
                                Guardar
                            </button>
                        </div>
                        </form>
             </div>


     );
}
 
export default Agregar;