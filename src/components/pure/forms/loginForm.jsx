/**
 * Componente que va a contener un formulario 
 * para autenticador de usuarios
 */

import React, { useState } from 'react';

const LoginForm = () => {

    const initialCredentials = [
        {
            user: '',
            password: ''
        }
    ]

    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <>
            
        </>
    );
}

export default LoginForm;
