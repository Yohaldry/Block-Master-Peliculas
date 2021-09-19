import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../Styles/main.css'
import Carrusel from "../components/Carrusel";

import { TitleTemplate, HEADER, CardAncho, Puntos, Lpuntos, E, Activos } from '../Styles/Rejistro_Styled'


const InicioHeader =  () => {

    
    const [ pelis, setPelis ] = useState([])

        useEffect(() => {
            obtenerDatos()
            // eslint-disable-next-line react-hooks/exhaustive-deps
           }, [])

        const obtenerDatos = async () => {
            const data = await fetch(`https://peliculas2021.herokuapp.com/peliculas`)
            const users = await data.json()
            setPelis(users)
            console.log(users);
        }




    const [filter, setFilter] = useState('');

    const searchText = (event) => {
        setFilter(event.target.value)

    }

    const dataSearch =  pelis.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    })

    return ( 
<Fragment>
        <HEADER className="Header-search">
            <img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631331639/logo-blockBuster_mdnchr.png" alt="Logo" srcset="" />
            <label className="Seccion">Todas</label>
            <Link className="Seccion" to="./crudPeliculas" >Crud Peliculas</Link>
            <label className="Seccion">Menos Valoradas</label>

            <div className="search_wrap search_wrap_3">
			
				<input 
                onChange={searchText.bind(this)} 
                value={filter} 
                className="search_box" 
                type="text"  
                placeholder="search..."/>
				<div className="btn btn_common">
                <i className="fas fa-search"></i>
				</div>
			</div>
    
        </HEADER>
{/* ------------------------Carrusel------------------------------- */}

                            <Carrusel />

{/* ------------------------Carrusel------------------------------- */}

        <TitleTemplate>Todas las Peliculas</TitleTemplate>
        <div className="Contenedor_Templates">

        <CardAncho>
            {dataSearch.map((movie) => {
            return <div>
            <Link to={`/Pelicula/${movie.id}`}>
                <img src={movie.poster} id="Cards" className="card-img-top" alt="..."  />
                <Puntos>  <E src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1631414867/Imagen1_rthac6.png" className="card-img-top" alt="..."  /> </Puntos>
                <Lpuntos>{movie.puntos}</Lpuntos>
                <Activos>{movie.tra}</Activos>
             </Link>
             </div> 
            
            })}
        </CardAncho>
          
        </div>


</Fragment>
     );
}
 
export default InicioHeader;