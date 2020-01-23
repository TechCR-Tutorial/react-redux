import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch(action.type) {
        case "increment":
            return {...state, firstCounter: state.firstCounter + action.value}
        case "decrement":
            return {...state, firstCounter: state.firstCounter - action.value}
        case "increment2":
            return {...state, secondCounter: state.secondCounter + action.value}
        case "decrement2":
            return {...state, secondCounter: state.secondCounter - action.value}
        case "reset":
            return initialState
        default:
            return state
    }
}

function UseReducerCounterWithObject() {
    const [state, distpatch] = useReducer(reducer, initialState)

    return(
        <div className="div-major">
            <h2>Use Redcuer Counter With Object. </h2>
            <h2>Counter One: {state.firstCounter}</h2>
            <h2>Counter Two: {state.secondCounter}</h2>
            <button onClick={() => distpatch({type: "increment", value: 1})}> Increment One 1</button>
            <button onClick={() => distpatch({type: "decrement", value: 1})}> Decrement One 1</button>
            <button onClick={() => distpatch({type: "increment", value: 5})}> Increment One 5</button>
            <button onClick={() => distpatch({type: "decrement", value: 5})}> Decrement One 5</button>
            <button onClick={() => distpatch({type: "increment2", value: 1})}> Increment Two</button>
            <button onClick={() => distpatch({type: "decrement2", value: 1})}> Decrement Two </button>
            <button onClick={() => distpatch({type:"reset"})}> Reset </button>
        </div>
    )
}

export default UseReducerCounterWithObject