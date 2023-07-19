/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos de ciclo de vida
 */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class LifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DIDMOUNT: Justo al acabar el montaje del componente, antes de renderizarlo')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nexState) {
        /**
         * Controlar si el componente debe o no actualizarse
         */
        //return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Justo despues de actualizarse')
    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    render() {
        return (
            <div>

            </div>
        )
    }

}

LifeCycleExample.propTypes = {
    
}