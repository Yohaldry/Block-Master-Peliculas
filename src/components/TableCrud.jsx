import React from 'react'
import { Link } from 'react-router-dom'

const TableCrud = ({datos, handleDelete, editRow}) => {
    return (
        <div className="container mt-5">
          
                    <ul className="list-group">
                        {
                            datos.map(tarea => (
                                <li className="list-group-item text-success bg-dark" key={tarea.id}>
                                    <span className="lead">{tarea.puntos} - {tarea.name}</span>
                                    <button
                                        className="btn btn-danger btm-sm float-end "
                                        onClick={() => {handleDelete(tarea.id)}}
                                    >
                                      borrar
                                    </button>

                                    <button
                                        className="btn btn-warning btm-sm float-end mx-2"
                                        onClick={() =>{editRow(tarea)}}
                                    >
                                        Editar
                                    </button>

                                    <Link
                                        className="btn btn-success btm-sm float-end mx-2"
                                        to={`/Pelicula/${tarea.id}`}
                                    >
                                        Detalle
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

    )
}
export default TableCrud;
