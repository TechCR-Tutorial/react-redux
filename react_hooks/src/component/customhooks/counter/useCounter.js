import {useState} from 'react'

function useCounter(initialCount = 0) {
    const [count, setCount] = useState(initialCount)

    const incrementCount = () => {
        setCount(prevCount =>  prevCount + 1)
    }

    const decrementCount = () => {
        setCount(prevCount =>  prevCount - 1)
    }

    const reset = () => {
        setCount(initialCount)
    }
    
    return [count, incrementCount, decrementCount, reset]
}

export default useCounter