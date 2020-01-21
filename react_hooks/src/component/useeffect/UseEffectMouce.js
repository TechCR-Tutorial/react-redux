import React, { useState, useEffect } from 'react'

function UseEffectMouce() {

    const [coordinate, setCoordinate] = useState({x: 0, y : 0})

    const logMouseXYPosition = (e) => {
        console.log('Mount Mouce Event ')
        setCoordinate({...coordinate, x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        console.log("[UseEffectMouce] use effect called. ")
        window.addEventListener('mousemove', logMouseXYPosition)

        return () => {
            console.log('Unmount Mouce Event')
            window.removeEventListener('mousemove', logMouseXYPosition)
        }
    }, [])

    return (
        <div>
            Mouse {coordinate.x} : {coordinate.y}
        </div>
    )
}

export default UseEffectMouce