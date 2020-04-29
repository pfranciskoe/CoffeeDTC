import { RECEIVE_TASTE_PROFILE } from '../actions/taste_profile_actions';

const TasteProfileReducer = (state={},action) =>{
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TASTE_PROFILE:
            console.log(action.type)
            return action.tasteProfile
        default:
           return state;
    }
}

export default TasteProfileReducer;