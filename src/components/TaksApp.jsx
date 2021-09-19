import axios from 'axios'
import { isEmpty } from 'lodash'
import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import shortid from 'shortid'
import { useForm } from '../hook/useForm'
import Agregar from './Agregar'
import Editar from './Editar'


const TaksApp = ({stateTaks,guardarRecargarProductos}) => {
    const urlData = 'https://peliculas2021.herokuapp.com/peliculas'


    const handleDelete = async (tarea) => {
        
        const url = `https://peliculas2021.herokuapp.com/peliculas/${tarea.id}`;
        guardarRecargarProductos(true)
        await axios.delete(url);
    }

const [editing, setEditing] = useState(false)


 const [currentPelicula, setCurrentPelicula] = useState({
    id: null,
    name:'',
    poster:'',
    puntos:'',
    descripcion:'',
    trailer:''
 })

 const editRow = (stateTaks) => {
    setEditing(true)
  
    setCurrentPelicula({
    id: stateTaks.id,
    name: stateTaks.name,
    poster: stateTaks.poster,
    puntos: stateTaks.puntos,
    descripcion: stateTaks.descripcion,
    trailer: stateTaks.trailer
    
    })
    console.log(stateTaks)
 }

    return (
        <div className="container mt-5">
            <h1 className="text-primary">Crud Peliculas</h1>
            <hr />

            <div className="row">
                <div className="col-8" >
                    <h3 className="text-primary text-center">Lista de Peliculas</h3>
                    <ul className="list-group">
                        {
                            stateTaks.map(tarea => (
                                <li className="list-group-item text-success bg-dark" key={tarea.id}>
                                    <span className="lead">{tarea.puntos} - {tarea.name}</span>
                                    <button
                                        className="btn btn-danger btm-sm float-end "
                                        onClick={() => handleDelete(tarea)}
                                    >
                                      borrar
                                    </button>
                                    <button
                                    onClick={editRow}
                                        className="btn btn-warning btm-sm float-end mx-2"
                                       
                                    >
                                        Editar
                                    </button>
                                    <Link
                                        className="btn btn-success btm-sm float-end mx-2"
                                       to={ `/detalle/${tarea.id}`}
                                    >
                                        Detalle
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

              </div>
              {
            editing ? (
                <div>
                    <Editar currentPelicula={currentPelicula}/>
                </div>
            ):(
                <div>
                     <Agregar />
                </div>
            )
        }
              
     </div>

    )
}

export default TaksApp


