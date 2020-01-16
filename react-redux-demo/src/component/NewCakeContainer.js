import React, {useState} from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer (props) {
    const[number, setNumber] = useState(1)
    return (
        <div>
            <h2> Number of Cakes : {props.noOfCackes} </h2>
            <input type="text"  value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}> Buy {number} Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfCackes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatchEvent => {
    // can use selector here for advance mapping / aggregations
    return {
        buyCake: (number) => dispatchEvent(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)