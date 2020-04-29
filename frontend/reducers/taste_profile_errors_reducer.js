
import { RECEIVE_TASTE_PROFILE, RECEIVE_TASTE_ERRORS } from '../actions/taste_profile_actions';
export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TASTE_ERRORS:
            return Object.assign({}, state, action.errors);
        case RECEIVE_TASTE_PROFILE:
            return Object.assign(state, {});
        default:
            return state;
    }
}