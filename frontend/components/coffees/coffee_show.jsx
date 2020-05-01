import React from 'react'
class CoffeeShow extends React.Component{
    constructor(props){
        super(props);
        this.getCoffee = this.getCoffee.bind(this)
    }
    getCoffee(){
        this.props.fetchDTCoffee(1)
    }
    render(){
        console.log(this.props.coffees)
        return(
            <div>
                <button onClick={this.getCoffee}>GET COFFEE</button>
                {this.props.coffees[1] ? <img src={this.props.coffees[1].photoUrl}/> : null}
            </div>
            
        )
    }

}

export default CoffeeShow