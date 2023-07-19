import React, { useState } from 'react';

//Definiendo estilos constantes
// ? Estilo para usuario logueado
const loggedStyle = {
    color: 'white'
}

// ? Estilo para usuario no logueado
const unLoggedStyle = {
    color: 'tomato',
    fontWeight: 'bond'
}
const GreetingStyled = (props) => {

    //Generamos un estado para el componente
    //y asi controlar si el usuario está o no logeado
    const [logged, setLogged] = useState(false);

    /* const greetingUser = () => (<p>Hola, {props.name}</p>)
    const pleaseLogin = () => (<p>Please Login</p>)  */

    return (
        <div style={logged ? loggedStyle : unLoggedStyle}>
            {logged ?
                (<p>Hola, {props.name}</p>)
                :
                (<p>Please Login</p>)
            }
            <button onClick={() => {
                console.log('Botón pulsado')
                setLogged(!logged)
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
