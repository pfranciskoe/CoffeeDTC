import usersReducer from './users_reducer.js';
import { combineReducers } from 'redux';
import TasteProfileReducer from './taste_profile_reducer'
const entitiesReducer = combineReducers({
    users: usersReducer,
    tasteProfile: TasteProfileReducer
});

export default entitiesReducer;