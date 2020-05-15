import React from 'react'
import CartItemContainer from './cart_item_container'
const xmarks = '\u2715'
class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.state = { checkedOut: false }
    this.fetchCart = this.props.fetchCart.bind(this)
    this.props.fetchDTCoffees().then(() => this.fetchCart())
    this.handleCheckout = this.handleCheckout.bind(this)
  }

  handleCheckout () {
    this.props.checkoutCart()
      .then(() => (this.setState({ checkedOut: true })))
  }

  render () {
    return (
      <div className='cart-cont'>
        <div className='close-cart' onClick={this.props.closeCart}>{xmarks}</div>
        <h1 className='cart-head'>Your Order</h1>
        {Object.values(this.props.cart).length >= 1
          ? Object.values(this.props.cart).map((cart_item, idx) => (
            <CartItemContainer key={`cart-item-${idx}`} cart_item={cart_item} />
          ))
          : (!this.state.checkedOut ? <div className='checkout-empty-message'>Add Some Coffees!</div> : null)}
        {!this.state.checkedOut ? Object.values(this.props.cart).length >= 1
          ? <button className='button-2 cart-button' onClick={this.handleCheckout}>Check Out </button> : null
          : <div className='checkout-success-message'>Will Arrive Shortly!</div>}
      </div>
    )
  }
}

export default Cart
