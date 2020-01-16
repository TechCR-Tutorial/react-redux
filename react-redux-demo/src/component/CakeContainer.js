import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer (props) {
    return (
        <div>
            <h2> Number of Cakes : {props.noOfCackes} </h2>
            <button onClick={props.buyCake}> Buy Cake</button>
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
        buyCake: () => dispatchEvent(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)