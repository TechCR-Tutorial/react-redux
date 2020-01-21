import React, { useState, useEffect } from 'react'

function UseEffectConditionaly() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect( () => {
        console.log("Conditinally Click Document Title update....")
        document.title = `Click Conditionlly Hook ${count} times`
    }, [count])

    return(
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(prevState => prevState + 1)}> Cicke {count} Times </button>
        </div>
    )
}

export default UseEffectConditionaly