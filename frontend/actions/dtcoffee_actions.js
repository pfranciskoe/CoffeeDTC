import { fetchCoffee, fetchCoffees} from '../util/dtcoffee_api_util'
export const RECEIVE_COFFEE = 'RECEIVE_COFFEE';
export const RECEIVE_COFFEES = 'RECEIVE_COFFEES';


const receiveCoffee = coffee => ({
    type: RECEIVE_COFFEE,
    coffee
})
const receiveCoffees = coffees => ({
    type: RECEIVE_COFFEES,
    coffees
})

export const fetchDTCoffee = coffeeId => dispatch => fetchCoffee(coffeeId)
    .then(coffee => dispatch(receiveCoffee(coffee)));

export const fetchDTCoffees = () => dispatch => fetchCoffees()
    .then(coffees => dispatch(receiveCoffees(coffees)));