import React from 'react'
import CartContainer from './cart_container'
const CartModal = ({ closeCart, cart_status }) => {
  if (!cart_status) {
    return null
  } else {
    return (
      <div className='cart-auth-background' onClick={closeCart}>
        <div className='cart-modal-wrapper' onClick={event => event.stopPropagation()}>
          <CartContainer />
        </div>
      </div>
    )
  }
}

export default CartModal
