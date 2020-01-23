import React from 'react'
import UseReducerCounterOne from './UseReducerCounterOne'
import UseReducerCounterWithObject from './UseReducerCounterWithObject'
import UseReducerCounterMultipleReducer from './UseReducerCounterMultipleReducer'
import UserReducerWithContextTree from './childcomponent/UserReducerWithContextTree'
import UseReducerFetch from './UseReducerFetch'

function UseReducerComponent() {
    return(
        <div className="div-major"> 
            <UseReducerCounterOne />
            <UseReducerCounterWithObject />

            <h2>Multiple Reducer</h2>
            <UseReducerCounterMultipleReducer />
            <UserReducerWithContextTree />
            <UseReducerFetch />
        </div>
    )
}

export default UseReducerComponent