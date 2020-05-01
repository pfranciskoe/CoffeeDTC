import {fetchCoffee} from '../util/dtcoffee_api_util'
export const RECEIVE_COFFEE = 'RECEIVE_COFFEE';



const receiveTasteProfile = coffee => ({
    type: RECEIVE_COFFEE,
    coffee
})
export const fetchDTCoffee = coffeeId => dispatch => fetchCoffee(coffeeId)
    .then(coffee => dispatch(receiveTasteProfile(coffee)));
