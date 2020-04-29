import entitiesReducer from './entities_reducer.js';
import errorsReducer from './errors_reducer.js';
import sessionReducer from './session_reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer
})
export default rootReducer;