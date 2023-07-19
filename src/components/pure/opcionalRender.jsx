import React, { useState } from 'react';

let red = 0
let green = 200
let blue = 150

// ? Estilo para usuario logueado
const loggedStyle = {
    backgroundColor: `rgb(${red},${green}, ${blue})`,
    color: 'white',
    fontWeight: 'bold'
}

// ? Estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

//Login / Logout buttons
const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

// ? (Expresión true) && expresión => se renderiza la expresión
// ? (Expresión false) && expresión => no se renderiza la expresión



const OpcionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);
    /* const updateAcces = () => {
        setAccess(!access)
    } */

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }

    let optionalButton;

    /* if (access) {
        optionalButton = <button onClick={updateAcces}>Logout</button>
    } else {
        optionalButton = <button onClick={updateAcces}>Login</button>
    } */

    if (access) {
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    } else {
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    //Unread messages
    let addMessages = () => {
        setNMessages(nMessages + 1)
    }

    return (
        <div>

            {/* Optionar Button */}
            {optionalButton}

            {/* N Messages unread */}
            {/* {nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new messages...</p>}
            {nMessages > 1 && <p>You have {nMessages} new messages...</p>}
            {nMessages === 0 && <p>There are no new messages</p>} */}
            {/* Ternay Operator */}
            {/* {nMessages > 0 || nMessages === 1 ? 
            <p>You have {nMessages} new messages...</p> 
            :
            <p>There are no new messages</p>} */}
            {access ? (<div>
                {nMessages > 0 ?
                    <p>You have {nMessages} new message{nMessages > 1 ? 's' : null}...</p>
                    :
                    <p>There are no new messages</p>}
                <button onClick={addMessages}>{nMessages === 0 ? 'Add your first message' : 'Add new Messages'}</button>
            </div>) : null}
        </div>
    );
}

export default OpcionalRender;
