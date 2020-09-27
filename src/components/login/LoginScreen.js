import React from 'react'

export const LoginScreen = ({history}) => {
    
    const handleIngresar = () => {
        history.replace('/');
    }
    
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr></hr>

            <button
                className="btn btn-outline-primary"
                onClick={handleIngresar}
            >
               Ingresar     
            </button>
        </div>
    )
}
