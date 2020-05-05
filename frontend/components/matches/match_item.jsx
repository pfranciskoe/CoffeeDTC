import React from 'react'
import { render } from 'react-dom'
class MatchItem extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this)
        this.state = {itemAdded: false}
    }
    handleSubmit(){
        this.props.addItemToCart(this.props.coffee.id, 1)
            .then(this.setState({ itemAdded: true }))
    }
    render(){
        return (
        <div className='matched-coffee-item'>
            <div className='matched-coffee-item-photo-box'></div>
            <div className='matched-coffee-item-info-box'>
                <div className='matched-coffee-item-name'><div>{this.props.coffee.name}</div></div>
                <div className='matched-coffee-item-flavors'>{this.props.coffee.flavors}</div>
                <div className='matched-coffee-item-details'>
                    <div className='matched-coffee-item-detail'> 
                        {this.props.coffee.roast === 1 ? 'Light ' : null}
                        {this.props.coffee.roast === 2 ? 'Medium Light ' : null}
                        {this.props.coffee.roast === 3 ? 'Medium ' : null}
                        {this.props.coffee.roast === 4 ? 'Medium Dark ' : null}
                        {this.props.coffee.roast === 5 ? 'Dark ' : null}
                    Roast</div>
                    <div className='matched-coffee-item-detail'>${this.props.coffee.price}</div>
                </div>
                {!this.state.itemAdded ?
                <button onClick={this.handleSubmit} className='add-to-cart-button'
                >Add To Cart</button> : 
                <button className='add-to-cart-button button-clicked'
                        >✓</button>}
            </div>
        </div>
        )
    }
}
export default MatchItem;