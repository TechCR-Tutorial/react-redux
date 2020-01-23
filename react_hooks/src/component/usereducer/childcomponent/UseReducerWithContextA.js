import React, { useContext } from 'react'
import { CounterContext } from './UserReducerWithContextTree'

function UseReducerWithContextA() {
    const context = useContext(CounterContext)
    return(
        <div>
            <h2> Component A</h2>
            <button onClick={() => context.countDispatch('increment')}> Increment </button>
            <button onClick={() => context.countDispatch('decrement')}> Decrement </button>
            <button onClick={() => context.countDispatch('reset')}> Reset </button>
        </div>
    )
}

export default UseReducerWithContextA