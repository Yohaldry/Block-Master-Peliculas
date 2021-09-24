
import React, {Fragment, useState, useEffect} from "react";
import { Link, useHistory } from 'react-router-dom';
import InicioHeader from "./InicioHeader";




const Login = (Autorized) => {

const [ usuarios, setUsuarios ] = useState([])


const handleInputChange = (e) => {

    
   
    
    setUser({
        ...user,
        [e.target.name]: e.target.value
    })
}

const [user, setUser] = useState({
    username: '',
    password: ''
})

const iniciar = () => {
    
    const Verificado = usuarios.find(U =>  user.username === U.username )
   
    if(Verificado){
 
        alert('logueado')
          
    }else{

        alert('Correo invalido')

    }
}

        useEffect(() => {
	        obtenerDatos()
        }, [])

const obtenerDatos = async () => {
	const data = await fetch(`https://class-components2895.herokuapp.com/usuario`)
	const users = await data.json()
    setUsuarios(users)

}

const handleSubmit = (e) => {

    e.preventDefault()
}

    
    return ( 
    <Fragment>
        <div className="text-center py-5">
                <form className="form-signin" onSubmit={handleSubmit}>  
                <h1 className="h4 mb-3 font-weight-normal">
                        Inicio de sesión
                    </h1>

        {

        }
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control mt-1"
                        placeholder="Email"
                        required=""
                        name="username"
                        // value={username}
                        onChange={handleInputChange}
                        
                    />

                    <input
                        type="Password"
                        id="inputPassword"
                        className="form-control mt-1"
                        placeholder="Contreña"
                        name="password"
                        // value={password}
                        required=""
                        onChange={handleInputChange}
                       
                    />

                    <div
                        type="submit"
                        className="btn btn-primary btn-block"
                       onClick={iniciar}
                      
                    >
                        Login
                    </div>

                    <div className="">
                        <p>Login with social networks</p>

                        <div className="google-btn btn-primary">
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            </div>
                            <p className="btn-text">
                                <b>Sign in with google</b>
                            </p>
                        </div>
                    </div>
                      <Link
                        className="Link"
                        to="./Inicio"
                       >
                        Create new account
                    </Link>
                </form>
            </div>
    </Fragment>
     );
}
 
export default Login;