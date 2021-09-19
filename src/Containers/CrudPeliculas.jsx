import React, {useState, useEffect} from 'react'
import TaksApp from '../Components/AddPeliculas';
import PelisTable from "../Components/PelisTable";

import {CrudMain, TitleCrud, AddView, Add, View} from '../Styles/Rejistro_Styled'

const url = "https://peliculas2021.herokuapp.com/peliculas";

const CrudPeliculas = () => {



    const [peliculas, setPeliculas] = useState([]);
    // console.log(peliculas)


    useEffect(() => {
        peticionGet();
     },[''])

    const peticionGet = async () => {
        const res =  await fetch(url);
        const data = await res.json();
        setPeliculas(data)
     }


     const addPelicula = (pelicula) => {

        pelicula.id = peliculas.id
        setPeliculas({
            ...peliculas, pelicula
        })
     }


    return ( 

        <CrudMain>

            <TitleCrud>Crud de peliculas</TitleCrud>
                <AddView>
                    <Add>
                        <h2>Agregar Pelicula</h2>
                        <TaksApp TaksApp={TaksApp}/>
                    </Add>
                    <View>
                        <h2>View User</h2>
                        <PelisTable peliculas={peliculas}/>
                    </View>
                </AddView>
        </CrudMain>
     );
}
 
export default CrudPeliculas;