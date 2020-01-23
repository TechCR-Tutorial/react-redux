import React, { useReducer } from 'react'
import UseReducerWithContextA from './UseReducerWithContextA'
import UseReducerWithContextB from './UseReducerWithContextB'
import UseReducerWithContextC from './UseReducerWithContextC'


export const CounterContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state -1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function UserReducerWithContextTree() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CounterContext.Provider value={{countValue: count, countDispatch: dispatch}} >
            <div className="div-major">
                <h2> Counter : {count} </h2>
                <UseReducerWithContextA />
                <UseReducerWithContextB />
                <UseReducerWithContextC />
            </div>
        </CounterContext.Provider>
    )
}

export default UserReducerWithContextTree