import React from 'react'
import {connect} from 'react-redux'
import { buyIcecream } from '../redux'

function IcecreamContainer (props) {
    return (
        <div>
            <h2> Number of Icecreams : {props.noOfIcecream} </h2>
            <button onClick={props.buyIcecream}> Buy Icecream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfIcecream: state.icecream.noOfIcecream
    }
}

const mapDispatchToProps = dispatchEvent => {
    // can use selector here for advance mapping / aggregations
    return {
        buyIcecream: () => dispatchEvent(buyIcecream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (IcecreamContainer)