import React from 'react'

class CartItem extends React.Component{
    constructor(props){
        super(props);
        this.coffee = this.props.coffees[this.props.cart_item.coffeeId]
        console.log(this.props)
    }
    
    render(){
        return(
        <div className='cart-item'>
            <div className='cart-item-image'>

            </div>
            <div className='cart-item-text'>
                <div className='cart-item-head'>
                    <div className='cart-item-title'>
                        <span className='cart-item-quantity'>
                            {this.props.cart_item.quantity}{' x '}
                        </span> {this.coffee.name}
                    </div>
                    <div className='cart-item-price'>
                        ${this.coffee.price * this.props.cart_item.quantity}
                    </div>
                </div>
                <div className='cart-item-body'>
                        {this.coffee.roast === 1 ? 'Light' : null}
                        {this.coffee.roast === 2 ? 'Medium Light' : null}
                        {this.coffee.roast === 3 ? 'Medium' : null}
                        {this.coffee.roast === 4 ? 'Medium Dark' : null}
                        {this.coffee.roast === 5 ? 'Dark' : null}{'  |  '}{this.coffee.weight}{'oz.'}
                </div>
                <div className='cart-remove-button' onClick={() => this.props.removeItemToCart(this.props.cart_item.id)}>
                    Remove
                </div>
            </div>
        </div>
        )
    }
}

export default CartItem