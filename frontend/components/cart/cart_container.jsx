import { connect } from 'react-redux';
import { closeCart, fetchCart, addItemToCart, removeItemToCart, changeItemInCart, checkoutCart} from '../../actions/cart_actions';
import { fetchDTCoffees } from '../../actions/dtcoffee_actions';
import Cart from './cart.jsx';

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => ({
    fetchDTCoffees: () => dispatch(fetchDTCoffees()),
    fetchCart: () => dispatch(fetchCart()),
    closeCart: () => dispatch(closeCart()),
    addItemToCart: (coffee_id, quantity) => dispatch(addItemToCart(coffee_id, quantity)),
    removeItemToCart: (itemId) => dispatch(removeItemToCart(itemId)),
    changeItemInCart: (itemId, coffee_id, quantity) => dispatch(changeItemInCart(itemId, coffee_id, quantity)),
    checkoutCart: () => dispatch(checkoutCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)