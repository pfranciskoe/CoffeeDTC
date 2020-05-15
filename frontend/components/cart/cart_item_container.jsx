import { connect } from 'react-redux'
import { addItemToCart, removeItemToCart, changeItemInCart, closeCart } from '../../actions/cart_actions'

import CartItem from './cart_item'

const mapStateToProps = (state) => {
  return {
    coffees: state.entities.coffees

  }
}

const mapDispatchToProps = dispatch => ({
  removeItemToCart: (itemId) => dispatch(removeItemToCart(itemId)),
  changeItemInCart: (itemId, coffee_id, quantity) => dispatch(changeItemInCart(itemId, coffee_id, quantity)),
  closeCart: () => dispatch(closeCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
