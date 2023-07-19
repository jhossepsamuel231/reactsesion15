/**
 * Ejemplo de uso de método de componentDidUpdate en componente de clase
 * y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando el componente recive nuevos props o cambio en su estado privado')
    }

    render() {
        return (
            <>
                <h1>
                    DidUpdate
                </h1>
            </>
        );
    }
}


export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')
    });

    return (
        <>
            <h1>
                DidUpdate
            </h1>
        </>
    );
}


