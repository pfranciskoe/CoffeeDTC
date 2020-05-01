import { RECEIVE_COFFEE, RECEIVE_COFFEES } from '../actions/dtcoffee_actions';

const CoffeesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_COFFEE:
            return Object.assign({}, state, {[action.coffee.id]: action.coffee})
        case RECEIVE_COFFEES:
            return Object.assign({}, state, action.coffees)
        default:
            return state;
    }
}

export default CoffeesReducer;