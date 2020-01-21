import React, { useState, useEffect } from 'react'

function UseEffectCounter() {

    const [count, setCount] = useState(0)

    useEffect( () => {
        document.title = `Click From Hook ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}> Hook Click {count}</button>
        </div>
    )
}

export default UseEffectCounter