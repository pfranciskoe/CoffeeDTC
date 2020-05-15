import React from 'react'
import { closeCart, openCart } from '../../actions/cart_actions'
import { connect } from 'react-redux'
import CartModal from './cart_modal'
const mapStateToProps = state => {
  return {
    cart_status: state.ui.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeCart: () => dispatch(closeCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal)
