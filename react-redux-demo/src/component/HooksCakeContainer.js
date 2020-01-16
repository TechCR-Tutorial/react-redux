import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer () {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const distpatch = useDispatch()
    return (
        <div>
            <h2> Number of Hooks Cakes : {numOfCakes} </h2>
            <button onClick={() => distpatch(buyCake())}> Hooks Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer