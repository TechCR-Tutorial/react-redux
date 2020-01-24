import React from 'react'
import useCounter from './useCounter'

function CustomHookCounterOne() {
    // const [count, setCount] = useState(0)

    // const incrementCount = () => {
    //     setCount(prevCount =>  prevCount + 1)
    // }

    // const decrementCount = () => {
    //     setCount(prevCount =>  prevCount + 1)
    // }

    // const reset = () => {
    //     setCount(0)
    // }

    const [count, incrementCount, decrementCount, reset] = useCounter()
    return(
        <div>
            Count One: {count}
            <button onClick={incrementCount}>Increment Count One</button>
            <button onClick={decrementCount}>Decrement Count One</button>
            <button onClick={reset}>Reset Count One</button>
        </div>
    )
}

export default CustomHookCounterOne