import React from 'react'
import MatchItem from './match_item'
class Matches extends React.Component{
    constructor(props){
        super(props);
        this.props.fetchDTCoffees()
    }
    
    componentDidMount(){
            window.scrollTo(0, 0)
    }
    
    render(){   
        return(
        <div className='matches-page'>
            <div className='match-header-box'>
                <h2 className='match-header'>Your Matches</h2>
            </div>
            <div className='match-list'>
                
                {this.props.currentUser.matches.map(id => (
                    this.props.coffees[id] ?
                    <MatchItem key={`matched-coffee-${id}`}
                    className='matched-coffee-box'
                        coffee={this.props.coffees[id]}/> :
                        null
                ))}
            </div>
        </div>
        )
    }
}

export default Matches