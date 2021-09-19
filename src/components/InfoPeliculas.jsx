import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import '../Styles/main.css'

import {Poster, TitlePoster, Descripcion} from '../Styles/Rejistro_Styled'

const InfoPeliculas = () => {

    const id = useParams().id
    

    const [ info, setInfo ] = useState([])

        React.useEffect(() => {
            obtenerDatos()
        }, )

        const obtenerDatos = async () => {
            const data = await fetch(`https://peliculas2021.herokuapp.com/peliculas/${id}`)
            const users = await data.json()
            setInfo(users)
            console.log(info);
        }

    return ( 
<div>
    
        <TitlePoster>{info.name}</TitlePoster>
        <Poster src={info.poster} alt="" />
        <Descripcion>{info.descripcion}</Descripcion>
        <ReactPlayer  id="Trailer" url={info.trailer}/>

     
</div>
     );
}
 
export default InfoPeliculas;