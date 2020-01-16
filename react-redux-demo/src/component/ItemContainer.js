import React from 'react'
import {connect} from 'react-redux'
import { buyCake, buyIcecream } from '../redux'

function ItemContainer (props) {
    
    return (
        <div>
            <h2> Items ({props.code}){props.items} </h2>
            <button onClick={props.itemDispatch} >Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const items = ownProps.cake ? state.cake.numOfCakes : state.icecream.noOfIcecream
    const itemCode = ownProps.cake ? 'Cake' : 'IceCream'
    return {
        items: items,
        code: itemCode
    }
}

const mapDistpatchToProps = (dispatch, ownProps) => {
    const dispatchItem = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIcecream())

    return {
        itemDispatch: dispatchItem
    }
}

export default connect(mapStateToProps, mapDistpatchToProps) (ItemContainer)