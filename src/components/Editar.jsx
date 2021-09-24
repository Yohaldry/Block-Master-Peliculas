
import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import '../Styles/main.css'
import { E } from '../Styles/Rejistro_Styled'



const Editar = ({guardarRecargarProductos, currentUser}) => {

    const [curre, setCurre] = useState({

        name: '',
        poster: '',
        puntos: '',
        descripcion: '',
        trailer: ''
    })

    const handleChange = (e) => {

        setCurre({
            ...curre, 
            [e.target.name]: e.target.value
        })
    }
    
    console.log(currentUser)

    useEffect(() => {
        setCurre(currentUser)
    }, [])
    

    const guardarCambios = (e) => {
        
        axios.put(`https://peliculas2021.herokuapp.com/peliculas/${curre.id}`,
        curre
        )
        .then (alert('Actualizado'))
    }
   

    return ( 

        <Fragment>
                    <h3 className="text-warning text-center"> Editar pelicula </h3>
                   
                    <form className="form-group fijo col-4" >
                        <input
                            type="text"
                            autoComplete="off"
                            className="form-control text-warning  bg-dark"
                            placeholder="Poster Url"
                            name="poster"
                            value={curre.poster}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            className="form-control text-warning  bg-dark mt-2"
                            name="name"
                            autoComplete="off"
                            placeholder="Nombre"
                            value={curre.name}
                            onChange={handleChange}
                        />

                        <input
                            name="puntos"
                            className="form-control text-warning  bg-dark mt-2"
                            autoComplete="off"
                            placeholder="Puntos"
                            value={curre.puntos}
                            onChange={handleChange}
                        >
                        </input>

                        <input
                            name="trailer"
                            type="text"
                            className="form-control text-warning  bg-dark mt-2"
                            autoComplete="off"
                            placeholder="Trailer Url"
                            value={curre.trailer}
                            onChange={handleChange}
                        >
                        </input>

                        <textarea
                            name="descripcion"
                            className="form-control text-warning  bg-dark mt-2"
                            autoComplete="off"
                            placeholder="Descripcion"
                            value={curre.descripcion}
                            onChange={handleChange}
                        >
                        </textarea>

                        <div className="d-grid gap-2 mx-auto mt-2">
                            <button
                                type="submit"
                                className="btn btn-warning"
                                onClick={guardarCambios}>
                                Editar
                            </button>
                        </div>
                        </form>
           
                        </Fragment>

     );
}
 
export default Editar;