import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import Registro from '../components/Registro'
import Inicio from '../components/InicioHeader'
import InfoPeliculas from '../components/InfoPeliculas'
import AppRouter from './AppRouter';

function About() {
    return ( 
    
                 <BrowserRouter>
                     <Route exact path="/Registros" component={Registro} />
                     <Route exact path="/IniciarSesion" component={Login} />
                     <Route exact path="/Inicio" component={Inicio} />
                     <Route exact path="/Pelicula/:id">
                         <InfoPeliculas />
                         </Route>
                         <Route exact path="/Crud" component={AppRouter} />
                 </BrowserRouter>

     );
}
 
export default About;