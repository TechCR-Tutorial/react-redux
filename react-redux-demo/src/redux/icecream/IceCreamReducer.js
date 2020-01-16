import { BUY_ICECREAM } from "./IcecreamType"

const initialIcecreamState = {
    noOfIcecream: 20
}

const iceCreamReducer = (state = initialIcecreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM :
            return {
                ...state, 
                noOfIcecream: state.noOfIcecream - 1
            }
        default: return state
    }
}

export default iceCreamReducer