import React, { useContext } from 'react'
import { CounterContext } from './UserReducerWithContextTree'

function UseReducerWithContextF() {
    const context = useContext(CounterContext)
    return(
        <div>
            <h2> Component F </h2>
            <button onClick={() => context.countDispatch('increment')}> Increment </button>
            <button onClick={() => context.countDispatch('decrement')}> Decrement </button>
            <button onClick={() => context.countDispatch('reset')}> Reset </button>
        </div>
    )
}

export default UseReducerWithContextF