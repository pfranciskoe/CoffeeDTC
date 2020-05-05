import { CLOSE_CART, OPEN_CART } from '../actions/cart_actions'

const cartModalReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_CART:
            return action.cart
        case CLOSE_CART:
            return null;
        default:
            return state
    }
}
export default cartModalReducer;