import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import cartModalReducer from './cart_modal_reducer';
export default combineReducers({
    modal: modalReducer,
    cart: cartModalReducer
});