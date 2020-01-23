import React, { useEffect, useRef } from 'react'

function UseRefDOM() {

    const ref = useRef(null)

    useEffect(() => {
        ref.current.focus()
    }, [])
    return(
        <div>
            <input  type="text"/>
            <input ref={ref} type="text"/>
            
        </div>
    )
}

export default UseRefDOM