import { RECEIVE_COFFEE } from '../actions/dtcoffee_actions';

const CoffeesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_COFFEE:
            return Object.assign({}, state, {[action.coffee.id]: action.coffee})
        default:
            return state;
    }
}

export default CoffeesReducer;