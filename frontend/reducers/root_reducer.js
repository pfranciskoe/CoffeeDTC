import entitiesReducer from './entities_reducer.js';
import errorsReducer from './errors_reducer.js';
import sessionReducer from './session_reducer.js';
import uiReducer from './ui_reducer.js'
import CartReducer from './cart_reducer'
import { combineReducers } from 'redux';
import cartReducer from './cart_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer,
    ui: uiReducer,
    cart: cartReducer
})
export default rootReducer;