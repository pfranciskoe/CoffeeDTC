import React from 'react';
import { render } from 'react-dom';
import AddToCartButton from './add_to_cart_button';
class MatchItem extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this)
        this.state = { itemAdded: false, quantity:1}
        this.handleQChange = this.handleQChange.bind(this)
    }
    handleSubmit(quantity,e){
        e.preventDefault()
        this.props.addItemToCart(this.props.coffee.id, quantity)
            .then(this.setState({ itemAdded: true }))
    }
    handleQChange
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
                    <AddToCartButton state={this.state} 
                    handleSubmit={this.handleSubmit}
                    handleQChange={this.handleQChange}/>
            </div>
        </div>
        )
    }
}
export default MatchItem;