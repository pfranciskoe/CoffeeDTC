import usersReducer from './users_reducer.js';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
    users: usersReducer
});

export default entitiesReducer;