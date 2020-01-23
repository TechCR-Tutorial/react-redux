import React, { useState, useRef, useEffect } from 'react'

function UseRefConstant() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect( () => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTime => prevTime + 1)
        })
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    return(
        <div>
            Timer: {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Interval</button>
        </div>
    )
}

export default UseRefConstant