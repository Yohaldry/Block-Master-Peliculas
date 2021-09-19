
import React, { Fragment } from 'react'
import '../Styles/main.css'



const Editar = ({guardarRecargarProductos, currentUser}) => {

    console.log(currentUser)
    

   

    return ( 

        <Fragment>
                    <h3 className="text-warning text-center"> Editar pelicula </h3>
                   
                    <form className="form-group fijo col-4">
                        <input
                            type="text"
                            autoComplete="off"
                            className="form-control text-warning  bg-dark"
                            placeholder="Poster Url"
                            name="poster"
                            // value={poster}
                            // onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            className="form-control text-warning  bg-dark mt-2"
                            name="name"
                            autoComplete="off"
                            placeholder="Nombre"
                            // value={name}
                            // onChange={handleInputChange}
                        />

                        <input
                            name="puntos"
                            className="form-control text-warning  bg-dark mt-2"
                            autoComplete="off"
                            placeholder="Puntos"
                            // value={puntos}
                            // onChange={handleInputChange}
                        >
                        </input>

                        <input
                            name="trailer"
                            type="text"
                            className="form-control text-warning  bg-dark mt-2"
                            autoComplete="off"
                            placeholder="Trailer Url"
                            // value={trailer}
                            // onChange={handleInputChange}
                        >
                        </input>

                        <textarea
                            name="descripcion"
                            className="form-control text-warning  bg-dark mt-2"
                            autoComplete="off"
                            placeholder="Descripcion"
                            // value={descripcion}
                            // onChange={handleInputChange}
                        >
                        </textarea>

                        <div className="d-grid gap-2 mx-auto mt-2">
                            <button
                                type="submit"
                                className="btn btn-warning">
                                Editar
                            </button>
                        </div>
                        </form>
           
                        </Fragment>

     );
}
 
export default Editar;