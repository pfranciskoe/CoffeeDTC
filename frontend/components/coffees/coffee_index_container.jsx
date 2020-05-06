import React from 'react'
import {connect} from 'react-redux'
import {fetchDTCoffees} from '../../actions/dtcoffee_actions'
import CoffeeIndex from './coffee_index'

const mapStateToProps = ({ entities: { coffees } }) => {
    return{
        coffees: coffees
    }
}
const mapDispatchToProps = dispatch =>({
    fetchDTCoffees: ()=>dispatch(fetchDTCoffees())
})

export default connect(mapStateToProps,mapDispatchToProps)(CoffeeIndex)