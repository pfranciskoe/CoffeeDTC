import { RECEIVE_CART, RECEIVE_CART_ITEM, REMOVE_CART_ITEM} from '../actions/cart_actions'

const cartReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CART:
            return action.cartItems
        case REMOVE_CART_ITEM:
            let nextState = Object.assign({}, state)
            delete nextState[Object.keys(action.cartItem)[0]]
            return nextState
        case RECEIVE_CART_ITEM:
            return Object.assign({},state,action.id)
        default:
            return state
    }
}
export default cartReducer;