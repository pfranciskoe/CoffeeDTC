import React from 'react'
import {Link} from 'react-router-dom'
class CoffeeShow extends React.Component{
    constructor(props){
        super(props);
        this.state={loading:true,quantity:1}
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(){
       this.props.fetchDTCoffee(this.props.ownProps.match.params.id)
       .then(()=>this.setState({loading:false}))
    }
    handleChange(quantity){
        this.setState({ quantity: quantity })
    }
    handleSubmit(){
        this.props.addItemToCart(this.props.coffee.id,this.state.quantity)
    }
    render(){
        if (!this.state.loading) {
        return(
                <div className='coffee-item'>
                    <div className='coffee-item-photo-box'></div>
                    <div className='coffee-item-info-box'>
                        <div className='coffee-item-name'>
                            <Link to={`/coffees/${this.props.coffee.id}`}
                                className='coffee-item-link'>
                                {this.props.coffee.name}
                            </Link>
                        </div>
                    <div className='coffee-item-detail'>
                        ${this.props.coffee.price.toFixed(2)}{' | '}
                        {this.props.coffee.weight}oz.
                    </div>
                    <div className='coffee-item-desc'>{this.props.coffee.description}</div>
                    <div className='quantity-divs-label'>Quantity:</div>
                    <div className='quantity-divs'>
                        {(this.state.quantity === 1) ? 
                            <div onClick={() => this.handleChange(1)} className='selected-quantity-div'><div>1</div></div> :
                        <div onClick={() => this.handleChange(1)} className='quantity-div'><div>1</div></div>
                        }
                        {(this.state.quantity === 2) ?
                            <div onClick={() => this.handleChange(2)} className='selected-quantity-div'><div>2</div></div> :
                            <div onClick={() => this.handleChange(2)} className='quantity-div'><div>2</div></div>
                        }
                        {(this.state.quantity === 3) ?
                            <div onClick={() => this.handleChange(3)} className='selected-quantity-div'><div>3</div></div> :
                            <div onClick={() => this.handleChange(3)} className='quantity-div'><div>3</div></div>
                        }
                    </div>
                    <button onClick={this.handleSubmit}className='coffee-show-add-button'>
                        Add To Cart
                    </button>
                    </div>
                </div>
        )} else {
        return(<div>dsafsd</div> )}
        
    }

}

export default CoffeeShow

{/* <div className='coffee-item-flavors'>{this.props.coffee.flavors}</div> */ }
// { this.props.coffee.roast === 1 ? 'Light ' : null }
// { this.props.coffee.roast === 2 ? 'Medium Light ' : null }
// { this.props.coffee.roast === 3 ? 'Medium ' : null }
// { this.props.coffee.roast === 4 ? 'Medium Dark ' : null }
// { this.props.coffee.roast === 5 ? 'Dark ' : null }
// Roast