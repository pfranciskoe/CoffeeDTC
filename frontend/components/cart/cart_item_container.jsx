import { connect } from 'react-redux';
import { addItemToCart, removeItemToCart, changeItemInCart } from '../../actions/cart_actions';
import CartItem from './cart_item';

const mapStateToProps = (state) => {
    return {
        coffees: state.entities.coffees
    }
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: (coffee_id, quantity) => dispatch(addItemToCart(coffee_id, quantity)),
    removeItemToCart: (itemId) => dispatch(removeItemToCart(itemId)),
    changeItemInCart: (itemId, coffee_id, quantity) => dispatch(changeItemInCart(itemId, coffee_id, quantity))
})


export default connect(mapStateToProps,mapDispatchToProps)(CartItem)