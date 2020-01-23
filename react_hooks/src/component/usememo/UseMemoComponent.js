import React, { useState, useMemo } from 'react'

function UseMemoComponent() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incrementCounterOne = () => {
        setCountOne(preCountOne => preCountOne + 1)
    }

    const incrementCounterTwo = () => {
        setCountTwo(preCountTwo => preCountTwo + 1)
    }

    // const isEven = () => {
    //     let i = 0
    //     while(i < 3000000000) i++
    //     return countOne % 2 === 0
    // }

    const isEven = useMemo(() => {
        let i = 0
        while(i < 3000000000) i++
        return countOne % 2 === 0
    }, [countOne])

    return (
        <div><div>
            <button onClick={incrementCounterOne} > Counter One {countOne} </button>
            {/* <span>{isEven() ? 'Even' : 'Odd'}</span> */}
            <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>
            <div>
                <button onClick={incrementCounterTwo} > Counter Two {countTwo} </button>
            </div>
        </div>
    )
}

export default UseMemoComponent