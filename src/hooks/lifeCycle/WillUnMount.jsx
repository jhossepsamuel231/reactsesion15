/**
 * Ejemplo de uso del método del uso WillUnMount para componente clase
 * Ejemplo de uso del hooks para componente funcionar
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes que el componente desaparesca')
    }

    render() {
        return (
            <>
                <h1>
                    WillUnMount
                </h1>
            </>
        );
    }
}

export const WillUnMountHook = () => {

    useEffect(() => {
        //Aqui no ponemos nada
        return () => {
            console.log('Comportamiento antes que el componente desaparesca')
        };
    }, []);

    return (
        <>
            <h1>
                WillUnMount
            </h1>
        </>
    );
}

export default WillUnMount;


