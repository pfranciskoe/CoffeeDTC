import React from 'react'
import {connect} from 'react-redux'
import {fetchDTCoffees} from '../../actions/dtcoffee_actions'
import { fetchAllRoasters } from '../../actions/roaster_actions';
import CoffeeIndex from './coffee_index'

const mapStateToProps = ({ entities: { coffees, roasters } }) => {
    return{
        coffees: coffees,
        roasters: roasters
    }
}
const mapDispatchToProps = dispatch =>({
    fetchDTCoffees: ()=> dispatch(fetchDTCoffees()),
    fetchAllRoasters: () => dispatch(fetchAllRoasters())
})

export default connect(mapStateToProps,mapDispatchToProps)(CoffeeIndex)