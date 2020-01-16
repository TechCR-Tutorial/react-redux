import { combineReducers } from 'redux'
import cakeReducer from './cake/CakeReducer'
import icecreamReducer from './icecream/IceCreamReducer'
import userReducer from './user/UserReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
})

export default rootReducer