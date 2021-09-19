
import React, {Fragment, useState, useEffect} from "react";
import { Link } from 'react-router-dom';



const Login = () => {


const [ usuarios, setUsuarios ] = useState([])








const Users = usuarios.map((us) => {
  
    
        
    
})


        useEffect(() => {
	        obtenerDatos()
        }, [])

const obtenerDatos = async () => {
	const data = await fetch(`https://class-components2895.herokuapp.com/usuario`)
	const users = await data.json()
    setUsuarios(users)

}


    
    return ( 
    <Fragment>
        <div className="text-center py-5">
                <form className="form-signin" >  
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
                        // onChange={handleChange}
                        
                    />

                    <input
                        type="Password"
                        id="inputPassword"
                        className="form-control mt-1"
                        placeholder="Contreña"
                        name="password"
                        required=""
                        // onChange={handleChange}
                       
                    />

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                       
                    >
                        Login
                    </button>

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