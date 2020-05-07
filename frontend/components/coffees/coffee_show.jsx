import React from 'react'
import {Link} from 'react-router-dom'
import RoasterMap from './roaster_map'
class CoffeeShow extends React.Component{
    constructor(props){
        super(props);
        this.state = { loading: true, quantity: 1, itemAdded: false}
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(){
       this.props.fetchDTCoffee(this.props.ownProps.match.params.id)
        .then(() => this.props.fetchARoaster(this.props.ownProps.match.params.id))
            .then(()=>this.setState({loading:false}))
    }
    handleChange(quantity){
        this.setState({ quantity: quantity })
    }
    handleSubmit(){
        this.props.addItemToCart(this.props.coffee.id,this.state.quantity)
            .then(this.setState({ itemAdded: true })).then(setTimeout(
                () => this.setState({ itemAdded: false, quantity: 1 }), 1000
            ))
    }
    render(){
        if (!this.state.loading) {
            return (<div className='coffee-item-container'>
                    <div className='coffee-item'>
                        <div className='coffee-item-photo-box'>
                                <img src={this.props.coffee.photoUrl}/>
                        </div>
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
                                <div onClick={() => this.handleChange(1)} className='selected-quantity-div'><div>1</div><img src={window.b1} /></div> :
                                <div onClick={() => this.handleChange(1)} className='quantity-div'><div>1</div><img src={window.b1} /></div>
                            }
                            {(this.state.quantity === 2) ?
                                <div onClick={() => this.handleChange(2)} className='selected-quantity-div'><div>2</div><img src={window.b2} /></div> :
                                <div onClick={() => this.handleChange(2)} className='quantity-div'><div>2</div><img src={window.b2} /></div>
                            }
                            {(this.state.quantity === 3) ?
                                <div onClick={() => this.handleChange(3)} className='selected-quantity-div'><div>3</div><img src={window.b3} /></div> :
                                <div onClick={() => this.handleChange(3)} className='quantity-div'><div>3</div><img src={window.b3} /></div>
                            }
                        </div>
                        {this.state.itemAdded ?
                         <button onClick={this.handleSubmit}className='button-clicked-show'>
                                ✓
                        </button>
                        :
                        <button onClick={this.handleSubmit}className='coffee-show-add-button'>
                            Add To Cart
                        </button>}
                        </div>
                    </div>
                    <div className='roaster-cont'>
                        <div className='roaster-map' ref='map'>
                        <RoasterMap roaster={this.props.roasters[this.props.coffee.roasterId]}/>
                        </div>
                        <div className='roaster-bio'>
                            <div className='roaster-bio-header'>
                                About the Roaster   
                            </div>
                            <div className='roaster-bio-name'>
                                {this.props.roasters[this.props.coffee.roasterId].name}
                            </div>
                                <div className='bio-header'>Background</div>
                            <div>
                                {this.props.roasters[this.props.coffee.roasterId].description}
                            </div>
                                <div className='bio-header'>Fun Fact</div>
                            <div>
                                {this.props.roasters[this.props.coffee.roasterId].funFact}
                            </div>
                                <div className='bio-header'>Location</div>
                            <div>
                                {this.props.roasters[this.props.coffee.roasterId].location}
                            </div>
                        </div>
                    </div>
                </div>
        )} else {
        return(<div>LOADING</div>)}
        
    }

}

export default CoffeeShow
