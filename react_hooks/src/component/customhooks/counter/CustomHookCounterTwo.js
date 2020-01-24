import React from 'react'
import useCounter from './useCounter'

function CustomHookCounterTwo() {
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

    const [count, incrementCount, decrementCount, reset] = useCounter(10)
    return(
        <div>
            Count Two: {count}
            <button onClick={incrementCount}>Increment Count Two</button>
            <button onClick={decrementCount}>Decrement Count Two</button>
            <button onClick={reset}>Reset Count Two</button>
        </div>
    )
}

export default CustomHookCounterTwo