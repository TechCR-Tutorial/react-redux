import React from 'react'
import ClassCounter from './ClassCounter'
import UseStateCounte from './UseStateCounter'
import UseStateCounterPrevState from './UseStateCounterPrevState'
import UseStateObject from './UseStateObject'
import UseStateArray from './UseStateArray'

function UseStateComponent() {
    return(
        <div >
            <h2> Use State ...</h2>
            <div><ClassCounter /></div>
            <div><UseStateCounte /></div>
            <div><UseStateCounterPrevState /></div>
            <div><UseStateObject /></div>
            <div><UseStateArray /></div>
        </div>
    )
}

export default UseStateComponent