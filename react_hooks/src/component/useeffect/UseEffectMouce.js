import React, { useState, useEffect } from 'react'

function UseEffectMouce() {

    const [coordinate, setCoordinate] = useState({x: 0, y : 0})

    const logMousePosition = e => {
        console.log('Mount Mouce Event ')
        setCoordinate({...coordinate, x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        console.log("[UseEffectMouce] use effect called. ")
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Unmount Mouce Event')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            Mouse {coordinate.x} : {coordinate.y}
        </div>
    )
}

export default UseEffectMouce