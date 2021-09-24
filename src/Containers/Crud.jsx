// import axios from 'axios'
import React, {useState, useEffect} from 'react'
import TableCrud from '../components/TableCrud'
import Agregar from '../components/Agregar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Editar from '../components/Editar'

export const Crud = ({recargarProductos}) => {

    useEffect(() => {
        obtener()
    }, [])

    const [datos, setDatos] = useState([])
    

     const obtener = async () => {

        let url = 'https://peliculas2021.herokuapp.com/peliculas'

       fetch(url)
       .then(response =>  response.json())
       .then(data => setDatos(data))
     }

     
     const handleDelete = async (id) => {
        
        const url = `https://peliculas2021.herokuapp.com/peliculas/${id}`;
        await axios.delete(url)
        .then (alert('Pelicula Eliminada'));
        
    }

    const [editing, setEditing] = useState(false)

    const [currentUser, setCurrentUser] = useState({
        id: null,
        name:'',
        poster:'',
        puntos:'',
        descripcion:'',
        trailer:''
    })

    const editRow = (datos) => {
        setEditing(true);
        setCurrentUser({
            id: datos.id,
            name: datos.name,
            poster: datos.poster,
            puntos: datos.puntos,
            descripcion: datos.descripcion,
            trailer: datos.trailer
        })
       
    }

    return (
        <div className="container mt-5">
            <Link  to="./Inicio" className="btn btn-danger">Salir</Link>
            <h1 className="text-primary">Crud Peliculas</h1>
            <hr />
            <div className="row">
                <div className="col-8" >
                    <h3 className="text-primary text-center">Lista de Peliculas</h3>
                        <TableCrud handleDelete={handleDelete}
                         datos={datos}
                          editRow={editRow}
                          />

                    </div>  
               <div className="col-4">
                {
                            editing ?(
                                <div>
                                    <Editar currentUser={currentUser}/>
                                </div>
                            ):(
                                <div>
                                     <Agregar />
                                </div>
                            )

                }

            </div>
         </div>
    </div>
         
               
    )
}
