import React from 'react';
import CartItemContainer from './cart_item_container'
const xmarks = "\u2715";
class Cart extends React.Component{

    constructor(props){
        super(props)
        this.fetchCart=this.props.fetchCart.bind(this)
        this.props.fetchDTCoffees()
        this.fetchCart().then(() => console.log(this.props.cart))
    }

    render(){ 
       return(
        <div className='cart-cont'>
            <div className='close-cart' onClick={this.props.closeCart}>{xmarks}</div>
            <h1 className='cart-head'>Your Order</h1>
            {Object.values(this.props.cart).map((cart_item,idx)=>(
                <CartItemContainer key={`cart-item-${idx}`}cart_item={cart_item}/>
            ))   
            }
            <button className='button-2 cart-button' onClick={this.props.checkoutCart}>Check Out </button>
        </div>
        )
    }
}

export default Cart;